'use client';

import React from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccessibilityView, { AppView } from '@/components/AccessibilityView';
import { useRouter } from 'next/navigation';

export default function AccessibilityPage() {
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
      router.push('/privacy');
    } else if (view === 'terms') {
      router.push('/terms');
    } else if (view === 'accessibility') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <UtilityBar />
      <Header currentView="accessibility" onNavigate={handleNavigate} />
      <AccessibilityView onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
