import { useState } from 'react';
import './catalog.css';

const questions = [
  {
    question: 'Como funciona o valor de cada sistema?',
    answer:
      'O valor varia de acordo com a complexidade do sistema e do que o seu quarto já tem pronto. Me conta a ideia e eu passo um orçamento sem compromisso.',
  },
  {
    question: 'Como eu faço o pedido?',
    answer:
      'Clique em "Pedir esse sistema" em qualquer página do catálogo ou me chame direto no Discord/WhatsApp. A gente conversa sobre a ideia, alinha os detalhes e eu começo a desenvolver.',
  },
  {
    question: 'O sistema para de funcionar se o Habbo atualizar?',
    answer:
      'Wired é um recurso oficial do Habbo, então os sistemas continuam funcionando normalmente junto com o hotel. Se alguma mudança do Habbo afetar algo, é só chamar que a gente ajusta.',
  },
  {
    question: 'Depois de pronto, dá pra pedir ajuste?',
    answer:
      'Sim. O objetivo é que o sistema funcione do jeito que você precisa — pequenos ajustes depois da entrega a gente combina na conversa.',
  },
  {
    question: 'Preciso ter algo pronto no meu quarto antes de pedir?',
    answer:
      'Não necessariamente. Isso depende do sistema e da estrutura do seu quarto — combinamos esse detalhe já na conversa inicial.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="faq">
      <h2 className="faq-title">Perguntas frequentes</h2>

      <div className="faq-list">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className={`faq-item card ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                {item.question}
                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
