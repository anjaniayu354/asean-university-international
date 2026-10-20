'use client';

import React from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header, { AppView } from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentView from '@/components/PaymentView';
import { useRouter } from 'next/navigation';

export default function PaymentInformationPage() {
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'contact') {
      router.push('/contact');
    } else if (view === 'privacy') {
      router.push('/privacy');
    } else if (view === 'terms') {
      router.push('/terms');
    } else if (view === 'accessibility') {
      router.push('/accessibility');
    }
  };

  return (
    <>
      <UtilityBar />
      <Header currentView="home" onNavigate={handleNavigate} />
      <PaymentView onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
