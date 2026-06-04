import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import profileImage from '../assets/Foto.jpeg';

export default function HomePage() {
  return (
    <>
      <section className="hero card">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="eyebrow">Portafolio profesional</p>
          <h1>El trabajo bien hecho, desarrollador Full Stack.</h1>
          <TypeAnimation sequence={['React', 1200, 'React Native', 1200, 'Node.js', 1200, 'Java Spring Boot', 1200]} wrapper="span" speed={50} repeat={Infinity} className="typed-text" />
          <p className="lead">Soy Zimri López, estudiante de 6to Perito en Informática con 3 años de experiencia práctica en desarrollo web y móvil. Construyo soluciones funcionales, limpias y con enfoque profesional.</p>
          <div className="action-row">
            <Link className="button primary" to="/projects">Ver proyectos</Link>
            <Link className="button secondary" to="/contact">Contactar</Link>
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }}>
          <div className="profile-card">
            <img src={profileImage} alt="Zimri López" />
            <div className="profile-meta">
              <h2>Zimri López</h2>
              <p>Desarrollador Full Stack</p>
              <span>Guatemala · 20 años</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid-2">
        <article className="card">
          <p className="eyebrow">Resumen</p>
          <h2>Soluciones reales, diseño moderno y enfoque profesional.</h2>
          <p>Esta sección funciona como puerta de entrada a mi perfil: presento mi visión, mi experiencia y el tipo de proyectos que desarrollo.</p>
        </article>
        <article className="card">
          <p className="eyebrow">Enfoque</p>
          <ul className="simple-list">
            <li>Frontend con React y diseño responsivo</li>
            <li>Backend con Node.js, .NET y Spring Boot</li>
            <li>Aplicaciones móviles con React Native</li>
          </ul>
        </article>
      </section>
    </>
  );
}
