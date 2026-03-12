import PatientHeader from "./PatientHeader";
import Footer from "../../components/Footer";
const PatientHistory = () => {
  return (
    <>
      <PatientHeader />
      <div className="page-container">
        <h1>Medical History</h1>
        <ul>
          <li>2023 – Blood Pressure</li>
          <li>2024 – Diabetes</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default PatientHistory;
