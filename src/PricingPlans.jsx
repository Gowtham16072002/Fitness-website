import React from 'react'
import './Styles/PricingPlans.css'

function PricingPlans() {
    return (
        <div>
            <div className="pricing-section">

                <h2 className="pricing-title">Pricing Plans</h2>

                <div className="pricing-container">

                    <div className="pricing-card">
                        <h3>Basic</h3>
                        <h2>₹1999</h2>
                        <ul>
                            <li>Gym Access</li>
                            <li>Group Classes</li>
                        </ul>
                        <button className="pricing-btn">Choose Plan</button>
                    </div>

                    <div className="pricing-card">
                        <h3>Pro</h3>
                        <h2>₹3999</h2>
                        <ul>
                            <li>Personal Training</li>
                            <li>Diet Plan</li>
                            <li>Progress Tracking</li>
                        </ul>
                        <button className="pricing-btn">Choose Plan</button>
                    </div>

                    <div className="pricing-card">
                        <h3>Elite</h3>
                        <h2>₹6999</h2>
                        <ul>
                            <li>Full Transformation Program</li>
                            <li>Personal Trainer</li>
                            <li>Customized Diet Plan</li>
                            <li>Weekly Progress Check</li>
                        </ul>
                        <button className="pricing-btn">Choose Plan</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default PricingPlans
