// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// const URL = `https://fakestoreapi.com/products`;

// const UIUXDesign = () => {
//   // console.log("PortfolioSublinks UIUXDesign render");

//   const [data, setData] = useState([]);

//   const getData = async () => {
//     try {
//       const response = await axios.get(URL);
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       <div className="container mt-4">
//         <div className="row">
//           {data.map((v, i) => (
//             <div key={i} className="col-sm-12 col-md-4 mb-3">
//               <NavLink
//                 to={`/portfolio/uiuxdesign/project`}
//                 state={{ product: v, index: i }}
//                 className="text-decoration-none"
//               >
//                 <div className="card p-3">
//                   <img
//                     src={v.image}
//                     alt={`Product ${i}`}
//                     className="img-fluid"
//                     style={{ height: "300px", objectFit: "contain" }}
//                   />
//                 </div>
//                 <p className="text-muted ps-3">{v.title}</p>
//               </NavLink>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default UIUXDesign;

import { NavLink } from "react-router-dom";
import uiux1 from "../../../../public/assets/uiux1.png";
import uiux2 from "../../../../public/assets/uiux2.png";
import uiux3 from "../../../../public/assets/uiux3.png";
import uiux4 from "../../../../public/assets/uiux4.png";
import uiux5 from "../../../../public/assets/uiux5.png";
import figma from "../../../../public/assets/figma.png";
import photoshop from "../../../../public/assets/photoshop.png";
import xd from "../../../../public/assets/xd.png";
import illustrator from "../../../../public/assets/illustrator.png";
import indesign from "../../../../public/assets/indesign.png";
import sketch from "../../../../public/assets/sketch.png";
import html from "../../../../public/assets/html.png";
import css from "../../../../public/assets/css.png";
import js from "../../../../public/assets/js.png";
import angular from "../../../../public/assets/angular.png";
import react from "../../../../public/assets/react.png";
import github from "../../../../public/assets/github.png";

const UIUXDesign = () => {
  // console.log("PortfolioSublinks UIUXDesign render");

  const arrob = [
    {
      id: 1,
      img1: uiux1,
      img2: uiux2,
      img3: uiux3,
      img4: uiux4,
      img5: uiux5,
      title: "UI/UX Design and Development",
      subheading:
        "Designing Meaningful Digital Products and Experience For You",
      content1:
        "In the ever-evolving digital landscape, user experience (UX) and user interface (UI) design have become paramount for businesses aiming to create exceptional digital products. In India, where technology is thriving, numerous companies offer UI/UX design services. Among them, Concept Infoway stands out as a leading UI/UX design company, combining creativity, expertise, and a deep understanding of user behavior to deliver captivating and intuitive experiences.",
      title2: "Leading Web & Mobile APP Design Company",
      subheading2: "With Our Expertise We Can Deliver",
      title3: "Tools and Technologies",
      subheading3:
        "We Leverage The Latest Design And Development Tools To Craft Stunning User Experiences With Exceptional Functionality",
      title4: "Our Design & Development Process",
      subheading4:
        "We work in smaller phases, gather feedback at each, and iterate on our ideas. This is our proven method for creating world-class products, that convert and win hearts.",
      tools1: "Design Tools",
      tools2: "Development Tools",
      tool: [
        {
          img: figma,
          title: "Figma",
        },
        {
          img: photoshop,
          title: "Adobe Photoshop",
        },
        {
          img: xd,
          title: "Adobe XD",
        },
        {
          img: illustrator,
          title: "Adobe Illustrator",
        },
        {
          img: indesign,
          title: "Adobe Indesgn",
        },
        {
          img: sketch,
          title: "Sketch",
        },
      ],
      tools: [
        {
          img: html,
          title: "HTML",
        },
        {
          img: css,
          title: "CSS",
        },
        {
          img: js,
          title: "JavaScript",
        },
        {
          img: angular,
          title: "Angular",
        },
        {
          img: react,
          title: "React",
        },
        {
          img: github,
          title: "GitHub",
        },
      ],
    },
  ];

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {arrob.map((v, i) => (
            <div key={i} className="col-sm-12 col-md-4 mb-3">
              <NavLink
                to={`/portfolio/uiuxdesign/project`}
                state={{ product: v, index: i }}
                className="text-decoration-none"
              >
                <div className="card p-3">
                  <img
                    src={v.img1}
                    alt={`Product ${i}`}
                    className="img-fluid"
                    style={{ height: "300px", objectFit: "contain" }}
                  />
                </div>
                <p className="text-black text-center p-2">{v.subheading}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UIUXDesign;
