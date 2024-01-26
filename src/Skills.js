import './Skills.css';
import laptopImg from './images/laptop.png'
import cLogo from './images/skills/C_logo.png'
import cssLogo from './images/skills/css_logo.png'
import fusionLogo from './images/skills/fusion_logo.png'
import htmlLogo from './images/skills/html_logo.png'
import javaLogo from './images/skills/java_logo.png'
import jsLogo from './images/skills/JS_logo.png'
import ltLogo from './images/skills/lt_logo.png'
import matlabLogo from './images/skills/matlab_logo.png'
import pythonLogo from './images/skills/python_logo.png'
import reactLogo from './images/skills/react_logo.png'
import swLogo from './images/skills/solidworks_logo.png'
import sqlLogo from './images/skills/sql_logo.png'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Gallery = () => {
    const [top, setTop] = useState(reactLogo)
    const [right, setRight] = useState(htmlLogo)
    const [left, setLeft] = useState(cssLogo)
    const [bottom, setBottom] = useState(jsLogo)

    const progSwap = () => {
        setTop(pythonLogo)
        setRight(sqlLogo)
        setLeft(cLogo)
        setBottom(javaLogo)
    }
    
    return (
        <div className="Skills">
            <h3>SKILLS</h3>
            <div className="skills-content">
                <div className="skills-list">
                    <motion.button className='skillsButton' id='webdev'
                        whileHover={{scale:1.1}}
                        transition={{ease: 'easeOut', stiffness: '200', duration: 0.2}}>
                        <div className="skill-section">
                            <h2>Web Dev</h2>
                        </div>
                    </motion.button>
                
                    <motion.button className='skillsButton'
                        whileHover={{scale:1.1}}
                        transition={{ease: 'easeOut', stiffness: '200', duration: 0.2}}>
                        <div className="skill-section">
                            <h2>Programming</h2>
                        </div>
                    </motion.button>
                    <motion.button className='skillsButton'
                        whileHover={{scale:1.1}}
                        transition={{ease: 'easeOut', stiffness: '200', duration: 0.2}}>
                        <div className="skill-section">
                            <h2>Engineering</h2>
                        </div>
                    </motion.button>    
                </div>
                <div className="laptop">
                    <img className="laptop-img" src={laptopImg} alt="laptop-graphic"/>
                    <div className="skills-logos">
                        <div className="top-logos"></div>
                            <img className="skillImg topImg" src={top} alt="react-logo"/>
                        <div className="mid-logos"></div>
                            <img className="skillImg rightImg" src={right} alt="html-logo"/>
                            <img className="skillImg leftImg" src={left} alt="css-logo"/>
                        <div className="bottom-logos"></div>
                            <img className="skillImg botImg" src={bottom} alt="js-logo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Gallery;