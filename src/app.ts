import express, { Express } from "express";
import cors from "cors";
import { connectDb, disconnectDB } from "./config/database";

const server = express();

server
   .use(cors())
   .use(express.json())
   .get("/health", (req, res) => res.send("OK"));


export function init(): Promise<Express> {
   connectDb();
   return Promise.resolve(server);
}

export async function close(): Promise<void> {
   await disconnectDB();
}

const port = +process.env.PORT || 4000;

init().then(() => {
   server.listen(port, () => {
     /* eslint-disable-next-line no-console */
     console.log(`Server is listening on port ${port}.`);
   });
 });

export default server;
