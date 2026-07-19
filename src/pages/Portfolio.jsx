import { portfolio } from '../data/portfolio';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { LiveRooms } from '../components/portfolio/LiveRooms';
import { EmptyState } from '../components/common/EmptyState';

export function Portfolio() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">Portfólio</span>
          <h1>Trabalhos já entregues</h1>
          <p>Alguns exemplos de sistemas de wired desenvolvidos para quartos do Habbo.</p>
        </div>

        {portfolio.length === 0 ? (
          <EmptyState title="Nenhum projeto cadastrado ainda" />
        ) : (
          <div className="grid portfolio-grid">
            {portfolio.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <LiveRooms />
      </div>
    </div>
  );
}
