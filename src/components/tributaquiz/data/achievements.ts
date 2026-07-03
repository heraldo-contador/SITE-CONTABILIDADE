import { Achievement } from '../types';

export const achievementsData: Achievement[] = [
  { id: 'primeira_partida', title: 'Cidadão Consciente', description: 'Completou sua primeira partida do quiz.', icon: 'Play' },
  { id: 'perfeito', title: '100% de Acerto', description: 'Acertou todas as questões em uma única partida.', icon: 'Target' },
  { id: 'mestre_iva', title: 'Mestre do IVA', description: 'Acertou a maioria das questões no nível Difícil.', icon: 'Award' },
  { id: 'especialista_renda', title: 'Especialista em Renda', description: 'Completou mais da metade do Desafio Completo.', icon: 'BookOpen' },
  { id: 'velocista', title: 'Velocista', description: 'Manteve uma média de tempo de resposta excelente.', icon: 'Zap' }
];
