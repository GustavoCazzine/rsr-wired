import { EmptyState } from '../common/EmptyState';
import './player.css';

export function RoomsGrid({ rooms }) {
  if (!rooms || rooms.length === 0) {
    return <EmptyState icon="🏠" title="Nenhum quarto público encontrado" />;
  }

  return (
    <div className="room-grid">
      {rooms.map((room) => (
        <div key={room.id} className="room-card card">
          <div className="room-card-media">
            {room.thumbnailUrl ? (
              <img src={room.thumbnailUrl} alt={room.name} loading="lazy" />
            ) : (
              <span aria-hidden="true">🏠</span>
            )}
          </div>
          <div className="room-card-body">
            <p className="room-card-title">{room.name}</p>
            <span className="room-card-rating">⭐ {room.rating ?? 0}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
