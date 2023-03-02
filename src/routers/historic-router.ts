import { Router } from "express";
import { listHistoricTimes, postNewPoint } from "../controllers/historic-controller";

const historicRouter = Router();

historicRouter
  .post("/",  postNewPoint)
  .get("/:code",  listHistoricTimes);

export { historicRouter };
