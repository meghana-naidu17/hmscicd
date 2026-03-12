import PatientHeader from "./PatientHeader";
import Footer from "../../components/Footer";
const PatientProfile = () => {
  return (
    <>
      <PatientHeader />
      <div className="page-container">
        <h1>Patient Profile</h1>
        <p>Name: Suresh Kumar</p>
        <p>Age: 42</p>
        <p>Blood Group: O+</p>
        <p>Email: suresh@gmail.com</p>
      </div>
      <Footer />
    </>
  );
};
export default PatientProfile;
