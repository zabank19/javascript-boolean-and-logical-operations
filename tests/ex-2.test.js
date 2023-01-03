import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Exercise 2: Boolean & Logical Operations tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("Exercise 2: hasPromotion จะมีค่าที่ถูกต้อง ", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return hasPromotion`;
    const func = new Function(code);
    func();

    expect(console.log).toHaveBeenCalledWith(false);
  });
});
