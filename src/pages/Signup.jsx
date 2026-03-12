import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";
const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <>
      <Header />
      <div className="login-page">
        <div className="login-card">

        {/* LEFT PANEL */}
        <div className="login-left">
          <h1>Create Account</h1>
          <p>
            Join our hospital management system and access
            healthcare services digitally with ease.
          </p>

          <ul>
            <li>✔ Easy Registration</li>
            <li>✔ Secure Records</li>
            <li>✔ Instant Access</li>
          </ul>
        </div>

        {/* RIGHT PANEL */}
        <div className="login-right">
          <h2>Sign up</h2>
          <p>Create your account</p>

          <form onSubmit={handleSignup}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <button type="submit">Sign up</button>

            <p className="signup-text">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </form>
        </div>

      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Signup;
