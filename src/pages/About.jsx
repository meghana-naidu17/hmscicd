import Header from "../components/header";
import Footer from "../components/Footer";
import AboutImage from "../assets/images/emer.jpg";

const About = () => {
  return (
    <>
      <Header />

     
      <section className="page-hero">
        <h1>About Us</h1>
        <p>Home / About</p>
      </section>

     
      <section className="page-container">
        <div className="about-grid">
          <div className="about-text">
            <h2>We Care About Your Health</h2>
            <p>
              Our hospital is committed to providing world-class healthcare
              services with compassion, integrity, and excellence. We combine
              modern medical technology with experienced professionals to
              ensure the best patient outcomes.
            </p>
            <p>
              From routine checkups to specialized treatments, our team works
              tirelessly to make healthcare accessible, affordable, and
              reliable for everyone.
            </p>
          </div>

          <div className="about-image">
            <img src={AboutImage} alt="Hospital" />
          </div>
        </div>
   

       
        <div className="about-stats">
          <div className="stat-card">
            <h3>20+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Expert Doctors</p>
          </div>
          <div className="stat-card">
            <h3>10k+</h3>
            <p>Happy Patients</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Emergency Care</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
