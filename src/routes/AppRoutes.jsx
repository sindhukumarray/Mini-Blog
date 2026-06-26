import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route

          path="/posts/:id"

          element={<PostDetail/>}

        />

        <Route

           path="/create"

           element={<CreatePost/>}

        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;