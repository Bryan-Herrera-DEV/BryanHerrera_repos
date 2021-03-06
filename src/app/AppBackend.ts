import { Server } from "./server";
export class AppBackend {
  server?: Server;

  async start() {
    const port = process.env.PORT || '5000';
    this.server = new Server(port);
    await this.server.db_connection();
    await this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }
  get express() {
    return this.server?.getEXpress();
  }
  async stop() {
    return this.server?.stop();
  }
}
