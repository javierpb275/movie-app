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
    <div className="m-5 bg-[#101522] rounded-lg px-10">
      <img
        className="rounded-t-lg cursor-pointer"
        src={"http://image.tmdb.org/t/p/w300" + props.movie.poster_path}
        alt={props.movie.original_title}
        onClick={() => navigate(`/movie/${props.movie.id}`)}
      />
      <div className="p-2">
        <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
          {props.movie.original_title}
        </h5>
      </div>
    </div>
  );
};

export default MovieCardComponent;
