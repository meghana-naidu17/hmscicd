const AdminDashboard = () => {
  return (
    <>
      <h1>Admin Dashboard</h1>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Doctors</h3>
          <p>12</p>
        </div>

        <div className="stat-card">
          <h3>Total Patients</h3>
          <p>150</p>
        </div>

        <div className="stat-card">
          <h3>Appointments</h3>
          <p>45</p>
        </div>

        <div className="stat-card">
          <h3>Reports</h3>
          <p>8</p>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
