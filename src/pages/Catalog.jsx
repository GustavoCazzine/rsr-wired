import { useMemo, useState } from 'react';
import { categories, services } from '../data/services';
import { CategoryFilter } from '../components/catalog/CategoryFilter';
import { ServiceCard } from '../components/catalog/ServiceCard';
import { FAQ } from '../components/catalog/FAQ';
import { EmptyState } from '../components/common/EmptyState';

export function Catalog() {
  const [active, setActive] = useState('todos');

  const filtered = useMemo(
    () => (active === 'todos' ? services : services.filter((service) => service.category === active)),
    [active]
  );

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">Catálogo</span>
          <h1>Sistemas de wired disponíveis</h1>
          <p>Escolha uma categoria ou peça um sistema sob medida para o seu quarto.</p>
        </div>

        <p className="catalog-pricing-note">
          💬 <span>
            Todo sistema é orçado sob medida — o valor depende da complexidade. Clique em qualquer card pra ver
            detalhes e falar comigo <strong>sem compromisso</strong>.
          </span>
        </p>

        <CategoryFilter categories={categories} active={active} onChange={setActive} />

        {filtered.length === 0 ? (
          <EmptyState title="Nenhum sistema nessa categoria ainda" />
        ) : (
          <div className="grid service-grid">
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        <FAQ />
      </div>
    </div>
  );
}
