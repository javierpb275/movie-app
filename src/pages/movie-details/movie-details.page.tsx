import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsCardComponent from "../../components/movie-details-card/movie-details-card.component";
import RateMovieFormComponent from "../../components/rate-movie-form/rate-movie-form.component";
import ReviewCardListComponent from "../../components/review-card-list/review-card-list.component";
import { REVIEWS } from "../../interfaces/mockapi";
import { IMovieDetails } from "../../interfaces/movie.interface";
import { IReview } from "../../interfaces/review.interface";
import { MoviesService } from "../../services/moviesService";
import NotFoundPage from "../not-found/not-found.page";

export interface IMovieDetailsPageProps {}

const MovieDetailsPage: React.FunctionComponent<IMovieDetailsPageProps> = (
  props
) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await MoviesService.getMovieByIdResponse(movieId!);
      const data = await response.json();
      setMovieDetails(data);
      const movie_reviews = REVIEWS.filter(
        (review) => review.movie_id === Number(movieId)
      );
      setReviews(movie_reviews);
    };
    fetchData().catch((error) => {
      setError(true);
    });
  }, [movieId]);

  if (error) {
    return <h1>SOMETHING WENT WRONG...</h1>;
  } else if (!movieDetails?.id) {
    return <NotFoundPage />;
  } else {
    return (
      <div>
        <MovieDetailsCardComponent
          key={movieDetails.id}
          movieDetails={movieDetails}
        />
        <RateMovieFormComponent movieId={movieDetails.id} />
        <ReviewCardListComponent reviews={reviews} />
      </div>
    );
  }
};

export default MovieDetailsPage;
