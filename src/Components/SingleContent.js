import React from "react";
import { img_300, unavailable } from "../Config/Config";
import "./SingleContent.css";
const SingleContent = ({
  id,
  movie_type,
  poster,
  title,
  vote_average,
  date,
}) => {
  return (
    <div className="singleContent">
      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className="title">{title}</b>
      <span>{movie_type === "tv" ? "TV Series" : "Movie"}</span>
    </div>
  );
};

export default SingleContent;
