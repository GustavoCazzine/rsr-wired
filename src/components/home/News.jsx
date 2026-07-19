import { news } from '../../data/news';
import './home.css';

function formatDate(isoDate) {
  // Parse the date-only string as local time (not UTC) to avoid an off-by-one-day
  // shift when the visitor's timezone is behind UTC.
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
}

export function News() {
  if (news.length === 0) return null;

  return (
    <section className="news">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">Novidades</span>
          <h2>O que rolou por aqui</h2>
        </div>

        <div className="news-list">
          {news.map((item) => (
            <article key={item.id} className="news-item card">
              <span className="news-date">{formatDate(item.date)}</span>
              <div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
