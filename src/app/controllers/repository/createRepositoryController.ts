import { Request, Response } from "express";
import { Controller } from "../Controller";
import { Repository } from "../../entities/repository.entitie";
import { Tribe } from "../../entities/tribe.entitie";
import httpStatus from "http-status";

export class CreateRepositoryController implements Controller {
	async run(req: Request, res: Response): Promise<void> {
		try {
			const { id_tribe, name, state, status } = req.body;

			const data = await Tribe.findOneBy({
				id_tribe: parseInt(id_tribe),
			});
			if (!data) {
				res.status(httpStatus.NOT_FOUND).json({
					status: "error",
					message: "Tribu no encontrada",
				});
			} else {
				const repo = new Repository();
				if (
					name !== undefined &&
					name !== null &&
					status !== undefined &&
					status !== undefined
				) {
					repo.id_tribe = id_tribe;
					repo.name = name;
					repo.state = state;
          repo.create_time = new Date();
          repo.status = status;
					await repo.save();
					res.status(httpStatus.CREATED).json({
						status: "success",
						message: "Repositorio creada con éxito",
						data: repo,
					});
				} else {
					res.status(httpStatus.BAD_REQUEST).json({
						status: "error",
						message: "Faltan datos",
					});
				}
			}
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Error al crear el repositorio",
				data: error,
			});
		}
	}
}
