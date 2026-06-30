import React from 'react';

interface TermsOfUseProps {
  onBack: () => void;
}

export default function TermsOfUse({ onBack }: TermsOfUseProps) {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="mb-8 flex items-center text-accent hover:text-primary transition-colors font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para a página inicial
        </button>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-serif text-primary mb-8 font-medium">Termos de Uso</h1>
          
          <div className="prose prose-lg text-secondary space-y-6">
            <p>
              Estes Termos de Uso regem a utilização do site e dos serviços oferecidos pelo nosso escritório de contabilidade. Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">1. Uso de Licença</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) em nosso site, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modificar ou copiar os materiais;</li>
              <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
              <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
              <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
              <li>Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
            </ul>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">2. Isenção de Responsabilidade</h2>
            <p>
              Os materiais no site são fornecidos 'como estão'. Não oferecemos garantias, expressas ou implícitas, e, por este meio, isentamo-nos e negamos todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </p>
            <p>
              Além disso, não garantimos ou fazemos qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em nosso site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">3. Limitações</h2>
            <p>
              Em nenhum caso nós ou nossos fornecedores seremos responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em nosso site, mesmo que tenhamos sido notificados oralmente ou por escrito da possibilidade de tais danos.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">4. Precisão dos Materiais</h2>
            <p>
              Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. Não garantimos que qualquer material no site seja preciso, completo ou atual. Podemos fazer alterações nos materiais contidos no site a qualquer momento, sem aviso prévio. No entanto, não nos comprometemos a atualizar os materiais.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">5. Links</h2>
            <p>
              Não analisamos todos os sites vinculados ao nosso site e não somos responsáveis pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por nossa parte. O uso de qualquer site vinculado é por conta e risco do usuário.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">6. Modificações</h2>
            <p>
              Podemos revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
