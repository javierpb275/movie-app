export interface IReview {
  id: number;
  movie_id: number;
  rate: number;
  username: string;
  comment?: string;
}
