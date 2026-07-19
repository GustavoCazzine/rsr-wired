import { site } from '../../data/site';
import './home.css';

export function CTASection() {
  return (
    <section className="cta">
      <div className="container cta-inner card">
        <div>
          <h2>Visite o quarto oficial</h2>
          <p>
            Veja os sistemas funcionando na prática no quarto <strong>{site.habboRoomName}</strong>, de{' '}
            <strong>{site.habboNick}</strong>.
          </p>
        </div>
        <a href={site.habboRoomUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
          Ir para o quarto
        </a>
      </div>
    </section>
  );
}
