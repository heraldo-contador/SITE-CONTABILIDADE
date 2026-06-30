import { Service, Testimonial, SimulationInput, EmployeeCostInput } from './types';

export const SERVICES: Service[] = [
  {
    id: 'consultiva',
    title: 'Contabilidade Consultiva',
    category: 'contabilidade',
    description: 'Transforme dados fiscais e contábeis em decisões estratégicas. Relatórios financeiros dinâmicos para impulsionar o seu crescimento.',
    longDescription: 'Nossa contabilidade vai além de guias de impostos. Analisamos profundamente os números da sua empresa para fornecer inteligência de negócios, análise de margem por produto ou serviço, e projeções de fluxo de caixa robustas. Garantimos que você tome as melhores decisões de investimento com base em dados consolidados.',
    benefits: [
      'DRE, Balanço Patrimonial e Fluxo de Caixa mensais comentados',
      'Análise detalhada de indicadores de rentabilidade e liquidez',
      'Reuniões mensais com consultor sênior para alinhamento estratégico',
      'Painel gerencial digital com gráficos de fácil entendimento',
      'Apoio na elaboração do orçamento anual (Budgeting)'
    ]
  },
  {
    id: 'fiscal',
    title: 'Gestão Fiscal e Planejamento Tributário',
    category: 'fiscal',
    description: 'Reduza legalmente sua carga tributária com planejamento minucioso e revisão fiscal contínua da sua operação.',
    longDescription: 'O Brasil possui uma das legislações fiscais mais complexas do mundo. Nós monitoramos diariamente as mudanças na lei para enquadrar sua empresa no regime tributário ideal (Simples Nacional, Lucro Presumido ou Lucro Real). Realizamos revisões retroativas em busca de créditos fiscais acumulados que podem ser devolvidos para o seu caixa.',
    benefits: [
      'Planejamento Tributário Anual para redução legal de impostos',
      'Auditoria digital de obrigações acessórias para evitar multas',
      'Recuperação de créditos fiscais (Monofásicos, ICMS, PIS/COFINS)',
      'Apuração ágil de guias de impostos (DAS, ICMS, ISS, IRPJ, CSLL)',
      'Suporte consultivo para emissão correta de notas fiscais (NFe, NFSe)'
    ]
  },
  {
    id: 'dp',
    title: 'Departamento Pessoal e eSocial',
    category: 'dp',
    description: 'Segurança jurídica absoluta para sua empresa, com processamento ágil de folha de pagamento e conformidade trabalhista.',
    longDescription: 'Evite passivos trabalhistas com uma gestão rigorosa do Departamento Pessoal. Nós cuidamos de todo o ciclo de vida do funcionário na sua empresa: admissão, férias, rescisões, benefícios e folha de pagamento. Tudo estruturado em perfeita harmonia com as regras do eSocial e as convenções coletivas de cada sindicato.',
    benefits: [
      'Processamento completo da Folha de Pagamento, Pró-Labore e autônomos',
      'Cálculo preciso de encargos sociais (INSS, FGTS, IRRF)',
      'Gestão integrada de férias, afastamentos, licenças e demissões',
      'Transmissão segura de dados para o eSocial, DCTFWeb e FGTS Digital',
      'Assessoria preventiva em legislação trabalhista e acordos coletivos'
    ]
  },
  {
    id: 'bpo',
    title: 'BPO Financeiro (Terceirização)',
    category: 'bpo',
    description: 'Terceirize o departamento financeiro do seu negócio. Cuidamos das contas a pagar, receber, notas e conciliação bancária diária.',
    longDescription: 'Ganhe tempo produtivo focando na atividade-fim da sua empresa enquanto nossos especialistas cuidam do dia a dia financeiro. Gerenciamos suas contas a pagar, contas a receber, faturamento de notas, agendamento de pagamentos no banco e controle de inadimplência. Tudo reportado semanalmente para manter você no controle.',
    benefits: [
      'Agendamento diário de contas a pagar (sem acesso para saques/transferências)',
      'Controle rigoroso de contas a receber e cobrança amigável de inadimplentes',
      'Faturamento automatizado de notas fiscais de serviço e boletos bancários',
      'Conciliação bancária diária e classificação precisa de despesas',
      'Envio de fluxo de caixa realizado vs. previsto todas as sextas-feiras'
    ]
  },
  {
    id: 'societario',
    title: 'Abertura, Alteração e Regularização de Empresa',
    category: 'societario',
    description: 'Abra sua empresa de forma rápida, segura e com a melhor estrutura societária para proteção patrimonial e eficiência fiscal.',
    longDescription: 'Facilitamos todo o processo burocrático de abertura, alteração de contratos ou encerramento de empresas. Analisamos a melhor natureza jurídica (LTDA, SLU, S/A) e as atividades (CNAEs) ideais para garantir que você não pague impostos desnecessários desde a concepção do negócio. Também atuamos na blindagem e acordos de sócios.',
    benefits: [
      'Abertura de empresas ágil junto à Junta Comercial e Receita Federal',
      'Obtenção rápida de alvarás de funcionamento, licenças e inscrições',
      'Alterações contratuais (entrada/saída de sócios, mudança de endereço ou capital)',
      'Regularização de pendências cadastrais em todos os órgãos públicos',
      'Transformação de MEI para Microempresa (ME) sem interrupção de faturamento'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'marina',
    name: 'Dra. Marina Santos',
    role: 'Sócia-Fundadora',
    company: 'Clínica OdontoQuality',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'A migração para a contabilidade consultiva deles salvou nossa clínica de pagar impostos desnecessários. Fizemos um planejamento estrutural que reduziu nossos impostos mensais em 28%, gerando um alívio enorme no nosso fluxo de caixa.',
    rating: 5,
    businessType: 'Clínica de Saúde / Lucro Presumido'
  },
  {
    id: 'roberto',
    name: 'Roberto Albuquerque',
    role: 'CEO & Fundador',
    company: 'NextGen Softwares',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'Como empresa de tecnologia, precisávamos de agilidade. O BPO Financeiro deles eliminou a necessidade de contratarmos um departamento interno. Hoje, controlo todo o caixa por relatórios objetivos e precisos enviados semanalmente.',
    rating: 5,
    businessType: 'SaaS & Tecnologia / Simples Nacional'
  },
  {
    id: 'juliana',
    name: 'Juliana Mendes',
    role: 'Diretora Executiva',
    company: 'SulAlimentos Distribuidora',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'A equipe de Departamento Pessoal deles é impecável. Gerenciar mais de 80 colaboradores com eSocial, escalas e convenções coletivas complexas era um pesadelo. Em dois anos de parceria, zeramos novos processos trabalhistas.',
    rating: 5,
    businessType: 'Indústria e Distribuição / Lucro Real'
  }
];

/**
 * Calculates simulated taxes for three major Brazilian tax regimes based on standard logic.
 */
export function calculateTaxSimulation(input: SimulationInput) {
  const { revenue, sector, payroll } = input;
  const annualRevenue = revenue * 12;

  // 1. Simples Nacional Calculation
  // We approximate the tax rates based on the typical tiers (Anexo III for Serviços, Anexo I for Comercio, Anexo II for Industria)
  let simplesRate = 0.06; // default minimum
  if (sector === 'servicos') {
    // If payroll / revenue >= 28%, factor R applies, rate is ~6%. If not, Anexo V is ~15.5%
    const factorR = revenue > 0 ? payroll / revenue : 0;
    if (factorR >= 0.28) {
      if (annualRevenue <= 180000) simplesRate = 0.06;
      else if (annualRevenue <= 360000) simplesRate = 0.082;
      else if (annualRevenue <= 720000) simplesRate = 0.102;
      else if (annualRevenue <= 1800000) simplesRate = 0.125;
      else simplesRate = 0.145;
    } else {
      if (annualRevenue <= 180000) simplesRate = 0.155;
      else if (annualRevenue <= 360000) simplesRate = 0.162;
      else if (annualRevenue <= 720000) simplesRate = 0.175;
      else if (annualRevenue <= 1800000) simplesRate = 0.19;
      else simplesRate = 0.22;
    }
  } else if (sector === 'comercio') {
    if (annualRevenue <= 180000) simplesRate = 0.04;
    else if (annualRevenue <= 360000) simplesRate = 0.057;
    else if (annualRevenue <= 720000) simplesRate = 0.069;
    else if (annualRevenue <= 1800000) simplesRate = 0.083;
    else simplesRate = 0.105;
  } else { // industria
    if (annualRevenue <= 180000) simplesRate = 0.045;
    else if (annualRevenue <= 360000) simplesRate = 0.065;
    else if (annualRevenue <= 720000) simplesRate = 0.078;
    else if (annualRevenue <= 1800000) simplesRate = 0.091;
    else simplesRate = 0.112;
  }

  const simplesNacionalTax = revenue * simplesRate;

  // 2. Lucro Presumido Calculation
  // Service: presump rate 32%. IRPJ (15% on presumptive) + CSLL (9% on presumptive) = 7.68% of gross.
  // PIS/COFINS cumulative = 3.65%. ISS = average 4%. Total services = 15.33%
  // Commerce/Industry: presump rate 8%. IRPJ/CSLL on 8% = 2.4% + PIS/COFINS = 3.65% + ICMS = average 5% (effective). Total = 11.05%
  let presumidoRate = 0.1105;
  if (sector === 'servicos') {
    presumidoRate = 0.1533;
  } else if (sector === 'industria') {
    presumidoRate = 0.1185; // extra IPI/ICMS considerations
  }
  const lucroPresumidoTax = revenue * presumidoRate;

  // 3. Lucro Real Calculation
  // Taxes are calculated on actual profit. Let's assume a realistic average operational profit margin:
  // Let's assume profit margin is 12% for commerce/industry and 20% for services.
  // IRPJ/CSLL is 34% of that profit.
  // PIS/COFINS (non-cumulative) is 9.25% of revenue, but we get credits for purchases (say, effective is around 4.5%).
  // Plus state/local taxes (ISS 4% or ICMS effective 5%).
  let realRateOfRevenue = 0.12; // default
  if (sector === 'servicos') {
    const profitMargin = 0.22; // 22% profit margin
    const profitTax = profitMargin * 0.34; // 7.48% of revenue
    const nonCumulativePisCofins = 0.055; // 5.5% effective after credits
    const iss = 0.04;
    realRateOfRevenue = profitTax + nonCumulativePisCofins + iss;
  } else {
    const profitMargin = 0.09; // 9% profit margin
    const profitTax = profitMargin * 0.34; // 3.06% of revenue
    const nonCumulativePisCofins = 0.045; // 4.5% after credits
    const icms = 0.05;
    realRateOfRevenue = profitTax + nonCumulativePisCofins + icms;
  }
  const lucroRealTax = revenue * realRateOfRevenue;

  // Find the best option
  const options = [
    { name: 'Simples Nacional', tax: simplesNacionalTax },
    { name: 'Lucro Presumido', tax: lucroPresumidoTax },
    { name: 'Lucro Real', tax: lucroRealTax }
  ];

  options.sort((a, b) => a.tax - b.tax);
  const bestRegime = options[0].name;
  const worstRegime = options[2].name;
  const savings = options[2].tax - options[0].tax;

  return {
    simplesNacionalTax: Math.round(simplesNacionalTax),
    lucroPresumidoTax: Math.round(lucroPresumidoTax),
    lucroRealTax: Math.round(lucroRealTax),
    bestRegime,
    savings: Math.round(savings)
  };
}

/**
 * Calculates the real operational cost of an employee (CLT) to the employer in Brazil.
 */
export function calculateEmployeeCost(input: EmployeeCostInput) {
  const { baseSalary, regime, hasBenefits, benefitsCost } = input;

  // Standard CLT charges:
  // FGTS: 8% of salary
  const fgts = baseSalary * 0.08;
  
  // FGTS multi-annual provision (férias + 1/3, 13º salário)
  // Provision of 13º: 1/12th of salary = 8.33%
  const provision13th = baseSalary * (1 / 12);
  
  // Provision of Férias + 1/3: 1/12th of (salary + 1/3 salary) = 1.33 / 12 = 11.11%
  const provisionFerias = baseSalary * (1.33 / 12);

  // INSS Patronal / RAT / Terceiros:
  // Simples Nacional (Anexos I, II, III and V) is exempt from the 20% Patronal INSS.
  // Other regimes (Lucro Presumido, Lucro Real, or Simples Nacional Anexo IV) pay around 22.5% to 28.5%.
  const inssPatronalRate = regime === 'Simples' ? 0 : 0.278; // Patronal + RAT + Terceiros (average 27.8%)
  const inssPatronal = baseSalary * inssPatronalRate;

  // Provision INSS on 13º and Férias if other regime
  const inssOnProvisions = inssPatronalRate > 0 ? (provision13th + provisionFerias) * inssPatronalRate : 0;

  // Benefits
  const benefits = hasBenefits ? benefitsCost : 0;

  const totalCharges = fgts + provision13th + provisionFerias + inssPatronal + inssOnProvisions;
  const finalTotal = baseSalary + totalCharges + benefits;
  const multiplier = baseSalary > 0 ? finalTotal / baseSalary : 1;

  return {
    baseSalary: Math.round(baseSalary),
    fgts: Math.round(fgts),
    provisions: Math.round(provision13th + provisionFerias),
    inssPatronal: Math.round(inssPatronal + inssOnProvisions),
    benefits: Math.round(benefits),
    totalCharges: Math.round(totalCharges + benefits),
    finalTotal: Math.round(finalTotal),
    multiplier: Number(multiplier.toFixed(2))
  };
}
