import { useState } from 'react';
import ImageModal from '../components/ImageModal';
import githubImage from '../assets/GitHub.png';
import linkedinImage from '../assets/Linkend.png';

export default function ContactPage() {
  const [activeImage, setActiveImage] = useState(null);

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

      <ImageModal image={activeImage} alt="Vista de contacto" onClose={() => setActiveImage(null)} />
    </>
  );
}
