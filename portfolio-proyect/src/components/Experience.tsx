import './Experience.css';

const experiences = [
    {
        id: 1,
        company: 'Corrugadora Centro S.A.',
        role: 'Soporte IT & Automatización de Procesos',
        date: 'Feb 2023 – Jun 2026',
        description: 'Desarrollé soluciones de software que reemplazaron procesos manuales en un entorno industrial real. Construí una aplicación de escritorio en Python integrada a Google Sheets (OAuth 2.0) para automatizar el etiquetado industrial con impresoras Xprinter vía protocolo TSPL. Diseñé un flujo en n8n que tomaba datos de Google Forms, generaba PDFs dinámicos en formato JSON estructurado y los organizaba automáticamente en carpetas del servidor por fecha. También desarrollé una app de control preventivo de autoelevadores por turno, con validaciones, alertas y modelo de datos diseñado para escalar a SQL y Power BI.\n\nEn paralelo, gestioné la infraestructura IT de la empresa: administración de Active Directory (+50 cuentas, GPOs, permisos), implementación de ManageEngine Endpoint DLP, migración de +80 workstations a Windows 11, y administración de Google Workspace y ERP Totvs Protheus.',
        icon: (
            <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14 0H2V16H6V12H10V16H14V0ZM5 3H7V5H5V3ZM7 7H5V9H7V7ZM9 3H11V5H9V3ZM11 7H9V9H11V7Z" />
            </svg>
        )
    },
    {
        id: 2,
        company: 'Laboratorio de Sistemas – UTN FRC',
        role: 'Asistente Técnico',
        date: 'Mar 2022 – Nov 2023',
        description: 'Soporte técnico Nivel 1 a estudiantes, docentes y personal administrativo. Diagnóstico, mantenimiento preventivo y correctivo de equipamiento académico. Gestión de inventario de hardware y periféricos.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
        )
    }
];

export const Experience = () => {
    return (
        <section className="experience-section" id="experience">
            <h2 className="section-heading">Experiencia</h2>
            <div className="experience-list">
                {experiences.map((exp) => (
                    <div className="experience-item" key={exp.id}>
                        <div className="experience-icon-wrapper">
                            {exp.icon}
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3 className="experience-company">{exp.company}</h3>
                                <span className="experience-date">{exp.date}</span>
                            </div>
                            <h4 className="experience-role">{exp.role}</h4>
                            <div className="experience-description">
                                {exp.description.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
