import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutComponent from "./components/layout/layout.component";
import HomePage from "./pages/home/home.page";
import MyListPage from "./pages/my-list/my-list.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route path="/search" element={<HomePage />} />
          <Route path="/mylist" element={<MyListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
