import { ApplicationError } from "../protocols";

export function badRequestError(): ApplicationError {
  return {
    name: "BadRequestError",
    message: "No result for this search!",
  };
}
