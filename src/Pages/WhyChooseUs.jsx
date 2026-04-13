// import React from "react";
// import "../Styles/WhyChooseUs.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// function WhyChooseUs() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <section className="why">
//       <h1>Why Choose Us</h1>

//       <div className="why-container">
//         <div className="why-card" data-aos="zoom-in" data-aos-delay="200">
//           <i className="fas fa-dumbbell"></i>
//           <h3>Certified Trainers</h3>
//           <p>Professional trainers to guide your fitness journey.</p>
//         </div>

//         <div className="why-card" data-aos="zoom-in" data-aos-delay="200">
//           <i className="fas fa-apple-alt"></i>
//           <h3>Nutrition Guidance</h3>
//           <p>Personalized diet plans for better results.</p>
//         </div>

//         <div className="why-card" data-aos="zoom-in" data-aos-delay="200">
//           <i className="fas fa-chart-line"></i>
//           <h3>Progress Tracking</h3>
//           <p>Track your workouts and transformation.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;


import React, { useEffect } from "react";
import "../Styles/WhyChooseUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyChooseUs({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!data) return null;

  return (
    <section className="why">
      <h1>{data.heading}</h1>

      <div className="why-container">
        {data.cards?.map((card, index) => (
          <div
            className="why-card"
            data-aos="zoom-in"
            data-aos-delay="200"
            key={index}
          >
            <i className={`fas ${card.icon}`}></i>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
