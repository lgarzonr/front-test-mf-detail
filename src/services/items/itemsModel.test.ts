import { getItemById } from "./itemsModel";

const mockHttpClientGet = jest.fn().mockResolvedValue({});
jest.mock("../../utils/httpClient", () => ({
  get: (...p: any) => mockHttpClientGet(...p),
}));

describe("getItemsBySearch", () => {
  it("should return the correct response when successful", async () => {
    const id = "MELDS877";
    mockHttpClientGet.mockResolvedValueOnce({
      data: {
        item: {
          condition: "new",
          free_shipping: true,
          description: "Description",
          id: "1",
          picture: "https://example.com/item1.jpg",
          price: {
            amount: 10,
            currency: "USD",
            decimals: 0,
          },
          title: "Item 1",
          sold_quantity: 1,
        },
      },
    });
    const { result } = await getItemById(id);

    expect(mockHttpClientGet).toHaveBeenCalledWith(
      "http://localhost:3000/api/items/MELDS877"
    );

    expect(result).toEqual({
      item: {
        condition: "new",
        free_shipping: true,
        description: "Description",
        id: "1",
        picture: "https://example.com/item1.jpg",
        price: {
          amount: 10,
          currency: "USD",
          decimals: 0,
        },
        title: "Item 1",
        sold_quantity: 1,
      },
    });
  });

  it("should return an error when an exception occurs", async () => {
    const errorSent = new Error("Network error");
    mockHttpClientGet.mockRejectedValue(errorSent);

    const id = "MELDS877";
    const { error } = await getItemById(id);
    expect(error).toEqual(errorSent);
  });
});
