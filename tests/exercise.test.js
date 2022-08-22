import fs from "fs/promises";

describe("Boolean & Logical Operations tests cases", () => {
  test("exercise 1: Event Conditions isAllow = true", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return isAllow`;

    const func = new Function(code);
    const result = func();

    expect(result).toBe(true);
  });

  //   test("exercise 2: Event Conditions isAllow = true", async () => {
  //     const data = await fs.readFile("./ex-2.js");
  //     const code = `${data} return isAllow`;

  //     const func = new Function(code);
  //     const result = func();

  //     expect(result).toBe(true);
  //   });
});
