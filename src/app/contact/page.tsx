'use client';

import React from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactView, { AppView } from '@/components/ContactView';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <Header currentView="contact" onNavigate={handleNavigate} />
      <ContactView onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
