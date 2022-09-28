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
  useEffect(() => {
    const fetchData = async () => {
      const response = await MoviesService.getMoviesByTextResponse(text!);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchData().catch((error) => {
      setError(true);
    });
  }, [text]);

  if (error) {
    return <h1>SOMETHING WENT WRONG...</h1>;
  } else {
    return <MovieCardListComponent movies={movies} />;
  }
};

export default SearchMoviePage;
