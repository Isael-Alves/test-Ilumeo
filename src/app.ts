import express, { Express } from "express";
import cors from "cors";
import { connectDb, disconnectDB } from "./config/database";
import { loadEnv } from "./config/envs";
import { historicRouter } from "./routers/historic-router";

loadEnv();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (req, res) => res.send("OK"))
  .use("/historic", historicRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
