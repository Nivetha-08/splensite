// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// const URL = `https://fakestoreapi.com/products`;

// const TestingServices = () => {
//   // console.log("PortfolioSublinks TestingServices render");

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
//                 to={`/portfolio/testingservices/project`}
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

// export default TestingServices;


import { NavLink } from "react-router-dom";
import testing1 from "../../../../public/assets/testing1.png";
import testing2 from "../../../../public/assets/testing2.png";
import testing3 from "../../../../public/assets/testing3.png";

const TestingServices = () => {
  // console.log("PortfolioSublinks TestingServices render");

  const arrob =[
    {
          id: 1,
          img1: testing1,
          img2: testing2,
          img3: testing3,
          title: "Testing Service",
          subheading: "Streamline, Analyze and Optimize Your Marketing Efforts In One Dashboard",
          content1:
            "We offer a robust suite of testing services designed to guarantee the highest quality and performance of your digital solutions. Our services are powered by a state-of-the-art dashboard, providing a centralized view of all testing activities. This dashboard allows clients to easily access an organized list of ongoing and completed testing campaigns, offering full visibility and control over the entire testing process. Each campaign list includes detailed insights into specific objectives and outcomes, helping teams monitor performance in real time. The content section within the dashboard displays all relevant materials and test cases used, making it easier to track and analyze test results.",
          content2:
            "Additionally, the brand feature allows businesses to monitor how their brands perform across various campaigns, ensuring their digital solutions align with branding objectives and resonate with the target audience. To further empower our clients, the data lab functionality offers deep analytics, enabling users to explore and interpret data more effectively. This allows for actionable insights that can be used to optimize future testing strategies, improve system performance, and enhance user experiences. Our testing services, backed by this comprehensive dashboard, provide businesses with the tools and insights needed to maintain high-quality, effective digital solutions.",
        },
  ]

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {arrob.map((v, i) => (
            <div key={i} className="col-sm-12 col-md-4 mb-3">
              <NavLink
                to={`/portfolio/testingservices/project`}
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

export default TestingServices;
