import Header from "../components/header";
import Footer from "../components/Footer";

const Patients = () => {
  const patient = {
    name: "Rahul Sharma",
    age: 32,
    gender: "Male",
    bloodGroup: "O+",
  };

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Anjali Mehta",
      department: "Cardiology",
      date: "22 Feb 2026",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Suresh Rao",
      department: "Orthopedics",
      date: "25 Feb 2026",
      status: "Pending",
    },
  ];

  const reports = [
    {
      id: 1,
      title: "Blood Test Report",
      date: "10 Feb 2026",
    },
    {
      id: 2,
      title: "X-Ray Report",
      date: "15 Feb 2026",
    },
  ];

  return (
    <>
      <Header />

      <section className="page-hero">
        <h1>Patient Dashboard</h1>
        <p>Manage your appointments and reports</p>
      </section>

      <section className="page-container">
        
        <div className="patient-profile card-box">
          <h2>Patient Information</h2>
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
        </div>

       
        <div className="card-box">
          <h2>Upcoming Appointments</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((app) => (
                <tr key={app.id}>
                  <td>{app.doctor}</td>
                  <td>{app.department}</td>
                  <td>{app.date}</td>
                  <td>
                    <span className={`status ${app.status.toLowerCase()}`}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="card-box">
          <h2>Medical Reports</h2>
          <ul className="reports-list">
            {reports.map((rep) => (
              <li key={rep.id}>
                <span>{rep.title}</span>
                <span>{rep.date}</span>
                <button className="btn">View</button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Patients;
