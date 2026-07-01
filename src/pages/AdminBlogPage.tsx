import React, { useState } from 'react';
import Blog from '../components/Blog';
import { Lock } from 'lucide-react';

export default function AdminBlogPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // A simple client-side password for demo purposes.
    // In a real application, this should be authenticated via a backend.
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-24">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="bg-accent/20 p-3 rounded-full">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-serif text-primary font-bold text-center mb-6">Acesso Restrito</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-1">Senha de Acesso</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder="Insira a senha"
              />
              {error && <p className="text-red-500 text-sm mt-1">Senha incorreta.</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Entrar
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-6">
            Senha padrão: admin123 (apenas para demonstração)
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow">
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium flex justify-between items-center">
        <span>Modo Administrador - Criação de Artigos Ativada</span>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-xs transition-colors"
        >
          Sair
        </button>
      </div>
      <Blog isAdmin={true} />
    </main>
  );
}
