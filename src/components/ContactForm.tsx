import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, AlertCircle, Calendar, Sparkles } from 'lucide-react';
import { SERVICES } from '../data';
import { ContactSubmission } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormProps {
  prefilledService?: string;
  prefilledNotes?: string;
  onSubmit: (submission: ContactSubmission) => void;
}

export default function ContactForm({ prefilledService, prefilledNotes, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    serviceType: '',
    revenueRange: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync pre-filled values
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceType: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledNotes) {
      setFormData((prev) => ({ ...prev, message: prefilledNotes }));
    }
  }, [prefilledNotes]);

  // Mask phone input as (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setFormData((prev) => ({ ...prev, phone: value }));
    if (errors.phone) setErrors((prev) => { const n = { ...prev }; delete n.phone; return n; });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const n = { ...prev };
        delete n[name];
        return n;
      });
    }
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Por favor, informe seu nome completo.';
    if (!formData.email.trim()) {
      tempErrors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Insira um endereço de e-mail válido.';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Informe um telefone de contato.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      tempErrors.phone = 'Insira um telefone válido com DDD.';
    }
    if (!formData.companyName.trim()) tempErrors.companyName = 'Nome da empresa é necessário.';
    if (!formData.serviceType) tempErrors.serviceType = 'Selecione a área de maior interesse.';
    if (!formData.revenueRange) tempErrors.revenueRange = 'Selecione a faixa de faturamento.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: Math.random().toString(36).substring(2, 9),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName,
        serviceType: formData.serviceType,
        revenueRange: formData.revenueRange,
        message: formData.message,
        createdAt: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) + ' - ' + new Date().toLocaleDateString('pt-BR'),
        status: 'Pendente',
      };

      onSubmit(newSubmission);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      companyName: '',
      serviceType: '',
      revenueRange: '',
      message: '',
    });
    setIsSuccess(false);
  };

  // Determine if it qualifies as a premium lead (>R$ 50k monthly revenue)
  const isPremiumLead = formData.revenueRange === '50k-100k' || formData.revenueRange === 'above-100k';

  return (
    <section id="contato" className="py-20 sm:py-24 bg-white font-sans text-primary scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-wider text-accent uppercase mb-3 block">
                Fale Conosco
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-primary">
                Vamos Estruturar seu Crescimento?
              </h2>
              <p className="text-primary-light/85 text-sm sm:text-base mt-4 leading-relaxed">
                Preencha o formulário ao lado e um consultor sênior entrará em contato em menos de 2 horas em horário comercial para agendar sua avaliação inicial gratuita.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-bg-light border border-primary/5 p-5 rounded-xl hover:border-accent/30 transition-all">
                <div className="bg-accent text-primary p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">Atendimento Telefônico</h4>
                  <p className="text-xs text-primary-light/80 mt-1">Ligue diretamente para falar com nossa matriz:</p>
                  <span className="font-bold text-sm text-accent-dark font-mono block mt-0.5">+55 (91) 99360-8142</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-bg-light border border-primary/5 p-5 rounded-xl hover:border-accent/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-accent text-primary p-3 rounded-lg flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary">WhatsApp Exclusivo</h4>
                    <p className="text-xs text-primary-light/80 mt-1">Atendimento comercial ágil em poucos minutos:</p>
                    <span className="font-bold text-sm text-accent-dark font-mono block mt-0.5">+55 (91) 99360-8142</span>
                  </div>
                </div>
                <div className="sm:ml-auto self-start sm:self-center">
                  <a
                    id="contact-whatsapp-button"
                    href="https://api.whatsapp.com/send/?phone=5591993608142&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-primary font-bold py-2 px-4 rounded-lg transition-all text-xs hover:shadow-md cursor-pointer whitespace-nowrap"
                  >
                    Iniciar Conversa
                  </a>
                </div>
              </div>
            </div>

            {/* SLA Trust Tag */}
            <div className="border-l-4 border-accent pl-4 py-1 text-xs text-primary-light italic leading-relaxed">
              "Garantimos confidencialidade total e proteção integral de seus dados financeiros, em perfeita conformidade com a LGPD."
            </div>
          </div>

          {/* Right Column: Contact Form Area */}
          <div className="lg:col-span-7">
            <div className="bg-[#fcfcfc] border border-primary/5 rounded-2xl p-6 sm:p-10 shadow-sleek relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/80 mb-2">
                          Seu Nome Completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex: João da Silva"
                          className={`w-full bg-white border ${
                            errors.name ? 'border-red-500' : 'border-primary/10'
                          } focus:border-accent focus:ring-1 focus:ring-accent rounded-xl py-3 px-4 text-sm text-primary outline-none transition-all`}
                        />
                        {errors.name && (
                          <span className="text-[11px] text-red-500 flex items-center gap-1 mt-1.5 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Corporate Email */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/80 mb-2">
                          E-mail Corporativo *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ex: joao@suaempresa.com.br"
                          className={`w-full bg-white border ${
                            errors.email ? 'border-red-500' : 'border-primary/10'
                          } focus:border-accent focus:ring-1 focus:ring-accent rounded-xl py-3 px-4 text-sm text-primary outline-none transition-all`}
                        />
                        {errors.email && (
                          <span className="text-[11px] text-red-500 flex items-center gap-1 mt-1.5 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Phone / Whatsapp */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/80 mb-2">
                          Celular / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="(11) 99999-9999"
                          className={`w-full bg-white border ${
                            errors.phone ? 'border-red-500' : 'border-primary/10'
                          } focus:border-accent focus:ring-1 focus:ring-accent rounded-xl py-3 px-4 text-sm text-primary outline-none transition-all`}
                        />
                        {errors.phone && (
                          <span className="text-[11px] text-red-500 flex items-center gap-1 mt-1.5 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.phone}
                          </span>
                        )}
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/80 mb-2">
                          Razão Social ou Nome Fantasia *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Sua Empresa LTDA"
                          className={`w-full bg-white border ${
                            errors.companyName ? 'border-red-500' : 'border-primary/10'
                          } focus:border-accent focus:ring-1 focus:ring-accent rounded-xl py-3 px-4 text-sm text-primary outline-none transition-all`}
                        />
                        {errors.companyName && (
                          <span className="text-[11px] text-red-500 flex items-center gap-1 mt-1.5 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.companyName}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Service Selector */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/80 mb-2">
                          Solução de Interesse *
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className={`w-full bg-white border ${
                            errors.serviceType ? 'border-red-500' : 'border-primary/10'
                          } focus:border-accent focus:ring-1 focus:ring-accent rounded-xl py-3.5 px-4 text-sm text-primary outline-none transition-all`}
                        >
                          <option value="">Selecione um serviço</option>
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Planejamento Tributário">Planejamento Tributário (Geral)</option>
                          <option value="Outros">Outras demandas societárias</option>
                        </select>
                        {errors.serviceType && (
                          <span className="text-[11px] text-red-500 flex items-center gap-1 mt-1.5 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.serviceType}
                          </span>
                        )}
                      </div>

                      {/* Monthly Revenue Range */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/80 mb-2">
                          Faturamento Mensal Médio *
                        </label>
                        <select
                          name="revenueRange"
                          value={formData.revenueRange}
                          onChange={handleInputChange}
                          className={`w-full bg-white border ${
                            errors.revenueRange ? 'border-red-500' : 'border-primary/10'
                          } focus:border-accent focus:ring-1 focus:ring-accent rounded-xl py-3.5 px-4 text-sm text-primary outline-none transition-all`}
                        >
                          <option value="">Selecione a faixa</option>
                          <option value="below-10k">Até R$ 10.000 / mês</option>
                          <option value="10k-50k">R$ 10.000 a R$ 50.000 / mês</option>
                          <option value="50k-100k">R$ 50.000 a R$ 100.000 / mês</option>
                          <option value="above-100k">Acima de R$ 100.000 / mês</option>
                        </select>
                        {errors.revenueRange && (
                          <span className="text-[11px] text-red-500 flex items-center gap-1 mt-1.5 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.revenueRange}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/80">
                          Mensagem ou Observações Adicionais (Opcional)
                        </label>
                        <span className="text-[11px] text-primary-light/50">
                          {formData.message.length}/500 caract.
                        </span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        maxLength={500}
                        placeholder="Descreva brevemente as necessidades da sua empresa..."
                        rows={4}
                        className="w-full bg-white border border-primary/10 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl py-3 px-4 text-sm text-primary outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Premium Lead Quick Assist Trigger */}
                    {isPremiumLead && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-accent/15 border border-accent/30 p-4 rounded-xl flex items-start gap-3 text-primary-dark"
                      >
                        <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-xs uppercase tracking-wider block text-accent-dark">
                            Canal Prioritário Detectado
                          </span>
                          <p className="text-xs mt-0.5 leading-relaxed">
                            Sua empresa qualifica-se para assessoria prioritária Heraldo. Seu atendimento será encaminhado imediatamente a um sócio da firma.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-light disabled:bg-primary-light/60 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 hover:shadow-lg text-sm cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Transmitindo dados...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Solicitar Avaliação Gratuita</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 px-6 flex flex-col items-center"
                  >
                    <div className="bg-green-100 p-3 rounded-full text-green-600 mb-6">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                      Solicitação Recebida com Sucesso!
                    </h3>
                    
                    <p className="text-primary-light/85 text-sm max-w-md leading-relaxed mb-8 font-sans">
                      Obrigado pelo contato, <span className="font-semibold text-primary">{formData.name}</span>. Nossa equipe de especialistas já está analisando as informações da{' '}
                      <span className="font-semibold text-primary">{formData.companyName}</span> e entrará em contato em breve.
                    </p>

                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-8 text-left w-full max-w-sm text-xs space-y-2.5">
                      <div className="flex justify-between">
                        <span className="text-primary-light/75">Área de interesse:</span>
                        <span className="font-semibold">{formData.serviceType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary-light/75">Prioridade:</span>
                        <span className="font-semibold text-accent-dark">
                          {isPremiumLead ? '★ Alta / Sócio' : 'Padrão / Consultor'}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                      <button
                        onClick={handleReset}
                        className="flex-1 py-3 px-4 border border-primary/10 rounded-xl hover:bg-primary/5 text-xs font-semibold transition-colors"
                      >
                        Enviar Nova Mensagem
                      </button>
                      <a
                        href="https://wa.me/5511987654321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Agendar WhatsApp</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
