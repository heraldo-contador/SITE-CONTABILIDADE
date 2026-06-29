import React from 'react';
import { X, CheckCircle, Clock, Trash2, MailOpen, Database, Sparkles, Building2, User } from 'lucide-react';
import { ContactSubmission } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface SubmissionInboxProps {
  isOpen: boolean;
  onClose: () => void;
  submissions: ContactSubmission[];
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
  onAddMockLead: () => void;
}

export default function SubmissionInbox({
  isOpen,
  onClose,
  submissions,
  onToggleStatus,
  onDelete,
  onAddMockLead,
}: SubmissionInboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/45 backdrop-blur-xs"
          ></motion.div>

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-white border-l border-accent/15 flex flex-col shadow-2xl h-full"
            >
              {/* Drawer Header */}
              <div className="bg-primary p-6 text-white flex justify-between items-center border-b border-accent/10">
                <div className="flex items-center gap-2.5">
                  <div className="bg-accent text-primary p-2 rounded-lg">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold">Painel de Leads Recebidos</h3>
                    <p className="text-[10px] text-accent-light uppercase tracking-widest font-semibold mt-0.5">
                      Banco de Dados Local (Simulado)
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Notice bar */}
                <div className="bg-bg-light border border-primary/5 p-4 rounded-xl text-xs text-primary-light">
                  <p className="leading-relaxed">
                    Este painel simula a visualização administrativa do contador da <span className="font-bold">Heraldo Contabilidade</span>.{' '}
                    Submissões do formulário de contato aparecerão aqui em tempo real.
                  </p>
                  <button
                    onClick={onAddMockLead}
                    className="mt-3 text-xs text-accent-dark font-bold flex items-center gap-1.5 hover:underline cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Injetar Lead de Teste</span>
                  </button>
                </div>

                {/* Submissions List */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-accent border-b border-primary/5 pb-2">
                    Contatos Recentes ({submissions.length})
                  </h4>

                  {submissions.length === 0 ? (
                    <div className="text-center py-12 text-primary-light/60">
                      <MailOpen className="w-12 h-12 mx-auto stroke-1 mb-3 text-primary-light/40" />
                      <p className="text-sm font-semibold">Nenhuma mensagem recebida ainda.</p>
                      <p className="text-xs mt-1">Preencha o formulário de contato para ver os dados aqui!</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {submissions.map((lead) => (
                        <div
                          key={lead.id}
                          className={`p-4 rounded-xl border transition-all ${
                            lead.status === 'Respondido'
                              ? 'bg-bg-light/40 border-primary/5 opacity-80'
                              : 'bg-white border-accent/25 shadow-sm hover:border-accent/50'
                          }`}
                        >
                          <div className="flex justify-between items-start gap-2 mb-2.5">
                            <div>
                              <span className="font-bold text-xs text-primary block truncate max-w-[200px]">
                                {lead.name}
                              </span>
                              <span className="text-[10px] text-primary-light/60 font-mono">
                                {lead.createdAt}
                              </span>
                            </div>
                            <span
                              onClick={() => onToggleStatus(lead.id)}
                              className={`text-[9px] font-bold uppercase tracking-wider rounded-md px-2 py-1 cursor-pointer select-none ${
                                lead.status === 'Respondido'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-amber-100 text-amber-700 animate-pulse'
                              }`}
                              title="Clique para alternar o status"
                            >
                              {lead.status}
                            </span>
                          </div>

                          {/* Quick details */}
                          <div className="grid grid-cols-2 gap-2 text-[10px] bg-primary/5 rounded-lg p-2.5 mb-2.5 font-sans">
                            <div className="flex items-center gap-1.5 truncate text-primary-light">
                              <Building2 className="w-3 h-3 text-accent flex-shrink-0" />
                              <span className="font-semibold text-primary truncate">{lead.companyName}</span>
                            </div>
                            <div className="text-right text-accent-dark font-semibold">
                              Rev: {lead.revenueRange === 'above-100k' ? '> R$ 100k/m' : lead.revenueRange === '50k-100k' ? 'R$ 50k-100k' : 'Até R$ 50k'}
                            </div>
                            <div className="text-primary-light truncate">
                              Tel: {lead.phone}
                            </div>
                            <div className="text-right text-primary truncate font-semibold">
                              {lead.serviceType}
                            </div>
                          </div>

                          {/* Message box */}
                          {lead.message && (
                            <div className="bg-bg-light p-2.5 rounded-lg text-[11px] text-primary-light leading-relaxed mb-3 break-words italic border-l-2 border-primary/10">
                              "{lead.message}"
                            </div>
                          )}

                          {/* Action footer */}
                          <div className="flex justify-between items-center border-t border-primary/5 pt-2.5 text-[10px]">
                            <a
                              href={`mailto:${lead.email}`}
                              className="text-primary hover:text-accent font-semibold flex items-center gap-1"
                            >
                              <User className="w-3 h-3 text-accent" />
                              <span>Responder por E-mail</span>
                            </a>
                            <button
                              onClick={() => onDelete(lead.id)}
                              className="text-red-500 hover:text-red-700 flex items-center gap-1 p-1"
                              title="Deletar Lead"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="bg-bg-light p-5 border-t border-primary/10 flex justify-between items-center text-xs text-primary-light">
                <span>Leads salvos localmente</span>
                <button
                  onClick={() => {
                    if (window.confirm('Deseja limpar todos os leads salvos localmente?')) {
                      localStorage.removeItem('aurum_submissions');
                      window.location.reload();
                    }
                  }}
                  className="text-red-500 hover:underline font-semibold cursor-pointer"
                >
                  Limpar Todos
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
