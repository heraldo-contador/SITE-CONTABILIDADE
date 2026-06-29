import React from 'react';
import { Shield, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const stats = [
    { value: '15+', label: 'Anos de Experiência' },
    { value: '98%', label: 'Retenção de Clientes' },
    { value: '500+', label: 'Empresas Atendidas' },
    { value: 'R$ 15M+', label: 'Impostos Economizados' },
  ];

  return (
    <section className="relative overflow-hidden bg-primary text-white pt-12 pb-20 sm:pb-28 lg:pt-20">
      {/* Decorative vector grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full py-1 px-3.5 mb-6 text-accent-light self-start text-xs font-semibold tracking-wider uppercase font-sans"
            >
              <Award className="w-4.5 h-4.5" />
              <span>Contabilidade Premium e Consultiva</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6 leading-[1.15]"
            >
              Segurança contábil e <br />
              <span className="text-accent italic font-normal">estratégia tributária</span> <br />
              para acelerar seu negócio.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-bg-light/80 text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-sans"
            >
              Simplifique sua gestão fiscal, proteja sua empresa de riscos tributários e tenha relatórios de inteligência financeira mensais para impulsionar suas decisões mais importantes.
            </motion.p>

            {/* Quick Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-3.5 mb-8 font-sans text-sm"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-bg-light/90 font-medium">BPO Financeiro integrado</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-bg-light/90 font-medium">Planejamento tributário consultivo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-bg-light/90 font-medium">Folha de pagamento 100% digital</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-bg-light/90 font-medium">Abertura rápida e sem burocracia</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 font-sans"
            >
              <a
                href="#simuladores"
                className="bg-accent hover:bg-accent-dark text-primary font-bold px-7 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-accent/20 text-sm"
              >
                Simular Economia Tributária
              </a>
              <a
                href="#servicos"
                className="border border-white/20 hover:border-accent text-white hover:text-accent font-semibold px-7 py-3.5 rounded-lg transition-all text-sm"
              >
                Conhecer Nossos Serviços
              </a>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border-2 border-accent/20 shadow-2xl"
            >
              {/* Premium image from Unsplash with referrerPolicy */}
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=450"
                alt="Planejamento de contabilidade"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover filter brightness-95"
              />
              {/* Elegant Accent Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>

              {/* Floating micro card */}
              <div className="absolute bottom-6 left-6 right-6 bg-primary/90 backdrop-blur-md p-4 rounded-xl border border-accent/30 flex items-center gap-4">
                <div className="bg-accent/20 p-2.5 rounded-lg">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">Certificação Digital</h4>
                  <p className="text-bg-light/90 text-xs mt-0.5 leading-snug">
                    Operações asseguradas e em conformidade rigorosa com o eSocial e Receita Federal.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-primary-dark border border-accent/20 p-6 rounded-2xl shadow-xl mt-16 sm:mt-24 font-sans"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 border-r border-white/5 last:border-none"
            >
              <span className="text-3xl sm:text-4xl font-serif font-bold text-accent tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-bg-light/75 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
