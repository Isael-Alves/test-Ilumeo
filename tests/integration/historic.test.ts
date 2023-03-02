import supertest from "supertest";
import app, { init } from "../../src/app";
import { createHistoricWithcode } from "../factories/historic-factory";
import { createUser } from "../factories/users-factory";

import { cleanDb } from "../helpers";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("GET /historic/:code", () => {
  it("should respond with status 200 if you return the history with an array of objects", async () => {
    const user = await createUser();
    await createHistoricWithcode(user.code);
    await createHistoricWithcode(user.code);
    await createHistoricWithcode(user.code);
    await createHistoricWithcode(user.code);
    await createHistoricWithcode(user.code);

    const response = await server.get(`/historic/${user.code}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([
      {
        id: expect.any(Number),
        codeUser: expect.any(String),
        startTime: expect.any(String),
        finishTime: expect.any(String)
      }
    ]));
  });

  it("should respond with status 200 se der certo, mas retornar um array vazio", async () => {
    const user = await createUser();

    const response = await server.get(`/historic/${user.code}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should respond with status 404 if code is underfined", async () => {
    const response = await server.get("/historic");
    
    expect(response.status).toBe(404);
  });

  it("should respond with status 401 if user not found", async () => {
    const response = await server.get("/historic/XRTS5");
    
    expect(response.status).toBe(401);
  });
});

describe("POST /historic", () => {
  it("should respond with status 200 if if user successfully created", async () => {
    const user = await createUser();
    const body = {
      startTime: "2023-03-01T08:30:00.000Z",
      finishTime: "2023-03-01T17:30:00.000Z",
      codeUser: user.code
    };

    const response = await (await server.post("/historic")).body(body);

    expect(response.status).toBe(201);
  });

  it("should respond with status 200 se der certo, mas retornar um array vazio", async () => {
    const user = await createUser();

    const response = await server.post(`/historic/${user.code}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should respond with status 404 if code is underfined", async () => {
    const response = await server.post("/historic");
    
    expect(response.status).toBe(404);
  });

  it("should respond with status 401 if user not found", async () => {
    const response = await server.post("/historic");
    
    expect(response.status).toBe(401);
  });
});
