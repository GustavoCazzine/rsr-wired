import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAvatarImageUrl } from '../../api/habboApi';
import { useVisitor } from '../../context/VisitorContext';
import { site } from '../../data/site';
import './home.css';

const DISMISS_KEY = 'wiredhouse_welcome_dismissed';

export function WelcomeCard() {
  const { player, status, isGroupMember, connect, disconnect } = useVisitor();
  const [nickInput, setNickInput] = useState('');
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem(DISMISS_KEY) === '1');
  const isConnected = status === 'found' && player;

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = nickInput.trim();
    if (trimmed) connect(trimmed);
  }

  function handleDismiss() {
    sessionStorage.setItem(DISMISS_KEY, '1');
    setDismissed(true);
  }

  // O convite pra conectar sempre fica visível — só dá pra fechar o card
  // depois de conectado, quando ele vira uma saudação (não é mais essencial).
  if (dismissed && isConnected) return null;

  return (
    <div className="welcome-card-wrap">
      <div className="container">
        <div className="welcome-card">
          {isConnected && (
            <button type="button" className="welcome-card-close" onClick={handleDismiss} aria-label="Fechar">
              ✕
            </button>
          )}

          {isConnected ? (
            <div className="welcome-card-greeting">
              <img
                className="welcome-card-avatar"
                src={getAvatarImageUrl(player.figureString, { size: 's' })}
                alt={`Avatar de ${player.name}`}
              />
              <div className="welcome-card-greeting-info">
                <p className="welcome-card-title">Conectado como {player.name}!</p>

                {isGroupMember === true && (
                  <span className="welcome-card-group-tag is-member">
                    🐀 Membro da {site.habboGroup.name}
                  </span>
                )}
                {isGroupMember === false && (
                  <span className="welcome-card-group-tag">Ainda não faz parte da {site.habboGroup.name}</span>
                )}

                <div className="welcome-card-links">
                  <Link to={`/buscar?nick=${encodeURIComponent(player.name)}`}>Ver seu perfil completo →</Link>
                  <button type="button" className="welcome-card-forget" onClick={disconnect}>
                    desconectar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form className="welcome-card-form" onSubmit={handleSubmit}>
              <div className="welcome-card-copy">
                <p className="welcome-card-title">👋 Essa é sua conta?</p>
                <p className="welcome-card-subtitle">
                  Digite seu nick do Habbo pra personalizar sua visita com seu avatar (fica salvo neste navegador).
                </p>
              </div>
              <div className="welcome-card-input-row">
                <input
                  type="text"
                  value={nickInput}
                  onChange={(event) => setNickInput(event.target.value)}
                  placeholder="Seu nick exato"
                  aria-label="Seu nick no Habbo"
                  autoComplete="off"
                />
                <button type="submit" className="btn btn-primary" disabled={status === 'loading' || !nickInput.trim()}>
                  {status === 'loading' ? 'Conectando...' : 'Conectar'}
                </button>
              </div>
              {status === 'notfound' && (
                <p className="welcome-card-error">Nick não encontrado — confira e tente de novo.</p>
              )}
              {status === 'error' && (
                <p className="welcome-card-error">Não deu pra conectar agora. Tente novamente.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
