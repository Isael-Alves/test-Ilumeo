import { Request, Response } from "express";
import historicService from "../services/historic-service";

export async function listHistoricTimes(req: Request, res: Response) {
  const { code } =  req.params; 
  
  try {
    const historic = await historicService.listHistoric(code);
    console.log(historic);

    return res.status(200).send(historic);
  } catch (error) {
    return res.sendStatus(404);
  }
}
