import Splash from '../../components/splash/Splash'
import React from 'react'
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import HalfImage from '../../components/halfImg/HalfImg';
import Marticle from '../../components/article/Marticle';
import "./daurulang.scss"
import Plastik from "../../components/halfImg/Plastik";
import Kertas from "../../components/halfImg/Kertas";
import Botol from "../../components/halfImg/Botol";

const DaurUlang = () => {
  return (
    <div className="container">
        <Navbar/>
        <div className="footer">
        <Hero/>
        <Marticle/>
        <HalfImage/>
        <Plastik />
        <Kertas />
        <Botol />
        <Splash/>
        <Footer/>
        </div>
    </div>
  )
}

export default DaurUlang;
