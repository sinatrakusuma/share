// import { Box } from "@mui/material";
import React from "react";
import "./cardbackground.scss"
import Cardimg from "./Cardimg";
const CardBackground = () => {
  return (
    <div className="container">

    <section className="hero-section">
  <div className="card-grid">
    <a className="card" href="#">
      <Cardimg backgroundImage=" url(./7.jpg)"/>
      {/* <div className="card__background"></div> */}
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="#">
    <Cardimg backgroundImage=" url(./7.jpg)"/>
      {/* <div className="card__background" ></div> */}
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="#">
    <Cardimg backgroundImage=" url(./7.jpg)"/>
      {/* <div className="card__background" ></div> */}
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="#">
    <Cardimg backgroundImage=" url(./7.jpg)"/>
      {/* <div className="card__background" ></div> */}
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="#">
    <Cardimg backgroundImage=" url(./7.jpg)"/>
      {/* <div className="card__background" ></div> */}
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="#">
    <Cardimg backgroundImage=" url(./7.jpg)"/>
      {/* <div className="card__background" ></div> */}
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="#">
    <Cardimg backgroundImage=" url(./7.jpg)"/>
      {/* <div className="card__background" ></div> */}
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="#">
    <Cardimg backgroundImage=" url(./d.jpg)"/>
      {/* <div className="card__background" ></div> */}
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    </div>
</section>
    </div>
  );
};

export default CardBackground;
