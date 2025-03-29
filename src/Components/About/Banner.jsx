import React from "react";
import "./Banner.css";
import myImage1 from "../../../public/assets/Group 1000004613.svg";
import myImage2 from "../../../public/assets/Group 1000004604.svg";

const Banner = () => {
  // console.log("About Banner render");

  return (
    <>
      <section
        id="About-Banner"
        className="bg-primary mt-5 m-md-5 text-light py-3"
      >
        <div>
          <p className="heading">We Are Splendens</p>
          <p className="subheading">
            Design and Development innovation inspiration
          </p>
          <div className="about-subsection text-center">
            <p>Mobile & Web applications development company</p>
            <p>We care for your success</p>
            <p>
              We make your hard work behind simple Web & Mobile App Solution
            </p>
          </div>
        </div>
        <div className="text-center px-3 px-sm-0">
          <div className="row">
            <div className="col-6">
              <img src={myImage1} alt="" className="img-fluid" />
            </div>
            <div className="col-6">
              <img src={myImage2} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
