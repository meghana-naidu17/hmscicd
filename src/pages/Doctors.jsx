import Header from "../components/header";
import Footer from "../components/Footer";

const Doctor = () => {
  return (
    <>
      <Header />

      <div className="dashboard-container">
        <h1>Doctor Dashboard</h1>

        <div className="cards">
          <div className="card">
            <h3>Today's Appointments</h3>
            <p>12</p>
          </div>

          <div className="card">
            <h3>Total Patients</h3>
            <p>86</p>
          </div>

          <div className="card">
            <h3>Pending Reports</h3>
            <p>4</p>
          </div>
        </div>

        <h2>Upcoming Appointments</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rahul Sharma</td>
              <td>20 Feb</td>
              <td>10:30 AM</td>
              <td>Confirmed</td>
            </tr>
            <tr>
              <td>Anita Rao</td>
              <td>20 Feb</td>
              <td>11:15 AM</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default Doctor;
