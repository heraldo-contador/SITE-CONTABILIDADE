import { Question } from '../types';

export const questions: Question[] = [
  // FÁCIL
  {
    id: '1',
    text: 'Quais impostos a Reforma Tributária pretende unificar para criar o IVA Dual?',
    options: ['IRPF, IRPJ e CSLL', 'PIS, COFINS, IPI, ICMS e ISS', 'IPTU, IPVA e ITBI', 'IOF, ITR e CIDE'],
    correctAnswer: 1,
    difficulty: 'facil',
    explanation: 'A reforma unifica PIS, COFINS e IPI na CBS (federal), e ICMS e ISS no IBS (estadual/municipal).'
  },
  {
    id: '2',
    text: 'O que significa a sigla IBS?',
    options: ['Imposto sobre Bens e Serviços', 'Índice Brasileiro de Sustentabilidade', 'Imposto Base do Sistema', 'Imposto de Benefício Social'],
    correctAnswer: 0,
    difficulty: 'facil',
    explanation: 'IBS é o Imposto sobre Bens e Serviços, que substituirá o ICMS (estadual) e o ISS (municipal).'
  },
  {
    id: '3',
    text: 'O que é a CBS no contexto da reforma?',
    options: ['Contribuição sobre Bens e Serviços', 'Comitê Brasileiro de Sustentabilidade', 'Cesta Básica Social', 'Código Brasileiro de Sistema Tributário'],
    correctAnswer: 0,
    difficulty: 'facil',
    explanation: 'A CBS é a Contribuição sobre Bens e Serviços, que substituirá o PIS, a COFINS e o IPI.'
  },
  {
    id: '4',
    text: 'O que é o "Cashback" tributário proposto na reforma?',
    options: ['Devolução de parte do imposto pago para famílias de baixa renda', 'Desconto para empresas que pagam impostos em dia', 'Crédito em dobro para exportadores', 'Devolução do Imposto de Renda'],
    correctAnswer: 0,
    difficulty: 'facil',
    explanation: 'O cashback prevê a devolução de parte dos tributos pagos (IBS e CBS) para famílias de baixa renda, reduzindo a desigualdade.'
  },
  {
    id: '5',
    text: 'Quais esferas do governo administrarão o IBS?',
    options: ['Apenas o Governo Federal', 'Estados e Municípios, de forma conjunta', 'Apenas os Municípios', 'Apenas os Estados'],
    correctAnswer: 1,
    difficulty: 'facil',
    explanation: 'O IBS substituirá o ICMS (Estadual) e ISS (Municipal), sendo administrado conjuntamente por Estados e Municípios através de um Comitê Gestor.'
  },
  // MÉDIO
  {
    id: '6',
    text: 'Qual é o principal objetivo do Imposto Seletivo (IS)?',
    options: ['Tributar grandes fortunas e heranças', 'Substituir o Imposto de Renda de forma gradual', 'Desencorajar o consumo de bens prejudiciais à saúde ou ao meio ambiente', 'Incentivar a exportação de produtos agrícolas'],
    correctAnswer: 2,
    difficulty: 'medio',
    explanation: 'O Imposto Seletivo, ou "imposto do pecado", visa sobretaxar produtos como cigarros, bebidas alcoólicas e produtos prejudiciais ao meio ambiente.'
  },
  {
    id: '7',
    text: 'Como ficarão os impostos sobre a Cesta Básica Nacional de Alimentos?',
    options: ['Terão a alíquota máxima do IVA', 'Terão alíquota zero para garantir acesso a alimentos básicos', 'Serão cobrados apenas pelos estados', 'Serão substituídos pelo Imposto de Renda'],
    correctAnswer: 1,
    difficulty: 'medio',
    explanation: 'A reforma prevê a criação de uma Cesta Básica Nacional de Alimentos com alíquota zero, garantindo alimentação mais barata para a população.'
  },
  {
    id: '8',
    text: 'Qual será o critério para a cobrança do IBS e da CBS em relação ao destino da mercadoria?',
    options: ['A cobrança será feita no local de origem (onde é produzido)', 'A cobrança será feita no local de destino (onde é consumido)', 'A cobrança será dividida igualmente entre origem e destino', 'O imposto será cobrado apenas em transações internacionais'],
    correctAnswer: 1,
    difficulty: 'medio',
    explanation: 'A reforma muda a cobrança da origem para o destino. Assim, o imposto fica no estado ou município onde o produto/serviço foi consumido.'
  },
  {
    id: '9',
    text: 'Como ficará a tributação sobre serviços de saúde, educação e medicamentos?',
    options: ['Terão isenção total de impostos', 'Pagarão a alíquota padrão completa', 'Terão redução de 60% na alíquota padrão', 'Terão a alíquota dobrada'],
    correctAnswer: 2,
    difficulty: 'medio',
    explanation: 'Certos setores, como saúde, educação, medicamentos e transporte coletivo, terão uma redução de 60% na alíquota de referência.'
  },
  {
    id: '10',
    text: 'Os profissionais liberais (como advogados, médicos e contadores) terão algum regime específico?',
    options: ['Sim, terão redução de 30% na alíquota', 'Não, pagarão a mesma alíquota de indústrias', 'Terão isenção total', 'Pagarão apenas o Imposto Seletivo'],
    correctAnswer: 0,
    difficulty: 'medio',
    explanation: 'Profissionais liberais que atuam de forma regulamentada terão um redutor de 30% sobre a alíquota padrão do IBS e da CBS.'
  },
  // DIFÍCIL
  {
    id: '11',
    text: 'Como funcionará o princípio da "não cumulatividade" plena no novo sistema?',
    options: ['O imposto pago na etapa anterior não gera crédito para a etapa seguinte', 'As empresas pagarão impostos sobre todo o faturamento, sem descontos', 'O imposto pago em uma etapa da cadeia produtiva gera crédito integral para a etapa seguinte', 'Apenas a indústria pagará impostos, isentando o varejo'],
    correctAnswer: 2,
    difficulty: 'dificil',
    explanation: 'A não cumulatividade plena garante que o imposto incida apenas sobre o valor adicionado em cada etapa, permitindo abater (creditar) o que já foi pago nas etapas anteriores.'
  },
  {
    id: '12',
    text: 'Qual é o papel do Comitê Gestor do IBS?',
    options: ['Arrecadar a CBS e repassar ao Governo Federal', 'Centralizar a arrecadação, fiscalizar e distribuir a receita do IBS entre Estados e Municípios', 'Fiscalizar exclusivamente o Imposto de Renda das empresas de grande porte', 'Definir a alíquota da CBS em conjunto com o Senado Federal'],
    correctAnswer: 1,
    difficulty: 'dificil',
    explanation: 'O Comitê Gestor será uma entidade federativa responsável por gerir o IBS, unificando a arrecadação e distribuindo os recursos para estados e municípios.'
  },
  {
    id: '13',
    text: 'Qual é o período de transição previsto para a substituição total dos impostos antigos pelos novos?',
    options: ['1 ano (2025)', '3 anos (2025 a 2027)', '7 anos (2026 a 2032)', 'Implementação imediata a partir da promulgação'],
    correctAnswer: 2,
    difficulty: 'dificil',
    explanation: 'A transição dos tributos (PIS, COFINS, IPI, ICMS e ISS) para o novo modelo (CBS e IBS) será gradual, iniciando-se em 2026 e sendo concluída em 2032.'
  },
  {
    id: '14',
    text: 'O que acontecerá com a Zona Franca de Manaus (ZFM) e o Simples Nacional?',
    options: ['Serão extintos imediatamente', 'Seus diferenciais competitivos e regimes favorecidos serão mantidos', 'Serão unificados no IBS', 'Apenas o Simples Nacional será mantido'],
    correctAnswer: 1,
    difficulty: 'dificil',
    explanation: 'A reforma garante a manutenção do tratamento diferenciado da Zona Franca de Manaus e do regime simplificado do Simples Nacional.'
  },
  {
    id: '15',
    text: 'Como será garantido que a Reforma Tributária não aumente a carga tributária global do país (Trava de Referência)?',
    options: ['A alíquota será fixa em 10% para sempre', 'Haverá avaliações periódicas que reduzirão as alíquotas se a arrecadação superar o teto estipulado', 'As empresas poderão escolher quanto imposto pagar', 'O Imposto de Renda será zerado'],
    correctAnswer: 1,
    difficulty: 'dificil',
    explanation: 'Foi estabelecido um teto de referência. Se a arrecadação, em proporção ao PIB, ultrapassar a média de 2012 a 2021, as alíquotas do IBS e da CBS deverão ser reduzidas.'
  }
];
