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
}
