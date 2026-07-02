import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-bg-light pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8 font-medium text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </button>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-accent/20 p-3 rounded-2xl">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-serif text-primary font-medium">Política de Privacidade</h1>
          </div>
          
          <div className="prose prose-lg text-secondary space-y-6">
            <p><strong>Última atualização:</strong> 02 de julho de 2026</p>
            <p>
              A Heraldo Contabilidade respeita a privacidade de seus clientes, parceiros e visitantes. Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos os dados pessoais tratados por meio deste site.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">1. Quem somos</h2>
            <p>
              A Heraldo Contabilidade presta serviços nas áreas contábil, fiscal, trabalhista, societária e de consultoria empresarial.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">2. Dados que podemos coletar</h2>
            <p>Durante a utilização do site, poderemos coletar:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome;</li>
              <li>E-mail;</li>
              <li>Telefone ou WhatsApp;</li>
              <li>Empresa;</li>
              <li>CNPJ (quando informado);</li>
              <li>Cidade e Estado;</li>
              <li>Mensagens enviadas pelos formulários de contato;</li>
              <li>Endereço IP;</li>
              <li>Dados de navegação;</li>
              <li>Informações sobre dispositivo, navegador e sistema operacional;</li>
              <li>Cookies e tecnologias semelhantes.</li>
            </ul>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">3. Finalidade do tratamento</h2>
            <p>Os dados poderão ser utilizados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder solicitações de contato;</li>
              <li>Elaborar propostas comerciais;</li>
              <li>Prestar os serviços contratados;</li>
              <li>Cumprir obrigações legais e regulatórias;</li>
              <li>Melhorar a experiência de navegação;</li>
              <li>Enviar conteúdos informativos e institucionais, quando autorizado pelo usuário;</li>
              <li>Garantir a segurança do site.</li>
            </ul>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">4. Compartilhamento de dados</h2>
            <p>Os dados poderão ser compartilhados apenas quando necessário:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Com fornecedores responsáveis pela hospedagem, manutenção e segurança do site;</li>
              <li>Com plataformas de envio de e-mails e comunicação;</li>
              <li>Quando exigido por lei ou determinação judicial;</li>
              <li>Para o cumprimento de obrigações legais.</li>
            </ul>
            <p>A Heraldo Contabilidade não comercializa dados pessoais.</p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">5. Armazenamento e segurança</h2>
            <p>
              Adotamos medidas técnicas e administrativas adequadas para proteger os dados pessoais contra acessos não autorizados, perda, alteração ou divulgação indevida.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">6. Direitos do titular dos dados</h2>
            <p>Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o titular poderá solicitar:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmação da existência de tratamento;</li>
              <li>Acesso aos dados;</li>
              <li>Correção de dados incompletos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação quando cabível;</li>
              <li>Portabilidade dos dados;</li>
              <li>Revogação do consentimento, quando aplicável.</li>
            </ul>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">7. Retenção dos dados</h2>
            <p>
              Os dados serão armazenados apenas pelo tempo necessário para cumprir as finalidades desta Política ou para atender às exigências legais.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">8. Alterações desta Política</h2>
            <p>
              Esta Política poderá ser atualizada periodicamente. A versão vigente estará sempre disponível neste site.
            </p>

            <h2 className="text-xl font-medium text-primary mt-8 mb-4">9. Contato</h2>
            <p>
              Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, utilize os canais oficiais de atendimento disponibilizados pela Heraldo Contabilidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
