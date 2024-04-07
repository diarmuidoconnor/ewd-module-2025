export interface BaseMovie {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
  }

 export interface BaseMovieList { 
    movies: BaseMovie[];
  }   

  export interface MovieT extends BaseMovie {
    genres: {
      id: number;
      name: string;
    }[];
  }

  export interface ListedMovie extends BaseMovie {
    genre_ids: number[];
  }

  export interface MovieImage {
    aspect_ratio?: number;
    file_path: string;
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }

  export interface MovieListPageTemplateProps {
    movies: ListedMovie[];
    title: string;
    selectFavourite: (m: number) => void;
  }

  export interface Review{
    id: string;
    content: string
    author: string
  }

  export type FilterOption = "title" | "genre";