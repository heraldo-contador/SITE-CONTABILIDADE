import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AdminBlogPage from './pages/AdminBlogPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ReformaTributariaPage from './pages/ReformaTributariaPage';
import ProdutoresConteudoPage from './pages/ProdutoresConteudoPage';
import ComercioPage from './pages/ComercioPage';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-primary flex flex-col selection:bg-accent/30 selection:text-primary">
        {/* Navigation and Top Header */}
        <Header />

        {/* Main Sections or Terms */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/admin/blog" element={<AdminBlogPage />} />
          <Route path="/termos-de-uso" element={<TermsPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
          <Route path="/reforma-tributaria" element={<ReformaTributariaPage />} />
          <Route path="/segmentos/produtores-de-conteudo" element={<ProdutoresConteudoPage />} />
          <Route path="/segmentos/comercio" element={<ComercioPage />} />
        </Routes>

        {/* Footer Section with CFC standard details */}
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
