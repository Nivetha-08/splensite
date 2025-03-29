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

const UIUXDesign = () => {
  // console.log("PortfolioSublinks UIUXDesign render");

  const arrob =[
    {
          id: 1,
          img1: uiux1,
          img2: uiux2,
          img3: uiux3,
          title: "UI/UX Design and Development",
          subheading: "Designing Meaningful Digital Products and Experience For You",
          content1:
            "Our microapplication offers a comprehensive dashboard that seamlessly integrates project management, calendar scheduling, resource organization, and settings customization. The dashboard serves as a centralized hub for monitoring project progress, setting milestones, and ensuring timely task completion. The project module enables users to define objectives, allocate resources, and track deliverables efficiently. Integrated calendar functionality allows for precise scheduling of tasks and events, with options to customize work hours and define non-working days. The resource section facilitates effective management by organizing materials and assets, ensuring easy access and optimal utilization.",
          content2:
            "Additionally, the settings module empowers users to personalize the application interface, configure preferences, and manage security settings, ensuring a tailored and secure user experience. This unified approach streamlines workflow, enhances productivity, and adapts to the unique needs of each user.",
        },
  ]

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
                <p className="text-muted ps-3">{v.subheading}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UIUXDesign;
