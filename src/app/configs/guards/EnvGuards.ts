type Enviroments = "dev" | "prod";
export const NODE_ENV = (nodeEnv: string | undefined): Enviroments => {
  const environment: Enviroments[] = ["dev", "prod"];

  if (!(environment as string[]).includes(nodeEnv ?? "")) {
    throw new Error(`NODE_ENV debe ser uno de los siguientes ${environment}`);
  }
  return nodeEnv as Enviroments;
};

export const DATABASE_URL = (databaseName: string): string => {
  if (databaseName.trim() !== databaseName) {
    throw new Error("process.env.DATABASE_URL es requerido");
  }
  return databaseName;
};
