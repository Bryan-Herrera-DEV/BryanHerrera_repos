import { Request, Response, Router } from "express";
import { CreateRepositoryController } from "../controllers/repository/createRepositoryController";
import { GetRepositoriesController } from "../controllers/repository/getRepositoriesController";
import { getRepositoryByIdController } from "../controllers/repository/getRepositoryByIdController";


export const register = (router: Router) => {
  const getRepositories = new GetRepositoriesController();
  const createRepository = new CreateRepositoryController();
  const getByIdRepository = new getRepositoryByIdController();

  router.get('/repository', (req:Request, res: Response) => getRepositories.run(req, res));
  router.get('/repository/:id_tribe', (req:Request, res: Response) => getByIdRepository.run(req, res));
  router.post('/repository', (req:Request, res: Response) => createRepository.run(req, res));
}
