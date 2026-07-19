import { useEffect, useState } from 'react';
import {
  searchUserByName,
  getUserProfile,
  getAvatarImageUrl,
  getGroupBadgeImageUrl,
  getBadgeImageUrl,
} from '../../api/habboApi';
import { site } from '../../data/site';
import { Loader } from '../common/Loader';
import './about.css';

function formatMonthYear(isoDate) {
  if (!isoDate) return '—';
  return new Date(isoDate).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' });
}

export function CreatorCard() {
  const [state, setState] = useState({ status: 'loading', user: null, isGroupAdmin: false });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const user = await searchUserByName(site.habboNick);
        let isGroupAdmin = false;

        if (user.profileVisible) {
          try {
            const profile = await getUserProfile(user.uniqueId);
            const membership = (profile.groups ?? []).find((group) => group.id === site.habboGroup.id);
            isGroupAdmin = Boolean(membership?.isAdmin);
          } catch {
            // Grupo é só um detalhe a mais — segue sem ele se a chamada falhar.
          }
        }

        if (!cancelled) setState({ status: 'ready', user, isGroupAdmin });
      } catch {
        if (!cancelled) setState({ status: 'error', user: null, isGroupAdmin: false });
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === 'loading') {
    return <Loader label="Carregando perfil..." />;
  }

  if (state.status === 'error' || !state.user) {
    return null;
  }

  const { user, isGroupAdmin } = state;

  return (
    <div className="creator-card card">
      <div className="creator-card-avatar-wrap">
        <img
          className="creator-card-avatar"
          src={getAvatarImageUrl(user.figureString, { size: 'l' })}
          alt={`Avatar de ${user.name}`}
        />
        {user.online && <span className="creator-card-online">Online agora</span>}
      </div>

      <div className="creator-card-body">
        <p className="creator-card-eyebrow">Criador da {site.name}</p>
        <h2 className="creator-card-name">{user.name}</h2>
        <p className="creator-card-motto">"{user.motto || 'Sem missão definida.'}"</p>

        <div className="creator-card-stats">
          <div>
            <span className="creator-card-stat-label">No Habbo desde</span>
            <span className="creator-card-stat-value">{formatMonthYear(user.memberSince)}</span>
          </div>
          {typeof user.currentLevel === 'number' && (
            <div>
              <span className="creator-card-stat-label">Nível</span>
              <span className="creator-card-stat-value">{user.currentLevel}</span>
            </div>
          )}
          {typeof user.starGemCount === 'number' && (
            <div>
              <span className="creator-card-stat-label">Estrelas-gema</span>
              <span className="creator-card-stat-value">{user.starGemCount}</span>
            </div>
          )}
        </div>

        {typeof user.currentLevelCompletePercent === 'number' && (
          <div className="creator-card-level">
            <div className="creator-card-level-label">
              <span>Nível {user.currentLevel}</span>
              <span>{user.currentLevelCompletePercent}%</span>
            </div>
            <div className="creator-card-level-bar">
              <div
                className="creator-card-level-fill"
                style={{ width: `${Math.min(user.currentLevelCompletePercent, 100)}%` }}
              />
            </div>
          </div>
        )}

        {user.selectedBadges?.length > 0 && (
          <div className="creator-card-badges">
            {user.selectedBadges.map((badge) => (
              <img
                key={badge.code}
                className="creator-card-badge"
                src={getBadgeImageUrl(badge.code)}
                alt={badge.name}
                title={badge.name}
                loading="lazy"
              />
            ))}
          </div>
        )}

        <div className="creator-card-group">
          <img
            className="creator-card-group-badge"
            src={getGroupBadgeImageUrl(site.habboGroup.badgeCode)}
            alt={`Emblema do grupo ${site.habboGroup.name}`}
          />
          <div>
            <p className="creator-card-group-name">{site.habboGroup.name}</p>
            <p className="creator-card-group-note">
              Grupo oficial do quarto dos sistemas{isGroupAdmin ? ' • dono do grupo' : ''}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
