import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    role: string;
    description: string;
    techStack: string[];
    githubLink: string;
    demoLink: string;
    imageSrc: string;
}

export const ProjectCard = ({ title, role, description, techStack, githubLink, demoLink, imageSrc }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className="project-details">
                <div className="project-header">
                    <span className="project-icon">📁</span>
                    <div>
                        <h3 className="project-title">{title}</h3>
                        <p className="project-role">{role}</p>
                    </div>
                </div>
                <p className="project-description">{description}</p>
                <div className="project-tech">
                    {techStack.map((tech, index) => (
                        <span key={index} className="project-tech-badge">{tech}</span>
                    ))}
                </div>
                <div className="project-actions">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="action-btn" title="Ver código">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                        </svg>
                    </a>
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="action-btn" title="Ver demo">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="project-preview">
                <img src={imageSrc} alt={title} className="project-preview-img" />
            </div>
        </div>
    );
};