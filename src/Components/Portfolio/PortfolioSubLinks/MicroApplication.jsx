// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// const URL = `https://fakestoreapi.com/products`;

// const MicroApplication = () => {
//   // console.log("PortfolioSublinks MicroApplication render");

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
//                 to={`/portfolio/microapplication/project`}
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

// export default MicroApplication;


import { NavLink } from "react-router-dom";
import micro1 from "../../../../public/assets/micro1.png";
import micro2 from "../../../../public/assets/micro2.png";
import micro3 from "../../../../public/assets/micro3.png";

const MicroApplication = () => {
  // console.log("PortfolioSublinks MicroApplication render");

  const arrob = [
    {
          id: 1,
          img1: micro1,
          img2: micro2,
          img3: micro3,
          title: "Micro Application",
          subheading: "Micro Application All In One Dashboard for Project Management and Scheduling",
          content1:
            "Our microapplication offers a comprehensive dashboard that seamlessly integrates project management, calendar scheduling, resource organization, and settings customization. The dashboard serves as a centralized hub for monitoring project progress, setting milestones, and ensuring timely task completion. The project module enables users to define objectives, allocate resources, and track deliverables efficiently. Integrated calendar functionality allows for precise scheduling of tasks and events, with options to customize work hours and define non-working days. The resource section facilitates effective management by organizing materials and assets, ensuring easy access and optimal utilization.",
          content2:
            "Additionally, the settings module empowers users to personalize the application interface, configure preferences, and manage security settings, ensuring a tailored and secure user experience. This unified approach streamlines workflow, enhances productivity, and adapts to the unique needs of each user.",
        }
  ]

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {arrob.map((v, i) => (
            <div key={i} className="col-sm-12 col-md-4 mb-3">
              <NavLink
                to={`/portfolio/microapplication/project`}
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

export default MicroApplication;
