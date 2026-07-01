import React from 'react';
import { Landmark, Mail, Phone, MapPin, ExternalLink, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white font-sans pt-16 pb-8 border-t border-accent/25 relative overflow-hidden">
      
      {/* Design accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-12 mb-10">
          
          {/* Column 1: Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-1.5 rounded-lg">
                <Landmark className="w-5 h-5 text-primary" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                HERALDO CONTABILIDADE DIGITAL<span className="text-accent font-sans font-light">.</span>
              </span>
            </div>
            <p className="text-bg-light/75 text-xs sm:text-sm leading-relaxed max-w-sm">
              Mais do que processadores de guias fiscais, somos os consultores estratégicos que sua empresa precisa para crescer de forma segura, sustentável e lucrativa.
            </p>
          </div>

          {/* Column 2: Quick navigation */}
          <div>
            <h4 className="font-serif font-bold text-sm text-accent tracking-wide uppercase mb-4.5">
              Nossos Canais
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-bg-light/80">
              <li>
                <a href="/#servicos" className="hover:text-accent transition-colors">Serviços Contábeis</a>
              </li>
              <li>
                <a href="/#simuladores" className="hover:text-accent transition-colors">Simuladores de Tributos</a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors">Blog & Conteúdo</Link>
              </li>
              <li>
                <a href="/#contato" className="hover:text-accent transition-colors">Solicitar Reunião</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-sm text-accent tracking-wide uppercase mb-4.5">
              Fale Conosco
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-bg-light/85">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>+55 (91) 99360-8142</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="break-all">contato@heraldocontabilidade.com.br</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Atendimento Digital em Todo o Brasil</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Standards */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm text-accent tracking-wide uppercase mb-2.5">
              Regulação e Ética
            </h4>
            <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl text-xs text-bg-light/80">
              <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Escritório contábil em conformidade integral com o Conselho Federal de Contabilidade (CFC) sob o registro SP-050308/O-4.
              </p>
            </div>
            <div className="flex gap-4 text-xs text-bg-light/50">
              <span>CRC ativo</span>
              <span>•</span>
              <span>LGPD Assegurada</span>
            </div>
          </div>

        </div>

        {/* Closing Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-bg-light/50 gap-4">
          <span>
            © {currentYear} Heraldo Contabilidade S/S. Todos os direitos reservados.
          </span>
          <div className="flex gap-4">
            <Link 
              to="/termos-de-uso" 
              className="hover:underline hover:text-white"
            >
              Termos de Uso
            </Link>
            <span>•</span>
            <a href="#" className="hover:underline hover:text-white">Políticas de Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
