import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import TermsPage from './pages/TermsPage';

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
          <Route path="/termos-de-uso" element={<TermsPage />} />
        </Routes>

        {/* Footer Section with CFC standard details */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
