import React from "react";
import { useSelector } from "react-redux";
import MovieCardListComponent from "../../components/movie-card-list/movie-card-list.component";
import { RootState } from "../../store";

export interface IMyListPageProps {}

const MyListPage: React.FunctionComponent<IMyListPageProps> = (props) => {
  const ratedMovies = useSelector(
    (state: RootState) => state.movie.ratedMovies
  );
  if (!ratedMovies.length) {
    return <h1>NO RATED MOVIES ADDED YET...</h1>;
  } else {
    return <MovieCardListComponent movies={ratedMovies} />;
  }
};

export default MyListPage;
