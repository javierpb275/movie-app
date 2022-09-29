import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReview } from "../interfaces/review.interface";

export interface ReviewState {
  allReviews: IReview[];
}

const initialState: ReviewState = {
  allReviews: [],
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<IReview>) => {
      const foundReview = state.allReviews.find(
        (review) =>
          review.id === action.payload.id ||
          (review.username === action.payload.username &&
            review.movie_id === action.payload.movie_id)
      );
      if (foundReview) {
        return;
      }
      state.allReviews.push(action.payload);
    },
  },
});

export const { addReview } = reviewSlice.actions;

export default reviewSlice.reducer;
