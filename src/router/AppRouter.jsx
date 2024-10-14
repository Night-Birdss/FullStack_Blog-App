// import About from "./pages/About";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// import NewBlog from "./pages/NewBlog";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import NewBlog from "../pages/NewBlog";
import NavBar from "../components/NavBar";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/newBlog" element={<NewBlog />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
