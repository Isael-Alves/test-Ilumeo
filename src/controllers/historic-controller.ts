import { Request, Response } from "express";
import historicService from "../services/historic-service";

export async function listHistoricTimes(req: Request, res: Response) {
  try {
    const { code } =  req.params; 
    if(!code) {
      return res.sendStatus(404);
    }

    const historic = await historicService.listHistoric(code);

    return res.status(200).send(historic);
  } catch (error) {
    return res.sendStatus(404);
  }
}
