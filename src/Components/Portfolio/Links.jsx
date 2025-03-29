import React from "react";
import { NavLink } from "react-router";
import "./Links.css";

const Links = () => {
  // console.log("Portfolio Links rendered");

  const array = [
    { to: "/portfolio/mobileapplication", label: "Mobile Application" },
    { to: "/portfolio/webapplication", label: "Web Application" },
    { to: "/portfolio/microapplication", label: "Micro Application" },
    { to: "/portfolio/uiuxdesign", label: "UI/UX Design" },
    { to: "/portfolio/digitalmarketing", label: "Digital Marketing" },
    { to: "/portfolio/testingservices", label: "Testing Services" },
  ];

  return (
    <>
      <section id="Links">
        {/* <p className="text-center">Practise</p> */}
        <div className="nav-container m-5">
          {array.map((val, ind) => (
            <div key={ind} className="nav-item">
              <NavLink to={val.to} className="a">{val.label}</NavLink>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Links;
