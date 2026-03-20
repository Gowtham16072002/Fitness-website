import React from "react";
import "../Styles/Home.css"
import { useNavigate } from "react-router-dom";
import HomeMidsec from "./HomeMidsec";
import FooterAbove from "./FooterAbove";
import WhyChooseUs from "./WhyChooseUs";
import Program2 from "./Program2";
import TrainerSection from "./TrainerSection";
import Testimonials from "./Testimonials";
// import PricingPlans from "./PricingPlans";



function FitnessLanding() {

    const navigate = useNavigate();
    return (
        <div className="app">

            <section className="hero">
                <div className="hero-content">

                    <h1>Complete Fitness for Body, Mind & Energy</h1>

                    <p>
                        Gym training, yoga, Zumba dance programs designed to help
                        you achieve strength, flexibility and confidence.
                    </p>

                    <button className="hero-btn">
                        Start 7-Day Free Trial
                    </button>

                    <button className="hero-btn">
                        View Programs
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

            <WhyChooseUs />
            <Program2 />
            <TrainerSection />
            <Testimonials />
            <HomeMidsec />
            {/* <PricingPlans /> */}
            <FooterAbove />
        </div>
    )
}

export default FitnessLanding