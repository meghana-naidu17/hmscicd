import DoctorHeader from "../Doctor/DoctorHeader";
import Footer from "../../components/Footer";

const DoctorPatients = () => {
  return (
    <>
      <DoctorHeader />
      <div className="page-container">
        <h1>My Patients</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rahul Sharma</td>
              <td>45</td>
              <td>Hypertension</td>
            </tr>
            <tr>
              <td>Anita Rao</td>
              <td>38</td>
              <td>Migraine</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default DoctorPatients;
