import './Education.css';

const educationList = [
    {
        id: 1,
        degree: 'Ingeniería en Sistemas de la Información',
        institution: 'Universidad Tecnológica Nacional (UTN FRC)',
        date: '2021 – Actualidad (3er año)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
        )
    }
];

export const Education = () => {
    return (
        <section className="education-section" id="education">
            <h2 className="section-heading">Educación</h2>
            <div className="education-list">
                {educationList.map((edu) => (
                    <div className="education-item" key={edu.id}>
                        <div className="education-icon-wrapper">
                            {edu.icon}
                        </div>
                        <div className="education-content">
                            <div className="education-header">
                                <h3 className="education-degree">{edu.degree}</h3>
                                <span className="education-date">{edu.date}</span>
                            </div>
                            <h4 className="education-institution">{edu.institution}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
