import DoctorHeader from "../Doctor/DoctorHeader";
import Footer from "../../components/Footer";

const DoctorAppointments = () => {
  return (
    <>
      <DoctorHeader />
      <div className="page-container">
        <h1>Appointments</h1>
        <ul>
          <li>Rahul Sharma – 10:30 AM</li>
          <li>Anita Rao – 11:15 AM</li>
          <li>Suresh Kumar – 12:00 PM</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default DoctorAppointments;
