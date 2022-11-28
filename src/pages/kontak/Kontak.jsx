import React from 'react'
import Heading from '../../components/Content/Heading';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import "./kontak.scss";
import Info from '../../components/Info/Info';
import HalfImg from '../../components/halfImg/HalfImg';
const Kontak = () => {
  return (
    <div className="container">
        <Navbar/>
        <div className="footer">
        <Hero/>
        <Heading/>
        <HalfImg/>
        <Info/>
        <Card/>
        <Footer/>
        </div>
    </div>
  )
}

export default Kontak;
