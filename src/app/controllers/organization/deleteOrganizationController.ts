import { Request, Response } from "express";
import { Controller } from "../Controller";
import { Organization } from "../../entities/organization.entitie";
import httpStatus from "http-status";

export class OrganizationDeleteController implements Controller {
	async run(req: Request, res: Response): Promise<void> {
		try {
			const { id_organization } = req.body;
			const result = await Organization.delete({ id_organization: parseInt(id_organization) });
			if (result.affected === 0) {
				res.status(httpStatus.NOT_FOUND).json({
					status: "error",
					message: "Organización no encontrada",
				});
			} else {
				const organizations = await Organization.find();
				res.json({
					status: "success",
					message: "Organización eliminada con éxito",
					data: organizations,
				});
			}
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Error al eliminar la organización",
				data: error,
			});
		}
	}
}
