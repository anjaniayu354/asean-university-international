'use client';

import React from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutView from '@/components/AboutView';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
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
    } else if (view === 'detail' || view === 'academic') {
      router.push('/academic');
    } else if (view === 'structure') {
      router.push('/structure');
    } else if (view === 'admissions') {
      router.push('/admissions');
    } else if (view === 'accreditation') {
      router.push('/accreditation');
    } else if (view === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <UtilityBar />
      <Header currentView="about" onNavigate={handleNavigate} />
      <AboutView onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
