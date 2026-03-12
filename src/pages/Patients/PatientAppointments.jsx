import PatientHeader from "./PatientHeader";
import Footer from "../../components/Footer";
const PatientAppointments = () => {
  return (
    <>
      <PatientHeader />
      <div className="page-container">
        <h1>My Appointments</h1>
        <ul>
          <li>21 Feb – Dr. Ramesh Kumar</li>
          <li>02 Mar – Dr. Anita Verma</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default PatientAppointments;
