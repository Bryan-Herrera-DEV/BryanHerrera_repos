import { Request, Response } from "express";
import { Controller } from "../Controller";
import { Tribe } from "../../entities/tribe.entitie";
import { Organization } from "../../entities/organization.entitie";
import httpStatus from "http-status";

export class CreateTribeController implements Controller {
	async run(req: Request, res: Response): Promise<void> {
		try {
			const { name, status, id_organization } = req.body;

      console.log(id_organization)
			const data = await Organization.findOneBy({
				id_organization: parseInt(id_organization),
			});
			if (!data) {
				res.status(httpStatus.NOT_FOUND).json({
					status: "error",
					message: "Organización no encontrada",
				});
			} else {
				const tribe = new Tribe();
				if (name !== undefined && name !== null && status !== undefined) {
					tribe.name = name;
					tribe.status = status;
					tribe.id_organization = id_organization;
					await tribe.save();
					res.status(httpStatus.CREATED).json({
						status: "success",
						message: "Tribu creada con éxito",
						data: tribe,
					});
				}
			}
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
				status: "error",
				message: "Error al crear la tribus",
				data: error,
			});
		}
	}
}
