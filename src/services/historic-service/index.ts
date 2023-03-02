import { Historic } from "@prisma/client";
import { badRequestError } from "../../erros/bad-request-error";
import { unauthorizedError } from "../../erros/unauthorized-error";
import historicRepository from "../../repositories/historic-repository";
import userRepository from "../../repositories/user-repository";
import { historicSchema } from "../../schemas/authentication-schemas";

async function listHistoric(code: string): Promise<Historic[]> {
  const user = await userRepository.findUserByUserCode(code);
  if(!user) {
    throw unauthorizedError();
  }

  const historic = await historicRepository.findHistoricByUserCode(code);
  return historic;
}

async function postNewPointHistoric(body: Partial<Historic>) {
  const { error } = historicSchema.validate(body);
  if(error) {
    throw badRequestError();
  }

  const user = await userRepository.findUserByUserCode(body.codeUser);
  if(!user) {
    throw unauthorizedError();
  }

  await historicRepository.createdNewPoint(body);
}

const historicService = {
  listHistoric,
  postNewPointHistoric
};

export default historicService;
