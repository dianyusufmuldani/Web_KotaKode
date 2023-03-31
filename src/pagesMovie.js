import React, { useEffect, useState } from "react";
import CardMovie from "./components/cardMovie";
import axios from "axios";

const PagesMovie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TMDB_BASE_URL}/discover/movie`, {
        params: { api_key: process.env.REACT_APP_TMDB_KEY },
      })
      .then((res) => {
        setData(res.data.results);
        // console.log(res.data.results);
      });
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">WEBSITE MOVIE</h1>
      <br />
      <br />
      <div className="grid grid-cols-4 flex gap-10">
        {data.map((item, index) => {
          return (
            <CardMovie
              key={item.id}
              title={item.title}
              vote_average={item.vote_average}
              release_date={item.release_date}
              poster_path={item.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PagesMovie;
