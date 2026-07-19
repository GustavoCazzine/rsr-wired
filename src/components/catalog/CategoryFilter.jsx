import './catalog.css';

export function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="category-filter" role="tablist" aria-label="Filtrar por categoria">
      {categories.map((category) => (
        <button
          key={category.id}
          role="tab"
          aria-selected={active === category.id}
          className={`category-pill ${active === category.id ? 'is-active' : ''}`}
          onClick={() => onChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
