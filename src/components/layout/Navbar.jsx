import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { site } from '../../data/site';
import { useVisitor } from '../../context/VisitorContext';
import { getAvatarImageUrl } from '../../api/habboApi';
import './layout.css';

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/buscar', label: 'Buscar Jogador' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { player, status } = useVisitor();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="navbar-brand-badge" aria-hidden="true">
            <img src="/favicon-head.png" alt="" />
          </span>
          {site.name}
        </NavLink>

        <div className="navbar-right">
          {status === 'found' && player ? (
            <NavLink
              to={`/buscar?nick=${encodeURIComponent(player.name)}`}
              className="navbar-account"
              onClick={() => setOpen(false)}
            >
              <img
                className="navbar-account-avatar"
                src={getAvatarImageUrl(player.figureString, { size: 's', headOnly: true })}
                alt={`Avatar de ${player.name}`}
              />
              <span className="navbar-account-name">{player.name}</span>
            </NavLink>
          ) : (
            <NavLink to="/" className="navbar-account navbar-account-connect" onClick={() => setOpen(false)}>
              Conectar
            </NavLink>
          )}

          <button
            className="navbar-toggle"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`navbar-links ${open ? 'is-open' : ''}`}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `navbar-link ${isActive ? 'is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
