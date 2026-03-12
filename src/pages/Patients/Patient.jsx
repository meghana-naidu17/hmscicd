import PatientHeader from "./PatientHeader";
import Footer from "../../components/Footer";

const Patient = () => {
  return (
    <>
<PatientHeader />
     <div className="dashboard-container">
  <h1>Patient Dashboard</h1>
  <p>Manage your appointments and reports</p>

  <div className="patient-info-card">
    <h2>Patient Information</h2>
    <p><strong>Name:</strong> Rahul Sharma</p>
    <p><strong>Age:</strong> 32</p>
    <p><strong>Gender:</strong> Male</p>
    <p><strong>Blood Group:</strong> O+</p>
  </div>

  <h2>Upcoming Appointments</h2>

  <table className="dashboard-table">
    <thead>
      <tr>
        <th>Doctor</th>
        <th>Department</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dr. Anjali Mehta</td>
        <td>Cardiology</td>
        <td>22 Feb 2026</td>
        <td className="status-confirmed">Confirmed</td>
      </tr>
      <tr>
        <td>Dr. Suresh Rao</td>
        <td>Orthopedics</td>
        <td>25 Feb 2026</td>
        <td className="status-pending">Pending</td>
      </tr>
    </tbody>
  </table>

  <h2>Medical Reports</h2>
  <ul className="report-list">
    <li>
      Blood Test Report – 10 Feb 2026
      <button className="view-btn">View</button>
    </li>
    <li>
      X-Ray Report – 15 Feb 2026
      <button className="view-btn">View</button>
    </li>
  </ul>
</div>
<Footer />
</>
     
  );
};

export default Patient;
