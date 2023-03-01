
import supertest from "supertest";
import app, { init } from "../../src/app";

import { cleanDb } from "../helpers";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("Get /historic", () => {
  it("should respond with status 404 if code is underfined", async () => {
    const response = await server.get("/historic");
    
    expect(response.status).toBe(404);
  });
});
