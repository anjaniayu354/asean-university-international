'use client';

import React from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdmissionsView from '@/components/AdmissionsView';
import { useRouter } from 'next/navigation';

export default function AdmissionsPage() {
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
  ) => {
    if (view === 'home') {
      router.push('/');
    } else if (view === 'about') {
      router.push('/about');
    } else if (view === 'structure') {
      router.push('/structure');
    } else if (view === 'academic' || view === 'detail') {
      router.push('/academic');
    } else if (view === 'accreditation') {
      router.push('/accreditation');
    } else if (view === 'admissions') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <UtilityBar />
      <Header currentView="admissions" onNavigate={handleNavigate} />
      <AdmissionsView onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
