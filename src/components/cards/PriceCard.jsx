import React from "react";

const PriceCard = ({ item }) => {
  const { title, img, price } = item;
  return (
    <div>
      <div className="card  ">
        <figure className="px-3 pt-10">
          <img src={img} alt={title} className="rounded-sm" />
        </figure>
        <div className="card-body items-center text-center">
          <p>{title}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
