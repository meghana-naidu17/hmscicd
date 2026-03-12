import React from "react";

import AdminHeader from "../admin/AdminHeader";
import Footer from "../../components/Footer";


const ManagePatients = () => {
  return (
    <>
    <AdminHeader />
      <h1>Manage Patients</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Condition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Suresh Kumar</td>
            <td>45</td>
            <td>Heart Disease</td>
            <td>
              <button>View</button>
              <button className="danger">Remove</button>
            </td>
          </tr>
          <tr>
            <td>Priya Singh</td>
            <td>32</td>
            <td>Migraine</td>
            <td>
              <button>View</button>
              <button className="danger">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </>
  );
};

export default ManagePatients;

