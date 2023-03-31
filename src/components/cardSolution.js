import React from "react";

const CardSolution = ({
  id,
  title,
  description,
  textButton,
  image,
  status,
  link,
}) => {
  return (
    <div className={`flex ${id % 2 === 0 ? "justify-start" : "justify-end"}`}>
      <div className="bg-white rounded-2xl drop-shadow-2xl p-5 w-[300px] pl-[70px] relative my-5 ">
        <div
          className={`border-2 ${
            status === "Coming Soon" ? "border-black/500" : "border-green-700"
          } rounded-full absolute top-[30%] -left-[50px] w-[100px] aspect-square items-center flex`}
        >
          <img
            src={image}
            alt="icon1"
            width={"100%"}
            height={"100%"}
            className="object-cover rounded-full"
          />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        {status === "Coming Soon" ? (
          <h3 className="text-2xl font-bold ">(Coming Soon)</h3>
        ) : null}
        <br />
        <p className="text-xs text-black/70">{description}</p>
        <br />
        <a href={link}>
          <button
            className={
              status === "Coming Soon"
                ? "bg-black/50 text-white px-5 py-2 w-[100%] cursor-default"
                : "bg-orange-500 text-white px-5 py-2 w-[100%]"
            }
          >
            {textButton}
          </button>
        </a>
      </div>
    </div>
  );
};

export default CardSolution;
