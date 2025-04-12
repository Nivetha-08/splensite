import React from "react";
import "./Apply.css"

const Apply = () => {
  // console.log("Internships Apply render");

  return (
    <>
      <section id="Apply" className="pb-5 px-2">
        <div className="p-sm-3 p-md-5 ms-sm-0 ms-md-5 ">
          <h1>How To Apply</h1>
          <p className="pt-2">If you want to become out next rising star, do not hesitate to let us know by sending your CV to:</p>
          <a href="mailto:contact@splendenslab.com">Contact@Splendenslab.com</a> <br />
          <button className="btn btn-primary mt-4 p-2">Get Started Now</button>
        </div>
      </section>
    </>
  );
};

export default Apply;
