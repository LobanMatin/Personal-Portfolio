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
                    <p>add signature in background and image in foreground <br /> HAVE SIGNATURE AS LOADING SCREEN AS WELL AS WEBSITE LOGO 
                    <br />AND HAVE BLACK NAV BAR W CONTACTS AT THE TOP <br /> AND HAVE A PROPER CONTACT PAGE<br />
                    HAVE SIDE TIMELINE LIKE BRANDON JHONSON PAGE, BUT TITLES INSTEAD OF NUMBERS</p>
                </div>
            </div>
            <div className="arrow">
                <p>SCROLL</p>
                <img src={arrowImg} alt='scroll arrow' />
            </div>
        </div>
    );
}
 
export default Home;