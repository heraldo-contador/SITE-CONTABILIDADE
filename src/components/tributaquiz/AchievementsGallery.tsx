import React from 'react';
import { motion } from 'motion/react';
import { Play, Target, Award, BookOpen, Zap, Lock } from 'lucide-react';
import { achievementsData } from './data/achievements';
import { AchievementId } from './types';

const iconMap = { Play, Target, Award, BookOpen, Zap };

interface AchievementsGalleryProps { unlockedIds: AchievementId[]; onClose: () => void; }

export const AchievementsGallery: React.FC<AchievementsGalleryProps> = ({ unlockedIds, onClose }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-2xl mx-auto shadow-2xl relative">
      <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full transition-colors"><Lock size={20} /></button>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center flex items-center justify-center gap-3"><Award className="text-yellow-500" size={32} /> Suas Conquistas</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievementsData.map(ach => {
          const isUnlocked = unlockedIds.includes(ach.id);
          const IconObj = iconMap[ach.icon as keyof typeof iconMap] || Award;
          return (
            <div key={ach.id} className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${isUnlocked ? 'border-emerald-200 bg-emerald-50 opacity-100' : 'border-gray-100 bg-gray-50 opacity-60 grayscale'}`}>
              <div className={`p-3 rounded-full flex-shrink-0 ${isUnlocked ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-200 text-gray-400'}`}>
                {isUnlocked ? <IconObj size={24} /> : <Lock size={24} />}
              </div>
              <div>
                <h3 className={`font-bold ${isUnlocked ? 'text-emerald-900' : 'text-gray-500'}`}>{ach.title}</h3>
                <p className={`text-xs mt-1 leading-snug ${isUnlocked ? 'text-emerald-700' : 'text-gray-400'}`}>{ach.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
