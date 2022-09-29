import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";
import reviewReducer from "./reviewReducer";

export const store = configureStore({
  reducer: {
    review: reviewReducer,
    movie: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
