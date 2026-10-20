'use client';

import React, { useState } from 'react';
import UtilityBar from '@/components/UtilityBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeView from '@/components/HomeView';
import AcademicView from '@/components/AcademicView';
import AboutView from '@/components/AboutView';
import StructureView from '@/components/StructureView';
import AdmissionsView from '@/components/AdmissionsView';
import AccreditationView from '@/components/AccreditationView';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<
    | 'home'
    | 'detail'
    | 'about'
    | 'structure'
    | 'admissions'
    | 'academic'
    | 'accreditation'
  >('home');

  return (
    <>
      <UtilityBar />
      <Header currentView={currentView} onNavigate={setCurrentView} />
      {currentView === 'home' && <HomeView onNavigate={setCurrentView} />}
      {(currentView === 'detail' || currentView === 'academic') && (
        <AcademicView onNavigate={setCurrentView} />
      )}
      {currentView === 'about' && <AboutView onNavigate={setCurrentView} />}
      {currentView === 'structure' && <StructureView onNavigate={setCurrentView} />}
      {currentView === 'admissions' && <AdmissionsView onNavigate={setCurrentView} />}
      {currentView === 'accreditation' && <AccreditationView onNavigate={setCurrentView} />}
      <Footer onNavigate={setCurrentView} />
    </>
  );
}
