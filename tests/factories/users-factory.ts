import faker from "@faker-js/faker";
import { User } from "@prisma/client";
import { prisma } from "../../src/config/database";

export async function createUser(params: Partial<User> = {}): Promise<User> {
  return prisma.user.create({
    data: {
      name: params.name || faker.name.findName(),
      code: params.code || faker.random.alphaNumeric(6)
    },
  });
}
