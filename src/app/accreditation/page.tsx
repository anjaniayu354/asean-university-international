'use client';

import React from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header, { AppView } from '@/components/Header';
import Footer from '@/components/Footer';
import AccreditationView from '@/components/AccreditationView';
import { useRouter } from 'next/navigation';

export default function AccreditationPage() {
  const router = useRouter();

  const handleNavigate = (view: AppView) => {
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
    } else if (view === 'payment') {
      router.push('/payment-information');
    } else if (view === 'contact') {
      router.push('/contact');
    } else if (view === 'privacy') {
      router.push('/privacy');
    } else if (view === 'terms') {
      router.push('/terms');
    } else if (view === 'accessibility') {
      router.push('/accessibility');
    } else if (view === 'accreditation') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
