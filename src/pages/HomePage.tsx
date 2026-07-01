import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Calculators from '../components/Calculators';
import ContactForm from '../components/ContactForm';
import { ContactSubmission } from '../types';

export default function HomePage() {
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledNotes, setPrefilledNotes] = useState('');

  const handleSubmitSubmission = (newSubmission: ContactSubmission) => {
    console.log('Nova submissão recebida:', newSubmission);
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledNotes(`Gostaria de solicitar um orçamento e diagnóstico específico para o serviço de ${serviceTitle}.`);
  };

  const handleApplySimulation = (serviceTitle: string, notes: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledNotes(notes);
  };

  return (
    <main className="flex-grow">
      <Hero />
      <Services onSelectService={handleSelectService} />
      <Calculators onApplySimulation={handleApplySimulation} />
      <ContactForm
        prefilledService={prefilledService}
        prefilledNotes={prefilledNotes}
        onSubmit={handleSubmitSubmission}
      />
    </main>
  );
}
