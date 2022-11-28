import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Content from "../../components/Content/Content";
import Hero from "../../components/hero/Hero";
import Card from "../../components/card/Card";
import Accordion from "../../components/Accordion/SimpleAccordion";
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Content />
      <Card />
      <Accordion />
      <Footer />
    </div>
  );
};

export default Home;
