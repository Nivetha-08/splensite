import Footer from "../../Components/Common/Footer";
import Banner from "../../Components/Portfolio/Banner";
import Links from "../../Components/Portfolio/Links";
import { Outlet } from "react-router";
import Nav from "../../Components/Common/Nav";

const URL = `https://fakestoreapi.com/products`;

const PortfolioPage = () => {
  // console.log("PortfolioPage render");

  return (
    <>
      <Nav />
      <Banner />
      <Links />
      <Outlet />
      <Footer />
    </>
  );
};

export default PortfolioPage;
