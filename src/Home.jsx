import React from "react";
import "./Styles/Home.css"
import NavBar from "./NavBar";
import { Link, useNavigate } from "react-router-dom";
import HomeMidsec from "./HomeMidsec";
import FooterAbove from "./Footerabove";
import Footer from "./Footer";
import ZumbaDetails from "./ZumbaDetails";
import Payment from "./Payment";
import Membership from "./Membership";
import WhyChooseUs from "./WhyChooseUs";



function FitnessLanding() {

    const navigate = useNavigate();
    return (
        <div className="app">

            <NavBar />

            {/* <section className="hero">
              <div className="overlay"></div>
              <div className="hero-content">
                  <h2>Transform Your Body, Mind & Lifestyle</h2>
                  <p>
                      Personalized fitness, wellness, and coaching programs designed to
                      help you feel stronger, healthier, and more confident—inside and
                      out
                  </p>
                  <div className="hero-buttons">
                      <button onClick={()=>{navigate("/contact")}} className="btn primary"><b>Book your Free Consultation</b></button>
                      <button onClick={()=>{navigate("/programs")}} className="btn secondary"><b>View our Programs</b></button>
                  </div>
              </div>
          </section> */}
            <section className="hero">
                <div className="hero-content">

                    <h1>Transform Your Body. Transform Your Life.</h1>

                    <p>
                        Science-backed training programs tailored to your fitness goals.
                    </p>

                    <button className="hero-btn">
                        Start 7-Day Free Trial
                    </button>

                </div>
            </section>

            <section className="stats">

                <div className="stat">
                    <h2>⭐ 4.9</h2>
                    <p>Google Rating</p>
                </div>

                <div className="stat">
                    <h2>500+</h2>
                    <p>Active Members</p>
                </div>

                <div className="stat">
                    <h2>10+</h2>
                    <p>Certified Trainers</p>
                </div>

            </section>

            <WhyChooseUs/>
            <HomeMidsec />
            <FooterAbove />
            <Footer />
            {/* <ZumbaDetails/> */}
            {/* <Payment/>
          <Membership/> */}
        </div>
    )
}

export default FitnessLanding