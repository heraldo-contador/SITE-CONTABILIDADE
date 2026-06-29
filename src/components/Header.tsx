import React, { useState, useEffect } from 'react';
import { Landmark, Mail, Phone, Menu, X, Database, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenInbox: () => void;
  unreadCount: number;
}

export default function Header({ onOpenInbox, unreadCount }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Simuladores', href: '#simuladores' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-primary text-bg-light/80 text-xs py-2 px-4 sm:px-6 border-b border-white/5 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>+55 (91) 99360-8142</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>contato@heraldocontabilidade.com.br</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-accent-light">
              <Clock className="w-3 h-3" />
              <span>Atendimento: Seg a Sex, 8h às 18h</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        id="app-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-primary py-5'
        } border-b border-accent/10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-accent p-2 rounded-lg transition-transform group-hover:scale-105">
              <Landmark className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                HERALDO CONTABILIDADE DIGITAL<span className="text-accent font-sans font-light">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-accent-light uppercase -mt-1 font-sans font-medium">
                Assessoria & Gestão Contábil
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-sans">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-bg-light/90 hover:text-accent font-medium text-sm transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* View Submissions Demo Trigger */}
            <button
              onClick={onOpenInbox}
              className="relative flex items-center gap-2 text-xs bg-primary-light hover:bg-primary-light/80 text-white font-medium py-2 px-3 rounded-lg transition-all border border-accent/20 cursor-pointer"
              title="Ver caixa de mensagens recebidas"
            >
              <Database className="w-3.5 h-3.5 text-accent" />
              <span>Painel de Leads</span>
              {unreadCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            <a
              href="#contato"
              className="bg-accent hover:bg-accent-dark text-primary font-sans font-semibold text-sm py-2 px-5 rounded-lg transition-all shadow-md hover:shadow-accent/25 duration-200"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenInbox}
              className="relative p-2 bg-primary-light rounded-lg border border-accent/20 text-white"
              title="Leads"
            >
              <Database className="w-4 h-4 text-accent" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-bg-light hover:text-accent transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[108px] sm:top-[92px] left-0 right-0 z-30 bg-primary border-b border-accent/20 shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col font-sans">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-bg-light/95 hover:text-accent py-2 text-base font-medium border-b border-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenInbox();
                  }}
                  className="flex items-center justify-center gap-2 w-full bg-primary-light text-white border border-accent/30 py-2.5 rounded-lg font-medium text-sm"
                >
                  <Database className="w-4 h-4 text-accent" />
                  <span>Painel de Leads ({unreadCount} pendentes)</span>
                </button>
                <a
                  href="#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-accent text-primary py-2.5 rounded-lg font-bold text-sm shadow-md"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
