import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../Components/SingleContent.js";
import CustemPagintion from "../pagination/CustemPagintion.js";
const Trending = () => {
  const [trendingData, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const fetchingData = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=f7147f637de57eeea1e3106c3d221938&page=${page}`
    );
    setTrending(data.data.results);
  };
  useEffect(() => {
    fetchingData();
  }, [page]);

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

      <CustemPagintion setPage={setPage} page={page} />
    </div>
  );
};

export default Trending;
