import React, { useState } from "react";
import mobile from "../../../public/assets/mobile.svg";
import web from "../../../public/assets/web.png";
import micro from "../../../public/assets/micro.png";
import uiux from "../../../public/assets/uiux.png";
import digital from "../../../public/assets/digital.png";
import testing from "../../../public/assets/testing.png";
import "./Specialisation.css";

const data = [
  {
    id: 1,
    title: "Mobile Application",
    description:
      "With capabilities across all device platforms our mobile app development services can profit to build both customer and enterprise apps. We know how people are interacting with mobile apps and we design and develop in top notch based on the business need seamlessly.",
    image: mobile,
  },
  {
    id: 2,
    title: "Web Application",
    description:
      "Evolving business challenges requite technology solutions that are adaptive and scalable as your businessgrows. At DJPS, we specialize in delivering custom web application development solutions that can automate your businessprocesses and provide a superior ROI to your technology statements.",
    image: web,
  },
  {
    id: 3,
    title: "Micro Application",
    description:
      "We are helping enterprises with microservices development to modernize their enterprise IT Systems. We build and manage microservices effectively by integrating APIs to make application databases and legacy apps more flexible and agile",
    image: micro,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "With capabilities across all device platforms our mobile app development services can profit to build both customer and enterprise apps. We know how people are interacting with mobile apps and we design and develop in top notch based on the business need seamlessly.",
    image: uiux,
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "We offer  suite of services promoting your business online to target, stratagize, execute, measure and optimize across various digital channels. Our focus is on delivering seceptional digital experience to your audience thereby offering maximum Return on Investment for your marketing budget.",
    image: digital,
  },
  {
    id: 6,
    title: "Testing Services",
    description:
      "A Small glitch in performance can spell doomsday for the entire development process. Our holistic approach in software testing by implementing the best possibe testing methodologies & applications ensures us to deliver quality and decreased cost.",
    image: testing,
  },
];

const Specialisation = () => {

  const [selected, setSelected] = useState(data[0]);

  return (
    <div>
      <div id="Specialisation" className="py-5">
        <h1 className="text-center mb-5">Our Specialization</h1>
        <div className="row justify-content-center mb-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="col-12 col-md-6 col-lg-2 mb-2 d-flex justify-content-center"
            >
              <button
                className={`btn btn-outline-dark text-muted w-100 ${
                  selected.id === item.id ? "active" : ""
                }`}
                onClick={() => setSelected(item)}
                style={{ padding: "10px 20px", borderRadius: "20px" }}
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <img
            src={selected.image}
            alt={selected.title}
            className="img-fluid rounded"
          />
          <h6 className="mt-4">{selected.title}</h6>
          <p className="description p-0 mb-5">{selected.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Specialisation;
