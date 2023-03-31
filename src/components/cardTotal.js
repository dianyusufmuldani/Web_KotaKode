import React from "react";

const CardTotal = ({ title, description }) => {
  return (
    <div className="rounded-[38px] bg-red-100 text-center px-5 py-3 w-[140px] shadow-xl">
      <h4 className="text-[32px] font-bold">{title}</h4>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default CardTotal;
