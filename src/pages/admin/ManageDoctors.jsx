import React from "react";

import AdminHeader from "../admin/AdminHeader";
import Footer from "../../components/Footer";
const ManageDoctors = () => {
  return (
    <>
      <AdminHeader />

      <div className="admin-page">
        <div className="admin-page-header">
          <h1>Manage Doctors</h1>
          <button className="primary-btn">+ Add Doctor</button>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Qualification</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Rahul Sharma</td>
              <td>Cardiology</td>
              <td>MBBS, MD</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="danger-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Dr. Anita Rao</td>
              <td>Neurology</td>
              <td>MBBS, DM</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="danger-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default ManageDoctors;
