import { Link, useParams } from 'react-router-dom';
import { categories, services } from '../data/services';
import { site } from '../data/site';
import { EmptyState } from '../components/common/EmptyState';
import { Tag } from '../components/common/Tag';
import '../components/catalog/catalog.css';

export function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <div className="page">
        <div className="container">
          <EmptyState
            icon="🧩"
            title="Sistema não encontrado"
            message="Esse sistema não existe ou foi removido do catálogo."
          />
          <p className="service-detail-notfound-action">
            <Link to="/catalogo" className="btn btn-primary">
              Voltar ao catálogo
            </Link>
          </p>
        </div>
      </div>
    );
  }

  const categoryLabel = categories.find((cat) => cat.id === service.category)?.label ?? service.category;
  const primaryContact = site.contacts.find((contact) => contact.enabled);

  return (
    <div className="page">
      <div className="container">
        <div className="service-detail-header">
          <Link to="/catalogo" className="service-detail-back">
            ← Voltar ao catálogo
          </Link>
          <span className="eyebrow">{categoryLabel}</span>
          <h1>{service.title}</h1>
          <p className="service-detail-lead">{service.longDescription}</p>
          <div className="service-detail-tags">
            {service.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className="service-detail-grid">
          <div>
            <section className="service-detail-section card">
              <h2>Cenário de uso</h2>
              <p>{service.scenario}</p>
            </section>

            <section className="service-detail-section card">
              <h2>Como funciona</h2>
              <ol className="service-detail-steps">
                {service.howItWorks.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="service-detail-section card">
              <h2>Como eu atuo</h2>
              <p>
                Converso com você pra entender o objetivo do sistema no seu quarto, desenho a mecânica, programo e
                testo tudo ao vivo antes de entregar. Depois da entrega, explico como o sistema funciona por dentro
                pra você conseguir manter ou pedir ajustes no futuro.
              </p>
            </section>
          </div>

          <aside className="service-detail-side card">
            <span className="service-detail-price">{service.price}</span>
            {primaryContact ? (
              <a href={primaryContact.url} className="btn btn-primary">
                Pedir esse sistema
              </a>
            ) : (
              <a href={site.habboRoomUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Pedir esse sistema
              </a>
            )}
            <Link to="/portfolio" className="btn btn-secondary">
              Ver trabalhos entregues
            </Link>
            <span className="service-detail-category">Categoria: {categoryLabel}</span>
          </aside>
        </div>
      </div>
    </div>
  );
}
