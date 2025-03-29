import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./Responsibilities.css";

const Responsibilities = () => {
  // console.log("Jobs Responsibilities render");

  return (
    <>
      <section id="Responsibilities">
        <h3 className="text-center pb-5">Web Developer Responsibilities:</h3>
        <div className="row px-md-5 px-2 ">
          <div className="col-sm-12 col-md-6 ps-md-5 ps-sm-2">
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Website and software application designing, building or
                maintaining.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Using script are authoring languages, management tools, content
                creation tools, application and digital media.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                COnferring with teams to resolve conflicts, priortize needs
                develop content criteria or choose solutions.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>Directing or performing Website updates.</p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Developing or validating test routines and schedules to ensure
                that test cases mmimic external interfaces and address all
                browser and device types.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Editing writing or designing website content and directing team
                members who produce content.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 ps-md-5 ps-sm-2">
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Maintaining an understanding of the latest web applications and
                programming practices through education, study and participation
                in conferences, workshops and groups.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Back up files from websites to local directories for recovery.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Identifying problems uncovered by customer feedback and testing
                and correcting or referring problems to appropriate personal for
                correction
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>
                Evaluating code to ensure it meets the industry standards, is
                valid, is properly structured and is compatible with browsers,
                devices or operating systems.
              </p>
            </div>
            <div className="d-flex">
              <p className="icons">
                <MdKeyboardDoubleArrowRight />
              </p>
              <p>Determining user needs by analyzing technical requirements</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Responsibilities;
