import React from 'react'
import '../Styles/GeneralSports.css'
import BeginnerYogaBackground from '../assets/BeginnerYogaBackground.jpeg'
import ZumbaClassic from '../assets/ZumbaFitness.png'
import ZumbaGold from '../assets/ZumbaGold.png'
import ZumbaChild from '../assets/ZumbaChild.png'
import ZumbaSection from '../assets/ZumbaSection.png'
import { useNavigate } from 'react-router-dom'

function GeneralSports() {

    const navigate = useNavigate();
    return (
        <>
            <div className='GeneralSports'>
                <div onClick={()=>{navigate("/teamSports")}} className='TeamSports'>
                    <div className='picture'>
                        <img src={ZumbaClassic} alt="" />
                    </div>
                    <div className='title'>TEAM SPORTS</div>
                </div>
                <div onClick={()=>{navigate("/individualSports")}} className='IndividualSports'>
                    <div className='picture'>
                        <img src={ZumbaGold} alt="" />
                    </div>
                    <div className='title'>INDIVIDUAL SPORTS</div>
                </div>
                <div onClick={()=>{navigate("/adventureSports")}} className='AdventureSports'>
                    <div className='picture'>
                        <img src={ZumbaChild} alt="" />
                    </div>
                    <div className='title'>ADVENTURE SPORTS</div>
                </div>
                <div onClick={()=>{navigate("/pricingplan/GeneralSportss")}} className='Membership'>
                    <div className='picture'>
                        <img src={ZumbaSection} alt="" />
                    </div>
                    <div className='title'>MEMBERSHIP</div>
                </div>
            </div>
        </>
    )
}

export default GeneralSports