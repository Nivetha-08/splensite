// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// const URL = `https://fakestoreapi.com/products`;

// const WebApplication = () => {
//   // console.log("PortfolioSublinks WebApplication render");

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
//                 to={`/portfolio/webapplication/project`}
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

// export default WebApplication;


import { NavLink } from "react-router-dom";
import web1 from "../../../../public/assets/web1.png";
import web2 from "../../../../public/assets/web2.png";
import web3 from "../../../../public/assets/web3.png";

const WebApplication = () => {
  // console.log("PortfolioSublinks WebApplication render");

  const arrob = [
    {
          id: 1,
          img1: web1,
          img2: web2,
          img3: web3,
          title: "Web Application",
          subheading: "SEO Website Optimization Showcasing Data Driven Strategies",
          content1:
            "Our SEO-focused website is meticulously crafted to empower businesses in enhancing their online presence through a comprehensive suite of analytical tools and insights. The central dashboard offers clear visibility into key performance metrics, including estimated traffic, keyword rankings, and paid keyword effectiveness, enabling data-driven decisions to optimize SEO strategies. With robust country targeting capabilities, businesses can tailor their SEO efforts to specific markets, ensuring relevance and maximizing reach. The platform's analysis of keyword position distribution provides valuable insights into ranking performance, facilitating targeted improvements.",
          content2:
            "By leveraging these features, businesses can effectively monetize high-traffic volumes, boost brand awareness, and build trust with customers, ultimately enhancing PPC success and establishing a strong, credible online presence. Additionally, the platform integrates seamlessly with tools like Google Analytics, offering in-depth visitor tracking, audience insights, and competitive analysis, further refining your SEO approach.",
        }
  ]

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {arrob.map((v, i) => (
            <div key={i} className="col-sm-12 col-md-4 mb-3">
              <NavLink
                to={`/portfolio/webapplication/project`}
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

export default WebApplication;
