import './portfolio.css';

export function ProjectCard({ project }) {
  const content = (
    <article className="project-card card">
      <div className="project-card-media">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div>
            <span className="project-card-placeholder" aria-hidden="true">
              🧱
            </span>
            <span className="project-card-placeholder-note">print em breve</span>
          </div>
        )}
      </div>
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );

  if (!project.roomUrl) {
    return content;
  }

  return (
    <a href={project.roomUrl} target="_blank" rel="noreferrer" className="project-card-link">
      {content}
    </a>
  );
}
