import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';
import 'remixicon/fonts/remixicon.css';

// Las interfaces no cambian
interface FormData {
  name: string;
  email: string;
  message: string;
}
type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
    packageName?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ packageName }) => {
  // La lógica del estado y el envío se mantiene igual
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: packageName ? `Quiero el paquete: ${packageName}\n` : ""
  });
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/xeokkokw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        console.error("Error de Formspree:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
    }
  };

  // --- VARIANTE DE ANIMACIÓN CORREGIDA ---
  // Ahora la variante "visible" es una función que acepta un índice (i)
  // para crear un retraso escalonado (staggered delay).
  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // El retraso ahora está aquí
        duration: 0.6,
        ease: 'easeOut'
      }
    }),
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div className="contact-card">

          {/* --- COLUMNA IZQUIERDA --- */}
          <motion.div 
            className="contact-info"
            custom={0} // Índice 0, tendrá un retraso de 0s
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Información de Contacto</h3>
            <p>Estamos aquí para ayudarte a crecer. Contáctanos durante nuestro horario laboral.</p>
            
            <ul className="schedule-list">
              <li><i className="ri-calendar-line"></i> <strong>Lunes a Viernes:</strong> 8:00 AM - 10:00 PM</li>
              <li><i className="ri-time-line"></i> <strong>Sábado:</strong> 10:00 AM - 5:00 PM</li>
              <li><i className="ri-close-circle-line"></i> <strong>Domingo:</strong> Cerrado</li>
            </ul>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.222769919572!2d-82.3888593247926!3d23.12602017904221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d274f26a1b025b%3A0x44254ada4f63d274!2sEl%20Capitolio!5e1!3m2!1ses-419!2scu!4v1687554982635!5m2!1ses-419!2scu"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la Agencia"
              ></iframe>
            </div>
          </motion.div>

          {/* --- COLUMNA DERECHA --- */}
          <motion.div 
            className="contact-form-wrapper"
            custom={1} // Índice 1, tendrá un retraso de 0.2s
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            // El viewport ahora está limpio, sin el 'delay' incorrecto
            viewport={{ once: true }}
          >
            <h2>Hablemos de tu Proyecto</h2>
            <p className="subtitle">
              Completa el formulario o contáctanos por WhatsApp.
            </p>
            {packageName && (
              <div className="selected-package">
                <i className="ri-gift-line"></i>
                <strong>Paquete seleccionado:</strong> {packageName}
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Tu nombre completo"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="ejemplo@correo.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} placeholder="Cuéntanos sobre tu idea o negocio..."></textarea>
                </div>
                
                <motion.button type="submit" className="btn btn-submit" disabled={status === 'submitting'} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                </motion.button>

                {status === 'success' && <p className="status-message success">¡Mensaje enviado! Gracias por contactarnos.</p>}
                {status === 'error' && <p className="status-message error">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>}
            </form>

            <div className="divider"><span>O</span></div>
            
            <motion.a href="https://wa.me/5359518974" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <i className="ri-whatsapp-fill"></i>
              Chatear por WhatsApp
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


