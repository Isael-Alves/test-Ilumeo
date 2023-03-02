import { User } from "@prisma/client";
import { prisma } from "../../config/database";

async function findUserByUserCode(code: string): Promise<User> {
  return prisma.user.findFirst({
    where: {
      code: code,
    }
  });
}

const userRepository = {
  findUserByUserCode,
};

export default userRepository;
