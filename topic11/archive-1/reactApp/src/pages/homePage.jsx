import React, { useState, useEffect } from "react";
import FilteredMovieList from "../components/filteredMovieList";
import { getMovies } from "../api";
import { useQuery } from "react-query";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((response) => {
      setMovies(response.results);
    });
  }, []);

  const filterChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value.toLowerCase());
  };
  const filteredList = movies.filter((movie) => {
    const title = movie.title.toLowerCase();
    return title.search(searchText) !== -1;
  });

  return (
    <>
      <h1>Movie List</h1>
      <input type="text" placeholder="Search" onChange={filterChange} />
      <FilteredMovieList list={filteredList} />
    </>
  );
};

export default HomePage;
