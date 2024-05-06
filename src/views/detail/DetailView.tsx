import React from "react";
import DetailViewModel from "./DetailViewModel";
import "./DetailView.scss";
import Chip from "@mui/material/Chip";
import { formattedNumber } from "../../utils/format";

const DetailView = () => {
  const { resultItem } = DetailViewModel();
  return (
    <div className="detail-view">
      <div className="detail-view__container">
        {resultItem ? (
          <>
            <div className="detail-view__container-image">
              <img
                src={resultItem.picture}
                alt={resultItem.title}
                height={540}
              />
            </div>
            <div>
              <h1 className="detail-view__title">{resultItem.title} </h1>
              <h2 className="detail-view__price">
                ${" "}
                {formattedNumber(
                  resultItem.price.amount,
                  resultItem.price.decimals
                )}
              </h2>
              <Chip label={resultItem.condition} />
              <p className="detail-view__free-ship">
                {resultItem?.free_shipping && "Free shipping"}
              </p>
              <p className="detail-view__description">
                {resultItem?.description}{" "}
              </p>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default DetailView;
