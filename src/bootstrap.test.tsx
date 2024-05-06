const createRoot = jest.fn(() => ({ render: jest.fn() }));
jest.mock("react-dom/client", () => ({
  createRoot,
}));

jest
  .spyOn(document, "getElementById")
  .mockReturnValue(document.createElement("div"));

describe("bootstrap", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const bootstrap = require("./bootstrap");
  it("Should call render", () => {
    expect(bootstrap.mount).not.toBe(undefined);
    bootstrap.mount(document.createElement("div"));
    expect(createRoot).toHaveBeenCalled();
  });
});
