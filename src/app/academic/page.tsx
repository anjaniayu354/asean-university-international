'use client';

import React from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AcademicView from '@/components/AcademicView';
import { useRouter } from 'next/navigation';

export default function AcademicPage() {
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
    } else if (view === 'admissions') {
      router.push('/admissions');
    } else if (view === 'accreditation') {
      router.push('/accreditation');
    } else if (view === 'academic' || view === 'detail') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <>
      <UtilityBar />
      <Header currentView="academic" onNavigate={handleNavigate} />
      <AcademicView onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
