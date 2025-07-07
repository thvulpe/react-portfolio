import './Robotics.css';

const Robotics = () => {
    return (
        <div className="robotics">
            <hr className='purple-line' />

            <p className='ftc'>
                Robotics Team Captain & Programmer @{" "}
                <a href="https://teaborgs.ro/" target="_blank"
                    rel="noopener noreferrer">
                    Tea-Borgs
                </a> |{" "}
                <a href="https://www.firstinspires.org/robotics/ftc"
                    target="_blank"
                    rel="noopener noreferrer">
                    FTC
                </a>
                <span>{" "}(2020 - 2022)</span>
            </p>

            <p className='award'>
                🥉 3rd place - Bucharest National Phase 2021 🇷🇴
            </p>

            <p className='award'>
                🥇 1st place - Bucharest National Phase 2022 🇷🇴
            </p>

            <p className='award'>
                🏆 8th Place Jemison Division - World Robotics Championship
                {" "}2022, Houston - Texas, USA 🇺🇸
            </p>

            <hr className='purple-line' />

            <p className='fgc'>
                Robotics Team Captain & Programmer @ Team Romania |{" "}
                <a href="https://first.global/" target="_blank"
                    rel="noopener noreferrer">
                    FGC Geneva
                </a>
                <span>{" "}(2022)</span>
            </p>

            <p className='award'>
                🏆 25th place out of 180+ international teams - First Global
                {" "}Challenge 2022, Geneva - Switzerland 🇨🇭
            </p>

            <hr className='purple-line' />
        </div>
    );
}

export default Robotics;