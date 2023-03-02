import { Request, Response } from "express";
import { notFoundError } from "../erros/not-found-error";
import historicService from "../services/historic-service";

export async function listHistoricTimes(req: Request, res: Response) {
  try {
    const { code } =  req.params; 
    if(!code) {
      throw notFoundError();
    }

    const historic = await historicService.listHistoric(code);

    return res.status(200).send(historic);
  } catch (error) {
    if(error.name === "UnauthorizedError") {
      return res.sendStatus(401);
    }
    return res.sendStatus(404);
  }
}

export async function postNewPoint(req: Request, res: Response) {
  try {
    const { body }  = req;

    await historicService.postNewPointHistoric(body);

    return res.status(201);
  } catch (error) {
    if(error.name === "BadRequestError") {
      return res.sendStatus(400);
    }

    if(error.name === "UnauthorizedError") {
      return res.sendStatus(401);
    }

    return res.sendStatus(404);
  }
}
