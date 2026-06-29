import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, HelpCircle, ArrowRight, DollarSign, Users, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { calculateTaxSimulation, calculateEmployeeCost } from '../data';
import { SimulationInput, EmployeeCostInput } from '../types';

interface CalculatorsProps {
  onApplySimulation: (serviceName: string, notes: string) => void;
}

export default function Calculators({ onApplySimulation }: CalculatorsProps) {
  const [activeTab, setActiveTab] = useState<'tax' | 'employee'>('tax');
  const [showTaxRules, setShowTaxRules] = useState(false);

  // 1. Tax regime state
  const [taxInput, setTaxInput] = useState<SimulationInput>({
    revenue: 45000,
    sector: 'servicos',
    payroll: 12000,
  });

  const [taxResult, setTaxResult] = useState(calculateTaxSimulation(taxInput));

  useEffect(() => {
    setTaxResult(calculateTaxSimulation(taxInput));
  }, [taxInput]);

  // 2. Employee cost state
  const [employeeInput, setEmployeeInput] = useState<EmployeeCostInput>({
    baseSalary: 4500,
    regime: 'Simples',
    hasBenefits: true,
    benefitsCost: 650,
  });

  const [employeeResult, setEmployeeResult] = useState(calculateEmployeeCost(employeeInput));

  useEffect(() => {
    setEmployeeResult(calculateEmployeeCost(employeeInput));
  }, [employeeInput]);

  // Utility to format BRL Currency
  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSendTaxToContact = () => {
    const notes = `Simulação Tributária: Faturamento mensal de ${formatBRL(taxInput.revenue)} no setor de ${
      taxInput.sector === 'servicos' ? 'Serviços' : taxInput.sector === 'comercio' ? 'Comércio' : 'Indústria'
    }. Custos com folha: ${formatBRL(taxInput.payroll)}. Melhor regime sugerido: ${taxResult.bestRegime} com economia anual estimada em ${formatBRL(taxResult.savings * 12)}.`;
    onApplySimulation('Planejamento Tributário', notes);
    
    // Scroll to contact section
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendEmployeeToContact = () => {
    const notes = `Cálculo de Funcionário CLT: Salário base de ${formatBRL(employeeInput.baseSalary)} em regime ${
      employeeInput.regime === 'Simples' ? 'Simples Nacional (Isento de INSS Patronal)' : 'Outros Regimes (Lucro Presumido/Real)'
    }. Benefícios adicionais de ${formatBRL(employeeInput.benefitsCost)}. Custo real total: ${formatBRL(employeeResult.finalTotal)} por mês (${employeeResult.multiplier}x do salário base).`;
    onApplySimulation('Departamento Pessoal', notes);

    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="simuladores" className="py-20 sm:py-24 bg-bg-light font-sans text-primary scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase mb-3 block">
            Painel Interativo de Custos
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-primary">
            Simuladores Financeiros Inteligentes
          </h2>
          <p className="text-primary-light/80 text-sm sm:text-base mt-4">
            Utilize nossas calculadoras para obter estimativas realistas sobre sua tributação ou custos trabalhistas, e agende um estudo detalhado com nossa equipe técnica.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="bg-primary/5 p-1 rounded-xl flex max-w-md w-full border border-primary/10">
            <button
              onClick={() => setActiveTab('tax')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'tax'
                  ? 'bg-primary text-white shadow'
                  : 'text-primary hover:text-accent'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Planejamento Tributário</span>
            </button>
            <button
              onClick={() => setActiveTab('employee')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'employee'
                  ? 'bg-primary text-white shadow'
                  : 'text-primary hover:text-accent'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Custo de Funcionário CLT</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Frame */}
        <div className="bg-white rounded-2xl shadow-sleek border border-primary/5 overflow-hidden">
          {activeTab === 'tax' ? (
            <div className="grid lg:grid-cols-12">
              
              {/* Left Column: Inputs */}
              <div className="lg:col-span-7 p-6 sm:p-10 border-r border-primary/5 bg-white">
                <h3 className="text-xl font-serif font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="p-1.5 bg-accent/15 rounded-lg text-accent">
                    <TrendingUp className="w-5 h-5" />
                  </span>
                  Configurar Operação da Empresa
                </h3>

                <div className="space-y-8">
                  {/* Sector select */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/70 mb-3">
                      Setor Econômico / Atividade Principal
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['servicos', 'comercio', 'industria'] as const).map((sec) => (
                        <button
                          key={sec}
                          onClick={() => setTaxInput({ ...taxInput, sector: sec })}
                          className={`py-3 px-2 text-center rounded-xl border text-xs sm:text-sm font-semibold capitalize transition-all cursor-pointer ${
                            taxInput.sector === sec
                              ? 'bg-primary/5 border-accent text-accent font-bold'
                              : 'border-primary/10 text-primary-light/70 hover:border-primary/30'
                          }`}
                        >
                          {sec === 'servicos' ? 'Serviços' : sec === 'comercio' ? 'Comércio' : 'Indústria'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Revenue Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/70">
                        Faturamento Mensal Estimado
                      </label>
                      <span className="text-base font-bold text-primary font-mono">
                        {formatBRL(taxInput.revenue)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="400000"
                      step="5000"
                      value={taxInput.revenue}
                      onChange={(e) => setTaxInput({ ...taxInput, revenue: Number(e.target.value) })}
                      className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[10px] text-primary-light/50 font-mono mt-1">
                      <span>R$ 5 mil</span>
                      <span>R$ 150 mil</span>
                      <span>R$ 300 mil</span>
                      <span>R$ 400 mil</span>
                    </div>
                  </div>

                  {/* Payroll slider (highly correlated to Factor R in serviços) */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/70">
                        Folha de Pagamento Mensal (Pró-labore + Salários)
                      </label>
                      <span className="text-base font-bold text-primary font-mono">
                        {formatBRL(taxInput.payroll)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={Math.min(taxInput.revenue, 150000)}
                      step="1000"
                      value={taxInput.payroll}
                      onChange={(e) => setTaxInput({ ...taxInput, payroll: Number(e.target.value) })}
                      className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[10px] text-primary-light/50 font-mono mt-1">
                      <span>R$ 0</span>
                      <span>50% do Faturamento</span>
                      <span>Máx R$ 150 mil</span>
                    </div>

                    {taxInput.sector === 'servicos' && (
                      <div className="mt-3 bg-accent/10 border border-accent/25 p-3 rounded-lg text-xs text-primary-dark flex items-start gap-2.5">
                        <HelpCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Fator R ativo:</span> Seu custo de folha representa{' '}
                          <span className="font-bold font-mono">
                            {taxInput.revenue > 0 ? Math.round((taxInput.payroll / taxInput.revenue) * 100) : 0}%
                          </span>{' '}
                          do faturamento.{' '}
                          {taxInput.payroll / taxInput.revenue >= 0.28 ? (
                            <span className="text-green-700 font-medium">
                              Parabéns! Sua empresa se qualifica para o Anexo III do Simples (alíquota inicial de 6%
                              ao invés de 15.5%).
                            </span>
                          ) : (
                            <span className="text-primary-light/80">
                              Abaixo de 28%. Sua alíquota inicial seria de 15.5%. Aumentar seu pró-labore ou folha
                              pode diminuir drasticamente seu imposto.
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Outcomes Comparison */}
              <div className="lg:col-span-5 bg-primary p-6 sm:p-10 text-white flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent mb-1 block">
                    Resultado da Simulação
                  </span>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <h3 className="text-2xl font-serif font-bold">
                      Comparativo Mensal de Impostos
                    </h3>
                    <button
                      id="tax-rules-info-button"
                      type="button"
                      onClick={() => setShowTaxRules(true)}
                      className="text-bg-light/70 hover:text-accent transition-colors p-1.5 rounded-full hover:bg-white/5 cursor-pointer"
                      title="Ver regras de cálculo e detalhes"
                      aria-label="Ver regras de cálculo"
                    >
                      <HelpCircle className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Comparisons stack */}
                  <div className="space-y-5">
                    {/* Simples Nacional */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-bg-light/85">
                        <span>Simples Nacional</span>
                        <span className="font-mono font-bold text-sm">
                          {formatBRL(taxResult.simplesNacionalTax)}/mês
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent transition-all duration-500"
                          style={{
                            width: `${Math.min(
                              100,
                              (taxResult.simplesNacionalTax /
                                Math.max(
                                  1,
                                  taxResult.simplesNacionalTax,
                                  taxResult.lucroPresumidoTax,
                                  taxResult.lucroRealTax
                                )) *
                                100
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Lucro Presumido */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-bg-light/85">
                        <span>Lucro Presumido</span>
                        <span className="font-mono font-bold text-sm">
                          {formatBRL(taxResult.lucroPresumidoTax)}/mês
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-400 transition-all duration-500"
                          style={{
                            width: `${Math.min(
                              100,
                              (taxResult.lucroPresumidoTax /
                                Math.max(
                                  1,
                                  taxResult.simplesNacionalTax,
                                  taxResult.lucroPresumidoTax,
                                  taxResult.lucroRealTax
                                )) *
                                100
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Lucro Real */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-bg-light/85">
                        <span>Lucro Real</span>
                        <span className="font-mono font-bold text-sm">
                          {formatBRL(taxResult.lucroRealTax)}/mês
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-400 transition-all duration-500"
                          style={{
                            width: `${Math.min(
                              100,
                              (taxResult.lucroRealTax /
                                Math.max(
                                  1,
                                  taxResult.simplesNacionalTax,
                                  taxResult.lucroPresumidoTax,
                                  taxResult.lucroRealTax
                                )) *
                                100
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Box */}
                  <div className="mt-8 bg-white/5 border border-white/10 p-5 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span className="text-xs uppercase font-bold tracking-wider text-accent-light">
                        Recomendação Heraldo Contabilidade Digital
                      </span>
                    </div>
                    <p className="text-sm">
                      O regime ideal sugerido é o <span className="font-bold text-accent">{taxResult.bestRegime}</span>.
                    </p>
                    {taxResult.savings > 0 && (
                      <p className="text-xs text-bg-light/80 mt-1">
                        Sua economia mensal estimada seria de{' '}
                        <span className="text-accent font-bold font-mono text-sm">
                          {formatBRL(taxResult.savings)}
                        </span>{' '}
                        ({formatBRL(taxResult.savings * 12)} por ano) comparado ao regime menos eficiente.
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleSendTaxToContact}
                  className="mt-8 w-full bg-accent hover:bg-accent-light text-primary font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-lg text-sm group cursor-pointer"
                >
                  <span>Solicitar Estudo Customizado</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ) : (
            <div className="grid lg:grid-cols-12">
              
              {/* Left Column: CLT Inputs */}
              <div className="lg:col-span-7 p-6 sm:p-10 border-r border-primary/5 bg-white">
                <h3 className="text-xl font-serif font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="p-1.5 bg-accent/15 rounded-lg text-accent">
                    <Users className="w-5 h-5" />
                  </span>
                  Custo Operacional de Contratação
                </h3>

                <div className="space-y-8">
                  {/* Base Salary Input */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/70">
                        Salário Base Proposto (CLT)
                      </label>
                      <span className="text-base font-bold text-primary font-mono">
                        {formatBRL(employeeInput.baseSalary)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1500"
                      max="20000"
                      step="500"
                      value={employeeInput.baseSalary}
                      onChange={(e) =>
                        setEmployeeInput({ ...employeeInput, baseSalary: Number(e.target.value) })
                      }
                      className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[10px] text-primary-light/50 font-mono mt-1">
                      <span>R$ 1.500</span>
                      <span>R$ 8.000</span>
                      <span>R$ 14.000</span>
                      <span>R$ 20.000</span>
                    </div>
                  </div>

                  {/* Company Regime Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-primary-light/70 mb-3">
                      Regime Tributário do Empregador
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setEmployeeInput({ ...employeeInput, regime: 'Simples' })}
                        className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          employeeInput.regime === 'Simples'
                            ? 'bg-primary/5 border-accent text-accent font-bold'
                            : 'border-primary/10 text-primary-light/70 hover:border-primary/30'
                        }`}
                      >
                        Simples Nacional (Anexos I a III, V)
                      </button>
                      <button
                        onClick={() => setEmployeeInput({ ...employeeInput, regime: 'Outros' })}
                        className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          employeeInput.regime === 'Outros'
                            ? 'bg-primary/5 border-accent text-accent font-bold'
                            : 'border-primary/10 text-primary-light/70 hover:border-primary/30'
                        }`}
                      >
                        Lucro Presumido, Real ou Simples Anexo IV
                      </button>
                    </div>
                    <span className="text-[10px] text-primary-light/60 mt-1.5 block leading-normal">
                      * Empresas no Simples Nacional possuem isenção de 20% do INSS Patronal sobre a folha, o que barateia a contratação.
                    </span>
                  </div>

                  {/* Benefits Checkbox and slider */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          id="hasBenefits"
                          type="checkbox"
                          checked={employeeInput.hasBenefits}
                          onChange={(e) =>
                            setEmployeeInput({ ...employeeInput, hasBenefits: e.target.checked })
                          }
                          className="w-4 h-4 text-accent border-primary/10 rounded focus:ring-accent"
                        />
                        <label htmlFor="hasBenefits" className="text-sm font-semibold text-primary cursor-pointer">
                          Incluir Custos Adicionais / Benefícios mensais
                        </label>
                      </div>
                    </div>

                    {employeeInput.hasBenefits && (
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs text-primary-light/75">
                            Benefícios (Soma de VT, VR/VA, Plano de Saúde, Seguro)
                          </span>
                          <span className="text-sm font-bold text-primary font-mono">
                            {formatBRL(employeeInput.benefitsCost)}/mês
                          </span>
                        </div>
                        <input
                          type="range"
                          min="100"
                          max="3000"
                          step="50"
                          value={employeeInput.benefitsCost}
                          onChange={(e) =>
                            setEmployeeInput({ ...employeeInput, benefitsCost: Number(e.target.value) })
                          }
                          className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-accent"
                        />
                        <div className="flex justify-between text-[9px] text-primary-light/40 font-mono mt-1">
                          <span>R$ 100</span>
                          <span>R$ 1.500</span>
                          <span>R$ 3.000</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: CLT Outcomes Breakdown */}
              <div className="lg:col-span-5 bg-primary p-6 sm:p-10 text-white flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent mb-1 block">
                    Custo Total do Empregador
                  </span>
                  <h3 className="text-2xl font-serif font-bold mb-6 border-b border-white/10 pb-4">
                    Composição do Custo CLT
                  </h3>

                  {/* Pricing lines */}
                  <div className="space-y-4 font-sans">
                    <div className="flex justify-between text-xs border-b border-white/5 pb-2 text-bg-light/85">
                      <span>Salário Nominal CLT</span>
                      <span className="font-mono font-semibold">{formatBRL(employeeResult.baseSalary)}</span>
                    </div>

                    <div className="flex justify-between text-xs border-b border-white/5 pb-2 text-bg-light/85">
                      <span>Fundo de Garantia (FGTS - 8%)</span>
                      <span className="font-mono font-semibold">{formatBRL(employeeResult.fgts)}</span>
                    </div>

                    <div className="flex justify-between text-xs border-b border-white/5 pb-2 text-bg-light/85">
                      <span>Provisões Mensais (Férias + 13º + 1/3)</span>
                      <span className="font-mono font-semibold">{formatBRL(employeeResult.provisions)}</span>
                    </div>

                    <div className="flex justify-between text-xs border-b border-white/5 pb-2 text-bg-light/85">
                      <span>INSS Patronal + Encargos de Regime</span>
                      <span className="font-mono font-semibold">
                        {employeeResult.inssPatronal > 0 ? formatBRL(employeeResult.inssPatronal) : 'Isento (Simples)'}
                      </span>
                    </div>

                    {employeeInput.hasBenefits && (
                      <div className="flex justify-between text-xs border-b border-white/5 pb-2 text-bg-light/85">
                        <span>Benefícios Diretos</span>
                        <span className="font-mono font-semibold">{formatBRL(employeeResult.benefits)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-base font-bold border-t border-accent/20 pt-4 text-accent">
                      <span>CUSTO REAL MENSAL</span>
                      <span className="font-mono text-lg">{formatBRL(employeeResult.finalTotal)}</span>
                    </div>
                  </div>

                  {/* Multiplier Indicator */}
                  <div className="mt-8 bg-white/5 border border-white/10 p-4.5 rounded-xl text-center">
                    <span className="text-[10px] uppercase tracking-wider text-bg-light/60 font-semibold block mb-1">
                      Índice de Custo Efetivo
                    </span>
                    <span className="text-3xl font-serif font-bold text-accent font-mono block">
                      {employeeResult.multiplier}x
                    </span>
                    <p className="text-xs text-bg-light/80 mt-1.5 leading-normal">
                      Para cada R$ 1,00 de salário contratual, sua empresa gastará{' '}
                      <span className="text-accent font-bold font-mono">{formatBRL(employeeResult.multiplier)}</span>{' '}
                      por mês devido a impostos, provisões e benefícios associados.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleSendEmployeeToContact}
                  className="mt-8 w-full bg-accent hover:bg-accent-light text-primary font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-lg text-sm group cursor-pointer"
                >
                  <span>Análise Especializada de DP</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          )}
        </div>

      </div>

      {/* Modal with Tax Calculation Rules */}
      <AnimatePresence>
        {showTaxRules && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              id="tax-rules-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTaxRules(false)}
              className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              id="tax-rules-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0F2232] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-white z-10"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-serif font-bold text-white">
                    Regras de Cálculo do Planejador Tributário
                  </h3>
                </div>
                <button
                  id="close-tax-rules-modal"
                  type="button"
                  onClick={() => setShowTaxRules(false)}
                  className="text-bg-light/70 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5 font-mono text-sm cursor-pointer"
                  aria-label="Fechar modal"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6 text-sm leading-relaxed text-bg-light/90">
                <div>
                  <h4 className="text-accent font-bold uppercase tracking-wider text-xs mb-2">
                    1. Simples Nacional
                  </h4>
                  <p className="mb-2">
                    O cálculo é baseado na receita bruta simulada dos últimos 12 meses (Faturamento Mensal × 12) e no setor de atuação selecionado:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-bg-light/80">
                    <li>
                      <strong className="text-white">Serviços (Fator R):</strong> Aplica-se a regra do Fator R (relação Folha de Pagamento / Faturamento). Se for <strong className="text-white">igual ou superior a 28%</strong>, enquadra-se no <strong className="text-white">Anexo III</strong> (alíquota inicial de 6% a 14.5%). Se for <strong className="text-white">inferior a 28%</strong>, enquadra-se no <strong className="text-white">Anexo V</strong> (alíquota inicial de 15.5% a 22.0%).
                    </li>
                    <li>
                      <strong className="text-white">Comércio:</strong> Segue o <strong className="text-white">Anexo I</strong> com alíquotas progressivas de 4.0% a 10.5%.
                    </li>
                    <li>
                      <strong className="text-white">Indústria:</strong> Segue o <strong className="text-white">Anexo II</strong> com alíquotas progressivas de 4.5% a 11.2%.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-accent font-bold uppercase tracking-wider text-xs mb-2">
                    2. Lucro Presumido
                  </h4>
                  <p className="mb-2">
                    Neste regime, presume-se a margem de lucro da empresa para tributação federal (IRPJ e CSLL), somada aos impostos cumulativos e locais:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-bg-light/80">
                    <li>
                      <strong className="text-white">Serviços:</strong> Margem presumida de 32% (gerando 7.68% de IRPJ/CSLL efetivos), acrescida de PIS/COFINS cumulativos (3.65%) e ISS médio (4.0%), totalizando uma carga estimada de <strong className="text-white">15.33%</strong> sobre o faturamento.
                    </li>
                    <li>
                      <strong className="text-white">Comércio / Indústria:</strong> Margem presumida de 8% (2.4% de IRPJ/CSLL efetivos), acrescida de PIS/COFINS (3.65%) e alíquota de ICMS/IPI média (~5% a 5.8%), totalizando cargas estimadas de <strong className="text-white">11.05% a 11.85%</strong>.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-accent font-bold uppercase tracking-wider text-xs mb-2">
                    3. Lucro Real
                  </h4>
                  <p className="mb-2">
                    Os impostos federais incidem sobre o lucro contábil líquido real da empresa (e não sobre o faturamento bruto):
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-bg-light/80">
                    <li>
                      Modelamos margens médias de lucro de <strong className="text-white">22% para serviços</strong> e <strong className="text-white">9% para comércio/indústria</strong>.
                    </li>
                    <li>
                      Aplica-se a alíquota combinada de IRPJ e CSLL (34%) sobre essa margem presumida de lucro real, acrescida de PIS/COFINS não cumulativo efetivo (com créditos médios) e taxas locais (ISS/ICMS), resultando em alíquotas estimadas sobre o faturamento total.
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mt-6">
                  <h5 className="text-accent font-bold flex items-center gap-1.5 mb-1.5 text-sm">
                    <Sparkles className="w-4 h-4" /> Importante: Necessidade de Estudo Personalizado
                  </h5>
                  <p className="text-xs text-white/90 leading-relaxed">
                    Esta ferramenta é um simulador simplificado com fins meramente informativos e estimativos baseados na legislação tributária brasileira. Cada negócio possui particularidades fundamentais, como despesas operacionais dedutíveis exatas, créditos fiscais acumulados, incentivos regionais, isenções tributárias e regras municipais ou estaduais específicas.
                    <br /><br />
                    Para obter um <strong className="text-accent-light">Planejamento Tributário definitivo, seguro e personalizado</strong> condizente com a realidade do seu negócio, é <strong className="text-accent-light">fundamental entrar em contato com nosso time de especialistas contábeis</strong>. Nós realizaremos uma auditoria profunda do seu histórico e definiremos o enquadramento de maior economia legal para a sua empresa.
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <a
                    id="modal-cta-contact"
                    href="https://api.whatsapp.com/send/?phone=5591993608142&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setShowTaxRules(false);
                    }}
                    className="bg-accent hover:bg-accent-light text-primary font-bold py-2.5 px-5 rounded-xl transition-all text-xs cursor-pointer hover:shadow-lg inline-block text-center"
                  >
                    Falar com o Contador
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
