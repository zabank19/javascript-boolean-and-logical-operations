import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Exercise 3: Debugging Boolean & Logical Operations tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("Exercise 3: เมื่อ console.log แล้วจะต้องได้ผลลัพธ์เป็น 'Sum: 30' ", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data}`;
    const func = new Function(code);
    func();

    expect(console.log).toHaveBeenCalledWith("Sum: 30");
  });
});
