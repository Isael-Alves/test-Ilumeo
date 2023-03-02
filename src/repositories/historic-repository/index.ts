import { Historic } from "@prisma/client";
import { prisma } from "../../config/database";

async function findHistoricByUserCode(code: string): Promise<Historic[]> {
  return prisma.historic.findMany({
    where: {
      codeUser: code,
    }
  });
}

async function createdNewPoint(body: Partial<Historic>) {
  return prisma.historic.create({
    data: {
      startTime: body.startTime,
      finishTime: body.finishTime,
      codeUser: body.codeUser
    },
  });
}

const historicRepository = {
  findHistoricByUserCode,
  createdNewPoint
};

export default historicRepository;
