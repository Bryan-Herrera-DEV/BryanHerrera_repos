import {json, urlencoded} from 'body-parser'
import compress from 'compression';
import morgan from "morgan";
import errorHandler from 'errorhandler';
import express, { Request, Response } from 'express';
import Router from 'express-promise-router';
import helmet from 'helmet';
import * as http from 'http';
import httpStatus from 'http-status';
import { registerRoutes } from './routes';
import { config } from "dotenv";
import { resolve } from "path";


export class Server {
  private express: express.Express;
  private port: string;
  private httpServer?: http.Server;
  constructor(port: string) {
    config({ path: resolve(__dirname, '../.env') });

    this.port = port;
    this.express = express();
    this.express.use(morgan('dev'));
    this.express.use(json());
    this.express.use(urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));
    this.express.use(compress());

    const router = Router();
    router.use(errorHandler());
    this.express.use(router);

    registerRoutes(router);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types
    router.use((err: Error, req: Request, res: Response, _next: Function) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  async listen(): Promise<void>{
    return new Promise((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(`[+] Server corriendo en http://localhost:${this.port} en modo ${this.express.get('env')}`);
      });
      console.log('Presiona CTRL-C para detener\n');
      resolve();
    })
  }
  getHTTPServer() {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }
      return resolve();
    });
  }
}
