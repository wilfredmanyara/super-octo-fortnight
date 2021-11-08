const require = require("supertest");
const { request } = require("../../app");

const app = require("../../app");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
commonBeforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

describe("POST to /auth/token", function () {
  test("works for authorized user", async function () {
    const resp = await request(app).post("/auth/token").send({
      email: "u1",
      password: "password1",
    });
    expect(resp.body).toEqual({
      token: expect.any(String),
    });
  });

  test("unauth with non existent user", async function () {
    const resp = await request(app).post("/auth/token").send({
      email: "fakeUser@gmail.com",
      password: "password",
    });
    expect(resp.statusCode).toEqual(401);
  });
});
