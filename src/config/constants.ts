export const API_BASE_URL = "https://api.themoviedb.org/3"
export const API_KEY = process.env.REACT_APP_API_KEY

export const API_URL = { 
    MOVIES: {
        GET : {
            POPULAR: {
                URL: "/movie/popular",
                METHOD: "GET"
            },
            BY_TEXT: {
                URL: "/search/movie", //?query=sometext
                METHOD: "GET"
            },
            BY_ID: {
                URL: "/movie/", //:movieId
                METHOD: "GET"
            },
        }
    }
}

