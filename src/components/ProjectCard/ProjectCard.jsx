import './ProjectCard.css';

const ProjectCard = ({ ProjectPreview, description, tech }) => {
    return (
        <div className='project-card'
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-offset="300"
        >
            <div className='project-card-info'>
                <p><span>Description:</span> {description}</p>
                <p><span>Technologies:</span> {tech}</p>
            </div>
            <div className='card-thumbnail'>
                {ProjectPreview}
            </div>
        </div>
    );
}

export default ProjectCard;