import LocationIcon from '../assets/icons/location.svg';
import './Living.css';

const Living = () => {
    return (
        <div className="living">
            <div className="location-card">
                <img src={LocationIcon}></img>
                <p>Born in <span>Toronto, Canada</span></p>
            </div>

            <div className="location-card">
                <img src={LocationIcon}></img>
                <p>Living in <span>Targu-Jiu, Romania</span></p>
            </div>

            <div className="location-card">
                <img src={LocationIcon}></img>
                <p>Studying in <span>Bucharest, Romania</span></p>
            </div>
        </div>
    );
}

export default Living;