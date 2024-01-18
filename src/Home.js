import './Home.css';
import arrowImg from './images/arrow.png'
import { motion } from 'framer-motion';

const Home = () => {

    const student1 = "Mechatronics Engineering"
    const student2 = "Student"

    const defaultAnimations = {
        hidden: {
            opacity: 0,
            y: 250
        },
        visible: {
            opacity: 1,
        }
    };

    return (
        <div className="Home">
            <div className="landing">
                <div className="title">
                    <motion.h2 
                    initial={{y: 50, opacity: 0}} 
                    animate={{y :0, opacity: 1}}
                    transition={{delay: 0.2, duration: 1.1, type: 'tween', ease: 'anticipate'}}>Loban <br/>Matin</motion.h2>
                    <motion.span initial="hidden" animate="visible" transition={{delayChildren: 1, staggerChildren:0.05, duration:0.01}}>{student1.split("").map((char) => (
                        <motion.span variants={defaultAnimations}>
                            {char}
                        </motion.span>
                    ))} <br/> {student2.split('').map((char) => (
                        <motion.span variants={defaultAnimations}>
                            {char}
                        </motion.span>
                    ))}</motion.span>
                </div>
                <motion.div className="profile"
                initial={{opacity:0, y:50}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.2, duration: 1.1, type: 'tween', ease: 'anticipate'}}>
                    <div className="headshot"></div>
                    <div className="landing-contact">
                        <motion.button className='git-button'
                        whileHover={{scale:1.2}}
                        transition={{type: 'spring', stiffness: '500'}}></motion.button>
                        <motion.button className='li-button'
                        whileHover={{scale:1.2}}
                        transition={{type: 'spring', stiffness: '500'}}></motion.button>
                    </div>
                </motion.div>
            </div>
            <motion.div className="arrow"
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{delay:2.8, duration: 0.2, type: 'tween'}}>
                <p>SCROLL</p>
                <a href="">
                <img src={arrowImg} alt='scroll arrow' />
                </a>
            </motion.div>
            <div className="accent"></div>
        </div>
    );
}
 
export default Home;