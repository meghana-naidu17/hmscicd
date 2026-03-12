import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Footer from "../../components/Footer";
import AdminDashboard from "./AdminDashboard";
const Admin = () => {
  return (
    <div className="admin-layout">
      {/* Top Header */}
      <AdminHeader />

      {/* Main Content */}
      <main className="admin-content">
        <div className="content-wrapper">
          <AdminDashboard />
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;