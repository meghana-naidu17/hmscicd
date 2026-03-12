import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="top-bar">
        <span>📞 +91 8500022285</span>
        <span>✉️ HormonyHospital@gmail.com</span>
      </div>

      <nav className="navbar">
        <h2 className="logo">HormonyHospital</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
