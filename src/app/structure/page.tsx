'use client';

import React from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructureView from '@/components/StructureView';
import { useRouter } from 'next/navigation';

export default function StructurePage() {
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
    } else if (view === 'detail' || view === 'academic') {
      router.push('/academic');
    } else if (view === 'about') {
      router.push('/about');
    } else if (view === 'admissions') {
      router.push('/admissions');
    } else if (view === 'accreditation') {
      router.push('/accreditation');
    } else if (view === 'payment') {
      router.push('/payment-information');
    } else if (view === 'structure') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <UtilityBar />
      <Header currentView="structure" onNavigate={handleNavigate} />
      <StructureView onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
