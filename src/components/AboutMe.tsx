import './AboutMe.css';

export const AboutMe = () => {
    return (
        <section className="about-section">
            <h2 className="section-heading">Sobre mí</h2>
            <p className="about-text">
                Trabajo entre infraestructura, automatización e IA. Hoy diseño, orquesto y mejoro de forma continua agentes de IA con Claude que asisten al desarrollo, la revisión de seguridad y la operación de sistemas internos; configuro servidores Linux para desplegar aplicaciones con Docker y automatizo CI/CD con GitHub Actions.
            </p>
            <p className="about-text">
                Vengo de más de 2 años de IT en entornos industriales (Active Directory, Entra ID, PostgreSQL en producción) y estudio Ingeniería en Sistemas en la UTN FRC. Me interesa que los despliegues sean predecibles: versionados, automatizados, verificados y documentados.
            </p>
        </section>
    );
};
