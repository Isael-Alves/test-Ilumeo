import { Historic } from "@prisma/client";
import historicRepository from "../../repositories/historic-repository";

async function listHistoric(code: string): Promise<Historic[]> {
  const historic = await historicRepository.findHistoricByUserCode(code);
  return historic;
}

const historicService = {
  listHistoric,
};

export default historicService;
