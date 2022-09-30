import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMovie } from "../../interfaces/movie.interface";
import { IReview } from "../../interfaces/review.interface";
import { RootState } from "../../store";
import { addRatedMovie } from "../../store/movieReducer";
import { addReview } from "../../store/reviewReducer";

export interface IRateMovieFormComponentProps {
  movie: IMovie;
}

const RateMovieFormComponent: React.FunctionComponent<
  IRateMovieFormComponentProps
> = (props) => {
  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const rateInputRef = useRef<HTMLInputElement>(null);
  const allReviews = useSelector((state: RootState) => state.review.allReviews);
  const dispatch = useDispatch();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredComment = commentInputRef.current!.value.trim();
    const enteredUsername = usernameInputRef.current!.value.trim();
    const enteredRate = Number(rateInputRef.current!.value);
    if (
      !enteredUsername ||
      enteredUsername.length === 0 ||
      !enteredRate ||
      enteredRate < 0 ||
      enteredRate > 10
    ) {
      return;
    }
    const newReview: IReview = {
      id: allReviews.length + 1,
      movie_id: props.movie.id,
      rate: enteredRate,
      username: enteredUsername,
      comment: enteredComment,
    };
    dispatch(addReview(newReview));
    dispatch(addRatedMovie(props.movie));
  };
  return (
    <form onSubmit={submitHandler} className="m-10">
      <h2 className="font-medium">RATE THE MOVIE:</h2>
      <div className="mb-6 mt-6">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium dark:text-gray-300 "
        >
          USERNAME
        </label>
        <input
          ref={usernameInputRef}
          required
          type="text"
          id="username"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <div className="mb-6 mt-6">
        <label
          htmlFor="rate"
          className="block mb-2 text-sm font-medium dark:text-gray-300 "
        >
          YOUR RATE
        </label>
        <input
          ref={rateInputRef}
          required
          type="number"
          defaultValue={0.0}
          min="0"
          max="10"
          id="rate"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <div className="mb-6 mt-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium  dark:text-gray-400"
        >
          YOUR COMMENT
        </label>
        <textarea
          ref={commentInputRef}
          id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        className=" mb-6 mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
      >
        Submit Review
      </button>
    </form>
  );
};

export default RateMovieFormComponent;
