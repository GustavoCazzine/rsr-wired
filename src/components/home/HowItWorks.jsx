import './home.css';

const steps = [
  {
    number: '01',
    title: 'Escolha ou peça um sistema',
    description: 'Veja o catálogo ou me conta uma ideia diferente — troca de roupa, ranking, RPG, o que precisar.',
  },
  {
    number: '02',
    title: 'A gente combina os detalhes',
    description: 'Converso com você sobre o quarto, alinho o orçamento e o prazo. Sem compromisso.',
  },
  {
    number: '03',
    title: 'Entrego funcionando',
    description: 'Desenvolvo, testo ao vivo e explico como tudo funciona pra você conseguir manter.',
  },
];

export function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">Como funciona</span>
          <h2>Do pedido à entrega</h2>
        </div>

        <div className="grid how-it-works-grid">
          {steps.map((step) => (
            <div key={step.number} className="how-it-works-step card">
              <span className="how-it-works-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
