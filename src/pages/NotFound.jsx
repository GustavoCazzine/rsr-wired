import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="page">
      <div className="container page-header">
        <span className="eyebrow">404</span>
        <h1>Página não encontrada</h1>
        <p>A página que você procura não existe ou foi movida.</p>
        <Link to="/" className="btn btn-primary">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
