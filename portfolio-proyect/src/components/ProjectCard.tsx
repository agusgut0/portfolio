import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    role: string;
    description: string;
    techStack: string[];
    githubLink: string;
    demoLink: string;
    imageSrc: string;
    demoCredentials?: { user: string; pass: string };
    iconSrc?: string;
}

export const ProjectCard = ({ title, role, description, techStack, githubLink, demoLink, imageSrc, demoCredentials, iconSrc }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className="project-header">
                {iconSrc ? (
                    <img src={iconSrc} alt="Project Icon" className="project-icon-img" />
                ) : (
                    <span className="project-icon">📁</span>
                )}
                <div>
                    <h3 className="project-title">{title}</h3>
                    <p className="project-role">{role}</p>
                </div>
            </div>
            
            <div className="project-preview-wrapper">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="demo-external-btn" title="Ver demo">
                    Visitar Web
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                </a>
                <div className="project-preview">
                    <img src={imageSrc} alt={title} className="project-preview-img" />
                </div>
            </div>

            <p className="project-description">{description}</p>
            {demoCredentials && (
                <div className="demo-credentials">
                    <p className="credentials-title">🔑 Credenciales de Prueba (Modo Demo):</p>
                    <ul className="credentials-list">
                        <li><span>Usuario:</span> {demoCredentials.user}</li>
                        <li><span>Contraseña:</span> {demoCredentials.pass}</li>
                    </ul>
                </div>
            )}
            
            <div className="project-tech">
                {techStack.map((tech, index) => (
                    <span key={index} className="project-tech-badge">{tech}</span>
                ))}
            </div>
            
            <div className="project-actions">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-action-btn" title="Ver código">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Ver Repositorio
                </a>
            </div>
            <div style={{ clear: 'both' }}></div>
        </div>
    );
};