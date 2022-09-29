import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetailsCardComponent from "../../components/movie-details-card/movie-details-card.component";
import RateMovieFormComponent from "../../components/rate-movie-form/rate-movie-form.component";
import ReviewCardListComponent from "../../components/review-card-list/review-card-list.component";
import { IMovieDetails } from "../../interfaces/movie.interface";
import { MoviesService } from "../../services/moviesService";
import { RootState } from "../../store";
import NotFoundPage from "../not-found/not-found.page";

export interface IMovieDetailsPageProps {}

const MovieDetailsPage: React.FunctionComponent<IMovieDetailsPageProps> = (
  props
) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
  const [error, setError] = useState(false);
  const reviews = useSelector((state: RootState) => state.review.allReviews);
  const movie_reviews = reviews.filter(
    (review) => review.movie_id === Number(movieId)
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await MoviesService.getMovieByIdResponse(movieId!);
      const data = await response.json();
      setMovieDetails(data);
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
        <RateMovieFormComponent movie={movieDetails} />
        <ReviewCardListComponent reviews={movie_reviews} />
      </div>
    );
  }
};

export default MovieDetailsPage;
