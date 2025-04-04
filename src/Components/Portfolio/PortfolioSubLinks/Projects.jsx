// import { useLocation } from "react-router";
// import Footer from "../../Common/Footer";
// import Nav from "../../Common/Nav";
// import "./Project.css";

// const Projects = () => {
//   // console.log("PortfolioSublinks Projects render");

//   const location = useLocation();
//   const { product } = location.state || {};

//   if (!product) {
//     return <p>No product data available</p>;
//   }

//   return (
//     <>
//       <Nav />
//       <div className="text-center p-5">
//         <h1>{product.title}</h1>
//         <h3 className="pt-3 text-primary">{product.price}</h3>
//       </div>
//       <div className="card mx-5">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="responsive-img img-fluid  p-md-5"
//         />
//       </div>
//       <div className="text-center p-md-5 p-sm-3">{product.description}</div>

//       <Footer />
//     </>
//   );
// };

// export default Projects;

import { useLocation } from "react-router";
import Footer from "../../Common/Footer";
import Nav from "../../Common/Nav";
import "./Project.css";
import React from "react";

const Projects = () => {
  // console.log("PortfolioSublinks Projects render");

  const location = useLocation();
  const { product } = location.state || {};

  console.log(product);
  console.log(product.tool);

  if (!product) {
    return <p>No product data available</p>;
  }

  if (product.title === "UI/UX Design and Development") {
    return (
      <>
        <Nav />
        <div>
          <div className="container pt-5">
            <div className="row ">
              <div className="col-sm-12 col-lg-6 text-center text-lg-start">
                <div className="text-primary h1">{product.title}</div>
                <div className="h5 py-3">{product.subheading}</div>
                <div
                  className="pe-lg-5"
                  style={{
                    textAlign: "justify",
                    lineHeight: "30px",
                    fontSize: "18px",
                  }}
                >
                  {product.content1}
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <img
                  className="img-fluid p-5 p-lg-0"
                  src={product.img2}
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="text-center p-5">
            <div className="h1">{product.title2}</div>
            <div className="h6 text-primary">{product.subheading2}</div>
          </div>

          <div>
            <img src={product.img3} alt="img" className="img-fluid w-100" />
          </div>

          <div className="text-center p-5">
            <div className="h1">{product.title3}</div>
            <div className="h6 text-primary m-auto w-75 w-md-50">
              {product.subheading3}
            </div>
          </div>

          <div>
            <div className="h5 text-center pb-4">{product.tools1}</div>
          </div>

          <div>
            <div className="row pb-5">
              {product?.tool?.map((val, i) => (
                <div className="col-6 col-md-4 col-xl-2 text-center pb-3" key={i} >
                  <div className="d-inline-block p-3" style={{background: 'rgba(13, 131, 253, 0.13)', minWidth:"167px"}}>
                    <img src={val.img} alt="tool" />
                    <p className="text-primary h6 pt-2">{val.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="h5 text-center pb-4">{product.tools2}</div>
          </div>

          <div>
            <div className="row pb-5">
              {product?.tools?.map((val, i) => (
                <div className="col-6 col-md-4 col-xl-2 text-center pb-3" key={i} >
                  <div className="d-inline-block p-3" style={{background: 'rgba(13, 131, 253, 0.13)', minWidth:"167px"}}>
                    <img src={val.img} alt="tools" />
                    <p className="text-primary h6 pt-2">{val.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center p-5">
            <div className="h1">{product.title4}</div>
            <div
              className="h6 text-primary m-auto w-75 w-md-50"
              style={{ width: "50dvw" }}
            >
              {product.subheading4}
            </div>
          </div>

          <div>
            <img className="img-fluid w-100" src={product.img4} alt="" />
          </div>

          <div>
            <img
              className="img-fluid py-2 py-md-5 w-md-75 d-block mx-auto"
              src={product.img5}
              alt=""
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />

      <div>
        <div id="Projects" className="text-center p-5">
          <h1>{product.title}</h1>
          <h6 className="pt-3 text-primary">{product.subheading}</h6>
        </div>
        <div className="container">
          <div className="mx-0 mx-md-5 mb-5 ">
            <img
              src={product.img2}
              alt={product.title}
              className="responsive-img img-fluid d-block m-auto "
            />
          </div>
          <div className="mx-0 mx-md-5 ">
            <img
              src={product.img3}
              alt={product.title}
              className="responsive-img img-fluid d-block m-auto "
            />
          </div>
          <div className="content p-sm-3 p-md-5">
            <div
              className="px-sm-3 px-md-5"
              style={{ textAlign: "justify", padding: "15px" }}
            >
              {product.content1}
            </div>
            <div
              className="px-sm-3 px-md-5"
              style={{ textAlign: "justify", padding: "15px" }}
            >
              {product.content2}
            </div>
            <div
              className="px-sm-3 px-md-5"
              style={{ textAlign: "justify", padding: "15px" }}
            >
              {product.content3}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;
