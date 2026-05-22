import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Compare from "./pages/Compare";
import CollegeDetails from "./pages/CollegeDetails";
import Saved from "./pages/Saved";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/college/:id"
          element={<CollegeDetails />}
        />
      </Routes>
    </>
  );
}