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

const Projects = () => {
  // console.log("PortfolioSublinks Projects render");

  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <p>No product data available</p>;
  }

  return (
    <>
      <Nav />
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
      <div className="mx-0 mx-md-5 "   >
        <img
          src={product.img3}
          alt={product.title}
          className="responsive-img img-fluid d-block m-auto "
        />
      </div>
      <div className="content p-sm-3 p-md-5" >
        <div className="px-sm-3 px-md-5" style={{textAlign:"justify", padding:"15px"}}>{product.content1}</div>
        <div className="px-sm-3 px-md-5" style={{textAlign:"justify", padding:"15px"}}>{product.content2}</div>
        <div className="px-sm-3 px-md-5" style={{textAlign:"justify", padding:"15px"}}>{product.content3}</div>
      </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;
