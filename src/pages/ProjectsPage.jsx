import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <section className="card">
      <p className="eyebrow">Portafolio de aplicaciones</p>
      <h2>Proyectos con interfaz visual y enfoque profesional</h2>
      <p>En esta sección se muestran los proyectos más relevantes que he desarrollado, con capturas y tecnologías aplicadas.</p>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
