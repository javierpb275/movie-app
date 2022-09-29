import { IReview } from "../../interfaces/review.interface";
import RatingCountComponent from "../rating-count/rating-count.component";

export interface IReviewCardListComponentProps {
  review: IReview;
}

const ReviewCardComponent: React.FunctionComponent<
  IReviewCardListComponentProps
> = (props) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img
          className="w-8 h-8 rounded-full"
          src="https://previews.123rf.com/images/lirch/lirch1705/lirch170500508/78981284-funny-avatar-de-avatar-de-tibur%C3%B3n-para-la-web.jpg"
          alt=""
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium ">{props.review.username}</p>
        <p className="text-sm ">{props.review.comment}</p>
      </div>
      <div className="inline-flex items-center text-base font-semibold ">
        <RatingCountComponent vote_average={props.review.rate} />
      </div>
    </div>
  );
};

export default ReviewCardComponent;
