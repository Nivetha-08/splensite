import { Route, Routes } from "react-router";
import "./App.css";
import AboutPage from "./Pages/Public/AboutPage";
import HomePage from "./Pages/Public/HomePage";
import PortfolioPage from "./Pages/Public/PortfolioPage";
import ContactPage from "./Pages/Public/ContactPage";
import MobileApplication from "./Components/Portfolio/PortfolioSubLinks/MobileApplication";
import WebApplication from "./Components/Portfolio/PortfolioSubLinks/WebApplication";
import MicroApplication from "./Components/Portfolio/PortfolioSubLinks/MicroApplication";
import UIUXDesign from "./Components/Portfolio/PortfolioSubLinks/UIUXDesign";
import DigitalMarketing from "./Components/Portfolio/PortfolioSubLinks/DigitalMarketing";
import TestingServices from "./Components/Portfolio/PortfolioSubLinks/TestingServices";
import Index from "./Components/Portfolio/PortfolioSubLinks/Index";
import Projects from "./Components/Portfolio/PortfolioSubLinks/Projects";
import InternshipsPage from "./Pages/Public/InternshipsPage";
import JobsPage from "./Pages/Public/JobsPage";
import ScrollToTop from "./Pages/Public/ScrollToTop";

function App() {
  // console.log("App rendered");

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}>
          <Route index element={<Index />}></Route>
          <Route path="mobileapplication"element={<MobileApplication />}></Route>
          <Route path="webapplication" element={<WebApplication />}></Route>
          <Route path="microapplication" element={<MicroApplication />}></Route>
          <Route path="uiuxdesign" element={<UIUXDesign />}></Route>
          <Route path="digitalmarketing" element={<DigitalMarketing />}></Route>
          <Route path="testingservices" element={<TestingServices />}></Route>
        </Route>
        <Route path="/portfolio/project" element={<Projects />}></Route>
        <Route path="/portfolio/mobileapplication/project" element={<Projects />}></Route>
        <Route path="/portfolio/webapplication/project" element={<Projects />}></Route>
        <Route path="/portfolio/microapplication/project" element={<Projects />}></Route>
        <Route path="/portfolio/uiuxdesign/project" element={<Projects />}></Route>
        <Route path="/portfolio/digitalmarketing/project" element={<Projects />}></Route>
        <Route path="/portfolio/testingservices/project" element={<Projects />}></Route>
        <Route path="/jobs" element={<JobsPage />}></Route>
        <Route path="/internships" element={<InternshipsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>

    </>
  );
}

export default App;
