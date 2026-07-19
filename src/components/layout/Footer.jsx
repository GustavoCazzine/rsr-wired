import { site } from '../../data/site';
import { useHabboUser } from '../../hooks/useHabboUser';
import './layout.css';

export function Footer() {
  const { status, user } = useHabboUser(site.habboNick);
  const isOnline = status === 'ready' && user?.online;
  const activeContacts = site.contacts.filter((contact) => contact.enabled);

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

        {activeContacts.length > 0 && (
          <div className="footer-contacts">
            {activeContacts.map((contact) => (
              <a key={contact.label} href={contact.url} className="footer-contact">
                {contact.label}: {contact.value}
              </a>
            ))}
          </div>
        )}
      </div>

      <p className="footer-note">
        Dados de jogadores fornecidos pela API pública do Habbo. Este site não é afiliado à Sulake/Habbo.
      </p>
    </footer>
  );
}
