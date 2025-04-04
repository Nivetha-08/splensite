import Footer from "../../Components/Common/Footer";
import Banner from "../../Components/Portfolio/Banner";
import Links from "../../Components/Portfolio/Links";
import { Outlet } from "react-router";
import Nav from "../../Components/Common/Nav.jsx";

const URL = `https://fakestoreapi.com/products`;

const PortfolioPage = () => {
  // console.log("PortfolioPage render");

  return (
    <>
      <Nav />
      <div id="pf">
        <Banner />
        <Links />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
