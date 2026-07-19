import { getAvatarImageUrl } from '../../api/habboApi';
import { useHabboUser } from '../../hooks/useHabboUser';
import { site } from '../../data/site';
import './about.css';

export function PartnerCard() {
  const { status, user } = useHabboUser(site.partner.nick);

  if (status !== 'ready' || !user) {
    return null;
  }

  return (
    <div className="partner-card card">
      <img
        className="partner-card-avatar"
        src={getAvatarImageUrl(user.figureString, { size: 'm' })}
        alt={`Avatar de ${user.name}`}
      />
      <div>
        <p className="partner-card-role">{site.partner.role}</p>
        <p className="partner-card-name">{user.name}</p>
        <p className="partner-card-motto">"{user.motto || 'Sem missão definida.'}"</p>
      </div>
    </div>
  );
}
