import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import Products from "components/Products";
import Categories from "components/Categories";
import BestCourts from "components/BestCourts";

const Home = () => {

  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <Products />

      {/* Categories */}
      <Categories />

      <BestCourts />

      <Footer />
    </div>
  );
};

export default Home;
