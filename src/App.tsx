import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculators from './components/Calculators';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TermsOfUse from './components/TermsOfUse';
import { ContactSubmission } from './types';

export default function App() {
  const [showTerms, setShowTerms] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledNotes, setPrefilledNotes] = useState('');

  // 2. Submit new message
  const handleSubmitSubmission = (newSubmission: ContactSubmission) => {
    // For now we just log it. In the future this can connect to Formspree/Web3Forms/etc.
    console.log('Nova submissão recebida:', newSubmission);
  };

  // Connect Services & Calculators to Contact Form
  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledNotes(`Gostaria de solicitar um orçamento e diagnóstico específico para o serviço de ${serviceTitle}.`);
  };

  const handleApplySimulation = (serviceTitle: string, notes: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledNotes(notes);
  };

  return (
    <div className="min-h-screen bg-white text-primary flex flex-col selection:bg-accent/30 selection:text-primary">
      {/* Navigation and Top Header */}
      <Header />

      {/* Main Sections or Terms */}
      {showTerms ? (
        <main className="flex-grow">
          <TermsOfUse onBack={() => {
            setShowTerms(false);
            window.scrollTo(0, 0);
          }} />
        </main>
      ) : (
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
      )}

      {/* Footer Section with CFC standard details */}
      <Footer onTermsClick={() => {
        setShowTerms(true);
        window.scrollTo(0, 0);
      }} />
    </div>
  );
}
