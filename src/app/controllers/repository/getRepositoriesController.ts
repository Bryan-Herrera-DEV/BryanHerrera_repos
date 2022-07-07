import { Request, Response } from "express";
import { Controller } from "../Controller";
import { Repository } from "../../entities/repository.entitie";
import httpStatus from 'http-status';

export class GetRepositoriesController implements Controller {
	async run(req: Request, res: Response): Promise<void> {
		try {
			const tribe = await Repository.find();
			res.json({
				status: "success",
				message: "Repositorios obtenidas con éxito",
				data: tribe,
			});
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Error al repositorio las tribus",
				data: error,
			});
		}
	}
}
