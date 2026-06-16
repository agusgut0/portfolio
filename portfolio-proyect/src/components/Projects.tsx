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
        // Acá podés agregar más proyectos copiando el bloque de arriba
    ];

    return (
        <section className="projects-section">
            <h2 className="section-heading">Proyectos</h2>
            <div className="projects-list">
                {myProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        role={project.role}
                        description={project.description}
                        techStack={project.techStack}
                        githubLink={project.githubLink}
                        demoLink={project.demoLink}
                        imageSrc={project.imageSrc}
                    />
                ))}
            </div>
        </section>
    );
};