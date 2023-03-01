import { Historic } from "@prisma/client";
import { prisma } from "../../config/database";

async function findHistoricByUserCode(code: string): Promise<Historic[]> {
  return prisma.historic.findMany({
    where: {
      codeUser: code,
    }
  });
}

const historicRepository = {
  findHistoricByUserCode,
};

export default historicRepository;
