# Portfolio — Agustín Gutiérrez

Portfolio web personal, desarrollado como carta de presentación profesional y showcase de proyectos.

🔗 **Demo en vivo:** [portfolio-agusgut.vercel.app](https://portfolio-agusgut.vercel.app/)

## Stack técnico

- **React** + **TypeScript**
- **Vite** como bundler
- **EmailJS** para el envío de mensajes desde el formulario de contacto, sin backend propio
- Deploy continuo en **Vercel**

## Instalación local

Cloná el repositorio y parado en la raíz:

\`\`\`bash
npm install
npm run dev
\`\`\`

La app va a estar disponible en `http://localhost:5173` (puerto por defecto de Vite).

## Variables de entorno

Este proyecto usa EmailJS, que requiere las siguientes variables en un archivo `.env` en la raíz:

\`\`\`
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
\`\`\`

## Secciones

- Sobre mí
- Proyectos destacados (JobTracker, CineInfo)
- Habilidades técnicas
- Formulario de contacto

## Autor

**Agustín Thomas Gutiérrez Ioime**
[LinkedIn](https://www.linkedin.com/in/agus-gutierrez) · [GitHub](https://github.com/agusgut0)
