import './common.css';

export function EmptyState({ title, message, icon = '🔍' }) {
  return (
    <div className="state-box state-box-empty">
      <span className="state-box-icon" aria-hidden="true">
        {icon}
      </span>
      <strong>{title}</strong>
      {message && <p>{message}</p>}
    </div>
  );
}
