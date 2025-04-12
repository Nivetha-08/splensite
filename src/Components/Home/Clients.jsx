import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./Clients.css";

const Clients = () => {
  // console.log("Home clients render");

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        // breakpoint: 1024,
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const clientReviews = [
    {
      id: 1,
      name: "John Doe",
      img: "https://img.freepik.com/premium-photo/professional-indian-female-headshots-business-corporate-women_203363-204.jpg?w=2000",
      feedback: "Amazing service! Highly recommended.",
    },
    {
      id: 2,
      name: "Jane Smith",
      img: "https://img.freepik.com/free-photo/smiling-businesswoman-wearing-glasses_23-2149202865.jpg",
      feedback: "Great experience working with this company.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      img: "https://img.freepik.com/free-photo/smiling-businessman-suit_23-2149211115.jpg",
      feedback: "A wonderful experience from start to finish.",
    },
    {
      id: 4,
      name: "Sophia Wilson",
      img: "https://img.freepik.com/free-photo/beautiful-young-woman-smiling-posing-camera_23-2149123608.jpg",
      feedback: "Their customer service is outstanding!",
    },
    {
      id: 5,
      name: "David Brown",
      img: "https://img.freepik.com/free-photo/businessman-posing-outdoors_23-2148748632.jpg",
      feedback: "Very impressed with the quality of work!",
    },
  ];

  return (
    <section id="Clients-Section">
      <div className="clients-container">
        <h1 className="text-center heading">What Our Clients Say</h1>
        <p className="content py-3 px-2">
          Our clients love sharing their experiences with us. their feedback
          inspiresus to keep delivering excellence
        </p>

        <div className="slider-wrapper">
          {/* Slider Component */}
          <Slider ref={sliderRef} {...settings}>
            {clientReviews.map((client) => (
              <div className="card" key={client.id}>
                <div className="card-img">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="img-fluid d-block w-100 m-auto"
                  />
                  <h6>{client.name}</h6>
                </div>
                <p className="feedback">{client.feedback}</p>
                <div className="star-rating">★ ★ ★ ★ ☆</div>
              </div>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <div className="btn-group">
            <button
              aria-label="Previous Slide"
              style={{
                border: "2px solid #007bff",
                color: "#007bff",
                background: "white",
                borderRadius: "50%",
                fontSize: "15px",
                padding: "7px 13px 10px 11px",
              }}
              className="nav-btn"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FaChevronLeft />
            </button>
            <button
              aria-label="Next Slide"
              style={{
                border: "2px solid #007bff",
                color: "#007bff",
                background: "white",
                borderRadius: "50%",
                fontSize: "15px",
                padding: "7px 11px 10px 13px",
                marginLeft: "20px",
              }}
              className="nav-btn"
              onClick={() => sliderRef.current.slickNext()}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
