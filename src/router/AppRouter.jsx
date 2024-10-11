// import About from "./pages/About";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// import NewBlog from "./pages/NewBlog";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
