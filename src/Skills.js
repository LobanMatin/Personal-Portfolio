import './Skills.css';
import laptopImg from './images/laptop.avif'

const Gallery = () => {
    return (
        <div className="Skills">
            <h3>SKILLS</h3>
            <div className="skills-content">
                <div className="laptop">
                    <img src={laptopImg} alt="laptop-graphic"/>
                </div>
                <div className="skills-list">
                    <div className="skill-section">
                        <h2>Web Development</h2>
                    </div>
                    <div className="skill-section">
                        <h2>Programming</h2>
                    </div>
                    <div className="skill-section">
                        <h2>Engineering</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Gallery;