import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <span>📞 +91 8500022285</span>
        <span>✉ Harmony Hospital@gmail.com</span>
      </div>

      <nav className="navbar">
        <h2 className="logo">Harmony Hospital</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
