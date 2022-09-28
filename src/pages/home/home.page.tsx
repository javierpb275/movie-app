import React, { useEffect, useState } from "react";
import MovieCardListComponent from "../../components/movie-card-list/movie-card-list.component";
import { IMovie } from "../../interfaces/movie.interface";
import { MoviesService } from "../../services/moviesService";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    MoviesService.getPopularMoviesResponse()
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);
  return <MovieCardListComponent movies={movies} />;
};

export default HomePage;
