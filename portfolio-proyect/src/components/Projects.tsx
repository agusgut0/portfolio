import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

export const Projects = () => {
    const myProjects = [
        {
            title: "Sistema de Catálogo Interactivo",
            role: "Fullstack Developer",
            description: "Plataforma Full Stack para gestión de películas con panel de administración CRUD completo. Permite control de inventario en tiempo real.",
            techStack: ["React", "Bootstrap", "Express", "Sequelize"],
            githubLink: "https://github.com/tu-usuario/tu-repo",
            demoLink: "#",
            imageSrc: "/TU-IMAGEN-PROYECTO.png"
        },
        // Proyecto de ejemplo para probar el carrusel
        {
            title: "E-commerce de Ropa",
            role: "Frontend Developer",
            description: "Tienda online completa con carrito de compras, pasarela de pagos y panel de usuario.",
            techStack: ["React", "Node.js", "MongoDB"],
            githubLink: "https://github.com/tu-usuario/tu-repo",
            demoLink: "#",
            imageSrc: "/TU-IMAGEN-PROYECTO.png"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev === myProjects.length - 1 ? 0 : prev + 1));
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev === 0 ? myProjects.length - 1 : prev - 1));
    };

    return (
        <section className="projects-section">
            <h2 className="section-heading">Proyectos</h2>
            <div className="carousel-container">
                <button className="carousel-btn" onClick={prevProject} aria-label="Proyecto anterior">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                
                <div className="carousel-viewport">
                    <div 
                        className="carousel-track" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {myProjects.map((project, index) => (
                            <div className="carousel-slide" key={index}>
                                <ProjectCard
                                    title={project.title}
                                    role={project.role}
                                    description={project.description}
                                    techStack={project.techStack}
                                    githubLink={project.githubLink}
                                    demoLink={project.demoLink}
                                    imageSrc={project.imageSrc}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button className="carousel-btn" onClick={nextProject} aria-label="Siguiente proyecto">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
            {/* Indicadores de carrusel (puntitos) */}
            <div className="carousel-indicators">
                {myProjects.map((_, index) => (
                    <div 
                        key={index} 
                        className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </section>
    );
};