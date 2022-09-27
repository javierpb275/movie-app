import { API_KEY, API_URL } from "../config/constants";
import { FetchService } from "./fetchService";

export class MoviesService {
  static async getPopularMovies(): Promise<Response> {
    try {
      const response = await FetchService.callApi(
        API_URL.MOVIES.GET.POPULAR.URL + `?api_key=${API_KEY}`,
        API_URL.MOVIES.GET.POPULAR.METHOD
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
