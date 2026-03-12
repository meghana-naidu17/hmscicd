import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />

      <section className="hero">
        <h1>Complete Healthcare Solution</h1>
        <p>
          We provide trusted medical services with experienced doctors and
          modern facilities.
        </p>
        <button>Learn More</button>
      </section>

      <Footer />
    </>
  );
};

export default Home;
