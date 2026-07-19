import './home.css';

const features = [
  {
    icon: '🧩',
    title: 'Sistemas prontos',
    description: 'Trocas de roupa, rankings, sorteios e batalhas já testados e prontos para o seu quarto.',
  },
  {
    icon: '🛠️',
    title: 'Sob medida',
    description: 'Tem uma ideia diferente? Desenvolvo sistemas de wired personalizados do zero.',
  },
  {
    icon: '🔎',
    title: 'Busca de jogadores',
    description: 'Pesquise qualquer nick do Habbo BR e veja emblemas, grupos, quartos e amigos.',
  },
];

export function Features() {
  return (
    <section className="features">
      <div className="container features-grid">
        {features.map((feature) => (
          <div className="feature-card card" key={feature.title}>
            <span className="feature-icon" aria-hidden="true">
              {feature.icon}
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
