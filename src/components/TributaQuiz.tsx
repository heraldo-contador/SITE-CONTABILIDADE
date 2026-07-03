import React, { useState, useEffect } from 'react';
import { StartScreen } from './tributaquiz/StartScreen';
import { GameScreen } from './tributaquiz/GameScreen';
import { ResultScreen } from './tributaquiz/ResultScreen';
import { AchievementsGallery } from './tributaquiz/AchievementsGallery';
import { questions } from './tributaquiz/data/questions';
import { Difficulty, Question, AchievementId } from './tributaquiz/types';
import { AnimatePresence } from 'motion/react';

type GameState = 'start' | 'playing' | 'result' | 'achievements';

export default function TributaQuiz() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentDifficulty, setCurrentDifficulty] = useState<Difficulty>('facil');
  const [finalScore, setFinalScore] = useState(0);
  const [finalCorrect, setFinalCorrect] = useState(0);
  const [unlockedAchievements, setUnlockedAchievements] = useState<AchievementId[]>([]);
  const [newlyUnlocked, setNewlyUnlocked] = useState<AchievementId[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('tributaquiz_achievements');
    if (saved) { try { setUnlockedAchievements(JSON.parse(saved)); } catch (e) {} }
  }, []);

  const saveAchievements = (achievements: AchievementId[]) => {
    setUnlockedAchievements(achievements);
    localStorage.setItem('tributaquiz_achievements', JSON.stringify(achievements));
  };

  const startGame = (difficulty: Difficulty) => {
    let selectedQuestions = [...questions];
    setCurrentDifficulty(difficulty);
    if (difficulty !== 'todas') selectedQuestions = selectedQuestions.filter(q => q.difficulty === difficulty);
    selectedQuestions = selectedQuestions.sort(() => Math.random() - 0.5);
    if (difficulty !== 'todas') selectedQuestions = selectedQuestions.slice(0, 5);
    setActiveQuestions(selectedQuestions);
    setGameState('playing');
  };

  const handleComplete = (score: number, correctAnswers: number) => {
    const totalQuestions = activeQuestions.length;
    const newUnlocks: AchievementId[] = ['primeira_partida'];
    if (correctAnswers === totalQuestions) newUnlocks.push('perfeito');
    if (currentDifficulty === 'dificil' && correctAnswers >= Math.ceil(totalQuestions / 2)) newUnlocks.push('mestre_iva');
    if (currentDifficulty === 'todas' && correctAnswers >= Math.ceil(totalQuestions / 2)) newUnlocks.push('especialista_renda');
    if (score >= totalQuestions * 80) newUnlocks.push('velocista');

    const trulyNew = newUnlocks.filter(id => !unlockedAchievements.includes(id));
    if (trulyNew.length > 0) saveAchievements([...unlockedAchievements, ...trulyNew]);
    
    setNewlyUnlocked(trulyNew);
    setFinalScore(score);
    setFinalCorrect(correctAnswers);
    setGameState('result');
  };

  const handleRestart = () => {
    setGameState('start'); setFinalScore(0); setFinalCorrect(0); setNewlyUnlocked([]); setActiveQuestions([]);
  };

  return (
    <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 rounded-3xl flex items-center justify-center p-4 sm:p-8 font-sans selection:bg-white/30 w-full min-h-[700px]">
      <div className="w-full max-w-4xl">
        <AnimatePresence mode="wait">
          {gameState === 'start' && <StartScreen key="start" onStart={startGame} onViewAchievements={() => setGameState('achievements')} />}
          {gameState === 'achievements' && <AchievementsGallery key="achievements" unlockedIds={unlockedAchievements} onClose={() => setGameState('start')} />}
          {gameState === 'playing' && <GameScreen key="playing" questions={activeQuestions} onComplete={handleComplete} />}
          {gameState === 'result' && <ResultScreen key="result" score={finalScore} correctAnswers={finalCorrect} totalQuestions={activeQuestions.length} newlyUnlocked={newlyUnlocked} onRestart={handleRestart} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
