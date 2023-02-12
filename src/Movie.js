import React from "react";
import propTypes from "prop-types";
import "./movie.css";

function Movie({ title, date, rank }) {
  return (
    <div className="movies_movie">
      <h2>{rank}</h2>
      <h3
        className="movie_tit"
        style={{ fontSize: "18px" }}
      >
        {title.slice(0, 10)}...
      </h3>
      <h4 className="move_date">{date}</h4>
      {/* <ul className="rank">
        {rank.map((rank, index) => (
          <li
            key={index}
            className="list"
          >
            {index}
            {rank}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  date: propTypes.number.isRequired,
  rank: propTypes.number.isRequired,
};
export default Movie;
