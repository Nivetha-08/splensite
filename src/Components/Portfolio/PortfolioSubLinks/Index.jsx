// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// const URL = `https://fakestoreapi.com/products`;

// const Index = () => {
//   // console.log("PortfolioSublinks Index render");
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
//                 to={`/portfolio/project`}
//                 state={{ product: v, index: i }}
//                 className="text-decoration-none"
//                 preventScrollReset={false}
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

// export default Index;

import { NavLink } from "react-router-dom";
import mobile1 from "../../../../public/assets/mobile1.png";
import mobile2 from "../../../../public/assets/mobile2.png";
import mobile3 from "../../../../public/assets/mobile3.png";
import micro1 from "../../../../public/assets/micro1.png";
import micro2 from "../../../../public/assets/micro2.png";
import micro3 from "../../../../public/assets/micro3.png";
import web1 from "../../../../public/assets/web1.png";
import web2 from "../../../../public/assets/web2.png";
import web3 from "../../../../public/assets/web3.png";
import digital1 from "../../../../public/assets/digital1.png";
import digital2 from "../../../../public/assets/digital2.png";
import digital3 from "../../../../public/assets/digital3.png";
import testing1 from "../../../../public/assets/testing1.png";
import testing2 from "../../../../public/assets/testing2.png";
import testing3 from "../../../../public/assets/testing3.png";
import uiux1 from "../../../../public/assets/uiux1.png";
import uiux2 from "../../../../public/assets/uiux2.png";
import uiux3 from "../../../../public/assets/uiux3.png";
import uiux4 from "../../../../public/assets/uiux4.png";
import uiux5 from "../../../../public/assets/uiux5.png";
import figma from "../../../../public/assets/figma.png";
import photoshop from "../../../../public/assets/photoshop.png";
import xd from "../../../../public/assets/xd.png";
import illustrator from "../../../../public/assets/illustrator.png";
import indesign from "../../../../public/assets/indesign.png";
import sketch from "../../../../public/assets/sketch.png";
import html from "../../../../public/assets/html.png";
import css from "../../../../public/assets/css.png";
import js from "../../../../public/assets/js.png";
import angular from "../../../../public/assets/angular.png";
import react from "../../../../public/assets/react.png";
import github from "../../../../public/assets/github.png";

const Index = () => {
  const arrob = [
    {
      id: 1,
      img1: mobile1,
      img2: mobile2,
      img3: mobile3,
      title: "Mobile Application",
      subheading: "Build a User-Friendly Grocery E-Commerce APP",
      content1:
        "SgGrocer is a comprehensive mobile application designed to simplify your grocery shopping experience. With a focus on delivering high-quality, fresh produce, including vegetables and fruits, alongside a range of dairy products and freshly baked goods, SgGrocer ensures that you have access to the best groceries available, right at your fingertips. The app provides an easy, convenient way to shop for everyday essentials, offering a wide variety of items from trusted brands and local suppliers.",
      content2:
        "One of the key features of SgGrocer is its commitment to providing customers with value through regular deals and promotions. Additionally, the reorder function allows you to quickly purchase your most frequently bought items, making your shopping experience even more efficient and time-saving.",
      content3:
        "SgGrocer is designed to cater to the needs of busy individuals and families, offering a seamless shopping experience from start to finish. The app’s intuitive interface ensures that you can easily navigate through different categories, find your preferred products, and have them delivered directly to your door with just a few taps. Whether you're looking for fresh, locally sourced produce or your favorite bakery treats, SgGrocer delivers a hassle-free, reliable solution for all your grocery needs.",
    },
    {
      id: 2,
      img1: web1,
      img2: web2,
      img3: web3,
      title: "Web Application",
      subheading: "SEO Website Optimization Showcasing Data Driven Strategies",
      content1:
        "Our SEO-focused website is meticulously crafted to empower businesses in enhancing their online presence through a comprehensive suite of analytical tools and insights. The central dashboard offers clear visibility into key performance metrics, including estimated traffic, keyword rankings, and paid keyword effectiveness, enabling data-driven decisions to optimize SEO strategies. With robust country targeting capabilities, businesses can tailor their SEO efforts to specific markets, ensuring relevance and maximizing reach. The platform's analysis of keyword position distribution provides valuable insights into ranking performance, facilitating targeted improvements.",
      content2:
        "By leveraging these features, businesses can effectively monetize high-traffic volumes, boost brand awareness, and build trust with customers, ultimately enhancing PPC success and establishing a strong, credible online presence. Additionally, the platform integrates seamlessly with tools like Google Analytics, offering in-depth visitor tracking, audience insights, and competitive analysis, further refining your SEO approach.",
    },
    {
      id: 3,
      img1: micro1,
      img2: micro2,
      img3: micro3,
      title: "Micro Application",
      subheading:
        "Micro Application All In One Dashboard for Project Management and Scheduling",
      content1:
        "Our microapplication offers a comprehensive dashboard that seamlessly integrates project management, calendar scheduling, resource organization, and settings customization. The dashboard serves as a centralized hub for monitoring project progress, setting milestones, and ensuring timely task completion. The project module enables users to define objectives, allocate resources, and track deliverables efficiently. Integrated calendar functionality allows for precise scheduling of tasks and events, with options to customize work hours and define non-working days. The resource section facilitates effective management by organizing materials and assets, ensuring easy access and optimal utilization.",
      content2:
        "Additionally, the settings module empowers users to personalize the application interface, configure preferences, and manage security settings, ensuring a tailored and secure user experience. This unified approach streamlines workflow, enhances productivity, and adapts to the unique needs of each user.",
    },
    {
      id: 4,
      img1: uiux1,
      img2: uiux2,
      img3: uiux3,
      img4: uiux4,
      img5: uiux5,
      title: "UI/UX Design and Development",
      subheading:
        "Designing Meaningful Digital Products and Experience For You",
      content1:
        "In the ever-evolving digital landscape, user experience (UX) and user interface (UI) design have become paramount for businesses aiming to create exceptional digital products. In India, where technology is thriving, numerous companies offer UI/UX design services. Among them, Concept Infoway stands out as a leading UI/UX design company, combining creativity, expertise, and a deep understanding of user behavior to deliver captivating and intuitive experiences.",
      title2: "Leading Web & Mobile APP Design Company",
      subheading2: "With Our Expertise We Can Deliver",
      title3: "Tools and Technologies",
      subheading3:
        "We Leverage The Latest Design And Development Tools To Craft Stunning User Experiences With Exceptional Functionality",
      title4: "Our Design & Development Process",
      subheading4:
        "We work in smaller phases, gather feedback at each, and iterate on our ideas. This is our proven method for creating world-class products, that convert and win hearts.",
      tools1: "Design Tools",
      tools2: "Development Tools",
      tool: [
        {
          img: figma,
          title: "Figma",
        },
        {
          img: photoshop,
          title: "Adobe Photoshop",
        },
        {
          img: xd,
          title: "Adobe XD",
        },
        {
          img: illustrator,
          title: "Adobe Illustrator",
        },
        {
          img: indesign,
          title: "Adobe Indesgn",
        },
        {
          img: sketch,
          title: "Sketch",
        },
      ],
      tools: [
        {
          img: html,
          title: "HTML",
        },
        {
          img: css,
          title: "CSS",
        },
        {
          img: js,
          title: "JavaScript",
        },
        {
          img: angular,
          title: "Angular",
        },
        {
          img: react,
          title: "React",
        },
        {
          img: github,
          title: "GitHub",
        },
      ],
    },
    {
      id: 5,
      img1: digital1,
      img2: digital2,
      img3: digital3,
      title: "Digital Marketing",
      subheading:
        "Streamline, Analyze and Optimize Your Marketing Efforts In One Dashboard",
      content1:
        "The Digital Marketing Dashboard is an all-in-one tool designed to help businesses efficiently manage and optimize their marketing campaigns. With features such as real-time campaign tracking, advanced analytics, and user insights, the dashboard enables marketers to monitor performance across multiple channels, including social media, paid ads, and email campaigns. It allows businesses to track key metrics like conversions, cost-per-acquisition, and click-through rates while offering valuable insights into user behavior and engagement. The dashboard also includes seamless payment method integration for managing campaign budgets, along with payment history tracking to keep track of all transactions related to marketing spend.",
      content2:
        "In addition to campaign management and financial tracking, the dashboard also features ads placement management for cross-platform ad optimization, ensuring ads are placed effectively across various channels such as Google Ads and Facebook. Marketers can easily export data and generate customizable reports, making it simple to share performance insights with stakeholders. With its user-friendly interface and powerful features, the Digital Marketing Dashboard empowers businesses to make data-driven decisions, optimize marketing strategies, and ultimately drive better results and ROI.",
    },
    {
      id: 6,
      img1: testing1,
      img2: testing2,
      img3: testing3,
      title: "Testing Service",
      subheading:
        "Streamline, Analyze and Optimize Your Marketing Efforts In One Dashboard",
      content1:
        "We offer a robust suite of testing services designed to guarantee the highest quality and performance of your digital solutions. Our services are powered by a state-of-the-art dashboard, providing a centralized view of all testing activities. This dashboard allows clients to easily access an organized list of ongoing and completed testing campaigns, offering full visibility and control over the entire testing process. Each campaign list includes detailed insights into specific objectives and outcomes, helping teams monitor performance in real time. The content section within the dashboard displays all relevant materials and test cases used, making it easier to track and analyze test results.",
      content2:
        "Additionally, the brand feature allows businesses to monitor how their brands perform across various campaigns, ensuring their digital solutions align with branding objectives and resonate with the target audience. To further empower our clients, the data lab functionality offers deep analytics, enabling users to explore and interpret data more effectively. This allows for actionable insights that can be used to optimize future testing strategies, improve system performance, and enhance user experiences. Our testing services, backed by this comprehensive dashboard, provide businesses with the tools and insights needed to maintain high-quality, effective digital solutions.",
    },
  ];

  console.log(arrob);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {arrob.map((v, i) => (
            <div key={i} className="col-sm-12 col-md-4 mb-3">
              <NavLink
                to={`/portfolio/project`}
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
                <p className="text-center text-black p-2">{v.title}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
