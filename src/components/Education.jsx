import GraduateIcon from '../assets/icons/graduate.svg';
import LaptopIcon from '../assets/icons/laptop.svg';
import './Education.css';

const Education = () => {
    return (
        <div className="education">
            <div className="cards">
                <div className="graduate-card">
                    <p>Graduated</p>
                    <span>
                        "Tudor Vladimirescu" National College, Targu-Jiu
                    </span>
                    <img src={GraduateIcon} alt="Graduation Icon"></img>
                    <p>(2020 - 2024)</p>
                </div>
                <div className="graduate-card">
                    <p>Studying Computer Science at</p>
                    <span>
                        Politehnica University, Bucharest
                    </span>
                    <img src={LaptopIcon} alt="Laptop Icon"></img>
                    <p>(2024 - Present)</p>
                </div>
            </div>
        </div>
    );
}

export default Education;