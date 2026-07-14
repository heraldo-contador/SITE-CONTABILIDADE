import React from 'react';
import { Camera, TrendingUp, ShieldCheck, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProdutoresConteudoPage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Redução de Impostos",
      description: "Como Pessoa Física você pode pagar até 27,5% de Imposto de Renda. Como Pessoa Jurídica (CNPJ), as alíquotas começam a partir de 6% no Simples Nacional."
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "Emissão de Notas Fiscais",
      description: "Feche parcerias com grandes marcas e agências que exigem Nota Fiscal para pagamento de publis e patrocínios."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Segurança Patrimonial",
      description: "Separe seu patrimônio pessoal do profissional, garantindo mais segurança jurídica para seus bens."
    },
    {
      icon: <Camera className="w-8 h-8 text-accent" />,
      title: "Foco na Criação",
      description: "Deixe a burocracia contábil com especialistas e foque no que você faz de melhor: criar conteúdo incrível para sua audiência."
    }
  ];

  const steps = [
    "Análise do seu momento atual (PF x PJ)",
    "Abertura rápida do seu CNPJ",
    "Enquadramento tributário mais vantajoso",
    "Gestão mensal descomplicada"
  ];

  return (
    <main className="flex-grow bg-bg-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark/50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 border border-accent/30"
            >
              <Camera size={16} />
              Especialistas em Criadores de Conteúdo
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Transforme seus Likes em um <span className="text-accent">Negócio Sólido e Lucrativo</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl"
            >
              Pare de perder dinheiro com impostos altos na Pessoa Física. Abra seu CNPJ e profissionalize sua carreira de influenciador, youtuber ou streamer com a Heraldo Contabilidade.
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
                Quero Abrir meu CNPJ
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
              Por que abrir uma empresa como Produtor de Conteúdo?
            </h2>
            <p className="text-secondary text-lg">
              A profissionalização é o próximo passo para o crescimento do seu canal ou perfil. Veja as vantagens de ter a nossa assessoria contábil.
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
                Deixe a burocracia com quem entende do seu negócio
              </h2>
              <p className="text-secondary text-lg mb-8">
                Nós conhecemos a realidade do mercado digital. Sabemos como tributar receitas de Adsense, publiposts, venda de infoprodutos, plataformas de streaming e patrocínios da forma correta e mais econômica.
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
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10">Pronto para dar o próximo passo?</h3>
              <p className="text-gray-300 mb-8 relative z-10">
                Fale com um de nossos especialistas em contabilidade para influenciadores e faça uma simulação gratuita de economia tributária.
              </p>
              <a 
                href="https://api.whatsapp.com/send/?phone=5591993608142&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded-xl inline-block w-full transition-colors relative z-10"
              >
                Falar com Especialista Agora
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
