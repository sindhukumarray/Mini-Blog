import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
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
        
        <Route

            path="/login"

             element={<Login/>}

        />

        <Route
             path="/dashboard"
             element={
           <ProtectedRoute>
           <Dashboard />
          </ProtectedRoute>
              }
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;