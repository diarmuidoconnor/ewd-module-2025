import React, { useState, useEffect } from "react";
import { getMovie } from "../api";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom'
import { MovieT } from '../types/interfaces'

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  //OLD useState AND useEffect COMMENTED OUT. REPLACED with useQuery
  // const [movie, setMovie] = useState<MovieT>({} as MovieT);

  // id ? useEffect(() => {
  //   getMovie(id).then(
  //     (movie) => {
  //       setMovie(movie);
  //     });
  // }, []) : null
  const { data, error, isLoading, isError } = useQuery<MovieT, Error>(["movie", id], () => getMovie(id || ""), { enabled: !!id });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movie = data ? data : [];

  return (
    <>
      <h1>Movie Details</h1>
      <pre>{JSON.stringify(movie, null, 2)}</pre>;
    </>
  );

}

export default MovieDetails;
