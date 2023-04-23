import React from "react";
// import Slider from "react-slick";
import "./Director.css";
import image from "../vector-users-icon.png";

const Director = () => {
  return (
    <>
      <div id="director" className="CSSgal">
        <s id="s1"></s>
        <s id="s2"></s>
        <s id="s3"></s>
        <s id="s4"></s>
        <h1 className="h2">Our Directors</h1>
        <div className="slider">
          <div className="color">
            <div className="director-details">
              <img className="image" src={image} />
              <p>Director Name: Himanshu Singhal</p>
              <p>DIN : 02190458</p>
            </div>
          </div>
          <div className="color">
            <div className="director-details">
              <img className="image" src={image} />
              <p>Director Name: Mohit Singhal</p>
              <p>DIN : 09814564</p>
            </div>
          </div>
          <div className="color">
            <div className="director-details">
              <img className="image" src={image} />
              <p>Director Name: Bharat Goyal</p>
              <p>DIN : 00713648</p>
            </div>
          </div>
          <div className="color">
            <div className="director-details">
              <img className="image" src={image} />
              <p>Director Name: Vivek Goel</p>
              <p>DIN : 02228469</p>
            </div>
          </div>
        </div>

        {/* <div className="prevNext">
          <div>
            <a href="#s4"></a>
            <a href="#s2"></a>
          </div>
          <div>
            <a href="#s1"></a>
            <a href="#s3"></a>
          </div>
          <div>
            <a href="#s2"></a>
            <a href="#s4"></a>
          </div>
          <div>
            <a href="#s3"></a>
            <a href="#s1"></a>
          </div>
        </div> */}

        <div className="bullets">
          <a href="#s1">1</a>
          <a href="#s2">2</a>
          <a href="#s3">3</a>
          <a href="#s4">4</a>
        </div>
      </div>
    </>
  );
};

export default Director;
