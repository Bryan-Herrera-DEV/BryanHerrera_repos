import { Request, Response, Router } from "express";
import { CreateMetricsController } from "../controllers/metrics/createMetricsController";
import { GetMetricsController } from "../controllers/metrics/getMetricsController";



export const register = (router: Router) => {
  const getMetrics = new GetMetricsController();
  const createMetrics = new CreateMetricsController();

  router.get('/metrics', (req:Request, res: Response) => getMetrics.run(req, res));
  router.post('/metrics', (req:Request, res: Response) => createMetrics.run(req, res));
}
