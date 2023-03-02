import { Historic } from "@prisma/client";
import Joi from "joi";

type PartialHistoric = Partial<Historic>

export const historicSchema = Joi.object<PartialHistoric>({
  Date: Joi.string().isoDate().required(),
  startTime: Joi.string().isoDate().required(),
  finishTime: Joi.string().isoDate().required(),
  codeUser: Joi.string().required().length(6)
});
