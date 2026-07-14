import React from 'react';
import { Store, TrendingDown, Calculator, PiggyBank, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function ComercioPage() {
  const benefits = [
    {
      icon: <Calculator className="w-8 h-8 text-accent" />,
      title: "Reforma Tributária",
      description: "Aproveite as oportunidades e isenções da nova Reforma Tributária para o setor varejista e atacadista com nossa assessoria especializada."
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-accent" />,
      title: "Ótimo Custo-Benefício",
      description: "Contabilidade 100% digital, ágil e segura, oferecendo o melhor custo-benefício do mercado sem perder a proximidade."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-accent" />,
      title: "Redução de Carga Tributária",
      description: "Planejamento tributário focado em reduzir os impostos da sua loja, seja ela física ou um e-commerce."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Conformidade Fiscal",
      description: "Mantenha o seu comércio em dia com as obrigações fiscais e evite multas, focando no que importa: vender mais."
    }
  ];

  const steps = [
    "Diagnóstico fiscal completo do seu comércio",
    "Planejamento para a Reforma Tributária",
    "Migração rápida, segura e sem dor de cabeça",
    "Gestão mensal digital e econômica"
  ];

  return (
    <main className="flex-grow bg-bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark/60"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 border border-accent/30"
            >
              <Store size={16} />
              Especialistas em Empresas de Comércio
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Seu Comércio Preparado para a <span className="text-accent">Reforma Tributária</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl"
            >
              Transforme a complexidade fiscal em vantagem competitiva. Oferecemos contabilidade digital com ótimo custo-benefício para lojistas, distribuidores e e-commerces.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="https://api.whatsapp.com/send/?phone=5591993608142&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-accent/20"
              >
                Falar com um Especialista
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
              Por que seu Comércio precisa da Heraldo Contabilidade?
            </h2>
            <p className="text-secondary text-lg">
              Com a Reforma Tributária, estar atualizado não é apenas uma obrigação, é a chave para economizar. Descubra como nossa contabilidade digital pode ajudar o seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-secondary leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona & CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
                Mais tecnologia, menos impostos e custos justos
              </h2>
              <p className="text-secondary text-lg mb-8">
                Esqueça a contabilidade burocrática e cara. Com nosso modelo digital, você tem acesso rápido a informações, reduz custos e garante que seu comércio aproveite todos os benefícios da nova Reforma Tributária.
              </p>
              
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={24} />
                    <span className="text-primary font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10">Não perca dinheiro com impostos desnecessários</h3>
              <p className="text-gray-300 mb-8 relative z-10">
                Fale agora com nossos especialistas e descubra quanto o seu comércio pode economizar com o nosso planejamento tributário digital.
              </p>
              <a 
                href="https://api.whatsapp.com/send/?phone=5591993608142&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded-xl inline-block w-full transition-colors relative z-10"
              >
                Receber Diagnóstico Gratuito
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
