// Catálogo de sistemas wired. Edite/adicione itens à vontade — cada um vira um
// card no catálogo e ganha sua própria página de detalhe em /catalogo/{id}.
export const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'economia', label: 'Banco & PIX' },
  { id: 'rpg', label: 'RPG' },
  { id: 'loja', label: 'Loja' },
  { id: 'interacao', label: 'Interação' },
  { id: 'evento', label: 'Evento & Minigame' },
  { id: 'personalizado', label: 'Sob Medida' },
];

export const services = [
  {
    id: 'banco-pix-automatico',
    title: 'Banco Automático com PIX',
    category: 'economia',
    description:
      'Sistema bancário completo: moedas coletáveis, depósito, saque e transferência PIX entre jogadores.',
    longDescription:
      'Moedas spawnam em posições aleatórias do quarto e os jogadores disputam a coleta. No caixa eletrônico, o jogador é identificado automaticamente e pode depositar, sacar e consultar saldo com comandos simples. O PIX permite transferir moedas para qualquer jogador do quarto com taxa de 5%, criando economia real entre visitantes.',
    scenario:
      'Quartos de convivência, baladas, RPGs e qualquer quarto que queira retenção — o jogador fica para acumular.',
    howItWorks: [
      'Colete moedas que caem pelo quarto.',
      'Pise no caixa eletrônico e seja identificado automaticamente.',
      'Digite :depositar ou :sacar com a quantidade desejada.',
      'Use o PIX clicando no jogador de destino (taxa de 5%).',
      'Acompanhe tudo no card do jogador.',
    ],
    tags: ['Economia', 'Banco', 'PIX'],
    price: 'A combinar',
  },
  {
    id: 'progressao-titulos',
    title: 'Progressão com Títulos',
    category: 'rpg',
    description:
      'Jogador ganha XP por presença, sobe 15 níveis e desbloqueia títulos de Mendigo a Dono do Jogo.',
    longDescription:
      'Sistema de progressão automática: a presença no quarto gera XP, com curva de 35% por nível para equilibrar esforço e recompensa. Cada nível libera um título exclusivo exibido no card do jogador, e o level-up dá bônus em moedas anunciado para todo o quarto. Integra com o banco: progressão e economia no mesmo loop.',
    scenario: 'Qualquer quarto que queira fidelizar visitantes — balada, RP, comunidade.',
    howItWorks: [
      'Entre e permaneça no quarto.',
      'Acumule XP por minuto de presença.',
      'Ao bater a meta, level-up automático com anúncio global.',
      'Receba bônus em moedas a cada level-up.',
      'Dê dois cliques em alguém pra ver nível e título.',
    ],
    tags: ['XP', 'Níveis', 'Títulos'],
    price: 'A combinar',
  },
  {
    id: 'loja-automatica-estoque',
    title: 'Loja Automática com Estoque',
    category: 'loja',
    description: 'Vitrine de mobis com preço e estoque: 1 clique mostra o item, 2 cliques compra na hora.',
    longDescription:
      'Cada mobi da vitrine responde ao clique exibindo nome, preço e quantidade disponível. Dois cliques abrem a compra automática, debitando moedas do jogador e controlando estoque em tempo real — com mensagem de esgotado quando acaba. Baús ao lado aceitam doações de mobi e câmbio, alimentando sorteios do quarto.',
    scenario: 'Quartos de troca, eventos com premiação, lojas de raros.',
    howItWorks: [
      'Clique no mobi e veja preço e estoque disponível.',
      'Dê dois cliques para comprar.',
      'As moedas são debitadas automaticamente.',
      'O estoque atualiza sozinho, com aviso de esgotado.',
      'Doe pelo baú ao lado se quiser patrocinar a loja.',
    ],
    tags: ['Loja', 'Estoque', 'Doação'],
    price: 'A combinar',
  },
  {
    id: 'efeitos-interativos',
    title: 'Módulo de Efeitos Interativos',
    category: 'interacao',
    description: 'Comandos pagos em moedas: casar, fogo, tomate, balão, decapitar e mais — tudo entre jogadores.',
    longDescription:
      'Pacote de efeitos por comando onde o jogador paga em moedas e escolhe o alvo com um clique: casamento com anúncio, atear fogo, jogar tomate, balão que ergue o alvo, decapitação e outros. Cada efeito tem preço próprio, mensagem global personalizada e validações de saldo. Conecta a economia do quarto à interação social.',
    scenario: 'Baladas, becos, quartos de convivência — onde a graça é interagir.',
    howItWorks: [
      'Digite !efeitos e veja a tabela de preços.',
      'Digite o comando do efeito desejado.',
      'Clique no jogador alvo.',
      'As moedas são debitadas automaticamente.',
      'Uma mensagem global mostra a ação pra todo o quarto.',
    ],
    tags: ['Efeitos', 'Interação', 'Comandos'],
    price: 'A combinar',
  },
  {
    id: 'danca-das-cadeiras',
    title: 'Dança das Cadeiras com ATÇ',
    category: 'evento',
    description:
      'Evento clássico automatizado: sorteio de cadeiras, detecção de queimada de largada e eliminação valendo moedas.',
    longDescription:
      'O controlador define a quantidade de jogadores e o sistema sorteia a composição de assentos (1, 2 ou 3 lugares), sempre deixando um jogador de fora. O "ATÇÇÇ" é automatizado: mensagem global e trava de movimento — quem andar ou sentar antes do mobi cair queima a largada e é eliminado na hora. Inclui fases finais de trio e duo, com opção de pagar moedas pra voltar.',
    scenario: 'Eventos com plateia, quartos de jogos, premiações.',
    howItWorks: [
      'Entre na área de espera.',
      'O controlador inicia a partida.',
      'Aguarde o ATÇ sem se mexer.',
      'A cadeira cai — corra e sente antes dos outros.',
      'Sobreviva até a fase final de duo.',
    ],
    tags: ['Evento', 'Minigame', 'Eliminação'],
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
