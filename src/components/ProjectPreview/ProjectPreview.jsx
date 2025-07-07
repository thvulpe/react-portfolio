import './ProjectPreview.css';

const ProjectPreview = ({ thumbnail, name, info, link }) => {
    return (
        <div className='project-preview'
            onClick={() => {
                if (link)
                    window.open(link, "_blank");
            }}>
            <img src={thumbnail} alt="thumbnail"></img>
            <div className="thumbnail-overlay">
                <p className="name">{name}</p>
                <p className="info">{info}</p>
            </div>
        </div>
    );
}

export default ProjectPreview;