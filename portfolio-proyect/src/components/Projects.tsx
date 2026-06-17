import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

export const Projects = () => {
    const myProjects = [
        {
            title: "CineInfo",
            role: "Fullstack Developer",
            description: "Aplicación web Full Stack desarrollada para la UTN FRC utilizando Node.js, Express y Sequelize. Se trata de un sistema de gestión cinematográfica que implementa APIs REST con operaciones CRUD completas y pruebas unitarias, permitiendo a usuarios autenticados administrar información sobre películas, directores y premiaciones de manera eficiente.",
            techStack: ["React", "Bootstrap", "Node.js", "Express", "Sequelize", "SQLite", "Jest", "JWT"],
            githubLink: "https://github.com/agusgut0/dds-tpi",
            demoLink: "https://cineinfo-six.vercel.app/",
            imageSrc: "/gifs/inicioCineInfo.gif",
            demoCredentials: { user: "admin", pass: "admin" },
            iconSrc: "/cineInfoLogo.svg"
        },
        {
            title: "JobTracker",
            role: "Fullstack Developer",
            description: "Aplicación web Full Stack Serverless desarrollada con JavaScript Vanilla bajo arquitectura estática MVC. Un organizador inteligente para la búsqueda laboral que automatiza la generación de prompts optimizados para IA (Claude/ChatGPT), adapta CVs en tiempo real con persistencia en LocalStorage y cuenta con un sistema robusto de backup en archivos JSON, superando con éxito los filtros ATS de reclutamiento.",
            techStack: ["JavaScript Vanilla", "HTML5", "CSS3", "MVC", "LocalStorage", "JSON Backup", "AI Prompts"],
            githubLink: "https://github.com/agusgut0/JobTracker",
            demoLink: "https://job-tracker-black-psi.vercel.app/",
            imageSrc: "/gifs/jobTrackerDemo.gif",
            iconSrc: "/jobTrackerLogo.svg"
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
                                    demoCredentials={project.demoCredentials}
                                    iconSrc={project.iconSrc}
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