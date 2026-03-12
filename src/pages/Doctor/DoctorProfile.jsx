import DoctorHeader from "../Doctor/DoctorHeader";
import Footer from "../../components/Footer";

const DoctorProfile = () => {
  return (
    <>
      <DoctorHeader />
      <div className="page-container">
        <h1>Doctor Profile</h1>
        <p>Name: Dr. Ramesh Kumar</p>
        <p>Specialization: Cardiology</p>
        <p>Experience: 12 Years</p>
        <p>Email: ramesh@citycare.com</p>
      </div>
      <Footer />
    </>
  );
};

export default DoctorProfile;
