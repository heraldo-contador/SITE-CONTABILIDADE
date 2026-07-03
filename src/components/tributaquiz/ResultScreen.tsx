import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Share2, RotateCcw, Twitter, Award, Instagram, MessageCircle } from 'lucide-react';
import { Question, AchievementId } from './types';
import { achievementsData } from './data/achievements';

interface ResultScreenProps {
  score: number; correctAnswers: number; totalQuestions: number; newlyUnlocked: AchievementId[]; onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, correctAnswers, totalQuestions, newlyUnlocked, onRestart }) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  let feedback = percentage === 100 ? 'Excepcional! Você é um especialista em Reforma Tributária!' : percentage >= 80 ? 'Ótimo trabalho!' : percentage >= 50 ? 'Bom esforço!' : 'Parece que você precisa estudar mais.';
  const shareText = `Acabei de marcar ${score} pontos (${correctAnswers}/${totalQuestions} acertos) no TributaQuiz Brasil sobre a Reforma Tributária! Teste seus conhecimentos também:`;
  const appUrl = window.location.href; 

  const shareResults = (platform: string) => {
    const text = encodeURIComponent(shareText);
    const url = encodeURIComponent(appUrl);
    
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    } else if (platform === 'instagram') {
      navigator.clipboard.writeText(`${shareText} ${appUrl}`);
      alert('Texto e link copiados! Abra o Instagram e cole na sua postagem ou story.');
    }
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-8 max-w-md w-full mx-auto text-center shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-emerald-400 to-teal-500" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="bg-white p-6 rounded-full shadow-xl mb-6 inline-block"><Trophy size={64} className="text-yellow-400 drop-shadow-md" /></div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Fim de Jogo!</h2>
        <p className="text-gray-600 font-medium mb-8 max-w-xs">{feedback}</p>

        <div className="grid grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Pontuação</div>
            <div className="text-3xl font-black text-emerald-600">{score}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Acertos</div>
            <div className="text-3xl font-black text-blue-600">{correctAnswers}<span className="text-lg text-gray-400">/{totalQuestions}</span></div>
          </div>
        </div>

        {newlyUnlocked.length > 0 && (
          <div className="w-full mb-6">
            <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-2"><Award size={16} /> Novas Conquistas!</h3>
            <div className="flex flex-col gap-2">
              {newlyUnlocked.map(id => {
                const ach = achievementsData.find(a => a.id === id);
                if (!ach) return null;
                return (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={id} className="bg-yellow-50 border border-yellow-200 p-3 rounded-xl flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 flex-shrink-0"><Award size={20} /></div>
                    <div className="text-left"><div className="font-bold text-yellow-900">{ach.title}</div><div className="text-xs text-yellow-700">{ach.description}</div></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        <div className="w-full mb-8 bg-gray-50 rounded-2xl p-4 border border-gray-100">
          <h3 className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-2"><Share2 size={16} /> Compartilhe</h3>
          <div className="flex justify-center gap-3">
             <button onClick={() => shareResults('whatsapp')} className="bg-[#25D366] text-white p-3 rounded-full hover:bg-[#128C7E] transition-colors shadow-md hover:-translate-y-0.5 active:scale-95" title="WhatsApp">
               <MessageCircle size={20} />
             </button>
             <button onClick={() => shareResults('twitter')} className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors shadow-md hover:-translate-y-0.5 active:scale-95" title="X (Twitter)">
               <Twitter size={20} />
             </button>
             <button onClick={() => shareResults('instagram')} className="bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white p-3 rounded-full hover:opacity-90 transition-opacity shadow-md hover:-translate-y-0.5 active:scale-95" title="Instagram">
               <Instagram size={20} />
             </button>
          </div>
        </div>

        <div className="w-full space-y-3">
          <button onClick={onRestart} className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-gray-800 transition-all active:scale-95"><RotateCcw size={20} /> Jogar Novamente</button>
        </div>
      </div>
    </motion.div>
  );
}
