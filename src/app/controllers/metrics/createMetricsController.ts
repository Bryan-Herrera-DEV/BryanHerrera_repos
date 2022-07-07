import { Request, Response } from "express";
import { Controller } from "../Controller";
import { Repository } from "../../entities/repository.entitie";
import { Metrics } from "../../entities/metrics.entitie";
import httpStatus from "http-status";

export class CreateMetricsController implements Controller {
	async run(req: Request, res: Response): Promise<void> {
		try {
			const { id_repository, coverage, bugs, vulnerabilities, hotspot, code_smells } =
				req.body;
      console.log(id_repository, coverage, bugs, vulnerabilities, hotspot, code_smells);

      const data = await Repository.findOneBy({
				id_repository: id_repository,
			});
			if (!data) {
				res.status(httpStatus.NOT_FOUND).json({
					status: "error",
					message: "Tribu no encontrada",
				});
			} else {
				const metric = new Metrics();
				if (
					coverage !== undefined &&
					coverage !== null &&
					bugs !== undefined &&
					vulnerabilities !== null &&
					hotspot !== null &&
					code_smells !== null
				) {
          metric.id_repository = id_repository;
					metric.coverage = coverage;
          metric.bugs = bugs;
          metric.vulnerabilities = vulnerabilities;
          metric.hotspot = hotspot;
          metric.code_smells = code_smells;
					await metric.save();
					res.status(httpStatus.CREATED).json({
						status: "success",
						message: "Metrica creada con éxito",
						data: metric,
					});
				}
			}
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Error al crear la metrica",
				data: error,
			});
		}
	}
}
