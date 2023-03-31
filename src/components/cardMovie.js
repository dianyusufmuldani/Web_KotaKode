import React from "react";

const CardMovie = ({ poster_path, title, vote_average, release_date }) => {
  return (
    <div className="bg-white rounded-xl border border-black shadow-md flex flex-col items-center px-3 py-2">
      <div className="w-[100px]  w-[200px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={"100%"}
          height={"100%"}
          alt="card movie"
        />
      </div>
      <h3>{title}</h3>
      <p>Voting: {vote_average}</p>
      <p>Dipublish pada: {release_date}</p>
    </div>
  );
};

export default CardMovie;
