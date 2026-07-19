// Edite este arquivo para personalizar as informações do site.
export const site = {
  name: 'RSR Wired',
  shortName: 'RSR',
  personaName: 'Rato Silva Renegado',
  tagline: 'Sistemas de wired sob medida, feitos pelo Rato Silva Renegado',
  description:
    'Crio sistemas de wired personalizados para quartos do Habbo: trocas, rankings, sorteios, batalhas e muito mais. Confira o catálogo e veja exemplos de trabalhos já entregues.',
  habboNick: 'bcarlod1906',
  habboRoomName: 'ConfigWired', // detectado automaticamente como seu quarto mais bem avaliado — troque se não for o certo
  habboRoomUrl: 'https://www.habbo.com.br/room/153922412',

  // Grupo oficial do quarto dos sistemas — usado para checar se um visitante
  // conectado é membro (badge "Membro do grupo" no card de conexão).
  habboGroup: {
    id: 'g-hhbr-6d1799d720a8291f8aa0b960863d5f84',
    name: 'Rato Garoto De Programa',
    badgeCode: 'b27134s28095s28093s49134s281311c479006a0bc2755e92c4bedf36cc58a',
  },

  // Parceira de criação, exibida na seção "Sobre mim" da Home.
  partner: {
    nick: 'neebulosa!',
    role: 'Parceira de criação',
  },

  // "enabled: false" esconde o contato do site sem perder o valor — troque
  // pra "true" (e preencha value/url) quando quiser exibir de novo.
  contacts: [
    { label: 'Discord', value: 'seu-usuario', url: '#', enabled: false },
    { label: 'WhatsApp', value: '(00) 00000-0000', url: '#', enabled: false },
  ],
};
