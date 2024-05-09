import httpClient from "../../utils/httpClient";

const BASE_SERVICE_URL = "http://localhost:3000/api/items";

interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export interface ItemsByIdResponse {
  item: Item;
}

export const getItemById = async (id: string) => {
  try {
    const { data }: { data: ItemsByIdResponse } = await httpClient.get(
      `${BASE_SERVICE_URL}/${id}`
    );

    return { result: data, error: false };
  } catch (error) {
    return { error };
  }
};
