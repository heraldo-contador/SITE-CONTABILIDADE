export interface Service {
  id: string;
  title: string;
  category: 'contabilidade' | 'fiscal' | 'dp' | 'societario' | 'bpo';
  description: string;
  longDescription: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  businessType: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  revenueRange: string;
  serviceType: string;
  message: string;
  createdAt: string;
  status: 'Pendente' | 'Respondido';
}

export interface SimulationInput {
  revenue: number; // Monthly revenue
  sector: 'servicos' | 'comercio' | 'industria';
  payroll: number; // Monthly payroll expenses (employee cost)
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'impostos' | 'financas' | 'legislacao' | 'geral';
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  date: string;
  image?: string;
}

export interface EmployeeCostInput {
  baseSalary: number;
  regime: 'Simples' | 'Outros';
  hasBenefits: boolean;
  benefitsCost: number;
}
