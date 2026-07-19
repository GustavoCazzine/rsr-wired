// Catálogo de sistemas wired. Edite/adicione itens à vontade — cada um vira um
// card no catálogo e ganha sua própria página de detalhe em /catalogo/{id}.
export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'troca', label: 'Troca de Roupa' },
  { id: 'ranking', label: 'Ranking & Placar' },
  { id: 'sorteio', label: 'Sorteio' },
  { id: 'batalha', label: 'Batalha & PvP' },
  { id: 'loja', label: 'Loja' },
  { id: 'rpg', label: 'RPG' },
  { id: 'economia', label: 'Banco & PIX' },
  { id: 'personalizado', label: 'Sob Medida' },
];

export const services = [
  {
    id: 'troca-roupa-basico',
    title: 'Sistema de Troca de Roupa',
    category: 'troca',
    description:
      'Permite que visitantes troquem peças de roupa do avatar ao interagir com itens no quarto, com opções configuráveis.',
    longDescription:
      'Um guarda-roupa interativo dentro do próprio quarto: o visitante clica em um item (cabide, baú, espelho) e o wired troca peças específicas do avatar dele na hora, sem precisar sair do quarto ou mexer no catálogo oficial.',
    scenario:
      'Ideal para quartos de moda, lojas de roupa ou eventos temáticos onde os visitantes precisam vestir uma fantasia ou uniforme específico pra participar.',
    howItWorks: [
      'Você define as combinações de roupa disponíveis (masculina, feminina, temática, etc.).',
      'Cada mobi de troca fica ligado a uma combinação específica via wired.',
      'O visitante interage com o mobi e o avatar dele muda instantaneamente.',
      'As roupas originais podem ser restauradas ao sair do quarto, se você preferir.',
    ],
    tags: ['Wired', 'Avatar', 'Interativo'],
    price: 'A combinar',
  },
  {
    id: 'ranking-pontos',
    title: 'Ranking de Pontos',
    category: 'ranking',
    description:
      'Placar ao vivo que soma pontos dos jogadores conforme completam desafios, com exibição em painel no quarto.',
    longDescription:
      'Um placar que atualiza em tempo real, somando pontos de cada jogador conforme eles completam desafios, vencem rodadas ou cumprem metas definidas por você no quarto.',
    scenario:
      'Perfeito pra competições semanais, eventos de comunidade ou quartos de jogos onde o placar precisa ficar visível pra todo mundo o tempo todo.',
    howItWorks: [
      'Você define as regras de pontuação (o que soma, o que zera).',
      'O placar fica exposto em um painel de texto no quarto, atualizado ao vivo.',
      'Dá pra resetar o ranking automaticamente por período (diário, semanal).',
      'Suporta empates e desempate por critério configurável.',
    ],
    tags: ['Placar', 'Competição'],
    price: 'A combinar',
  },
  {
    id: 'sorteio-automatico',
    title: 'Sorteio Automático',
    category: 'sorteio',
    description:
      'Sorteia visitantes presentes no quarto de forma automática ou manual, com efeitos visuais de destaque no vencedor.',
    longDescription:
      'Sorteia um ou mais visitantes presentes no quarto — automaticamente em intervalos ou manualmente com um comando seu — e destaca o vencedor com efeitos visuais.',
    scenario:
      'Usado em eventos de sorteio, quartos de doações e ações de engajamento onde você quer recompensar quem está presente sem favoritismo.',
    howItWorks: [
      'O sistema identifica os visitantes elegíveis no quarto (ex: dentro de uma área específica).',
      'No horário definido ou por comando manual, sorteia aleatoriamente entre eles.',
      'O vencedor recebe destaque visual (luz, efeito, texto) e pode ser anunciado no chat.',
      'Dá pra excluir quem já ganhou recentemente, evitando repetição.',
    ],
    tags: ['Sorteio', 'Evento'],
    price: 'A combinar',
  },
  {
    id: 'arena-batalha',
    title: 'Arena de Batalha',
    category: 'batalha',
    description:
      'Sistema de PvP por turnos ou tempo real dentro do quarto, com vidas, dano e condição de vitória configuráveis.',
    longDescription:
      'Uma arena de combate 1x1 ou em equipe, com sistema de vidas, dano configurável e condição de vitória clara — por turnos ou em tempo real, dependendo do estilo do seu quarto.',
    scenario:
      'Quartos de RPG, arenas de duelo e eventos de torneio que precisam de uma mecânica de combate justa e visualmente clara pra plateia acompanhar.',
    howItWorks: [
      'Cada jogador entra na arena com uma quantidade de vidas/HP definida.',
      'Ataques e habilidades reduzem o HP do oponente através de mobis interativos.',
      'O sistema detecta quando um jogador chega a zero e declara o vencedor.',
      'Suporta modos extras: times, curas, itens especiais.',
    ],
    tags: ['PvP', 'Minigame'],
    price: 'A combinar',
  },
  {
    id: 'loja-itens',
    title: 'Loja de Itens',
    category: 'loja',
    description:
      'Loja dentro do quarto onde visitantes trocam moedas/pontos por itens, mobis ou emblemas configurados por você.',
    longDescription:
      'Uma loja interativa dentro do quarto: o visitante acumula moedas ou pontos e troca por itens, mobis, emblemas ou benefícios que você definir na vitrine.',
    scenario:
      'Ótimo pra quartos de RPG, comunidades com economia própria ou eventos onde os pontos ganhos ao longo do dia viram recompensa no final.',
    howItWorks: [
      'Você define o catálogo de itens e o preço de cada um em moedas/pontos.',
      'O visitante acumula saldo jogando, participando ou por ação sua.',
      'Ao interagir com a loja, o sistema desconta o saldo e libera o item.',
      'Dá pra limitar estoque ou deixar itens exclusivos por tempo limitado.',
    ],
    tags: ['Economia', 'Moedas'],
    price: 'A combinar',
  },
  {
    id: 'rpg-sistema',
    title: 'Sistema de RPG',
    category: 'rpg',
    description:
      'Estrutura de RPG completa para o quarto: atributos, missões, progressão de nível e eventos narrativos controlados por wired.',
    longDescription:
      'Monto a espinha dorsal de um RPG de quarto: atributos do personagem (vida, força, energia), progressão por nível, missões com recompensa e gatilhos narrativos que reagem às escolhas dos jogadores.',
    scenario:
      'Comunidades de RPG (morros, cidades, universos próprios) que já têm a história e a ambientação prontas, mas precisam de mecânica funcionando por trás da narrativa.',
    howItWorks: [
      'Mapeamos junto quais atributos e mecânicas fazem sentido pra sua história.',
      'Cada mecânica vira um conjunto de wireds testados e documentados.',
      'Missões e eventos ficam configuráveis por você, sem precisar mexer no wired em si.',
      'Progresso do jogador pode ser salvo por variável e consultado a qualquer momento.',
    ],
    tags: ['RPG', 'Narrativa', 'Progressão'],
    price: 'A combinar',
  },
  {
    id: 'banco-pix',
    title: 'Banco & PIX Virtual',
    category: 'economia',
    description:
      'Sistema bancário para o quarto: saldo por jogador, transferência estilo PIX entre visitantes e extrato de movimentação.',
    longDescription:
      'Um "banco" dentro do quarto: cada jogador tem saldo próprio, pode transferir moedas pra outro visitante na hora (estilo PIX) e consultar extrato — tudo via wired, sem depender de terceiros.',
    scenario:
      'Quartos de RPG com economia interna, cidades virtuais e comunidades que simulam comércio entre jogadores e precisam de um jeito confiável de mover moedas.',
    howItWorks: [
      'Cada jogador tem uma "conta" identificada pelo nick, com saldo próprio.',
      'Transferências acontecem em tempo real ao interagir com o mobi de PIX.',
      'O sistema evita saldo negativo e registra a movimentação.',
      'Dá pra integrar com a loja de itens e outros sistemas de economia do quarto.',
    ],
    tags: ['Economia', 'PIX', 'Banco'],
    price: 'A combinar',
  },
  {
    id: 'sistema-sob-medida',
    title: 'Sistema Sob Medida',
    category: 'personalizado',
    description:
      'Tem uma ideia diferente? Desenvolvo sistemas de wired personalizados do zero de acordo com o que você precisa.',
    longDescription:
      'Se a ideia que você tem não se encaixa em nenhum sistema pronto, converso com você pra entender o objetivo e desenvolvo algo do zero, sob medida pro seu quarto.',
    scenario:
      'Qualquer ideia fora da caixa: minigames autorais, mecânicas híbridas, integrações entre sistemas diferentes ou algo nunca visto em outro quarto.',
    howItWorks: [
      'Você me conta a ideia e o objetivo do sistema.',
      'Eu desenho a mecânica e valido com você antes de programar.',
      'Desenvolvo, testo no quarto e ajusto com base no seu feedback.',
      'Entrego com uma explicação de como tudo funciona, pra você conseguir manter.',
    ],
    tags: ['Personalizado', 'Sob consulta'],
    price: 'A combinar',
  },
];
