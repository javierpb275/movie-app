import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../interfaces/movie.interface";

export interface MovieState {
  ratedMovies: IMovie[];
}

const initialState: MovieState = {
  ratedMovies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addRatedMovie: (state, action: PayloadAction<IMovie>) => {
      const foundMovie = state.ratedMovies.find(
        (movie) => movie.id === action.payload.id
      );
      if (foundMovie) {
        return;
      }
      state.ratedMovies.push(action.payload);
    },
  },
});

export const { addRatedMovie } = movieSlice.actions;

export default movieSlice.reducer;
