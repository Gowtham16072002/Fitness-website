import React, { useEffect, useState } from 'react'
import '../Styles/ZumbaGold.css'
import ZumbaToning from '../assets/ZumbaToning.jpg'
import ZumbaImage from '../assets/ZumbaImage.jpeg'
import ZumbaMain from '../assets/ZumbaMain.jpg'
import ZumbaKids from '../assets/ZumbaKids.jpg'
import cardiodetail1 from '../assets/cardiodetail1.jpeg'
import cardiodetail2 from '../assets/cardiodetail2.jpeg'
import cardiodetail3 from '../assets/cardiodetail3.jpeg'
import cardiodetail4 from '../assets/cardiodetail4.jpeg'

function ZumbaGold() {

    const images = [ZumbaToning, ZumbaImage, ZumbaMain, ZumbaKids];
    const [showImage, setShowImage] = useState(0);
    const [fade, setFade] = useState(true);
    useEffect(() => {
        const intervel = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                if (showImage === images.length - 1) {
                    setShowImage(0);
                } else {
                    setShowImage(showImage + 1);
                }
            }, 3000);
            setFade(true)
        }, 600)

        return () => clearInterval(intervel);
    }, [showImage]);

    return (
        <div className='ZumbaGold'>
            {/* TOP ROW CONTAINER */}
            <div className='TopContainer'>
                {/* LEFT */}
                <div className='ZumbaGoldContent'>
                    <h1>ZUMBA GOLD</h1>
                    <p><span><b>Zumba Gold offers a gentle yet effective approach to fitness, specifically designed for older adults and beginners who seek a safe and enjoyable workout experience. By combining low-impact movements with easy-to-follow choreography, it allows participants to stay active without placing excessive strain on joints or muscles, making it ideal for long-term health and consistency.</b></span></p>
                    <br /><section className='Content1'>
                        {/* <h2>Treadmill</h2> */}
                        <p>Unlike traditional high-intensity workouts, Zumba Gold focuses on controlled, rhythmic movements that improve balance, coordination, and overall mobility. The slower pace ensures that individuals can comfortably follow along while still benefiting from cardiovascular activity, helping to maintain heart health and increase stamina over time.</p>
                    </section>

                    <section className='Content2'>
                        {/* <h2>Swimming</h2> */}
                        <p>Additionally, Zumba Gold promotes both physical and mental well-being by encouraging social interaction and reducing stress. The uplifting music and supportive environment create a positive atmosphere, transforming exercise into an enjoyable routine rather than a demanding task. This makes it especially beneficial for those who are new to fitness or returning after a break.</p>
                    </section>

                    <section className='Content3'>
                        {/* <h2>HIIT</h2> */}
                        <p>Ultimately, Zumba Gold serves as a sustainable fitness solution that prioritizes safety, comfort, and consistency. By providing a balanced combination of movement, music, and community, it empowers individuals to maintain an active lifestyle while enhancing their overall quality of life.
                        </p>
                    </section>

                    {/* <section className='Content4'>
                        <h2>Cycling</h2> 
                        <p>If you prefer a lower-impact alternative, cycling builds significant lower-body strength and endurance while being much gentler on the knees.By rotating through these activities, you can challenge different muscle groups and keep your fitness journey engaging and balanced.</p>
                    </section> */}
                </div>

                {/* RIGHT */}
                <div className="ZumbaGoldImage">
                    <div className='ZumbaGoldImages'>
                        {/* <img src={images[showImage]} alt="cardio" /> */}
                        <div
                            className={`image-container ${fade ? "fade-in" : "fade-out"}`}
                            style={{
                                backgroundImage: `linear-gradient(45deg, rgba(0,0,0,1), rgba(0,0,0,0.2)),url(${images[showImage]})`,
                            }}
                        ></div>
                    </div>
                </div>

            </div>
            <div>

                {/* BOTTOM SEPARATE SUBSCRIBE ROW */}
                <div className='subscribe'>

                    <div className='subscribefirst'>
                        <div className='subcribetred'>
                            <div><h2>Treadmill</h2></div>
                            <div>
                                <ul>
                                    <li>Bone Density:High-impact movement strengthens your skeleton and prevents bone loss.</li>
                                    <li>Precision Control:You can precisely manage speed, incline, and pace for targeted training.</li>
                                    <li>Mental Health:Releases endorphins that reduce stress and build mental resilience through consistent effort.</li>
                                    <li>Functional Movement:Mimics natural human movement, improving your stamina for walking and running in daily life.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='subcribeswim'>
                            <div><h2>Swimming</h2></div>
                            <div>
                                <ul>
                                    <li>Zero Impact: Protects joints and aids injury recovery by supporting 90% of your body weight.</li>
                                    <li>Full-Body Toning: Engages every major muscle group simultaneously, providing both cardio and resistance training.</li>
                                    <li>Lung Capacity: Enhances respiratory strength and oxygen efficiency through rhythmic, controlled breathing techniques.</li>
                                    <li>Mental Calm: The water's weightlessness and repetitive strokes provide a meditative, stress-reducing hydrotherapy experience.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='subscribesecond'>
                        <div className='subcribejog'>
                            <div><h2>HIIT</h2></div>
                            <div>
                                <ul>
                                    <li>Maximum Efficiency: Delivers massive cardiovascular gains in just 15 to 30 minutes of intense work.</li>
                                    <li>Afterburn Effect: Keeps your metabolism elevated and burning calories for hours after the workout ends.</li>
                                    <li>Metabolic Health: Significantly improves insulin sensitivity and heart resilience through high-intensity intervals.</li>
                                    <li>Muscle Preservation: Effectively burns fat while maintaining muscle mass through explosive, high-power movements.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='subcribecyc'>
                            <div><h2>Cycling</h2></div>
                            <div>
                                <ul>
                                    <li>Lower-Body Power: Specifically targets and strengthens your quads, hamstrings, glutes, and calves.</li>
                                    <li>Joint Longevity: Provides a high-intensity workout with minimal impact, protecting your knees and ankles.</li>
                                    <li>Heart Health: Significantly reduces cardiovascular disease risk by maintaining a steady, elevated heart rate.</li>
                                    <li>Sustainable Training: Allows for longer durations and more frequent sessions without the exhaustion of high-impact sports.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ZumbaGold-btn'>
                    <button className='ZG-btn'>Enroll Now</button>
                </div>
            </div>


        </div>
    )
}

export default ZumbaGold