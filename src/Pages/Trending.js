import React, { useState } from "react";
import axios from "axios";
import SingleContent from "../Components/SingleContent.js";
const Trending = () => {
  const [trendingData, setTrending] = useState([]);
  const fetchingData = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/trending/all/week?api_key=f7147f637de57eeea1e3106c3d221938"
    );
    setTrending(data.data.results);
  };
  fetchingData();
  return (
    <div className="trending">
      <h1 className="pageTitle">Trending</h1>
      <div className="trendingContent">
        {trendingData &&
          trendingData.map((data, index) => {
            console.log(data);
            return (
              <SingleContent
                key={index}
                id={data.id}
                movie_type={data.movie_type}
                poster={data.poster_path}
                title={data.title || data.name}
                date={data.first_air_date || data.release_date}
                vote_average={data.vote_average}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Trending;
