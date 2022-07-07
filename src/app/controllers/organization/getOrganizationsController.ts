import { Request, Response } from "express";
import { Controller } from "../Controller";
import { Organization } from "../../entities/organization.entitie";
import httpStatus from 'http-status';

export class OrganizationGetController implements Controller {
	async run(req: Request, res: Response): Promise<void> {
		try {
			const organizations = await Organization.find();
			res.json({
				status: "success",
				message: "Organizaciones obtenidas con éxito",
				data: organizations,
			});
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Error al obtener la organización",
				data: error,
			});
		}
	}
}
