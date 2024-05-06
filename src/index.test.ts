jest.mock("./bootstrap", () => undefined);

describe("index", () => {
  const index = require("./index");
  it("should import bootstrap", () => {
    expect(index).not.toBe(undefined);
  });
});
