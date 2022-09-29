import { IMovie, IMovieDetails } from "./movie.interface";
import { IReview } from "./review.interface";

export const MOVIES: IMovie[] = [
  {
    id: 1,
    original_title: "The Movie 1",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
  },
  {
    id: 2,
    original_title: "The Movie 2",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
  },
  {
    id: 3,
    original_title: "The Movie 3",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
  },
  {
    id: 4,
    original_title: "The Movie 4",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
  },
  {
    id: 5,
    original_title: "The Movie 5",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
  },
  {
    id: 6,
    original_title: "The Movie 6",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
  },
  {
    id: 7,
    original_title: "The Movie 7",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
  },
  {
    id: 8,
    original_title: "The Movie 8",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
  },
];

export const MOVIES_DETAILS: IMovieDetails[] = [
  {
    id: 1,
    original_title: "The Movie 1",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
    runtime: 98,
    genres: [
      {
        id: 1,
        name: "Comedy",
      },
      {
        id: 2,
        name: "Drama",
      },
    ],
  },
  {
    id: 2,
    original_title: "The Movie 2",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
    runtime: 98,
    genres: [
      {
        id: 1,
        name: "Comedy",
      },
      {
        id: 2,
        name: "Drama",
      },
    ],
  },
  {
    id: 3,
    original_title: "The Movie 3",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
    runtime: 98,
    genres: [
      {
        id: 1,
        name: "Comedy",
      },
      {
        id: 2,
        name: "Drama",
      },
    ],
  },
  {
    id: 4,
    original_title: "The Movie 4",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
    runtime: 98,
    genres: [
      {
        id: 1,
        name: "Comedy",
      },
      {
        id: 2,
        name: "Drama",
      },
    ],
  },
  {
    id: 5,
    original_title: "The Movie 5",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
    runtime: 98,
    genres: [
      {
        id: 1,
        name: "Comedy",
      },
      {
        id: 2,
        name: "Drama",
      },
    ],
  },
  {
    id: 6,
    original_title: "The Movie 6",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
    runtime: 98,
    genres: [
      {
        id: 1,
        name: "Comedy",
      },
      {
        id: 2,
        name: "Drama",
      },
    ],
  },
  {
    id: 7,
    original_title: "The Movie 7",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
    runtime: 98,
    genres: [
      {
        id: 1,
        name: "Comedy",
      },
      {
        id: 2,
        name: "Drama",
      },
    ],
  },
  {
    id: 8,
    original_title: "The Movie 8",
    poster_path: "https://img.fruugo.com/product/9/75/101193759_max.jpg",
    overview: "whatever you want to say about the movie",
    vote_average: 7.5,
    release_date: "2020-12-15",
    runtime: 98,
    genres: [
      {
        id: 1,
        name: "Comedy",
      },
      {
        id: 2,
        name: "Drama",
      },
    ],
  },
];

export const REVIEWS: IReview[] = [
  {
    id: 1,
    movie_id: 760161,
    username: "pepe",
    rate: 6.9,
  },
  {
    id: 2,
    movie_id: 760161,
    username: "maria",
    rate: 3.23,
    comment:
      "maria speaking Lorem ipsum whatever you want to say blablablablabalala kefofnweofnwen ewifnmowefn ewifjwoefi.",
  },
  {
    id: 3,
    movie_id: 985939,
    username: "paco",
    rate: 7.34,
    comment:
      "paco speaking Lorem ipsum whatever you want to say blablablablabalala kefofnweofnwen ewifnmowefn ewifjwoefi.",
  },
  {
    id: 4,
    movie_id: 985939,
    username: "sara",
    rate: 9.3,
  },
];
