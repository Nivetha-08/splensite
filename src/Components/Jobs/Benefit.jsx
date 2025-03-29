import React from "react";
import culture from "../../../public/assets/culture.svg";
import development from "../../../public/assets/development.svg";

const Benefit = () => {
  // console.log("Jobs Benefit render");

  const arr = [
    {
      id: "1",
      image: culture,
      title: "Culture",
      description:
        "At Splendenslab, we're bringing meaning change to clients business by enabling our people to create tools and processes that respond to the rapid evolution of the market. We are a culture that celebrates autonomy, and inspires leadership at every level of our organization.",
    },
    {
      id: "2",
      image: development,
      title: "Career Development",
      description:
        "Our people are our greatest assets. That's why we believe in developing telentat all stages of their careers. With the incredible pace of change in brads, consumers and technology, we focus on giving talentthe tools to grow and evolve their kills beyond their immediate job functions.",
    },
  ];

  return (
    <>
      <section id="Benifits">
        <h1 className="text-center p-4">What Are The Benefits?</h1>
        <div className="container w-100 mx-auto py-5">
          <div className="row w-100 mx-auto gy-4 ps-0 ps-md-5 ps-lg-5">
            {arr.map((v) => (
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
    </>
  );
};

export default Benefit;
