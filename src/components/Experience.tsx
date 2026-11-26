import './Experience.css';

// summary: una línea de contexto · bullets: logros concretos · stack: tecnologías del puesto
const experiences = [
    {
        id: 1,
        company: 'Pertrak S.A.',
        role: 'Analista de Soporte IT y Automatización',
        date: 'Sep 2026 – Actualidad',
        summary: 'Automatizo despliegues, opero la infraestructura de aplicaciones internas y desarrollo agentes de IA para el área de IT.',
        bullets: [
            'Agentes de IA con Claude: diseño, orquestación y mejora continua de agentes que asisten al desarrollo, la revisión de seguridad y la operación de los sistemas internos.',
            'Flujo DevOps del equipo: organización en GitHub, CI/CD con GitHub Actions (runner self-hosted) y deploy automático a desarrollo.',
            'Servidores Linux para despliegue de aplicaciones con Docker; operación de apps Python/Flask en producción con backups de PostgreSQL, usuarios por aplicación y rotación de credenciales.',
            'Microsoft 365 y Entra ID (+80 usuarios): MFA, LAPS y BitLocker; aprovisionamiento de dispositivos de planta en modo kiosco con PowerShell y ADB.',
        ],
        stack: ['Claude', 'GitHub Actions', 'Docker', 'Linux', 'PostgreSQL', 'Python', 'PowerShell', 'Entra ID'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="8" rx="2"></rect>
                <rect x="2" y="13" width="20" height="8" rx="2"></rect>
                <line x1="6" y1="7" x2="6.01" y2="7"></line>
                <line x1="6" y1="17" x2="6.01" y2="17"></line>
            </svg>
        )
    },
    {
        id: 2,
        company: 'Corrugadora Centro S.A.',
        role: 'Analista de Soporte IT',
        date: 'Feb 2025 – May 2026',
        summary: 'Infraestructura, seguridad y automatización de procesos en una planta industrial.',
        bullets: [
            'Migración de +80 estaciones a Windows 11 en 20 días; Active Directory con +50 usuarios y GPOs.',
            'Prevención de fuga de datos con ManageEngine Endpoint DLP.',
            'Automatización de planta: app en Python para etiquetado industrial (Google Sheets API, OAuth 2.0, impresoras TSPL) y flujos en n8n.',
            'Administración de los ERP TOTVS Protheus y DrCorr, Google Workspace y mesa de ayuda N1/N2.',
        ],
        stack: ['Windows Server', 'Active Directory', 'Python', 'n8n', 'ManageEngine'],
        icon: (
            <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14 0H2V16H6V12H10V16H14V0ZM5 3H7V5H5V3ZM7 7H5V9H7V7ZM9 3H11V5H9V3ZM11 7H9V9H11V7Z" />
            </svg>
        )
    },
    {
        id: 3,
        company: 'Laboratorio de Sistemas – UTN FRC',
        role: 'Asistente Técnico (beca SAE)',
        date: 'Abr 2023 – Dic 2024',
        summary: 'Soporte N1 y mantenimiento de la infraestructura de los laboratorios: equipamiento, inventario y cableado de red.',
        bullets: [] as string[],
        stack: [] as string[],
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
                                <p>{exp.summary}</p>
                                {exp.bullets.length > 0 && (
                                    <ul className="experience-bullets">
                                        {exp.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                                {exp.stack.length > 0 && (
                                    <p className="experience-stack">
                                        <span>Stack:</span> {exp.stack.join(' · ')}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
