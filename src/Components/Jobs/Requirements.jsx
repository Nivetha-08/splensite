import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./Requirements.css";

const Requirements = () => {
  // console.log("Jobs Requirements render");

  return (
    <>
      <section id="Requirements">
        <h3 className="text-center p-4">Web Developer Requirements:</h3>
        <div className="row px-md-5 px-2">
          <div className="col-sm-12 col-md-6 ps-md-5 ps-sm-2">
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Bachelor degree in computer or related field or relevant experience.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Salid knowledge and experience in programming applications
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Proficient in HTML, CSS, JavaScript, jQuery, ReactJS, NextJS, Bootstrap, MaterialUI.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>Dedicated team player.</p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Ability to thrive in fast-placed environment.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 ps-md-5 ps-sm-2">
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Solid ability in both written and verbal communication.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Knowledge of programming language and technical terminology.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Able to develop ideas and processes and clearly express them.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Able to solve complex problems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Requirements;
