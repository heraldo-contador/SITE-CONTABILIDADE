import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Timer, Trophy } from 'lucide-react';
import { Question } from './types';

interface GameScreenProps {
  questions: Question[];
  onComplete: (score: number, correctAnswers: number) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (isAnswered) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { clearInterval(timer); handleAnswer(-1); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentIndex, isAnswered]);

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedAnswer(index);
    if (index === currentQuestion.correctAnswer) {
      setScore((prev) => prev + (20 + (timeLeft * 4)));
      setCorrectCount((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(20);
    } else {
      onComplete(score, correctCount);
    }
  };

  return (
    <motion.div key="game-screen" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="w-full max-w-3xl mx-auto flex flex-col gap-6">
      <div className="flex justify-between items-center bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl shadow-sm text-white">
        <div className="flex items-center gap-2 font-bold text-xl"><Trophy className="text-yellow-300" /> {score} pts</div>
        <div className="font-medium">Questão {currentIndex + 1} <span className="opacity-70">/ {questions.length}</span></div>
        <div className={`flex items-center gap-2 font-bold text-xl ${timeLeft <= 5 ? 'text-red-300 animate-pulse' : ''}`}><Timer /> {timeLeft}s</div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1.5 bg-emerald-500 transition-all duration-300 ease-out" style={{ width: `${((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100}%` }} />
        <div className="mb-8 mt-2">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-wider mb-4">Nível: {currentQuestion.difficulty}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{currentQuestion.text}</h2>
        </div>

        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = currentQuestion.correctAnswer === idx;
            let btnClass = "border-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:border-gray-200";
            if (isAnswered) {
              if (isCorrect) btnClass = "border-2 border-green-500 bg-green-50 text-green-900 shadow-md scale-[1.02] z-10";
              else if (isSelected) btnClass = "border-2 border-red-500 bg-red-50 text-red-900 opacity-80";
              else btnClass = "border-2 border-gray-100 bg-gray-50 text-gray-400 opacity-50";
            }
            return (
              <button key={idx} disabled={isAnswered} onClick={() => handleAnswer(idx)} className={`text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between ${btnClass}`}>
                <span className="font-medium text-lg">{option}</span>
                {isAnswered && isCorrect && <CheckCircle2 className="text-green-600 flex-shrink-0" />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="text-red-500 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {isAnswered && (
            <motion.div initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: 'auto', marginTop: 24 }} className="bg-blue-50 border border-blue-100 p-5 rounded-2xl">
              <h4 className="font-bold text-blue-900 mb-1 flex items-center gap-2">{selectedAnswer === currentQuestion.correctAnswer ? '🎉 Acertou!' : '💡 Ops, não foi dessa vez.'}</h4>
              <p className="text-blue-800 text-sm md:text-base leading-relaxed">{currentQuestion.explanation}</p>
              <button onClick={nextQuestion} className="mt-4 w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                {currentIndex + 1 < questions.length ? 'Próxima Questão' : 'Ver Resultado'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
