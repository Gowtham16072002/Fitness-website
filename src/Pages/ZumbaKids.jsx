import React, { useEffect, useState } from 'react'
import '../Styles/ZumbaKids.css'
import CardioImage1 from '../assets/CardioImage1.jpeg'
import CardioImage2 from '../assets/CardioImage2.jpeg'
import CardioImage3 from '../assets/CardioImage3.jpeg'
import CardioImage4 from '../assets/CardioImage4.jpeg'
import cardiodetail1 from '../assets/cardiodetail1.jpeg'
import cardiodetail2 from '../assets/cardiodetail2.jpeg'
import cardiodetail3 from '../assets/cardiodetail3.jpeg'
import cardiodetail4 from '../assets/cardiodetail4.jpeg'

function ZumbaKids() {

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
        <div className='ZumbaKidsPage'>
            {/* TOP ROW CONTAINER */}
            <div className='TopContainer'>
                {/* LEFT */}
                <div className='ZumbaKidsContent'>
                    <h1>ZUMBA KIDS</h1>
                    <p><span><b>Zumba Kids is a fun-filled and energetic fitness program specially designed for children, combining dance, music, and movement to create an engaging and active experience. By using kid-friendly choreography and lively music styles such as pop, hip-hop, and international rhythms, it encourages children to stay physically active while enjoying every moment of the workout.</b></span></p>
                    <br /><section className='Content1'>
                        {/* <h2>Treadmill</h2> */}
                        <p>Unlike traditional exercise routines, Zumba Kids focuses on playful and easy-to-follow movements that help improve coordination, balance, and overall motor skills. The structured yet flexible routines allow children to learn dance steps while building confidence and developing a sense of rhythm in a supportive and exciting environment.</p>
                    </section>

                    <section className='Content2'>
                        {/* <h2>Swimming</h2> */}
                        <p>Additionally, Zumba Kids promotes mental and emotional well-being by creating a positive atmosphere where children can express themselves freely. The interactive sessions help reduce stress, improve focus, and encourage teamwork, making it both a physical and social activity that supports overall development.</p>
                    </section>

                    <section className='Content3'>
                        {/* <h2>HIIT</h2> */}
                        <p>Ultimately, Zumba Kids serves as a powerful tool to build healthy habits at an early age, combining fitness with fun in a way that keeps children motivated and engaged. By blending movement, creativity, and enjoyment, it lays the foundation for a lifelong active lifestyle while enhancing both physical health and self-confidence.
                        </p>
                    </section>

                    {/* <section className='Content4'>
                        <h2>Cycling</h2>
                        <p>If you prefer a lower-impact alternative, cycling builds significant lower-body strength and endurance while being much gentler on the knees.By rotating through these activities, you can challenge different muscle groups and keep your fitness journey engaging and balanced.</p>
                    </section> */}
                </div>

                {/* RIGHT */}
                <div className="ZumbaKidsImage">
                    <div className='ZumbaKidsImages'>
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
                        <div className='subcribeZKDJR'>
                            <div><h2>Zumba Kids Jr (Ages 4–6)</h2></div>
                            <div>
                                <ul className='ZKDJRlist'>
                                    <li>Basic Movements: Simple and playful dance steps designed for young children.</li>
                                    <li>Motor Skill Development: Improves coordination, balance, and body control.</li>
                                    <li>Fun Learning: Uses games, storytelling, and music to keep kids engaged.</li>
                                    <li>Short Sessions: Designed with shorter attention spans in mind.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='subcribeZKD'>
                            <div><h2>Zumba Kids (Ages 7–11)</h2></div>
                            <div>
                                <ul className='ZKDlist'>
                                    <li>Structured Routines: Slightly advanced choreography compared to Kids Jr.</li>
                                    <li>Confidence Building: Encourages self-expression through dance.</li>
                                    <li>Team Interaction: Promotes group activities and social skills.</li>
                                    <li>Fitness Foundation: Improves stamina, flexibility, and coordination.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='subscribesecond'>
                        <div className='subcribeZKDPY'>
                            <div><h2>Zumba Kids Dance Party</h2></div>
                            <div>
                                <ul className='ZKDPYlist'>
                                    <li>High Fun Factor: Focuses on enjoyment and energy rather than strict routines.</li>
                                    <li>Interactive Games: Combines dance with playful activities.</li>
                                    <li>Social Engagement: Encourages teamwork and participation.</li>
                                    <li>• Stress Relief: Keeps kids happy, active, and entertained.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='subcribeZKDED'>
                            <div><h2>Zumba Kids Educational</h2></div>
                            <div>
                                <ul className='ZKDEDlist'>
                                    <li>Learning + Fitness: Combines dance with educational elements.</li>
                                    <li>Memory Boost: Helps improve focus and cognitive skills.</li>
                                    <li>Creative Thinking: Encourages imagination through movement.</li>
                                    <li>Skill Development: Enhances rhythm, timing, and coordination.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ZumbaKids-btn'>
                    <button className='ZKbtn'>Enroll Now</button>
                </div>
            </div>


        </div>
    )
}

export default ZumbaKids