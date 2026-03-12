import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Dashboard</h3>
      <ul>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/admin/doctors">Manage Doctors</Link></li>
        <li><Link to="/admin/patients">Manage Patients</Link></li>
        <li><Link to="/admin/reports">Reports</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
