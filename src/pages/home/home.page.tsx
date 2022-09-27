import React from "react";
import MovieCardListComponent from "../../components/movie-card-list/movie-card-list.component";
import { MOVIES } from "../../interfaces/mockapi";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return <MovieCardListComponent movies={MOVIES} />;
};

export default HomePage;
