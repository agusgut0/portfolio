import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSubmitting(true);

        emailjs
            .sendForm(
                'service_ymmcjuf',  // Reemplaza con tu Service ID
                'template_2kazpwe', // Reemplaza con tu Template ID
                form.current,
                '7KIqwGnjMZliVZgpy'   // Reemplaza con tu Public Key
            )
            .then(
                () => {
                    console.log('Mensaje enviado con éxito');
                    form.current?.reset();
                    setIsSubmitting(false);
                    alert('¡Mensaje enviado correctamente!'); // Opcional: alerta rápida para feedback
                },
                (error) => {
                    console.error('Error al enviar:', error.text);
                    setIsSubmitting(false);
                    alert('Hubo un error al enviar el mensaje. Intentá de nuevo.');
                }
            );
    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="section-heading">Trabajemos juntos</h2>
            <div className="contact-container">
                <form ref={form} className="contact-form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="user_name">Nombre</label>
                        <input type="text" id="user_name" name="user_name" placeholder="Tu nombre" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input type="email" id="user_email" name="user_email" placeholder="tu@email.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" name="message" placeholder="¿En qué te puedo ayudar?" rows={5} required></textarea>
                    </div>
                    <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                        {!isSubmitting && (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};
