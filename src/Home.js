import './Home.css';
import arrowImg from './images/arrow.png'

const Home = () => {
    return (
        <div className="Home">
            <div className="landing">
                <div className="title">
                    <h2>Loban <br/>Matin</h2>
                    <h3>Mechatronics Engineering <br/>Student</h3>
                </div>
                <div className="profile">
                    <div className="headshot"></div>
                    <div className="landing-contact">
                        <button className='git-button'></button>
                        <button className='li-button'></button>
                    </div>
                </div>
            </div>
            <div className="arrow">
                <p>SCROLL</p>
                <img src={arrowImg} alt='scroll arrow' />
            </div>
            <div className="accent"></div>
        </div>
    );
}
 
export default Home;