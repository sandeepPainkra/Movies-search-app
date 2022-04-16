import { Badge } from "@material-ui/core";
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
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />

      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {movie_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
