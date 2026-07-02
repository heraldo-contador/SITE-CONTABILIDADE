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
            <p><strong>Última atualização:</strong> 02 de julho de 2026</p>
            <p>
              Bem-vindo ao site da Heraldo Contabilidade. Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde com qualquer uma das condições aqui estabelecidas, recomendamos que não utilize este site.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">1. Objetivo</h2>
            <p>
              O site da Heraldo Contabilidade tem como finalidade disponibilizar informações sobre serviços contábeis, fiscais, trabalhistas, societários e financeiros, bem como facilitar o contato entre clientes e a empresa.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">2. Utilização do Site</h2>
            <p>
              O usuário compromete-se a utilizar este site de forma ética, responsável e em conformidade com a legislação brasileira vigente.
            </p>
            <p>É proibido:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar o site para fins ilícitos;</li>
              <li>Tentar acessar áreas restritas sem autorização;</li>
              <li>Inserir códigos maliciosos, vírus ou qualquer conteúdo que comprometa a segurança do sistema;</li>
              <li>Utilizar as informações do site de forma que possa causar prejuízo à Heraldo Contabilidade ou a terceiros.</li>
            </ul>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponibilizado neste site, incluindo textos, imagens, logotipos, identidade visual, documentos, gráficos e demais materiais, é protegido pelas leis de propriedade intelectual e pertence à Heraldo Contabilidade ou aos seus respectivos titulares.
            </p>
            <p>
              É proibida a reprodução, distribuição ou utilização do conteúdo sem autorização prévia e por escrito.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">4. Informações Disponibilizadas</h2>
            <p>
              As informações publicadas neste site possuem caráter informativo e não substituem a análise técnica individualizada de cada caso.
            </p>
            <p>
              A contratação de serviços contábeis depende de avaliação específica e da formalização contratual entre as partes.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">5. Responsabilidades</h2>
            <p>
              A Heraldo Contabilidade busca manter as informações atualizadas e corretas, porém não garante que o conteúdo esteja sempre livre de erros ou desatualizações.
            </p>
            <p>
              O usuário é responsável pelas informações fornecidas por meio dos formulários de contato e declara que os dados enviados são verdadeiros.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">6. Privacidade e Proteção de Dados</h2>
            <p>
              O tratamento dos dados pessoais segue os princípios da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
            </p>
            <p>
              Para conhecer como seus dados são tratados, consulte nossa Política de Privacidade.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">7. Links para Terceiros</h2>
            <p>
              Este site poderá conter links para sites de terceiros. A Heraldo Contabilidade não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas adotadas por esses sites.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">8. Disponibilidade</h2>
            <p>
              Embora sejam adotadas medidas para manter o site em funcionamento, a Heraldo Contabilidade não garante disponibilidade contínua, podendo ocorrer interrupções para manutenção, atualização ou por fatores externos.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">9. Alterações dos Termos</h2>
            <p>
              A Heraldo Contabilidade poderá alterar estes Termos de Uso a qualquer momento, sem aviso prévio. A versão mais recente estará sempre disponível nesta página.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">10. Legislação Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
            </p>
            <p>
              Fica eleito o foro da comarca da sede da Heraldo Contabilidade para dirimir quaisquer controvérsias oriundas da utilização deste site, ressalvadas as hipóteses previstas em lei.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">11. Contato</h2>
            <p>
              Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelos canais oficiais disponibilizados no site da Heraldo Contabilidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
