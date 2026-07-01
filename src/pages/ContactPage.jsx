import { useState } from 'react';
import ImageModal from '../components/ImageModal';
import githubImage from '../assets/GitHub.png';
import linkedinImage from '../assets/Linkend.png';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

const initialContactForm = { name: '', company: '', email: '', message: '' };

export default function ContactPage() {
  const [activeImage, setActiveImage] = useState(null);

  const [cvEmail, setCvEmail] = useState('');
  const [cvStatus, setCvStatus] = useState({ state: 'idle', message: '' });

  const [contactForm, setContactForm] = useState(initialContactForm);
  const [contactStatus, setContactStatus] = useState({ state: 'idle', message: '' });

  async function handleSendCv(event) {
    event.preventDefault();
    setCvStatus({ state: 'loading', message: '' });

    try {
      const response = await fetch(`${API_URL}/send-cv`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cvEmail }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'No se pudo enviar el CV.');

      setCvStatus({ state: 'success', message: '¡CV enviado! Revisa tu bandeja de entrada.' });
      setCvEmail('');
    } catch (error) {
      setCvStatus({ state: 'error', message: error.message });
    }
  }

  async function handleContactSubmit(event) {
    event.preventDefault();
    setContactStatus({ state: 'loading', message: '' });

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'No se pudo enviar tu mensaje.');

      setContactStatus({ state: 'success', message: '¡Mensaje enviado! Te responderé lo antes posible.' });
      setContactForm(initialContactForm);
    } catch (error) {
      setContactStatus({ state: 'error', message: error.message });
    }
  }

  return (
    <>
      <section className="card contact-card">
        <p className="eyebrow">Contacto</p>
        <h2>Conectemos para nuevas oportunidades</h2>
        <p>Estoy abierto a proyectos, prácticas y oportunidades de crecimiento profesional en desarrollo web y móvil.</p>

        <div className="contact-grid">
          <button className="contact-preview card" onClick={() => setActiveImage(linkedinImage)}>
            <img src={linkedinImage} alt="Vista de LinkedIn" className="contact-photo" />
            <span>LinkedIn</span>
          </button>

          <button className="contact-preview card" onClick={() => setActiveImage(githubImage)}>
            <img src={githubImage} alt="Vista de GitHub" className="contact-photo" />
            <span>GitHub</span>
          </button>
        </div>

        <p className="small-note">Al abrir cualquiera de estas imágenes podrás verla completa para revisar tu perfil de contacto.</p>
      </section>

      <div className="grid-2">
        <section className="card">
          <p className="eyebrow">Recibe mi CV</p>
          <h3>Solicítalo por correo</h3>
          <p className="small-note">Escribe tu correo y te enviaré mi CV en PDF al instante.</p>

          <form className="contact-form" onSubmit={handleSendCv}>
            <label htmlFor="cv-email">Tu correo electrónico</label>
            <input
              id="cv-email"
              type="email"
              required
              placeholder="tucorreo@empresa.com"
              value={cvEmail}
              onChange={(event) => setCvEmail(event.target.value)}
            />
            <button className="button primary full" type="submit" disabled={cvStatus.state === 'loading'}>
              {cvStatus.state === 'loading' ? 'Enviando…' : 'Enviarme el CV'}
            </button>
            {cvStatus.state === 'success' && <p className="form-feedback success">{cvStatus.message}</p>}
            {cvStatus.state === 'error' && <p className="form-feedback error">{cvStatus.message}</p>}
          </form>
        </section>

        <section className="card">
          <p className="eyebrow">¿Buscas talento?</p>
          <h3>Cuéntame sobre tu oportunidad</h3>
          <p className="small-note">Si tu empresa está interesada en contactarme, completa este formulario.</p>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label htmlFor="contact-name">Nombre</label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Tu nombre"
              value={contactForm.name}
              onChange={(event) => setContactForm({ ...contactForm, name: event.target.value })}
            />

            <label htmlFor="contact-company">Empresa (opcional)</label>
            <input
              id="contact-company"
              type="text"
              placeholder="Nombre de tu empresa"
              value={contactForm.company}
              onChange={(event) => setContactForm({ ...contactForm, company: event.target.value })}
            />

            <label htmlFor="contact-email">Correo electrónico</label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="tucorreo@empresa.com"
              value={contactForm.email}
              onChange={(event) => setContactForm({ ...contactForm, email: event.target.value })}
            />

            <label htmlFor="contact-message">Mensaje</label>
            <textarea
              id="contact-message"
              required
              rows={4}
              placeholder="Cuéntame sobre la oportunidad..."
              value={contactForm.message}
              onChange={(event) => setContactForm({ ...contactForm, message: event.target.value })}
            />

            <button className="button primary full" type="submit" disabled={contactStatus.state === 'loading'}>
              {contactStatus.state === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
            </button>
            {contactStatus.state === 'success' && <p className="form-feedback success">{contactStatus.message}</p>}
            {contactStatus.state === 'error' && <p className="form-feedback error">{contactStatus.message}</p>}
          </form>
        </section>
      </div>

      <ImageModal image={activeImage} alt="Vista de contacto" onClose={() => setActiveImage(null)} />
    </>
  );
}
