import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./One.css"; // Import CSS
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const One = () => {
  console.log("Clients render");

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const clientReviews = [
    {
      id: 1,
      name: "John Doe",
      img: "https://img.freepik.com/premium-photo/professional-indian-female-headshots-business-corporate-women_203363-204.jpg?w=2000",
      feedback:
        "Amazing service! Highly recommended. The team was very professional and exceeded my expectations.",
    },
    {
      id: 2,
      name: "Jane Smith",
      img: "https://img.freepik.com/free-photo/smiling-businesswoman-wearing-glasses_23-2149202865.jpg",
      feedback:
        "Great experience working with this company. Will definitely return for future projects.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      img: "https://img.freepik.com/free-photo/smiling-businessman-suit_23-2149211115.jpg",
      feedback:
        "A wonderful experience from start to finish. Their attention to detail is remarkable.",
    },
    {
      id: 4,
      name: "Sophia Wilson",
      img: "https://img.freepik.com/free-photo/beautiful-young-woman-smiling-posing-camera_23-2149123608.jpg",
      feedback:
        "Their customer service is outstanding, and I felt valued as a client.",
    },
    {
      id: 5,
      name: "David Brown",
      img: "https://img.freepik.com/free-photo/businessman-posing-outdoors_23-2148748632.jpg",
      feedback:
        "They delivered exactly what I wanted. I'm very impressed with the quality of work.",
    },
  ];

  return (
    <div className="clients-container">
      <h1 className="text-center">What our Clients Say</h1>
      <p className="subtitle">
        Our clients love sharing their experiences with us. Their feedback
        inspires us to keep delivering excellence.
      </p>

      <div className="slider-wrapper">
        {/* Slider Component */}
        <Slider ref={sliderRef} {...settings}>
          {clientReviews.map((client) => (
            <div className="card" key={client.id}>
              <div className="card-img">
                <img src={client.img} alt={client.name} />
                <h6>{client.name}</h6>
              </div>
              <p>{client.feedback}</p>
              <div className="star-rating">★ ★ ★ ★ ☆</div>
            </div>
          ))}
        </Slider>

        {/* Navigation Buttons (Centered Below) */}
        <div className="btn-group">
          <button className="nav-btn" onClick={() => sliderRef.current.slickPrev()}>
            {/* ◀ Prev */}
            <FaChevronLeft />
          </button>
          <button className="nav-btn" onClick={() => sliderRef.current.slickNext()}>
            {/* Next ▶ */}
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default One;
