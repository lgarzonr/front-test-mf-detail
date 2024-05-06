import httpClient from "../../utils/httpClient";


const BASE_SERVICE_URL = "https://api.mercadolibre.com/items";

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
    const response: {
      id: string;
      title: string;
      currency_id: string;
      price: number;
      thumbnail: string;
      condition: string;
      shipping: {
        free_shipping: boolean;
      };
      initial_quantity: number;
    } = await httpClient.get(`${BASE_SERVICE_URL}/${id}`);

    const responseDescription: { plain_text: string } = await httpClient.get(
      `${BASE_SERVICE_URL}/${id}/description`
    );

    const result: ItemsByIdResponse = {
      item: {
        id: response.id,
        title: response.title,
        price: {
          currency: response.currency_id,
          amount: response.price,
          decimals: 0, // Add the missing 'decimals' property
        },
        picture: response.thumbnail,
        condition: response.condition,
        free_shipping: response.shipping.free_shipping,
        description: responseDescription.plain_text,
        sold_quantity: response.initial_quantity,
      },
    };

    return { result, error: false };
  } catch (error) {
    return { error };
  }
};
