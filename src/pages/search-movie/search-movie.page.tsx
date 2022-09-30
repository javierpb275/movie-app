import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCardListComponent from "../../components/movie-card-list/movie-card-list.component";
import { IMovie } from "../../interfaces/movie.interface";
import { MoviesService } from "../../services/moviesService";

export interface ISearchMoviePageProps {}

const SearchMoviePage: React.FunctionComponent<ISearchMoviePageProps> = (
  props
) => {
  const { text } = useParams();
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await MoviesService.getMoviesByTextResponse(text!);
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
    };
    fetchData().catch((error) => {
      setError(true);
      setIsLoading(false);
    });
  }, [text]);
  if (isLoading) {
    return <h1>LOADING...</h1>;
  } else if (error) {
    return <h1>SOMETHING WENT WRONG...</h1>;
  } else {
    if (!movies.length) {
      return <h1>NO MOVIES FOUND</h1>;
    } else {
      return <MovieCardListComponent movies={movies} />;
    }
  }
};

export default SearchMoviePage;
