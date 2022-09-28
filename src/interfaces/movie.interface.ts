export interface IGenre {
  id: number;
  name: string;
}

export interface IMovie {
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
}

export interface IMovieDetails extends IMovie {
  runtime: number;
  genres: IGenre[];
}
