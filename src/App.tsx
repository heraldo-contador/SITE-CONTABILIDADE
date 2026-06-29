import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculators from './components/Calculators';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SubmissionInbox from './components/SubmissionInbox';
import { ContactSubmission } from './types';

export default function App() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledNotes, setPrefilledNotes] = useState('');

  // 1. Load submissions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('aurum_submissions');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error('Falha ao ler submissões locais:', e);
      }
    } else {
      // Seed with one beautiful mock lead to make the panel look premium out of the box
      const seed: ContactSubmission[] = [
        {
          id: 'lead-seed-1',
          name: 'Guilherme Macedo',
          email: 'guilherme@logisticsul.com.br',
          phone: '(41) 98877-6655',
          companyName: 'LogiSul Transportes',
          revenueRange: '50k-100k',
          serviceType: 'BPO Financeiro (Terceirização)',
          message: 'Gostaria de terceirizar nossa conciliação e faturamento diário. Atualmente emitimos cerca de 120 notas por mês.',
          createdAt: '09:15 - 29/06/2026',
          status: 'Pendente',
        },
      ];
      setSubmissions(seed);
      localStorage.setItem('aurum_submissions', JSON.stringify(seed));
    }
  }, []);

  // Save submissions to localStorage whenever they change
  const saveSubmissions = (newSubmissions: ContactSubmission[]) => {
    setSubmissions(newSubmissions);
    localStorage.setItem('aurum_submissions', JSON.stringify(newSubmissions));
  };

  // 2. Submit new message
  const handleSubmitSubmission = (newSubmission: ContactSubmission) => {
    const updated = [newSubmission, ...submissions];
    saveSubmissions(updated);
  };

  // 3. Toggle lead status (Pendente <=> Respondido)
  const handleToggleLeadStatus = (id: string) => {
    const updated = submissions.map((sub) => {
      if (sub.id === id) {
        return {
          ...sub,
          status: sub.status === 'Pendente' ? ('Respondido' as const) : ('Pendente' as const),
        };
      }
      return sub;
    });
    saveSubmissions(updated);
  };

  // 4. Delete lead
  const handleDeleteLead = (id: string) => {
    const updated = submissions.filter((sub) => sub.id !== id);
    saveSubmissions(updated);
  };

  // 5. Inject a mock lead dynamically for testing
  const handleAddMockLead = () => {
    const mockNames = ['Carlos Eduardo', 'Patrícia Vieira', 'Dr. Henrique Lima', 'Alessandra Rocha'];
    const mockEmails = ['carlos@metalburg.com', 'patricia@focuseventos.com.br', 'henrique@clinicavita.med.br', 'alessandra@boutiquefashion.com'];
    const mockPhones = ['(11) 97123-4567', '(21) 98223-9988', '(31) 99112-2334', '(19) 98344-5566'];
    const mockCompanies = ['Metalúrgica Metalburg', 'Focus Live Eventos', 'Clínica Vita', 'Boutique Fashion E-com'];
    const mockServices = [
      'Contabilidade Consultiva',
      'Gestão Fiscal & Planejamento Tributário',
      'Abertura, Alteração & Regularização',
      'BPO Financeiro (Terceirização)',
    ];
    const mockRevenues = ['10k-50k', '50k-100k', 'above-100k', 'below-10k'];
    const mockMessages = [
      'Estou pagando muito imposto no Lucro Presumido e quero simular a migração para o Simples Nacional.',
      'Tive problemas com o eSocial de uma contabilidade antiga e preciso de uma auditoria no nosso DP.',
      'Estou planejando abrir uma holding médica e gostaria de uma assessoria societária estrutural.',
      'Tenho pressa em terceirizar meu contas a pagar e receber, pois gasto muito tempo nisso.',
    ];

    const idx = Math.floor(Math.random() * mockNames.length);

    const newMock: ContactSubmission = {
      id: 'mock-lead-' + Math.random().toString(36).substring(2, 6),
      name: mockNames[idx],
      email: mockEmails[idx],
      phone: mockPhones[idx],
      companyName: mockCompanies[idx],
      revenueRange: mockRevenues[idx],
      serviceType: mockServices[idx],
      message: mockMessages[idx],
      createdAt: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) + ' - ' + new Date().toLocaleDateString('pt-BR'),
      status: 'Pendente',
    };

    const updated = [newMock, ...submissions];
    saveSubmissions(updated);
  };

  // 6. Connect Services & Calculators to Contact Form
  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledNotes(`Gostaria de solicitar um orçamento e diagnóstico específico para o serviço de ${serviceTitle}.`);
  };

  const handleApplySimulation = (serviceTitle: string, notes: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledNotes(notes);
  };

  const unreadCount = submissions.filter((s) => s.status === 'Pendente').length;

  return (
    <div className="min-h-screen bg-white text-primary flex flex-col selection:bg-accent/30 selection:text-primary">
      {/* Navigation and Top Header */}
      <Header onOpenInbox={() => setIsInboxOpen(true)} unreadCount={unreadCount} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Services Showcase & Details Modal */}
        <Services onSelectService={handleSelectService} />

        {/* Interactive Tax/CLT Simulators */}
        <Calculators onApplySimulation={handleApplySimulation} />

        {/* Blog and Knowledge Center */}
        <Blog />

        {/* Contact Form & Real-time Qualification */}
        <ContactForm
          prefilledService={prefilledService}
          prefilledNotes={prefilledNotes}
          onSubmit={handleSubmitSubmission}
        />
      </main>

      {/* Administrative Submissions Viewer (Slide-over Drawer) */}
      <SubmissionInbox
        isOpen={isInboxOpen}
        onClose={() => setIsInboxOpen(false)}
        submissions={submissions}
        onToggleStatus={handleToggleLeadStatus}
        onDelete={handleDeleteLead}
        onAddMockLead={handleAddMockLead}
      />

      {/* Footer Section with CFC standard details */}
      <Footer />
    </div>
  );
}
