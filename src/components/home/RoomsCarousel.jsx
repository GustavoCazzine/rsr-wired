import { useEffect, useState } from 'react';
import { useHabboRooms } from '../../hooks/useHabboRooms';
import { site } from '../../data/site';
import './home.css';

const AUTO_ADVANCE_MS = 4500;

export function RoomsCarousel() {
  const { status, rooms } = useHabboRooms(site.habboNick);
  const [index, setIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    if (rooms.length < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % rooms.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [rooms.length]);

  if (status !== 'ready' || rooms.length === 0) {
    return null;
  }

  const room = rooms[index % rooms.length];
  const src = room.thumbnailUrl || room.imageUrl;

  function goTo(nextIndex) {
    setImageFailed(false);
    setIndex((nextIndex + rooms.length) % rooms.length);
  }

  return (
    <section className="rooms-carousel">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">Ao vivo</span>
          <h2>Conheça os quartos</h2>
          <p>Direto da API do Habbo — visite qualquer um pra ver os sistemas funcionando de verdade.</p>
        </div>

        <div className="carousel card">
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            onClick={() => goTo(index - 1)}
            aria-label="Quarto anterior"
          >
            ‹
          </button>

          <a
            href={`https://www.habbo.com.br/room/${room.id}`}
            target="_blank"
            rel="noreferrer"
            className="carousel-media"
          >
            {src && !imageFailed ? (
              <img src={src} alt={room.name} onError={() => setImageFailed(true)} />
            ) : (
              <span className="carousel-placeholder" aria-hidden="true">
                🏠
              </span>
            )}
          </a>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            onClick={() => goTo(index + 1)}
            aria-label="Próximo quarto"
          >
            ›
          </button>

          <div className="carousel-info">
            <p className="carousel-room-name">{room.name}</p>
            <span className="carousel-room-rating">⭐ {room.rating ?? 0}</span>
          </div>

          {rooms.length > 1 && (
            <div className="carousel-dots">
              {rooms.map((r, dotIndex) => (
                <button
                  key={r.id}
                  type="button"
                  className={`carousel-dot ${dotIndex === index ? 'is-active' : ''}`}
                  onClick={() => goTo(dotIndex)}
                  aria-label={`Ver quarto ${r.name}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
