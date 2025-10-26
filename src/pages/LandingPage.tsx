import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
const LandingPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-poppins">
      {/* Navbar */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* services */}
      <Services />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default LandingPage;
