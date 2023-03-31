import React from "react";

const CardImageFm = ({ image, title }) => {
  return (
    <div>
      <div className="border border-green-700 rounded-xl p-4">
        <img
          src={image}
          width={60}
          height={60}
          alt="iconfm"
          className="aspect-square"
        />
      </div>
      <p className="text-black/50">{title}</p>
    </div>
  );
};

export default CardImageFm;
