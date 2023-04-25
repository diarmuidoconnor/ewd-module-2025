import React, { useState, useEffect } from "react";
import { getMovie } from "../api";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom'

const MovieDetails = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((response) => response.json())
      .then((movie) => {
        setMovie(movie);
      });
  }, []);

  return (
    <>
      <h1>Movie Details</h1>
      <pre>{JSON.stringify(movie, null, 2)}</pre>;
    </>
  );
};

export default MovieDetails;
