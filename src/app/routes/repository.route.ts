import { Request, Response, Router } from "express";
import { CreateRepositoryController } from "../controllers/repository/createRepositoryController";
import { GetRepositoriesController } from "../controllers/repository/getRepositoriesController";


export const register = (router: Router) => {
  const getRepositories = new GetRepositoriesController();
  const createRepository = new CreateRepositoryController();

  router.get('/repository', (req:Request, res: Response) => getRepositories.run(req, res));
  router.post('/repository', (req:Request, res: Response) => createRepository.run(req, res));
}
