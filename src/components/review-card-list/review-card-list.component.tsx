import { IReview } from "../../interfaces/review.interface";
import ReviewCardComponent from "../review-card/review-card.component";

export interface IReviewCardListComponentProps {
  reviews: IReview[];
}

const ReviewCardListComponent: React.FunctionComponent<
  IReviewCardListComponentProps
> = (props) => {
  return (
    <div className="p-4 w-full max-w-md rounded-lg sm:p-8 dark:bg-white-800">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none">REVIEWS</h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y">
          {props.reviews.map((review) => {
            return (
              <li className="py-3 sm:py-4" key={review.id}>
                <ReviewCardComponent key={review.id} review={review} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ReviewCardListComponent;
