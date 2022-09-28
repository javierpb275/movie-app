import { IMovie } from "../../interfaces/movie.interface";
import MovieCardComponent from "../movie-card/movie-card.component";

export interface IMovieCardListComponentProps {
  movies: IMovie[];
}

const MovieCardListComponent: React.FunctionComponent<
  IMovieCardListComponentProps
> = (props) => {
  return (
    <div>
      {props.movies.map((movie) => {
        return <MovieCardComponent key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MovieCardListComponent;
