import './About.css';
import { useRef, useState} from 'react';
import { motion, useScroll } from 'framer-motion';
import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const About = () => {

    ScrollTrigger.defaults ({
        once: true
    })

    gsap.fromTo(".aboutOne", {
        y: 500,
        opacity: 0,
    },{
        y: 0,
        opacity: 0.8,
        duration: 1,
        scrollTrigger: {trigger:".aboutText", once: true},
        ease: "expo.out",
    })

    gsap.fromTo(".aboutTwo", {
        y: -500,
        opacity: 0,    
    }, {
        y: 0,
        opacity: 0.8,
        duration: 1,
        scrollTrigger: {trigger:".aboutText", once: true},
        ease: "expo.out",
    })

    gsap.fromTo(".aboutBg", {
        delay: 1,
        backgroundColor: "#181818",
        width: "100%"
    }, {
        width: '0px',
        duration: 1,
        scrollTrigger: {trigger:".aboutText", once: true},
    })

    const aboutText = "As a second-year student in the Master of Mechatronics Engineering program, \
    I find my true calling in the seamless integration of software and machinery. \
    I derive immense satisfaction from creatively applying programming to tackle \
    practical challenges. Rooted in efficiency and pragmatism, my approach aims to \
    deliver innovative solutions. Looking ahead, I envision making meaningful \
    contributions to the fields of software engineering, robotics, and prosthetics."


    return (
        <div className="About">
            <div className="aboutTitle">
                <h3 className='aboutOne'>"Exploring</h3>
                <h3 className='aboutTwo'>Engineering"</h3>
            </div>
            <div className="aboutText">
                <div className="aboutBg"></div>
                <h4>Navigating the Tech Integration Realm.</h4>
                <p>{aboutText}</p>
            </div>
        </div>
    );
}
 
export default About;