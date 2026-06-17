import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
    const [errors, setErrors] = useState({ user_name: '', user_email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

    useEffect(() => {
        if (statusMessage) {
            const timer = setTimeout(() => {
                setStatusMessage(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [statusMessage]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Remove error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { user_name: '', user_email: '', message: '' };

        if (!formData.user_name.trim()) {
            newErrors.user_name = 'Por favor, ingresá tu nombre.';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.user_email.trim()) {
            newErrors.user_email = 'Por favor, ingresá tu email.';
            isValid = false;
        } else if (!emailRegex.test(formData.user_email)) {
            newErrors.user_email = 'Ingresá un email válido (ej: tu@email.com).';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Por favor, escribí un mensaje.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;
        if (!form.current) return;

        setIsSubmitting(true);
        setStatusMessage(null);

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
                    setFormData({ user_name: '', user_email: '', message: '' }); // Clear inputs
                    setIsSubmitting(false);
                    setStatusMessage({ type: 'success', text: '¡Mensaje enviado correctamente!' });
                },
                (error) => {
                    console.error('Error al enviar:', error.text);
                    setIsSubmitting(false);
                    setStatusMessage({ type: 'error', text: 'Hubo un error al enviar el mensaje. Intentá de nuevo.' });
                }
            );
    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="section-heading">Trabajemos juntos</h2>
            <div className="contact-container">
                <form ref={form} className="contact-form" onSubmit={sendEmail} noValidate>
                    <div className="form-group">
                        <label htmlFor="user_name">Nombre</label>
                        <input 
                            type="text" 
                            id="user_name" 
                            name="user_name" 
                            placeholder="Tu nombre" 
                            value={formData.user_name}
                            onChange={handleChange}
                            className={errors.user_name ? 'input-error' : ''}
                        />
                        {errors.user_name && <span className="error-message">{errors.user_name}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input 
                            type="email" 
                            id="user_email" 
                            name="user_email" 
                            placeholder="tu@email.com" 
                            value={formData.user_email}
                            onChange={handleChange}
                            className={errors.user_email ? 'input-error' : ''}
                        />
                        {errors.user_email && <span className="error-message">{errors.user_email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="¿En qué te puedo ayudar?" 
                            rows={5} 
                            value={formData.message}
                            onChange={handleChange}
                            className={errors.message ? 'input-error' : ''}
                        ></textarea>
                        {errors.message && <span className="error-message">{errors.message}</span>}
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
                    {statusMessage && (
                        <div className={`status-message ${statusMessage.type}`}>
                            {statusMessage.text}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};
