import React from "react";
import "./Banner.css";

const Banner = () => {
  // console.log("Portfolio Banner render");
  
  return (
    <>
      <section id="Portfolio-Banner" className="pt-5">
        <p className="heading text-primary">Portfolio</p>
        <p className="subHeading">Spotlight on Latest Innovations</p>
        <p className="pt-3 d-flex justify-content-center content px-5">
          We are a team of creative minded designers and developers who design
          and develope web applications in HTML5, 
          JavaScript, ReactJS, Angular
          and NodeJS
        </p>
      </section>
    </>
  );
};

export default Banner;
