import React from "react";
import AdminHeader from "../admin/AdminHeader";
import Footer from "../../components/Footer";
const Reports = () => {
  return (
    <>
      <AdminHeader />

      <div className="report-page">
        <h1>Reports</h1>

        <ul className="report-list">
          <li>📝 Appointment Report - Feb 2026</li>
          <li>📝 Doctor Performance Report</li>
          <li>📝 Patient Admission Report</li>
          <li>📝 Revenue Summary</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};
export default Reports;
