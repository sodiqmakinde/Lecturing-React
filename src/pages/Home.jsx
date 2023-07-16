import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import TopResturant from "../components/TopResturant";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TopResturant />
      <Countries />
      <Footer />
    </div>
  );
};

export default Home;
