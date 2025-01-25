import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import OurService from "./components/OurService/OurService";
import OurWork from "./components/OurWork/OurWork";
import Testimonials from "./components/Testimonials/Testimonials";
import BlogCards from "./components/BlogCards/BlogCards";
import JoinCommunity from "./components/JoinCommunity/JoinCommunity";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OurService />
      <OurWork />
      <Testimonials />
      <BlogCards />
      <JoinCommunity />
      <Footer />
    </>
  );
};

export default App;
