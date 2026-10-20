'use client';

import React from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccreditationView from '@/components/AccreditationView';
import { useRouter } from 'next/navigation';

export default function AccreditationPage() {
  const router = useRouter();

  const handleNavigate = (
    view:
      | 'home'
      | 'detail'
      | 'about'
      | 'structure'
      | 'admissions'
      | 'academic'
      | 'accreditation'
      | 'payment'
  ) => {
    if (view === 'home') {
      router.push('/');
    } else if (view === 'about') {
      router.push('/about');
    } else if (view === 'structure') {
      router.push('/structure');
    } else if (view === 'academic' || view === 'detail') {
      router.push('/academic');
    } else if (view === 'admissions') {
      router.push('/admissions');
    } else if (view === 'accreditation') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'payment') {
      router.push('/payment-information');
    }
  };

  return (
    <>
      <UtilityBar />
      <Header currentView="accreditation" onNavigate={handleNavigate} />
      <AccreditationView onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
