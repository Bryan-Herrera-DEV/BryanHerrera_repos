import * as EnviromentGuard from "./guards/EnvGuards";

export const NODE_ENV = EnviromentGuard.NODE_ENV(process.env.NODE_ENV);
export const DATABASE_NAME = EnviromentGuard.DATABASE_URL(process.env.DATABASE_URL ?? "");
