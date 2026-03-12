import { Link, useNavigate } from "react-router-dom";

const DoctorHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can later clear token here
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="doctor-top-bar">
        <span>🩺 Doctor Panel</span>
        <span>📞 Support: +91 8500022285</span>
      </div>

      {/* Navbar */}
      <nav className="doctor-navbar">
        <h2 className="doctor-logo">Harmony Hospital</h2>

        <ul className="doctor-nav-links">
          <li><Link to="/doctor/profile">My Profile</Link></li>
          <li><Link to="/doctor/patients">Patients</Link></li>
          <li><Link to="/doctor/appointments">Appointments</Link></li>
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DoctorHeader;