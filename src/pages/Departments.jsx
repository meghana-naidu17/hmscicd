import CardioImage from "../assets/images/cardioo.jpg";
import NeuroImage from "../assets/images/brain.jpg";
import OrthoImage from "../assets/images/oortho.jpg";
import PediaImage from "../assets/images/pedic.jpg";

import Header from "../components/header";   // ✅ ADD THIS
import Footer from "../components/Footer";

const departments = [
  {
    id: 1,
    name: "Cardiology",
    description:
      "Advanced heart care with modern diagnostic and surgical facilities.",
    image: CardioImage,
  },
  {
    id: 2,
    name: "Neurology",
    description:
      "Specialized treatment for brain and nervous system disorders.",
    image: NeuroImage,
  },
  {
    id: 3,
    name: "Orthopedics",
    description:
      "Comprehensive care for bones, joints, and musculoskeletal system.",
    image: OrthoImage,
  },
  {
    id: 4,
    name: "Pediatrics",
    description:
      "Dedicated healthcare services for infants, children, and adolescents.",
    image: PediaImage,
  },
];

const Departments = () => {
  return (
    <>
      <Header />

      <div className="departments-page">
        <div className="departments-header">
          <h1>Our Departments</h1>
          <p>
            Specialized medical departments with expert doctors and modern
            facilities.
          </p>
        </div>

        <div className="departments-container">
          <div className="departments-grid">
            {departments.map((dept) => (
              <div className="department-card" key={dept.id}>
                <img src={dept.image} alt={dept.name} />
                <div className="department-content">
                  <h3>{dept.name}</h3>
                  <p>{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Departments;