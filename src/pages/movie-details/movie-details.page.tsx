import { useParams } from "react-router-dom";
import MovieDetailsCardComponent from "../../components/movie-details-card/movie-details-card.component";
import { MOVIES_DETAILS } from "../../interfaces/mockapi";

export interface IMovieDetailsPageProps {}

const MovieDetailsPage: React.FunctionComponent<IMovieDetailsPageProps> = (
  props
) => {
  const { movieId } = useParams();
  const movieDetails = MOVIES_DETAILS.find(
    (movie) => movie.id === Number(movieId)
  );
  return (
    <div>
      <MovieDetailsCardComponent movieDetails={movieDetails} />
    </div>
  );
};

export default MovieDetailsPage;
