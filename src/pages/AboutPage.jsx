import { FaCode, FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import { MdContactMail, MdSchool, MdWork } from 'react-icons/md';

const skills = [
  { label: 'React', percent: '85%' },
  { label: 'React Native', percent: '80%' },
  { label: 'JavaScript', percent: '85%' },
  { label: 'Node.js', percent: '85%' },
  { label: 'C#/.NET', percent: '85%' },
  { label: 'Java Spring Boot', percent: '85%' },
  { label: 'MySQL / SQL Server', percent: '85%' },
  { label: 'MongoDB / PostgreSQL', percent: '85%' },
  { label: 'HTML & CSS', percent: '90%' },
  { label: 'Docker', percent: '85%' },
];

export default function AboutPage() {
  return (
    <>
      <section className="card">
        <p className="eyebrow">Acerca de mí</p>
        <h2>Diseño soluciones modernas con enfoque real.</h2>
        <p>Me apasiona crear plataformas que combinan buen diseño, rendimiento y utilidad. Desde interfaces claras hasta APIs y bases de datos, busco que cada proyecto sea funcional, escalable y fácil de mantener.</p>
      </section>

      <section className="grid-2">
        <article className="card info-grid">
          <div className="info-pill"><MdContactMail /> <strong>Teléfono:</strong> 3697-1792</div>
          <div className="info-pill"><MdSchool /> <strong>Educación:</strong> 6to Perito en Informática</div>
          <div className="info-pill"><FaLaptopCode /> <strong>Experiencia:</strong> 3 años relacionados con programación</div>
          <div className="info-pill"><MdWork /> <strong>Enfoque:</strong> Frontend, backend y desarrollo móvil</div>
        </article>

        <article className="card">
          <p className="eyebrow">Perfil</p>
          <h3>Lo que puedo aportar</h3>
          <p>Construyo soluciones con orden, lógica y estética. Mi objetivo es convertir ideas en herramientas útiles para empresas, negocios y usuarios finales.</p>
        </article>
      </section>

      <section className="card">
        <p className="eyebrow">Habilidades</p>
        <h2>Tecnologías y herramientas que manejo</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.label} className="skill-card">
              <div className="skill-row"><strong>{skill.label}</strong><span>{skill.percent}</span></div>
              <div className="bar-track"><div className="bar-fill" style={{ width: skill.percent }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid-3">
        <article className="card mini-card"><FaCode className="icon" /><h3>Frontend</h3><p>React, HTML, CSS y Tailwind para experiencias atractivas y con diseño responsivo.</p></article>
        <article className="card mini-card"><FaServer className="icon" /><h3>Backend</h3><p>Node.js, .NET y Java Spring Boot para construir APIs y lógica de negocio sólida.</p></article>
        <article className="card mini-card"><FaMobileAlt className="icon" /><h3>Mobile</h3><p>React Native para soluciones móviles rápidas, funcionales y enfocadas en el usuario.</p></article>
      </section>

      <section className="card">
        <p className="eyebrow">Currículum</p>
        <h2>Educación, práctica y trayectoria</h2>
        <p className="small-note">Puedes descargar mi currículum completo para conocer más detalles de mi formación y experiencia.</p>
        <a className="button primary" href="/CV-Zimri-Lopez.pdf" download="CV-Zimri-Lopez.pdf">
          Descargar currículum
        </a>
        <div className="timeline-grid">
          <div>
            <h3>Educación</h3>
            <ul>
              <li>Centro Educativo Técnico Laboral Kinal</li>
              <li>6to Perito en Informática</li>
              <li>Enfoque en desarrollo web, móvil y programación lógica</li>
            </ul>
          </div>
          <div>
            <h3>Experiencia</h3>
            <ul>
              <li>Proyectos con .NET, Node.js, JavaScript, React y React Native</li>
              <li>Desarrollo de sistemas para restaurantes, banca y peluquería</li>
              <li>Práctica con Docker, Git, bases de datos y arquitectura básica</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
