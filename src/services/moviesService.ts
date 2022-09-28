import { API_KEY, API_URL } from "../config/constants";
import { FetchService } from "./fetchService";

export class MoviesService {
  static async getPopularMoviesResponse(): Promise<Response> {
    try {
      const response = await FetchService.callApi(
        API_URL.MOVIES.GET.POPULAR.URL + `?api_key=${API_KEY}&language=en-US`,
        API_URL.MOVIES.GET.POPULAR.METHOD
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async getMovieByIdResponse(
    movieId: string | number
  ): Promise<Response> {
    try {
      const response = await FetchService.callApi(
        API_URL.MOVIES.GET.BY_ID.URL +
          `/${movieId}?api_key=${API_KEY}&language=en-US`,
        API_URL.MOVIES.GET.BY_ID.METHOD
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}
