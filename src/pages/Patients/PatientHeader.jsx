import { Link, useNavigate } from "react-router-dom";

const PatientHeader = () => {
  const navigate = useNavigate();
  const patientName = "Rahul";

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <>
      <div className="patient-top-bar">
        <span>💗 Patient Panel</span>
        <span className="welcome-text">Welcome, {patientName}</span>
      </div>

      <nav className="patient-navbar">
        <h2 className="patient-logo">Harmony Hospital</h2>

        <ul className="patient-nav-links">
          <li><Link to="/patient/profile">My Profile</Link></li>
          <li><Link to="/patient/appointments">Appointments</Link></li>
          <li><Link to="/patient/history">Medical History</Link></li>
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

export default PatientHeader;