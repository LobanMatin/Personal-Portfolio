import './About.css';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';



const About = () => {

    const aboutText = "As a second-year student in the Master of Mechatronics Engineering program, \
    I find my true calling in the seamless integration of software and machinery. \
    I derive immense satisfaction from creatively applying programming to tackle \
    practical challenges. Rooted in efficiency and pragmatism, my approach aims to \
    deliver innovative solutions. Looking ahead, I envision making meaningful \
    contributions to the fields of software engineering, robotics, and prosthetics."


    return (
        <motion.div className="About">
            <div className="aboutTitle">
                <h3 className='aboutOne'>"Exploring<br/>Engineering"</h3>
            </div>
            <div className="aboutText">
                <h4>Navigating the Tech Integration Realm.</h4>
                <p>{aboutText}</p>
            </div>
        </motion.div>
    );
}
 
export default About;