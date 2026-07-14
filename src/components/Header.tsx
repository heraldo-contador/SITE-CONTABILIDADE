import React, { useState, useEffect } from 'react';
import { Landmark, Mail, Phone, Menu, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Serviços', href: '/#servicos' },
    { label: 'Simuladores', href: '/#simuladores' },
    { 
      label: 'Segmentos', 
      isDropdown: true,
      items: [
        { label: 'Produtores de Conteúdo', href: '/segmentos/produtores-de-conteudo' },
        { label: 'Comércio', href: '/segmentos/comercio' }
      ]
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Reforma Tributária', href: '/reforma-tributaria' },
    { label: 'Contato', href: '/#contato' },
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
          <a href="/" className="flex items-center gap-2 group">
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
              item.isDropdown ? (
                <div key={item.label} className="relative group py-2" onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                  <button className="text-bg-light/90 hover:text-accent font-medium text-sm transition-colors flex items-center gap-1 focus:outline-none">
                    {item.label}
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 py-2 z-50"
                      >
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent/10 hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-bg-light/90 hover:text-accent font-medium text-sm transition-colors relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/#contato"
              className="bg-accent hover:bg-accent-dark text-primary font-sans font-semibold text-sm py-2 px-5 rounded-lg transition-all shadow-md hover:shadow-accent/25 duration-200"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-3">
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
            className="md:hidden fixed top-[108px] sm:top-[92px] left-0 right-0 z-30 bg-primary border-b border-accent/20 shadow-xl overflow-y-auto max-h-[calc(100vh-108px)]"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col font-sans">
              {menuItems.map((item) => (
                item.isDropdown ? (
                  <div key={item.label} className="border-b border-white/5 py-2">
                    <button 
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="text-bg-light/95 hover:text-accent text-base font-medium transition-colors w-full text-left flex justify-between items-center"
                    >
                      {item.label}
                      <span className="text-xl leading-none">{openDropdown === item.label ? '-' : '+'}</span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col gap-2 mt-3 pl-4 overflow-hidden"
                        >
                          {item.items?.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-bg-light/70 hover:text-accent text-sm py-1 transition-colors"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-bg-light/95 hover:text-accent py-2 text-base font-medium border-b border-white/5 transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="/#contato"
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
