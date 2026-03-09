import Bill from "./components/Bill";
import Business from "./components/Business";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PaymentMethod from "./components/PaymentMethod";
import ScrollTop from "./components/ScrollTop";
import ServiceCard from "./components/ServiceCard";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="bg-primary text-white w-full h-full min-h-screen">
      <Navbar />
      <ScrollTop />
      <div className="container px-5 md:px-10 mx-auto">
        <Hero />
        <div className="flex flex-col xs:flex-row flex-wrap items-center justify-between gap-10 md:gap-4 py-24 border-y border-secondary/5 my-10 bg-deepDark/30 rounded-3xl p-6 ss:px-10 glassmorphism">
          <Stats number="3800" title="ACTIVE USERS" />
          <Stats number="230" title="PARTNER COMPANIES" />
          <Stats number="$230M" title="IN TRANSACTIONS" />
        </div>
        <Business />
        <Bill />
        <PaymentMethod />
        <Testimonials />
        <ServiceCard />
        <Footer />
      </div>
    </div>
  );
};

export default App;
