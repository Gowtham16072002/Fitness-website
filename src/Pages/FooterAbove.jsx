import React from "react";
import "../Styles/FooterAbove.css";
import { useNavigate } from "react-router-dom";

function FooterAbove() {

    const navigate = useNavigate();
    return (
        <section className="cta">

            <i className="fa-solid fa-heart-pulse icon icon1"></i>
            <i className="fa-solid fa-dumbbell icon icon2"></i>
            <i className="fa-solid fa-bullseye icon icon3"></i>
            <i className="fa-solid fa-person-running icon icon4"></i>
            <i className="fa-solid fa-chart-line icon icon5"></i>
            <i className="fa-solid fa-crosshairs icon icon6"></i>

            <div className="cta-content">
                <h1>
                    Start Your Fitness Journey Today
                </h1>
                <h4>
                    Join 500+ Members Transforming Their Lives
                </h4>

                <p>
                    Take the first step towards a healthier, stronger you.
                    <br />
                    Book Your Free Consultation
                </p>

                <button className="cta-btn">
                    Start 7-Day Free Trial
                </button>

                <button onClick={() => { navigate("/contact") }} className="cta-btn">
                    <b>Book Your Free Consultation</b>
                </button>

            </div>

        </section>
    );
};

export default FooterAbove;
