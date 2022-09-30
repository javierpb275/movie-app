import React, { useCallback, useEffect, useState } from "react";
import MovieCardListComponent from "../../components/movie-card-list/movie-card-list.component";
import { IMovie } from "../../interfaces/movie.interface";
import { MoviesService } from "../../services/moviesService";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = useCallback(async () => {
    const response = await MoviesService.getPopularMoviesResponse();
    const data = await response.json();
    setMovies(data.results);
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchData().catch((error) => {
      setError(true);
      setIsLoading(false);
    });
  }, [fetchData]);
  if (isLoading) {
    return <h1>LOADING...</h1>;
  } else if (error) {
    return <h1>SOMETHING WENT WRONG!</h1>;
  } else {
    if (!movies.length) {
      return <h1>NO MOVIES FOUND</h1>;
    } else {
      return <MovieCardListComponent movies={movies} />;
    }
  }
};

export default HomePage;
