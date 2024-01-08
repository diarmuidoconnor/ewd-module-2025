import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  return (
    <li>
      <Link to={`/movies/${props.movie.id}`}>
        <h3>{props.movie.title}</h3>
      </Link>
    </li>
  );
};

export default Movie;
