import './common.css';

export function ErrorMessage({ title = 'Algo deu errado', message }) {
  return (
    <div className="state-box state-box-error" role="alert">
      <strong>{title}</strong>
      {message && <p>{message}</p>}
    </div>
  );
}
