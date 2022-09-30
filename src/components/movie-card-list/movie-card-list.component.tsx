import { IMovie } from "../../interfaces/movie.interface";
import MovieCardComponent from "../movie-card/movie-card.component";

export interface IMovieCardListComponentProps {
  movies: IMovie[];
}

const MovieCardListComponent: React.FunctionComponent<
  IMovieCardListComponentProps
> = (props) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {props.movies.map((movie) => {
        return <MovieCardComponent key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MovieCardListComponent;
