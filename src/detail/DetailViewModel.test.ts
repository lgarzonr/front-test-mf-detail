import { renderHook, waitFor } from "@testing-library/react";
import DetailViewModel from "./DetailViewModel";

const mockGetItemById = jest.fn().mockResolvedValue({
  result: {
    item: ["Root Category"],
  },
});
jest.mock("../../services/items/itemsModel", () => ({
  getItemById: (...p: any) => mockGetItemById(...p),
}));

Object.defineProperty(global, "location", {
  value: {
    href: "test/id_test",
  },
  writable: true, // possibility to override
});

describe("ResultViewModel test", () => {
  it("should retunr properties", async () => {
    const { result } = renderHook(() => DetailViewModel());
    await waitFor(() => {
      expect(result.current.resultItem).toEqual(["Root Category"]);
    });
  });

  it("should retunr properties when no results", async () => {
    mockGetItemById.mockResolvedValueOnce({});
    const { result } = renderHook(() => DetailViewModel());
    await waitFor(() => {
      expect(result.current.resultItem).toEqual(undefined);
    });
  });

  it("should console error", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    mockGetItemById.mockRejectedValueOnce("error");
    const { result } = renderHook(() => DetailViewModel());
    await waitFor(() => {
      expect(console.error).toHaveBeenCalled();
    });
  });
});
