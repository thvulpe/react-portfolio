import ProjectPreview from '../ProjectPreview/ProjectPreview';
import './Projects.css';
import PortfolioImage from '../../assets/images/projects/portfolio.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectCardReverse from '../ProjectCard/ProjectCardReverse';
import SpendingImage from '../../assets/images/projects/spending.png';

const Projects = () => {
    return (
        <div className='projects'>
            <ProjectCard
                ProjectPreview={<ProjectPreview
                    thumbnail={PortfolioImage}
                    name="Portfolio"
                    info="You Are Here"
                />}
                description={"The goal of this site is to present who " +
                    "I am, showcase my projects, and reflect my frontend" +
                    " development skills."}
                tech="React.js, CSS, JavaScript"
            />

            <ProjectCardReverse
                ProjectPreview={<ProjectPreview
                    thumbnail={SpendingImage}
                    name="Spending Tracker"
                    info="Work In Progress"
                />}
                description={"A simple React app to manage your expenses. " +
                    "You can add, delete, and filter transactions, and view a " +
                    "chart showing your spending over the current year."}
                tech="React.js, CSS, JavaScript, Spring Boot, Java, PostgreSQL"
            />
        </div>
    );
}

export default Projects;