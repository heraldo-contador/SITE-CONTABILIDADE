import React from 'react';
import TermsOfUse from '../components/TermsOfUse';
import { useNavigate } from 'react-router-dom';

export default function TermsPage() {
  const navigate = useNavigate();
  return (
    <main className="flex-grow">
      <TermsOfUse onBack={() => {
        navigate('/');
        window.scrollTo(0, 0);
      }} />
    </main>
  );
}
