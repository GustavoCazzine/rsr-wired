import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import './home.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <span className="eyebrow">Sistemas de Wired • Habbo</span>
        <h1>{site.tagline}</h1>
        <p className="hero-description">{site.description}</p>

        <div className="hero-actions">
          <Link to="/catalogo" className="btn btn-primary">
            Ver catálogo
          </Link>
          <Link to="/buscar" className="btn btn-secondary">
            Buscar jogador
          </Link>
        </div>
      </div>
    </section>
  );
}
