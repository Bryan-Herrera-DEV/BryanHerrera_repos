import { Request, Response } from "express";
import { Controller } from "../Controller";
import { Organization } from "../../entities/organization.entitie";
import httpStatus from 'http-status';

export class OrganizationPutController implements Controller {
	async run(req: Request, res: Response): Promise<void> {
		try {
      const { name, status, id_organization } = req.body;

      const organization = await Organization.findOneBy({ id_organization: parseInt(id_organization) });
      if (!organization) {
        res.status(httpStatus.NOT_FOUND).json({
          status: "error",
          message: "Organización no encontrada",
        });
      } else {
        organization.name = name;
        organization.status = status;
        await organization.save();
        res.json({
          status: "success",
          message: "Organización actualizada con éxito",
          data: organization,
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
