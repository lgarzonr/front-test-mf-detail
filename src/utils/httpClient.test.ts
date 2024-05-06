import HttpClient from "./httpClient";

const mockGet = jest.fn().mockResolvedValue({ data: "data" });
jest.mock("axios", () => ({
  create: () => ({ get: (url: string) => mockGet(url) }),
}));

describe("httpclientTest", () => {
  it("should return data", async () => {
    const mockGet = jest.fn().mockResolvedValue({ data: "data" });
    const mockCreate = jest.fn().mockReturnValue({ get: mockGet });
    jest.mock("axios", () => ({
      create: mockCreate,
    }));

    const result = HttpClient.get("url");
    expect(result).resolves.toEqual("data");
  });
});
