// import Splash from '../../components/splash/Splash'
import React from "react";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Content from "../../components/Content/Content";
import "./banksampah.scss";
// import AddressForm from "../../components/form/AddressForm";
// import Payment from "../../components/form/Payment";
// import { useState } from "react";
import Checkout from "../../components/form/Checkout";

const BankSampah = () => {
  // const [isStepForm, setIsStepForm] = useState(1);
  // const [shippingData, setShippingData] = useState({});

  // console.log(shippingData);

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Content />

      <Checkout />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default BankSampah;
