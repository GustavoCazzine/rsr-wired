import { getGroupBadgeImageUrl } from '../../api/habboApi';
import { EmptyState } from '../common/EmptyState';
import './player.css';

export function GroupsGrid({ groups }) {
  if (!groups || groups.length === 0) {
    return <EmptyState icon="👥" title="Nenhum grupo encontrado" />;
  }

  return (
    <div className="entity-grid">
      {groups.map((group) => (
        <div key={group.id} className="entity-card card">
          <img
            className="entity-card-badge"
            src={getGroupBadgeImageUrl(group.badgeCode)}
            alt={`Emblema do grupo ${group.name}`}
            loading="lazy"
          />
          <div>
            <p className="entity-card-title">{group.name}</p>
            {group.isAdmin && <span className="entity-card-tag">Admin</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
