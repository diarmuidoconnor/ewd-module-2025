import React from "react";
import { Link } from "react-router-dom";
import {BaseMovie} from "../types/interfaces"

const Movie:React.FC<BaseMovie> = (props) => {
  return (
    <li>
      <Link to={`/movies/${props.id}`}>
        <h3>{props.title}</h3>
      </Link>
    </li>
  );
};

export default Movie;
