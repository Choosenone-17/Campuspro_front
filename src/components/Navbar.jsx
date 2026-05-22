import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">

        <Link to="/" className="logo">
          CampusPro
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/saved">Saved</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

      </div>
    </nav>
  );
}