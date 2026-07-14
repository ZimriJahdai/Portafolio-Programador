import { useState } from 'react';
import ImageModal from './ImageModal';

export default function ProjectCard({ project }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <article className={`project-card ${project.accent}`}>
        <button className="image-button" onClick={() => setActiveImage(project.image)}>
          <img src={project.image} alt={project.title} className="project-image" />
        </button>
        <div className="project-content">
          <p className="eyebrow">Proyecto destacado</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="stack-tags">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          {project.secondaryImage ? (
            <button className="image-button thumb-button" onClick={() => setActiveImage(project.secondaryImage)}>
              <img src={project.secondaryImage} alt={`${project.title} vista adicional`} className="project-thumb" />
            </button>
          ) : null}
        </div>
      </article>

      <ImageModal image={activeImage} alt={project.title} onClose={() => setActiveImage(null)} />
    </>
  );
}
