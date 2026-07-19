import { Link } from 'react-router-dom';
import { Tag } from '../common/Tag';
import './catalog.css';

export function ServiceCard({ service }) {
  return (
    <Link to={`/catalogo/${service.id}`} className="service-card-link">
      <article className="service-card card">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-card-tags">
          {service.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="service-card-footer">
          <span className="service-card-price">{service.price}</span>
          <span className="service-card-more">Ver detalhes →</span>
        </div>
      </article>
    </Link>
  );
}
