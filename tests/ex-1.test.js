import fs from "fs/promises";

describe("Boolean & Logical Operations tests cases", () => {
  test("Exercise 1: isOver18,hasNoCriminalBlacklist และ isThai ต้องมีค่าเป็น Boolean Value ", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return {isOver18,hasNoCriminalBlacklist,isThai}`;

    const func = new Function(code);
    const { isOver18, hasNoCriminalBlacklist, isThai } = func();

    expect(typeof isOver18).toBe("boolean");
    expect(typeof hasNoCriminalBlacklist).toBe("boolean");
    expect(typeof isThai).toBe("boolean");
  });

  test("Exercise 1: isAllow ต้องมีค่าที่ถูกต้อง", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return isAllow`;

    const func = new Function(code);
    const result = func();

    expect(result).toEqual(false);
  });
});
