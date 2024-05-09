import { useEffect, useState } from "react";
import {
  ItemsByIdResponse,
  getItemById,
} from "../services/items/itemsModel";

const DetailViewModel = () => {
  const [resultItem, setResultItem] = useState<ItemsByIdResponse["item"]>();

  useEffect(() => {
    const id = location.href.substring(location.href.lastIndexOf("/") + 1);
    if (id) {
      getItemById(id)
        .then((response) => {
          setResultItem(response.result?.item);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [location.search]);

  return { resultItem };
};

export default DetailViewModel;
