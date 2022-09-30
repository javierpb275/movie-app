import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutComponent from "./components/layout/layout.component";
import SpinnerComponent from "./components/spinner/spinner.component";

const PageHome = React.lazy(() => import("./pages/home/home.page"));

const PageSearchMovie = React.lazy(
  () => import("./pages/search-movie/search-movie.page")
);
const PageMyList = React.lazy(() => import("./pages/my-list/my-list.page"));

const PageMovieDetails = React.lazy(
  () => import("./pages/movie-details/movie-details.page")
);
const PageNotFound = React.lazy(
  () => import("./pages/not-found/not-found.page")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route
            path="/search"
            element={
              <React.Suspense
                fallback={
                  <SpinnerComponent size={6} title={"LOADING HOME PAGE..."} />
                }
              >
                <PageHome />
              </React.Suspense>
            }
          />
          <Route
            path="/search/:text"
            element={
              <React.Suspense
                fallback={
                  <SpinnerComponent size={6} title={"SEARCHING MOVIES..."} />
                }
              >
                <PageSearchMovie />
              </React.Suspense>
            }
          />
          <Route
            path="/mylist"
            element={
              <React.Suspense
                fallback={
                  <SpinnerComponent
                    size={6}
                    title={"LOADING LIST OF MOVIES..."}
                  />
                }
              >
                <PageMyList />
              </React.Suspense>
            }
          />
          <Route
            path="/movie/:movieId"
            element={
              <React.Suspense
                fallback={
                  <SpinnerComponent size={6} title={"LOADING MOVIE..."} />
                }
              >
                <PageMovieDetails />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<SpinnerComponent size={6} />}>
                <PageNotFound />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
