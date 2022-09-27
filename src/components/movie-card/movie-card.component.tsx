import { useNavigate } from "react-router-dom";
import { IMovie } from "../../interfaces/movie.interface";

export interface IMovieCardComponentProps {
  movie: IMovie;
}

const MovieCardComponent: React.FunctionComponent<IMovieCardComponentProps> = (
  props
) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg cursor-pointer"
        src={props.movie.poster_path}
        alt={props.movie.original_title}
        onClick={() => navigate(`/movie/${props.movie.id}`)}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.movie.original_title}
        </h5>
      </div>
    </div>
  );
};

export default MovieCardComponent;
