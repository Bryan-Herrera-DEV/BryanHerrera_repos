import { Request, Response, Router } from "express";
import { CreateTribeController } from "../controllers/tribe/createTribeController";
import { GetTribesController } from "../controllers/tribe/getTribresController";


export const register = (router: Router) => {
  const getTribes = new GetTribesController();
  const createTribe = new CreateTribeController();

  router.get('/tribe', (req:Request, res: Response) => getTribes.run(req, res));
  router.post('/tribe/create', (req:Request, res: Response) => createTribe.run(req, res));
}
