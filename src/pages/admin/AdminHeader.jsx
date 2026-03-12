import { Link, useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const adminName = "Admin";

  const handleLogout = () => {
    alert("Admin logged out");
    navigate("/login");
  };

  return (
    <>
      <div className="admin-top-bar">
        <span>👑 Admin Panel</span>
        <span className="welcome-text">Welcome, {adminName}</span>
      </div>

      <nav className="admin-navbar">
        <h2 className="admin-logo">Harmony Hospital</h2>

        <ul className="admin-nav-links">
      
          <li><Link to="/admin/doctors">Manage Doctors</Link></li>
          <li><Link to="/admin/patients">Manage Patients</Link></li>
          <li><Link to="/admin/reports">Reports</Link></li>
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

export default AdminHeader;