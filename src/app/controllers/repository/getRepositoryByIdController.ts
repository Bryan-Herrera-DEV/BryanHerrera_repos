import { Request, Response } from "express";
import { Controller } from "../Controller";
import { Repository } from "../../entities/repository.entitie";
import { Tribe } from "../../entities/tribe.entitie";
import httpStatus from "http-status";
import { Metrics } from "../../entities/metrics.entitie";
import axios from "axios";

/*
Ejemplo respuesta
{
"id": "1", // identificador del repositorio
"name": "cd-common-utils", // nombre del repositorio
"tribe": "Centro Digital", // nombre de la tribu
"organization": "Banco Pichincha", // nombre de la organización
"coverage": "35%", // cobertura de pruebas unitarias
"codeSmells": 0,
"bugs": 0,
"vulnerabilities": 0,
"hotspots": 0,
"verificationState": "Verificado", // Estado de verificación (Mock)
"state":"Habilitado" // Estado del repositorio (state)
},

*/

export class getRepositoryByIdController implements Controller {
	private async getMock() {
		const mock: string | undefined = process.env.SERVICE_MOCK_URL;
		if (mock) {
			const response = await axios.get(mock);
			return response.data;
		}
		return null;
	}
	private async makeRepositoryData(
		_data: any,
		_coverage: number,
		_repository: Repository
	) {
		const mock = await this.getMock();
		const data = _data;
		if (mock) {
			// console.log(JSON.stringify(data));
			// console.log(mock.repositories[0].state)
			mock.repositories.forEach((repository: any) => {
				if (repository.id == data.id) {
					data.verificationState = `${
						repository.state === 604
							? "Verificado"
							: repository.state === 605
							? "En espera"
							: "Aprobado"
					}`;
				}
			});
      const state = _repository.state.toLocaleLowerCase();
      data.state = `${
        state === 'e'
          ? "Habilitado"
          : state === 'd'
          ? "Deshabilitado"
          : "Archivado"
      }`;
			return data;
		}
	}
	private async makeResponse(
		id_repository: number,
		name: string,
		name_tribe: string,
		name_organization: string,
		metrics: Metrics,
		repo: Repository
	) {
		const response = {
			id: id_repository,
			name: name,
			tribe: name_tribe,
			organization: name_organization,
			coverage: `${metrics.coverage}%`,
			codeSmells: metrics.code_smells,
			bugs: metrics.bugs,
			vulnerabilities: metrics.vulnerabilities,
			hotspots: metrics.hotspot,
		};
    const nRes = await this.makeRepositoryData(response, metrics.coverage, repo);
		return nRes as object;
	}

	private async getRepositoryById(
		_req: Request,
		res: Response,
		id_tribe: number,
		name_tribe: string,
		name_organization: string
	): Promise<void> {
		try {
			const repository: Repository[] = await Repository.findBy({
				id_tribe: id_tribe,
			});
			if (!repository) {
				res.status(httpStatus.NOT_FOUND).json({
					status: "error",
					message: "Repositorio no encontrado",
				});
			} else {
				// eslint-disable-next-line prefer-const
				let response: Array<object> = [];
				repository.forEach(async (rep: Repository, i: number) => {
					response.push(
						await this.makeResponse(
							rep.id_repository,
							rep.name,
							name_tribe,
							name_organization,
							rep.metrics,
							rep
						)
					);
          if (i === repository.length - 1) {
            res.status(httpStatus.OK).json({
              data: await response,
            });
          }
				})


			}
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Error al obtener el repositorio",
				data: error,
			});
		}
	}
	async run(req: Request, res: Response): Promise<void> {
		try {
			const tribe = await Tribe.findOneBy({
				id_tribe: parseInt(req.params.id_tribe),
			});
			if (!tribe) {
				res.status(httpStatus.NOT_FOUND).json({
					status: "error",
					message: "Tribu no encontrada",
				});
			} else {
				this.getRepositoryById(
					req,
					res,
					parseInt(req.params.id_tribe),
					tribe.name,
					tribe.id_organization.name
				);
			}
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Error al repositorio las tribus",
				data: error,
			});
		}
	}
}
