import { Request, Response } from "express";
import { Controller } from "../Controller";
import { Tribe } from "../../entities/tribe.entitie";
import httpStatus from 'http-status';

export class GetTribesController implements Controller {
	async run(req: Request, res: Response): Promise<void> {
		try {
			const tribe = await Tribe.find();
			res.json({
				status: "success",
				message: "Tribus obtenidas con éxito",
				data: tribe,
			});
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Error al obtener las tribus",
				data: error,
			});
		}
	}
}
