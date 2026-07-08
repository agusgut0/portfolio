import './AboutMe.css';

export const AboutMe = () => {
    return (
        <section className="about-section">
            <h2 className="section-heading">Sobre mí</h2>
            <p className="about-text">
                Soy Agustín Gutiérrez, desarrollador web enfocado en construir soluciones eficientes y escalables. Cuento con experiencia previa en soporte técnico, análisis de sistemas e implementación de software de gestión, lo que me permite entender los procesos internos de los negocios y ofrecer soluciones más ajustadas a la realidad de cada equipo.
            </p>
            <p className="about-text">
                Me especializo en desarrollo Full Stack con React, Node.js, Express y Sequelize, y complemento ese perfil con contenedorización (Docker) y automatización de despliegues (CI/CD), buscando que cada proyecto sea no solo funcional, sino también fácil de mantener y reproducir.
            </p>
        </section>
    );
};
