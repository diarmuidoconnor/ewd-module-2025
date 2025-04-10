import React, { useState, useEffect, ChangeEvent } from "react";
import FilteredMovieList from "../components/filteredMovieList";
import { getMovies } from "../api";
import { useQuery } from "react-query";
import { BaseMovie } from "../types/interfaces";

interface DiscoverMoviesInterface {
  results: BaseMovie[];
}


const HomePage: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  //OLD useState AND useEffect COMMENTED OUT. REPLACED with useQuery
  // const [movies, setMovies] = useState<BaseMovie[]>([]);

  //  useEffect(() => {
  //   getMovies().then((response) => {
  //     setMovies(response.results);
  // });
  // }, []);

  
  const { data, error, isLoading, isError } = useQuery<DiscoverMoviesInterface, Error>("discover", getMovies);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data ? data.results : [];

  const filterChange = (event: ChangeEvent<HTMLInputElement>) => {
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
