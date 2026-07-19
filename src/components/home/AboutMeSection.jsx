import { CreatorCard } from '../about/CreatorCard';
import { PartnerCard } from '../about/PartnerCard';
import './home.css';

export function AboutMeSection() {
  return (
    <section className="about-me" id="sobre-mim">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">Sobre mim</span>
          <h2>Quem faz os sistemas</h2>
        </div>

        <CreatorCard />
        <PartnerCard />
      </div>
    </section>
  );
}
