import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutComponent from "./components/layout/layout.component";
import HomePage from "./pages/home/home.page";
import MovieDetailsPage from "./pages/movie-details/movie-details.page";
import MyListPage from "./pages/my-list/my-list.page";
import NotFoundPage from "./pages/not-found/not-found.page";
import SearchMoviePage from "./pages/search-movie/search-movie.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route path="/search" element={<HomePage />} />
          <Route path="/search/:text" element={<SearchMoviePage />} />
          <Route path="/mylist" element={<MyListPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
