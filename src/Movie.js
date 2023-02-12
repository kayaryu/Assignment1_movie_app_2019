import React from "react";
import propTypes from "prop-types";

function Movie({ id, title, date }) {
  return <h1>{title}</h1>;
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  date: propTypes.number.isRequired,
};
export default Movie;
