import './Header.css';
import MyFace from '../assets/images/face.jpg';
import { useEffect, useState } from 'react';

const FormatUniYear = (currentDate) => {
    const currentYear = currentDate.getFullYear();
    let uniYear = currentYear - 2024;

    // Consider next academic year everything after 20th of June
    const comparisonDate = new Date(currentDate.getFullYear(), 5, 20);
    if (currentDate > comparisonDate)
        uniYear++;

    if (uniYear === 1)
        return "1st year";
    if (uniYear === 2)
        return "2nd year";
    if (uniYear === 3)
        return "3rd year";
    if (uniYear === 4)
        return "4th year";
    return "Graduated";
}

const Header = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="header">
            <div className="img-border-wrapper">
                <img src={MyFace} alt="My face" />
            </div>
            <h1>Theodor Vulpe - CS Student @ UPB</h1>
            <p>
                <span>
                    {FormatUniYear(currentDate) + ' '}
                </span>
                as of {new Date().toLocaleString()}
            </p>
        </div>
    );
}

export default Header;