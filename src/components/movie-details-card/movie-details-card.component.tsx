import { IMovieDetails } from "../../interfaces/movie.interface";

export interface IMovieDetailsCardComponentProps {
  movieDetails: IMovieDetails | undefined;
}

const MovieDetailsCardComponent: React.FunctionComponent<
  IMovieDetailsCardComponentProps
> = (props) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={props.movieDetails?.poster_path}
          alt={props.movieDetails?.original_title}
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {props.movieDetails?.original_title}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {props.movieDetails?.overview}
          </p>
          <p className="text-gray-600 text-xs mb-1">
            vote average: {props.movieDetails?.vote_average}
          </p>
          <p className="text-gray-600 text-xs mb-1">
            Release date: {props.movieDetails?.release_date}
          </p>
          <p className="text-gray-600 text-xs mb-1">
            Runtime: {props.movieDetails?.runtime}
          </p>
          <p className="text-gray-600 text-xs mb-1">
            Genres:
            {props.movieDetails?.genres.map((genre) => {
              return <span className="ml-0.5 mr-0.5">{genre.name}</span>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCardComponent;
