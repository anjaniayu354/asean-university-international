'use client';

import React from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyView, { AppView } from '@/components/PrivacyView';
import { useRouter } from 'next/navigation';

export default function PrivacyPage() {
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
    } else if (view === 'accreditation') {
      router.push('/accreditation');
    } else if (view === 'payment') {
      router.push('/payment-information');
    } else if (view === 'contact') {
      router.push('/contact');
    } else if (view === 'privacy') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'terms') {
      router.push('/terms');
    } else if (view === 'accessibility') {
      router.push('/accessibility');
    }
  };

  return (
    <>
      <UtilityBar />
      <Header currentView="privacy" onNavigate={handleNavigate} />
      <PrivacyView onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
