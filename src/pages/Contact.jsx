import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";  

export default function Contacts() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <>
      <Header />

      <div className="contact-modern-wrapper">
        <div className="contact-card-modern">

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
            aria-label="Go Back"
          >
            ←
          </button>

          <div className="contact-left">
            <h2>Contact Us</h2>
            <p>
              Need help or have questions?
              Our support team is here to assist you.
            </p>

            <div className="contact-info">
              <p>📞 +91 8500022285</p>
              <p>📧 contact@harmonyhospital.com</p>
              <p>📍 AndhraPradesh, India</p>
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Message..." rows="4" required></textarea>

              <button type="submit">Send Message →</button>
            </form>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}