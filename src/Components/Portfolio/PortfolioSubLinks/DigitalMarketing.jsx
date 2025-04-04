// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// const URL = `https://fakestoreapi.com/products`;

// const DigitalMarketing = () => {
//   // console.log("PortfolioSublinks DigitalMarketing render");

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
//                 to={`/portfolio/digitalmarketing/project`}
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

// export default DigitalMarketing;


import { NavLink } from "react-router-dom";
import digital1 from "../../../../public/assets/digital1.png";
import digital2 from "../../../../public/assets/digital2.png";
import digital3 from "../../../../public/assets/digital3.png";

const DigitalMarketing = () => {
  // console.log("PortfolioSublinks DigitalMarketing render");

  const arrob = [
    {
          id: 1,
          img1: digital1,
          img2: digital2,
          img3: digital3,
          title: "Digital Marketing",
          subheading: "Streamline, Analyze and Optimize Your Marketing Efforts In One Dashboard",
          content1:
            "The Digital Marketing Dashboard is an all-in-one tool designed to help businesses efficiently manage and optimize their marketing campaigns. With features such as real-time campaign tracking, advanced analytics, and user insights, the dashboard enables marketers to monitor performance across multiple channels, including social media, paid ads, and email campaigns. It allows businesses to track key metrics like conversions, cost-per-acquisition, and click-through rates while offering valuable insights into user behavior and engagement. The dashboard also includes seamless payment method integration for managing campaign budgets, along with payment history tracking to keep track of all transactions related to marketing spend.",
          content2:
            "In addition to campaign management and financial tracking, the dashboard also features ads placement management for cross-platform ad optimization, ensuring ads are placed effectively across various channels such as Google Ads and Facebook. Marketers can easily export data and generate customizable reports, making it simple to share performance insights with stakeholders. With its user-friendly interface and powerful features, the Digital Marketing Dashboard empowers businesses to make data-driven decisions, optimize marketing strategies, and ultimately drive better results and ROI.",
        }
  ]

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {arrob.map((v, i) => (
            <div key={i} className="col-sm-12 col-md-4 mb-3">
              <NavLink
                to={`/portfolio/digitalmarketing/project`}
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

export default DigitalMarketing;
