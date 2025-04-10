import React from "react";
import Movie from "./movie";
import { BaseMovie } from "../types/interfaces";

interface BaseMovieList {
  list: BaseMovie[];
} 




const FilteredMovieList:React.FC<BaseMovieList> = (props) => {
  const movies = props.list.map((item) => (
    <Movie key={item.title} {...item} />
  ));
  return <ul>{movies}</ul>;
};

export default FilteredMovieList;
