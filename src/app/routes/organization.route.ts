import { Request, Response, Router } from "express";
import { OrganizationGetController } from "../controllers/organization/getOrganizationsController";
import { OrganizationPutController } from "../controllers/organization/updateOrganizationController";
import { OrganizationDeleteController } from "../controllers/organization/deleteOrganizationController";
import { OrganizationPostController } from "../controllers/organization/createOrganizationController";

export const register = (router: Router) => {
  const getControlller = new OrganizationGetController();
  const postController = new OrganizationPostController();
  const putController = new OrganizationPutController();
  const deleteController = new OrganizationDeleteController();

  router.get('/organization', (req:Request, res: Response) => getControlller.run(req, res));
  router.post('/organization/create', (req:Request, res: Response) => postController.run(req, res));
  router.put('/organization/update', (req:Request, res: Response) => putController.run(req, res));
  router.delete('/organization/delete', (req:Request, res: Response) => deleteController.run(req, res));
}
