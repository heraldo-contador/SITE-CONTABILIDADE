import React from 'react';
import TributaQuiz from '../components/TributaQuiz';

export default function ReformaTributariaPage() {
  return (
    <main className="flex-grow bg-bg-light pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-primary font-medium mb-4">
            Reforma Tributária
          </h1>
          <p className="text-secondary max-w-2xl mx-auto">
            Teste seus conhecimentos sobre a Reforma Tributária com o nosso quiz interativo, ganhe conquistas e compartilhe seus resultados.
          </p>
        </div>
        
        <div className="w-full flex justify-center">
          <TributaQuiz />
        </div>
        
      </div>
    </main>
  );
}
