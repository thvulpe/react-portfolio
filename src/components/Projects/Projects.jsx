import ProjectPreview from '../ProjectPreview/ProjectPreview';
import './Projects.css';
import PortfolioImage from '../../assets/images/projects/portfolio.png';
import SpendingImage from '../../assets/images/projects/spending.png';

const Projects = () => {
    return (
        <div className='projects'>
            <ProjectPreview
                thumbnail={PortfolioImage}
                name="Portfolio"
                info="You Are Here"
            />
            <ProjectPreview
                thumbnail={SpendingImage}
                name="Spending Tracker"
                info="Work In Progress"
                link="https://spending-tracker-green.vercel.app"
            />
        </div>
    );
}

export default Projects;