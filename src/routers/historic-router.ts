import { Router } from "express";
import { listHistoricTimes } from "../controllers/historic-controller";

const historicRouter = Router();

historicRouter
  .get("/:code",  listHistoricTimes);

export { historicRouter };
