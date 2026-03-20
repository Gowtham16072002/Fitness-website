import React, { useEffect, useState } from 'react'
import '../Styles/Cardio.css'
import CardioImage1 from '../assets/CardioImage1.jpeg'
import CardioImage2 from '../assets/CardioImage2.jpeg'
import CardioImage3 from '../assets/CardioImage3.jpeg'
import CardioImage4 from '../assets/CardioImage4.jpeg'
import cardiodetail1 from '../assets/cardiodetail1.jpeg'
import cardiodetail2 from '../assets/cardiodetail2.jpeg'
import cardiodetail3 from '../assets/cardiodetail3.jpeg'
import cardiodetail4 from '../assets/cardiodetail4.jpeg'

function ZumbaClassic() {

    const images = [CardioImage1, CardioImage2, CardioImage3, CardioImage4];
    const [showImage, setShowImage] = useState(0);
    const [fade, setFade] = useState(true);
    useEffect(() => {
    const interval = setInterval(() => {
        setFade(false); // start fade out

        setTimeout(() => {
            setShowImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
            setFade(true); // fade in new image
        }, 900); // match CSS transition time

    }, 3000); // change image every 3 sec

    return () => clearInterval(interval);
}, []);

    return (
        <div className='ZumbaClassicPage'>
            {/* TOP ROW CONTAINER */}
            <div className='TopContainer'>
                {/* LEFT */}
                <div className='ZumbaClassicContent'>
                    <h1>ZUMBA CLASSIC</h1>
                    <p><span><b>Zumba Classic offers a high-energy, fun-filled workout, while its variations provide options for cardio intensity, strength, rhythm, and enjoyment, making it suitable for people who want an engaging and effective fitness routine.</b></span></p>
                    <br /><section className='Content1'>
                        {/* <h2>Treadmill</h2> */}
                        <p>Zumba Classic delivers a dynamic and engaging cardiovascular workout that blends high-energy dance movements with aerobic exercise, allowing individuals to improve fitness while enjoying an immersive and music-driven experience. By incorporating a variety of international dance styles such as salsa, merengue, reggaeton, and hip-hop, it transforms traditional workouts into an exciting and motivating routine suitable for all fitness enthusiasts.</p>
                    </section>

                    <section className='Content2'>
                        {/* <h2>Swimming</h2> */}
                        <p>Unlike conventional exercise methods, Zumba Classic focuses on continuous rhythmic movements that keep the body active and energized, helping to enhance stamina, coordination, and overall endurance. The fast-paced choreography challenges both the upper and lower body, ensuring a complete full-body workout that strengthens muscles while promoting flexibility and balance.</p>
                    </section>

                    <section className='Content3'>
                        {/* <h2>HIIT</h2> */}
                        <p>Additionally, Zumba Classic plays a significant role in improving mental well-being by releasing endorphins that reduce stress and elevate mood. The lively music and group-based environment create a positive and social atmosphere, encouraging consistency and making it easier for individuals to stay committed to their fitness journey.</p>
                    </section>

                    <section className='Content4'>
                        {/* <h2>Cycling</h2> */}
                        <p>Ultimately, Zumba Classic stands out as a powerful yet enjoyable fitness solution that combines effective calorie burning, muscle engagement, and emotional upliftment. Its unique fusion of dance and exercise not only supports physical health but also enhances confidence and overall quality of life, making it a popular choice for those seeking a fun and sustainable workout routine.</p>
                    </section>
                </div>

                {/* RIGHT */}
                <div className="ZumbaClassicImage">
                    <div className='ZumbaClassicImages'>
                        {/* <img src={images[showImage]} alt="cardio" /> */}
                        <div
                            key={showImage}
                            className={`image-container ${fade ? "fade-In" : "fade-Out"}`}
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
                                <ul className='tredlist'>
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
                                <ul className='swimlist'>
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
                                <ul className='joglist'>
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
                                <ul className='cyclist'>
                                    <li>Lower-Body Power: Specifically targets and strengthens your quads, hamstrings, glutes, and calves.</li>
                                    <li>Joint Longevity: Provides a high-intensity workout with minimal impact, protecting your knees and ankles.</li>
                                    <li>Heart Health: Significantly reduces cardiovascular disease risk by maintaining a steady, elevated heart rate.</li>
                                    <li>Sustainable Training: Allows for longer durations and more frequent sessions without the exhaustion of high-impact sports.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ZumbaClassic-btn'>
                    <button className='btn'>Enroll Now</button>
                </div>
            </div>


        </div>
    )
}

export default ZumbaClassic