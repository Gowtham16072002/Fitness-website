import React, { useEffect, useState } from 'react'
import '../Styles/ZumbaClassic.css'
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
                        <div className='subcribeZCRBL'>
                            <div><h2>Zumba Cardio Blast</h2></div>
                            <div>
                                <ul className='ZCRBLlist'>
                                    <li>High Intensity: Focuses on continuous fast-paced movements.</li>
                                    <li>Fat Burning: Maximizes calorie burn in a short time.</li>
                                    <li>Endurance Focus: Improves stamina and cardiovascular strength.</li>
                                    <li>Energetic Routines: Non-stop dance sequences.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='subcribeZSTFU'>
                            <div><h2>Zumba Strength Fusion</h2></div>
                            <div>
                                <ul className='ZSTFUlist'>
                                    <li>Muscle Engagement: Combines dance with bodyweight exercises.</li>
                                    <li>Core Focus: Strengthens abs and lower back.</li>
                                    <li>Balanced Workout: Mix of cardio and strength training.</li>
                                    <li>Power Moves: Includes squats, lunges, and dynamic steps.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='subscribesecond'>
                        <div className='subcribeZDNPR'>
                            <div><h2>Zumba Dance Party</h2></div>
                            <div>
                                <ul className='ZDNPRlist'>
                                    <li>Fun Experience: Focuses more on enjoyment than intensity.</li>
                                    <li>Simple Routines: Easy-to-follow dance moves.</li>
                                    <li>Social Workout: Great for group sessions.</li>
                                    <li>Stress Relief: Boosts mood through music and movement.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='subcribeZINMX'>
                            <div><h2>Zumba Interval Mix</h2></div>
                            <div>
                                <ul className='ZINMXlist'>
                                    <li>Interval Training: Alternates between high and moderate intensity.</li>
                                    <li>Better Recovery: Allows short rest phases within workout.</li>
                                    <li>Efficiency: Improves fitness in less time.</li>
                                    <li>Heart Health: Enhances cardiovascular performance.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ZumbaClassic-btn'>
                    <button className='ZCLbtn'>Enroll Now</button>
                </div>
            </div>


        </div>
    )
}

export default ZumbaClassic