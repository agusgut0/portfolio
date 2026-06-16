import './Technologies.css';

export const Technologies = () => {
    const techs = [
        'React', 'Node.js', 'Express', 'Sequelize',
        'TypeScript', 'JavaScript', 'HTML', 'CSS',
        'Bootstrap', 'Git'
    ];

    return (
        <section className="tech-section">
            <h2 className="section-heading">Tecnologías</h2>
            <div className="tech-badges">
                {techs.map((tech, index) => (
                    <span key={index} className="tech-pill">{tech}</span>
                ))}
            </div>
        </section>
    );
};
