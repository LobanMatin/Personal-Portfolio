import './Loading.css';
import signImg from './images/sign-loading.png'


const Loading = () => {
    return (
        <div className="Loading">
            <img src={signImg} alt="loading-icon"/>
        </div>
    );
}
 
export default Loading