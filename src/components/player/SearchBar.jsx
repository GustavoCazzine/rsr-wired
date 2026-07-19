import { useState } from 'react';
import './player.css';

export function SearchBar({ onSearch, loading, initialValue = '' }) {
  const [value, setValue] = useState(initialValue);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = value.trim();
    if (trimmed) {
      onSearch(trimmed);
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Digite o nick exato do jogador (ex: Bia)"
        aria-label="Nick do jogador no Habbo"
        autoComplete="off"
      />
      <button type="submit" className="btn btn-primary" disabled={loading || !value.trim()}>
        {loading ? 'Buscando...' : 'Buscar'}
      </button>
    </form>
  );
}
