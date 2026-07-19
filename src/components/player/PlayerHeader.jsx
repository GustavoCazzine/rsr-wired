import { getAvatarImageUrl } from '../../api/habboApi';
import './player.css';

function formatDate(isoDate) {
  if (!isoDate) return 'Data não informada';
  return new Date(isoDate).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function PlayerHeader({ player }) {
  const {
    name,
    motto,
    figureString,
    memberSince,
    profileVisible,
    currentLevel,
    currentLevelCompletePercent,
    starGemCount,
    online,
  } = player;

  return (
    <div className="player-header card">
      <div className="player-avatar-wrap">
        <img
          className="player-avatar"
          src={getAvatarImageUrl(figureString)}
          alt={`Avatar de ${name}`}
          loading="lazy"
        />
        {online !== undefined && (
          <span className={`player-status ${online ? 'is-online' : 'is-offline'}`}>
            {online ? 'Online' : 'Offline'}
          </span>
        )}
      </div>

      <div className="player-info">
        <h2>{name}</h2>
        <p className="player-motto">{motto || 'Sem missão definida.'}</p>

        <div className="player-stats">
          <div className="player-stat">
            <span className="player-stat-label">Membro desde</span>
            <span className="player-stat-value">{formatDate(memberSince)}</span>
          </div>
          {typeof starGemCount === 'number' && (
            <div className="player-stat">
              <span className="player-stat-label">Estrelas-gema</span>
              <span className="player-stat-value">{starGemCount}</span>
            </div>
          )}
        </div>

        {typeof currentLevel === 'number' && (
          <div className="player-level">
            <div className="player-level-label">
              <span>Nível {currentLevel}</span>
              <span>{currentLevelCompletePercent ?? 0}%</span>
            </div>
            <div className="player-level-bar">
              <div
                className="player-level-fill"
                style={{ width: `${Math.min(currentLevelCompletePercent ?? 0, 100)}%` }}
              />
            </div>
          </div>
        )}

        {profileVisible === false && (
          <p className="player-private-note">
            🔒 Este jogador mantém o perfil privado — apenas informações básicas estão disponíveis.
          </p>
        )}
      </div>
    </div>
  );
}
