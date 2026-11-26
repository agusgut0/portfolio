import { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

export const Projects = () => {
    const myProjects = [
        {
            title: "FinTech Nova",
            role: "DevOps / Cloud Engineer",
            description: "Plataforma bancaria de 5 microservicios en 5 lenguajes (Python, Node.js, Java, Go y .NET), contenerizada y desplegada en AWS con un pipeline de CI/CD de 38 jobs: escaneo de seguridad con gate, infraestructura con Terraform y verificación automática del deploy. El primer escaneo encontró y permitió corregir 13 vulnerabilidades críticas, y la paralelización bajó el escaneo de 48 a 8,5 minutos. Proyecto integrador de DevOps (UTN FRC), aprobado con 10.",
            techStack: ["Docker", "Docker Compose", "GitLab CI", "GitHub Actions", "Terraform", "AWS EC2", "NGINX", "Trivy", "Semgrep", "MariaDB"],
            githubLink: "https://github.com/agusgut0/fintech-nova",
            // Demo en GitHub Pages con las APIs simuladas en el navegador (el deploy real va a una
            // EC2 del sandbox de AWS Academy, que solo existe durante una sesión)
            demoLink: "https://agusgut0.github.io/fintech-nova/",
            imageSrc: "/gifs/fintechNovaDemo.gif",
            iconSrc: "/fintechNovaLogo.svg"
        },
        {
            title: "CineInfo",
            role: "Fullstack Developer",
            description: "Aplicación web Full Stack desarrollada como proyecto universitario para la UTN FRC. Se trata de un sistema de gestión de películas que implementa APIs REST con operaciones CRUD completas y pruebas unitarias, permitiendo a usuarios autenticados administrar información sobre películas, directores y premiaciones.",
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
            description: "Aplicación web Full Stack Serverless desarrollada con JavaScript bajo arquitectura estática MVC. Se trata de un organizador inteligente para la búsqueda laboral que automatiza la generación de prompts optimizados para IA, adapta CVs a cada puesto superando con éxito los filtros ATS de reclutamiento. Contenerizada con Docker (Nginx) y con un pipeline de CI/CD en GitHub Actions que automatiza el build y la publicación de la imagen en cada actualización.",
            techStack: ["JavaScript Vanilla", "HTML5", "CSS3", "MVC", "LocalStorage", "JSON Backup", "AI Prompts", "Docker", "GitHub Actions"],
            githubLink: "https://github.com/agusgut0/JobTracker",
            demoLink: "https://job-tracker-black-psi.vercel.app/",
            imageSrc: "/gifs/jobTrackerDemo.gif",
            iconSrc: "/jobTrackerLogo.svg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // La altura del carrusel sigue al proyecto activo (evita huecos cuando un proyecto es más corto)
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [viewportHeight, setViewportHeight] = useState<number>();

    useEffect(() => {
        const slide = slideRefs.current[currentIndex];
        if (!slide) return;
        const observer = new ResizeObserver(() => setViewportHeight(slide.offsetHeight));
        observer.observe(slide);
        return () => observer.disconnect();
    }, [currentIndex]);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev === myProjects.length - 1 ? 0 : prev + 1));
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev === 0 ? myProjects.length - 1 : prev - 1));
    };

    // Swipe horizontal en pantallas táctiles
    const touchStart = useRef<{ x: number; y: number } | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart.current) return;
        const touch = e.changedTouches[0];
        const dx = touch.clientX - touchStart.current.x;
        const dy = touch.clientY - touchStart.current.y;
        touchStart.current = null;
        if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
        if (dx < 0) nextProject();
        else prevProject();
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

                <div
                    className="carousel-viewport"
                    style={{ height: viewportHeight }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {myProjects.map((project, index) => (
                            <div
                                className="carousel-slide"
                                key={index}
                                ref={(el) => { slideRefs.current[index] = el; }}
                                inert={index !== currentIndex}
                                aria-hidden={index !== currentIndex}
                            >
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
                    <button
                        type="button"
                        key={index}
                        className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ver proyecto ${index + 1}`}
                        aria-current={index === currentIndex}
                    />
                ))}
            </div>
        </section>
    );
};