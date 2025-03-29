import React from "react";
import realprojects from "../../../public/assets/realprojects.svg";
import mentorship from "../../../public/assets/mentorship.svg";
import solid from "../../../public/assets/solid.svg";
import stimulating from "../../../public/assets/stimulating.svg";

const Cards = () => {
  // console.log("Internships Cards render");

  const array = [
    {
      id: "1",
      image: realprojects,
      title: "Real Life Projects",
      description:
        "Students who pass our internship selection and prove their talent will get the chance to work closely together with one of our teams, having the opportunity to experience real life project workflow.",
    },
    {
      id: "2",
      image: mentorship,
      title: "Mentorship",
      description:
        "We offer an individual approach to students in internship program, meaning that each of you will have a personal at your disposal to guide you through internship, which is crucial for gaining knowledge and new skills in an efficient way.",
    },
    {
      id: "3",
      image: solid,
      title: "Solid Career Opportunity",
      description:
        "Our internship program is designed to create real and valuable opportunities for undergraduate and graduate students, to learn and gain valuable experience which you can use throughout your career and the best of all is-you can start your career right here!",
    },
    {
      id: "4",
      image: stimulating,
      title: "Highly Stimulating and Fun Working Environment",
      description:
        "Splendenslab internship will give you the chance to learn from and work with great colleagues who happen to be amazing at offering you the support needed for the development of your potential. And they'll make sure you're having fun on the way.",
    },
  ];

  return (
    <section className="Cards">
      <div className="container w-100 mx-auto py-5">
        <div className="row w-100 mx-auto gy-4 ps-0 ps-md-5 ps-lg-5">
          {array.map((v) => (
            <div
              key={v.id}
              className="col-md-5 border ms-0 ms-md-3 ms-lg-5 p-3 rounded-3"
              style={{ backgroundColor: "#F4F9FF" }}
            >
              <img
                src={v.image}
                alt={v.title}
                style={{
                  height: "100px",
                  width: "130px",
                  background: "white",
                }}
                className="m-3 p-2"
              />
              <h5 className="text-primary p-2">{v.title}</h5>
              <p className="ps-2" style={{textAlign:"justify"}}>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
