import { Request, Response } from "express";
import { Controller } from "../Controller";
import { Organization } from "../../entities/organization.entitie";
import httpStatus from "http-status";

export class OrganizationPostController implements Controller {
	async run(req: Request, res: Response): Promise<void> {
    try {
      const { name, status } = req.body;
			const organization = new Organization();
			if (name.length > 0) {
				organization.name = name;
				organization.status = status;
				await organization.save();
				res.status(httpStatus.CREATED).json({
					status: "success",
					message: "Organización creada con éxito",
					data: organization,
				});
			} else {
				res.status(400).json({
					status: "error",
					message: "El nombre de la organización es requerido",
				});
			}
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Error al obtener la organización",
				data: error,
			});
		}
	}
}
