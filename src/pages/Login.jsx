import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple demo login (no backend)
    const userData = {
      email,
      role,
      name:
        role === "admin"
          ? "Admin"
          : role === "doctor"
          ? "Dr. Ramesh Kumar"
          : "Rahul Sharma",
    };

    // Store full user object
    localStorage.setItem("currentUser", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");

    // Role-based navigation
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else if (role === "doctor") {
      navigate("/doctor/dashboard");
    } else {
      navigate("/patient/dashboard");
    }
  };

  return (
    <>
      <Header />

      <div className="login-page">
        <div className="login-card">

          {/* LEFT SIDE */}
          <div className="login-left">
            <h1>Welcome Back</h1>
            <p>
              Access your medical dashboard securely. Manage appointments,
              view reports, and stay connected with your healthcare team.
            </p>

            <ul>
              <li>✔ Secure Login</li>
              <li>✔ Trusted Doctors</li>
              <li>✔ 24/7 Patient Support</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="login-right">
            <h2>Log in</h2>
            <p>Please enter your login details</p>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
              </select>

              <button type="submit">Let’s start</button>

              <p className="signup-text">
                Don’t have an account?{" "}
                <span onClick={() => navigate("/signup")}>
                  Sign up
                </span>
              </p>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;