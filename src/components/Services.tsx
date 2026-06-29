import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { 
  TrendingUp, 
  FileText, 
  Users, 
  Clock, 
  Landmark, 
  ChevronRight, 
  CheckCircle2, 
  X, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Helper to map service ID to Lucide icon
  const getServiceIcon = (id: string, className = "w-6 h-6") => {
    switch (id) {
      case 'consultiva':
        return <TrendingUp className={className} />;
      case 'fiscal':
        return <FileText className={className} />;
      case 'dp':
        return <Users className={className} />;
      case 'bpo':
        return <Clock className={className} />;
      case 'societario':
        return <Landmark className={className} />;
      default:
        return <FileText className={className} />;
    }
  };

  const handleServiceQuoteRequest = (service: Service) => {
    onSelectService(service.title);
    setSelectedService(null);
    
    // Scroll to contact form
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 sm:py-24 bg-white font-sans text-primary scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase mb-3 block">
            Especialidades Premium
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-primary">
            Nossas Soluções Contábeis e Fiscais
          </h2>
          <p className="text-primary-light/80 text-sm sm:text-base mt-4">
            Oferecemos uma assessoria contábil inteligente de alto nível, focada no crescimento estruturado, na redução legal de impostos e no controle integral do fluxo financeiro do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-[#fcfcfc] border border-primary/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sleek shadow-sleek-hover hover:border-accent/35 transition-all group duration-300"
            >
              <div>
                <div className="w-12 h-12 bg-primary text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-md">
                  {getServiceIcon(service.id)}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-primary-light/85 text-xs sm:text-sm mt-3.5 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="pt-8 border-t border-primary/5 mt-6 flex justify-between items-center">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs sm:text-sm font-semibold text-primary group-hover:text-accent flex items-center gap-1.5 hover:underline cursor-pointer"
                >
                  <span>Ver Detalhes</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleServiceQuoteRequest(service)}
                  className="text-xs font-bold text-accent hover:text-accent-dark transition-colors cursor-pointer"
                >
                  Contratar
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Core Safety banner inside services */}
        <div className="mt-16 bg-primary text-white rounded-2xl p-6 sm:p-10 border border-accent/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent/20 rounded-xl flex-shrink-0">
              <ShieldAlert className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">Sua Empresa em Conformidade Absoluta</h4>
              <p className="text-bg-light/80 text-xs sm:text-sm mt-1 max-w-2xl">
                Cuidamos de todas as obrigações mensais de forma automatizada e auditada por robôs cruzadores de dados. Segurança garantida contra contingências na Receita Federal.
              </p>
            </div>
          </div>
          <a
            href="#contato"
            className="bg-accent hover:bg-accent-dark text-primary font-bold py-3 px-6 rounded-lg text-xs sm:text-sm transition-all shadow-md flex items-center gap-1.5"
          >
            <span>Auditar Minha Empresa</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Interactive Detail Modal Slide-over / Popup */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
              ></motion.div>

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl relative z-10 border border-accent/15 overflow-hidden flex flex-col max-h-[90vh]"
              >
                {/* Header banner in primary color */}
                <div className="bg-primary p-6 text-white flex justify-between items-center relative">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent text-primary rounded-lg flex items-center justify-center">
                      {getServiceIcon(selectedService.id, "w-5 h-5")}
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-accent font-semibold block">
                        Área de Atuação
                      </span>
                      <h4 className="font-serif text-lg sm:text-xl font-bold">
                        {selectedService.title}
                      </h4>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  <div>
                    <h5 className="text-xs uppercase font-bold tracking-wider text-accent mb-2">
                      Visão Geral do Serviço
                    </h5>
                    <p className="text-sm text-primary-light/90 leading-relaxed font-sans">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs uppercase font-bold tracking-wider text-accent mb-3.5">
                      Benefícios e Entregáveis Inclusos
                    </h5>
                    <div className="space-y-2.5 font-sans">
                      {selectedService.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary-light">
                          <CheckCircle2 className="w-4.5 h-4.5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="border-t border-primary/5 p-4 sm:p-6 bg-bg-light/50 flex flex-col sm:flex-row justify-end items-center gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-primary/10 text-primary hover:bg-primary/5 text-xs font-semibold"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={() => handleServiceQuoteRequest(selectedService)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-accent hover:bg-accent-dark text-primary font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Falar com Especialista</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
