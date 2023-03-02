import { prisma } from "../../src/config/database";
import dayjs from "dayjs";
import { Historic } from "@prisma/client";

export function createHistoricWithcode(code: string): Promise<Historic> {
  return prisma.historic.create({
    data: {
      Date: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
      codeUser: code,
      startTime: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
      finishTime: dayjs().hour(16).minute(0).second(0).millisecond(0).toDate()
    },
  });
}
