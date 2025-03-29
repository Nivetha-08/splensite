import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import java from "../../../public/assets/image 325.svg";
import springboot from "../../../public/assets/image 326.svg";
import flutter from "../../../public/assets/image 1958.svg";
import react from "../../../public/assets/image 1959.svg";
import angular from "../../../public/assets/image 1960.svg";
import javascript from "../../../public/assets/image 1961.svg";
import materialui from "../../../public/assets/image 1962.svg";
import "./Technology.css"

const Technology = () => {
  // console.log("Home Technology rendered");

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 4, 
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 3, 
        },
      },
    ],
  };

  return (
    <>
      <section id="Technology-Section" className="pb-md-5 p-0">
        <h1 className="text-center">Technology</h1>
        <p className="content pt-3">
          We create and deliver custom solutions of high aesthetical and
          engineering quality using the following technologies and frameworks.
        </p>

        <div className="slider-container pt-5">
          <Slider {...settings} className="text-center">
            <div className="">
              <img src={java} alt="java" />
            </div>
            <div className="">
              <img src={springboot} alt="springboot" />
            </div>
            <div className="">
              <img src={flutter} alt="flutter" />
            </div>
            <div className="">
              <img src={react} alt="react" />
            </div>
            <div className="">
              <img src={angular} alt="angular" />
            </div>
            <div className="">
              <img src={javascript} alt="javascript" />
            </div>
            <div className="">
              <img src={materialui} alt="materialui" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Technology;
