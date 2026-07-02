import React from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPage() {
  const navigate = useNavigate();
  return (
    <main className="flex-grow">
      <PrivacyPolicy onBack={() => {
        navigate('/');
        window.scrollTo(0, 0);
      }} />
    </main>
  );
}
