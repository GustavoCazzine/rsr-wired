import { useState } from 'react';
import { getAvatarImageUrl } from '../../api/habboApi';
import { EmptyState } from '../common/EmptyState';
import './player.css';

const PAGE_SIZE = 12;

export function FriendsGrid({ friends }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  if (!friends || friends.length === 0) {
    return <EmptyState icon="🤝" title="Nenhum amigo público encontrado" />;
  }

  const visibleFriends = friends.slice(0, visibleCount);
  const hasMore = visibleCount < friends.length;

  return (
    <div>
      <div className="friend-grid">
        {visibleFriends.map((friend) => (
          <div key={friend.uniqueId} className="friend-card card">
            <img
              className="friend-avatar"
              src={getAvatarImageUrl(friend.figureString, { size: 's', direction: 2, headDirection: 3 })}
              alt={`Avatar de ${friend.name}`}
              loading="lazy"
            />
            <div>
              <p className="friend-name">{friend.name}</p>
              <p className="friend-motto">{friend.motto || '—'}</p>
            </div>
            <span className={`friend-status ${friend.online ? 'is-online' : ''}`} aria-hidden="true" />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="friend-grid-more">
          <button className="btn btn-secondary" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
            Mostrar mais ({friends.length - visibleCount} restantes)
          </button>
        </div>
      )}
    </div>
  );
}
