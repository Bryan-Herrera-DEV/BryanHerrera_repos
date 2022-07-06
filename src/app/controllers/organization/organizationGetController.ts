import { Request, Response } from "express";
import { Controller } from "../Controller";

export class OrganizationGetController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    res.json({
      message: "Hello World"
    });
  }
}
