import './Header.css';
import MyFace from '../assets/images/face.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="img-border-wrapper">
                <img src={MyFace} alt="My face" />
            </div>
            <h1>Theodor Vulpe - CS Student @ UPB</h1>
        </div>
    );
}

export default Header;