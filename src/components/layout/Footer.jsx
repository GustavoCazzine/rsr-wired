import { site } from '../../data/site';
import { useHabboUser } from '../../hooks/useHabboUser';
import './layout.css';

export function Footer() {
  const { status, user } = useHabboUser(site.habboNick);
  const isOnline = status === 'ready' && user?.online;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-title">
            {site.name}
            {status === 'ready' && (
              <span className={`footer-status ${isOnline ? 'is-online' : 'is-offline'}`}>
                {isOnline ? '🟢 Online agora' : '⚫ Offline'}
              </span>
            )}
          </p>
          <p className="footer-text">{site.tagline}</p>
        </div>

        <div className="footer-contacts">
          {site.contacts.map((contact) => (
            <a key={contact.label} href={contact.url} className="footer-contact">
              {contact.label}: {contact.value}
            </a>
          ))}
        </div>
      </div>

      <p className="footer-note">
        Dados de jogadores fornecidos pela API pública do Habbo. Este site não é afiliado à Sulake/Habbo.
      </p>
    </footer>
  );
}
