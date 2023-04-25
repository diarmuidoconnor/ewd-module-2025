import React from "react";
import Movie from "./movie";

const FilteredMovieList = (props) => {
  const movies = props.list.map((item) => (
    <Movie key={item.title} movie={item} />
  ));
  return <ul>{movies}</ul>;
};

export default FilteredMovieList;
