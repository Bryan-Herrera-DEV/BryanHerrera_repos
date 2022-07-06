import { Request, Response, Router } from "express";
import { OrganizationGetController } from "../controllers/organization/organizationGetController";

export const register = (router: Router) => {
  const controlller = new OrganizationGetController();
  router.get('/organization', (req:Request, res: Response) => controlller.run(req, res));
}
