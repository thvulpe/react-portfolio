import GithubIcon from '../../assets/icons/github.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import './Socials.css';

const Socials = () => {
    return (
        <div className="socials">
            <h2>SOCIALS</h2>
            <div className="social-icons">
                <a href="https://github.com/thvulpe"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={GithubIcon} alt="GitHub Icon" />
                </a>
                <a href="https://www.linkedin.com/in/theodor-vulpe/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={LinkedinIcon} alt="LinkedIn Icon" />
                </a>
            </div>
        </div>
    );
}

export default Socials;