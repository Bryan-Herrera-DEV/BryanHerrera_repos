import { Request, Response } from "express";
import { Controller } from "../Controller";
import { Metrics } from "../../entities/metrics.entitie";
import httpStatus from 'http-status';

export class GetMetricsController implements Controller {
	async run(req: Request, res: Response): Promise<void> {
		try {
			const metrics = await Metrics.find();
			res.json({
				status: "success",
				message: "Metricas obtenidas con éxito",
				data: metrics,
			});
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Error al obtener las metricas",
				data: error,
			});
		}
	}
}
