import { useState } from 'react';
import { useHabboRooms } from '../../hooks/useHabboRooms';
import { site } from '../../data/site';
import { Loader } from '../common/Loader';
import './portfolio.css';

export function LiveRooms() {
  const { status, rooms } = useHabboRooms(site.habboNick);

  if (status === 'loading') {
    return <Loader label="Carregando quartos..." />;
  }

  if (status === 'error' || rooms.length === 0) {
    return null;
  }

  return (
    <section className="live-rooms">
      <h2 className="live-rooms-title">Quartos ativos agora</h2>
      <p className="live-rooms-subtitle">
        Direto da API do Habbo — visite qualquer um deles pra ver sistemas de wired funcionando ao vivo.
      </p>

      <div className="grid live-rooms-grid">
        {rooms.map((room) => (
          <LiveRoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}

export function LiveRoomCard({ room }) {
  const [imageFailed, setImageFailed] = useState(false);
  const src = room.thumbnailUrl || room.imageUrl;

  return (
    <a
      href={`https://www.habbo.com.br/room/${room.id}`}
      target="_blank"
      rel="noreferrer"
      className="live-room-card card"
    >
      <div className="live-room-media">
        {src && !imageFailed ? (
          <img src={src} alt={room.name} loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <span className="live-room-placeholder" aria-hidden="true">
            🏠
          </span>
        )}
      </div>
      <div className="live-room-body">
        <p className="live-room-name">{room.name}</p>
        <span className="live-room-rating">⭐ {room.rating ?? 0}</span>
      </div>
    </a>
  );
}
