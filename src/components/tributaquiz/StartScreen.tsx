import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Brain, BookOpen, Zap, Award, Code, X, Check } from 'lucide-react';
import { Difficulty } from './types';

interface StartScreenProps {
  onStart: (difficulty: Difficulty) => void;
  onViewAchievements: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart, onViewAchievements }) => {
  const [showEmbed, setShowEmbed] = useState(false);
  const [copied, setCopied] = useState(false);
  const embedCode = `<iframe src="${window.location.href}" width="100%" height="700" style="border:none; border-radius: 16px; overflow: hidden; max-width: 100%;" title="TributaQuiz Brasil"></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-6 text-center">
      <div className="bg-white p-4 rounded-full shadow-lg mb-6 text-emerald-600"><BookOpen size={48} strokeWidth={1.5} /></div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">TributaQuiz Brasil</h1>
      <p className="text-lg md:text-xl text-emerald-50 mb-10 max-w-lg drop-shadow">Teste seus conhecimentos sobre a Reforma Tributária Brasileira. Escolha a dificuldade e mostre que você está por dentro do assunto!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md mb-6">
        <button onClick={() => onStart('facil')} className="flex items-center justify-center gap-3 bg-white text-emerald-700 font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95"><Play size={20} /> Fácil</button>
        <button onClick={() => onStart('medio')} className="flex items-center justify-center gap-3 bg-white text-blue-700 font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95"><Brain size={20} /> Médio</button>
        <button onClick={() => onStart('dificil')} className="flex items-center justify-center gap-3 bg-white text-purple-700 font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95"><Zap size={20} /> Difícil</button>
        <button onClick={() => onStart('todas')} className="flex items-center justify-center gap-3 bg-gray-900 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 md:col-span-2">Desafio Completo (Todas)</button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={onViewAchievements} className="flex items-center justify-center gap-2 text-white/90 hover:text-white hover:bg-white/10 px-6 py-3 rounded-full transition-colors font-semibold border border-transparent hover:border-white/20"><Award size={20} /> Ver Minhas Conquistas</button>
        <button onClick={() => setShowEmbed(true)} className="flex items-center justify-center gap-2 text-white/90 hover:text-white hover:bg-white/10 px-6 py-3 rounded-full transition-colors font-semibold border border-transparent hover:border-white/20"><Code size={20} /> Incorporar ao Site</button>
      </div>

      <AnimatePresence>
        {showEmbed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 text-left">
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-2xl relative">
              <button onClick={() => setShowEmbed(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"><X size={20} /></button>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-3"><Code className="text-emerald-600" /> Incorporar ao Site</h3>
              <p className="text-gray-600 mb-6 text-sm">Copie o código abaixo e cole no HTML do seu site.</p>
              <div className="relative mb-6">
                <textarea readOnly className="w-full h-32 p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl text-sm font-mono text-gray-800 focus:outline-none focus:border-emerald-500 transition-colors resize-none" value={embedCode} />
              </div>
              <button onClick={handleCopy} className={`w-full flex items-center justify-center gap-2 font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95 ${copied ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}>
                {copied ? <><Check size={20} /> Código Copiado!</> : <><Code size={20} /> Copiar Código</>}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
