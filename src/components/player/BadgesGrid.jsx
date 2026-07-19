import { getBadgeImageUrl } from '../../api/habboApi';
import { EmptyState } from '../common/EmptyState';
import './player.css';

export function BadgesGrid({ badges }) {
  if (!badges || badges.length === 0) {
    return <EmptyState icon="🎖️" title="Nenhum emblema encontrado" />;
  }

  return (
    <div className="badges-grid">
      {badges.map((badge) => (
        <div key={badge.code} className="badge-item" title={`${badge.name}\n${badge.description ?? ''}`}>
          <img src={getBadgeImageUrl(badge.code)} alt={badge.name} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
