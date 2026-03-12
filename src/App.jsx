import { Routes, Route } from "react-router-dom";
import "./App.css";

/* ================= PUBLIC PAGES ================= */
import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* ================= ADMIN ================= */
import Admin from "./pages/admin/Admin";
import ManageDoctors from "./pages/admin/ManageDoctors";
import ManagePatients from "./pages/admin/ManagePatients";
import AdminReports from "./pages/admin/AdminReports";

/* ================= DOCTOR ================= */
import Doctor from "./pages/Doctor/Doctor";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import DoctorPatients from "./pages/Doctor/DoctorPatients";
import DoctorProfile from "./pages/Doctor/DoctorProfile";

/* ================= PATIENT ================= */
import Patient from "./pages/Patients/Patient";
import PatientAppointments from "./pages/Patients/PatientAppointments";
import PatientHistory from "./pages/Patients/PatientHistory";
import PatientProfile from "./pages/Patients/PatientProfile";

/* ================= 404 PAGE ================= */
const NotFound = () => (
  <div className="page-container">
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
);

function App() {
  return (
    <Routes>

      {/* ========= PUBLIC ROUTES ========= */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ========= ADMIN ROUTES ========= */}
      <Route path="/admin/dashboard" element={<Admin />} />
      <Route path="/admin/doctors" element={<ManageDoctors />} />
      <Route path="/admin/patients" element={<ManagePatients />} />
      <Route path="/admin/reports" element={<AdminReports />} />

      {/* ========= DOCTOR ROUTES ========= */}
      <Route path="/doctor/dashboard" element={<Doctor />} />
      <Route path="/doctor/appointments" element={<DoctorAppointments />} />
      <Route path="/doctor/patients" element={<DoctorPatients />} />
      <Route path="/doctor/profile" element={<DoctorProfile />} />

      {/* ========= PATIENT ROUTES ========= */}
      <Route path="/patient/dashboard" element={<Patient />} />
      <Route path="/patient/appointments" element={<PatientAppointments />} />
      <Route path="/patient/history" element={<PatientHistory />} />
      <Route path="/patient/profile" element={<PatientProfile />} />

      {/* ========= 404 ========= */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;