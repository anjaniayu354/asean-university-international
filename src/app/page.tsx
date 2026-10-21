'use client';

import React, { useState } from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header, { AppView } from '@/components/Header';
import Footer from '@/components/Footer';
import HomeView from '@/components/HomeView';
import AcademicView from '@/components/AcademicView';
import AboutView from '@/components/AboutView';
import StructureView from '@/components/StructureView';
import AdmissionsView from '@/components/AdmissionsView';
import AccreditationView from '@/components/AccreditationView';
import PaymentView from '@/components/PaymentView';
import ContactView from '@/components/ContactView';
import PrivacyView from '@/components/PrivacyView';
import TermsView from '@/components/TermsView';
import AccessibilityView from '@/components/AccessibilityView';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<AppView>('home');

  return (
    <>
      <UtilityBar onNavigate={setCurrentView} />
      <Header currentView={currentView} onNavigate={setCurrentView} />
      {currentView === 'home' && <HomeView onNavigate={setCurrentView} />}
      {(currentView === 'detail' || currentView === 'academic') && (
        <AcademicView onNavigate={setCurrentView} />
      )}
      {currentView === 'about' && <AboutView onNavigate={setCurrentView} />}
      {currentView === 'structure' && <StructureView onNavigate={setCurrentView} />}
      {currentView === 'admissions' && <AdmissionsView onNavigate={setCurrentView} />}
      {currentView === 'accreditation' && <AccreditationView onNavigate={setCurrentView} />}
      {currentView === 'payment' && <PaymentView onNavigate={setCurrentView} />}
      {currentView === 'contact' && <ContactView onNavigate={setCurrentView} />}
      {currentView === 'privacy' && <PrivacyView onNavigate={setCurrentView} />}
      {currentView === 'terms' && <TermsView onNavigate={setCurrentView} />}
      {currentView === 'accessibility' && <AccessibilityView onNavigate={setCurrentView} />}
      <Footer onNavigate={setCurrentView} />
    </>
  );
}
