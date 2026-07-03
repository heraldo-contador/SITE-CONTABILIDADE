export type Difficulty = 'facil' | 'medio' | 'dificil' | 'todas';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'facil' | 'medio' | 'dificil';
  explanation: string;
}

export type AchievementId = 'primeira_partida' | 'perfeito' | 'mestre_iva' | 'especialista_renda' | 'velocista';

export interface Achievement {
  id: AchievementId;
  title: string;
  description: string;
  icon: string;
}
