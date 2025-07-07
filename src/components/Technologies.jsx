import './Technologies.css';
import CLogo from '../assets/icons/technologies/c.svg';
import CssLogo from '../assets/icons/technologies/css.svg';
import GitLogo from '../assets/icons/technologies/git.svg';
import ReactLogo from '../assets/icons/technologies/react.svg';
import JsLogo from '../assets/icons/technologies/js.svg';
import SpringBootLogo from '../assets/icons/technologies/spring-boot.svg';
import HtmlLogo from '../assets/icons/technologies/html.svg';
import JavaLogo from '../assets/icons/technologies/java.svg';
import LinuxLogo from '../assets/icons/technologies/linux.svg';

const Technologies = () => {
    const icons = [
        CLogo,
        ReactLogo,
        CssLogo,
        GitLogo,
        JsLogo,
        SpringBootLogo,
        JavaLogo,
        HtmlLogo,
        LinuxLogo
    ]

    return (
        <div className='technologies'>
            <div className='tech-icons'>
                {icons.map((icon, index) => {
                    return (
                        <div key={index} className='img-wrapper'>
                            <img src={icon} alt={`logo-${index}`} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Technologies;