import React from "react";
import image from "../../../public/assets/career.svg";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./Banner.css";

const Banner = () => {
  // console.log("Jobs Banner render");

  return (
    <>
      <section id="Jobs">
        <div className="p-5 text-center">
          <h1 className="text-primary">Careers at Splendenslab</h1>
          <h5 className="p-3">Careers</h5>

          <div className="sub-content">
            <p>Create clever things with us!</p>
            <p>
              We are always eager to meet fresh talent, so check our positions
            </p>
          </div>
        </div>
        <img
          src={image}
          alt="Banner Image"
          className="img-fluid d-flex mx-auto p-sm-0"
        />
        <div className="text-center p-5">
          <h1 className="text-primary">Web App Developer</h1>
          <p className="p-3 sub-content content">
            We are looking skilled Web Developer who will responsible for
            developing and/or designing websites for our company You will be
            working along side as team of other developers in creating,
            maintaining and updating our websites
          </p>
          <p className="sub-content content p-3 ">
            In order for you to succeed in this role, you will be need to be
            proficient in JavaScript, HTML, CSS, and have solid knowledge and
            experience in prigramming applications.
          </p>
        </div>
      </section>
    </>
  );
};

export default Banner;
