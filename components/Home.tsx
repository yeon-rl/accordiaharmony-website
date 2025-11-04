import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import WhyTrustUs from "./WhyTrustUs";
import Services from "./Services";
import Testimonial from "./Testimonial";
import FAQSection from "./FAQ";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="text-white">
      <Navbar />
      <Header number={3} title="Why Trust Us?" />

      <WhyTrustUs />

      <Services />

      <div className="flex flex-col items-center bg-[url('/images/grid.png')] py-10">
        <Testimonial />
      </div>

      <FAQSection />

      <Footer />
    </div>
  );
};

export default Home;
