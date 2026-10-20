'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface HeaderProps {
  currentView?:
    | 'home'
    | 'detail'
    | 'about'
    | 'structure'
    | 'admissions'
    | 'academic'
    | 'accreditation';
  onNavigate?: (
    view:
      | 'home'
      | 'detail'
      | 'about'
      | 'structure'
      | 'admissions'
      | 'academic'
      | 'accreditation'
  ) => void;
}

export default function Header({ currentView = 'home', onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close search on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  // Auto-focus input when search opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [searchOpen]);

  const handleLinkClick = (
    e: React.MouseEvent,
    view:
      | 'home'
      | 'detail'
      | 'about'
      | 'structure'
      | 'admissions'
      | 'academic'
      | 'accreditation'
  ) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(view);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.trim().toLowerCase();
    setSearchOpen(false);

    if (
      query.includes('struct') ||
      query.includes('struktur') ||
      query.includes('leader') ||
      query.includes('dekan') ||
      query.includes('chancellor') ||
      query.includes('suhendar')
    ) {
      if (onNavigate) {
        onNavigate('structure');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        window.location.href = '/structure';
      }
    } else if (
      query.includes('accredit') ||
      query.includes('akreditasi') ||
      query.includes('eahea') ||
      query.includes('qahe') ||
      query.includes('iccac') ||
      query.includes('sertifikat') ||
      query.includes('certif')
    ) {
      if (onNavigate) {
        onNavigate('accreditation');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        window.location.href = '/accreditation';
      }
    } else if (
      query.includes('admission') ||
      query.includes('daftar') ||
      query.includes('syarat') ||
      query.includes('visa') ||
      query.includes('track')
    ) {
      if (onNavigate) {
        onNavigate('admissions');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        window.location.href = '/admissions';
      }
    } else if (query.includes('about') || query.includes('sejarah') || query.includes('history')) {
      if (onNavigate) {
        onNavigate('about');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        window.location.href = '/about';
      }
    } else if (
      query.includes('program') ||
      query.includes('academic') ||
      query.includes('fakultas') ||
      query.includes('facult') ||
      query.includes('master') ||
      query.includes('bachelor') ||
      query.includes('phd') ||
      query.includes('doctor') ||
      query.includes('cs') ||
      query.includes('business') ||
      query.includes('course')
    ) {
      if (onNavigate) {
        onNavigate('academic');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        window.location.href = '/academic';
      }
    } else if (
      query.includes('news') ||
      query.includes('berita') ||
      query.includes('artikel') ||
      query.includes('article')
    ) {
      if (currentView !== 'home' && onNavigate) {
        onNavigate('home');
      }
      setTimeout(() => {
        const el = document.getElementById('news');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (
      query.includes('fee') ||
      query.includes('tuition') ||
      query.includes('biaya') ||
      query.includes('scholarship') ||
      query.includes('beasiswa') ||
      query.includes('payment') ||
      query.includes('bayar')
    ) {
      if (currentView !== 'home' && onNavigate) {
        onNavigate('home');
      }
      setTimeout(() => {
        const el = document.getElementById('tuition');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      if (onNavigate) {
        onNavigate('academic');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        window.location.href = '/academic';
      }
    }
  };

  const handleQuickSearch = (term: string) => {
    setSearchQuery(term);
    const query = term.toLowerCase();
    setSearchOpen(false);

    if (query.includes('struct') || query.includes('struktur') || query.includes('leader')) {
      if (onNavigate) {
        onNavigate('structure');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        window.location.href = '/structure';
      }
    } else if (
      query.includes('accredit') ||
      query.includes('akreditasi') ||
      query.includes('sertifikat')
    ) {
      if (onNavigate) {
        onNavigate('accreditation');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        window.location.href = '/accreditation';
      }
    } else if (query.includes('admission') || query.includes('persyaratan')) {
      if (onNavigate) {
        onNavigate('admissions');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        window.location.href = '/admissions';
      }
    } else if (query.includes('news') || query.includes('berita') || query.includes('article')) {
      if (currentView !== 'home' && onNavigate) {
        onNavigate('home');
      }
      setTimeout(() => {
        const el = document.getElementById('news');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (query.includes('tuition') || query.includes('payment')) {
      if (currentView !== 'home' && onNavigate) {
        onNavigate('home');
      }
      setTimeout(() => {
        const el = document.getElementById('tuition');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      if (onNavigate) {
        onNavigate('academic');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        window.location.href = '/academic';
      }
    }
  };

  return (
    <header className={`hdr ${mobileMenuOpen ? 'nav-open' : ''}`} id="hdr">
      <div className="wrap">
        <Link
          href="/"
          className="logo"
          aria-label="ASEAN University International — Home"
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          <img
            src="/img/logo.png"
            alt="ASEAN University International logo"
            width={210}
            height={54}
            style={{ height: '54px', width: 'auto' }}
          />
        </Link>
        <nav>
          <ul className="nav">
            <li>
              <Link
                href="/"
                className={currentView === 'home' ? 'is-active' : ''}
                onClick={(e) => handleLinkClick(e, 'home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={currentView === 'about' ? 'is-active' : ''}
                onClick={(e) => handleLinkClick(e, 'about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/structure"
                className={currentView === 'structure' ? 'is-active' : ''}
                onClick={(e) => handleLinkClick(e, 'structure')}
              >
                Structure
              </Link>
            </li>
            <li>
              <Link
                href="/admissions"
                className={currentView === 'admissions' ? 'is-active' : ''}
                onClick={(e) => handleLinkClick(e, 'admissions')}
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                href="/academic"
                className={currentView === 'academic' || currentView === 'detail' ? 'is-active' : ''}
                onClick={(e) => handleLinkClick(e, 'academic')}
              >
                Academic
              </Link>
            </li>
            <li>
              <Link
                href="/accreditation"
                className={currentView === 'accreditation' ? 'is-active' : ''}
                onClick={(e) => handleLinkClick(e, 'accreditation')}
              >
                Accreditation
              </Link>
            </li>
            <li>
              <a href="#students" onClick={() => setMobileMenuOpen(false)}>
                Students
              </a>
            </li>
          </ul>
        </nav>
        <div className="hdr-cta">
          <button
            type="button"
            className={`hdr-search-btn ${searchOpen ? 'is-active' : ''}`}
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            title="Search programmes, admissions, and more"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <a href="#tuition" className="btn btn-gold" onClick={() => setMobileMenuOpen(false)}>
            Apply now
          </a>
          <span className="lang">EN / 中文</span>
          <button
            type="button"
            className="burger"
            id="burger"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Global Header Search Bar Dropdown */}
      {searchOpen && (
        <div className="hdr-search-bar" role="search">
          <div className="wrap">
            <form onSubmit={handleSearchSubmit} className="hdr-search-form">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="search-icon"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programmes, scholarships, fees, payment, faculty…"
                aria-label="Search programmes and university information"
              />
              <button type="submit" className="btn btn-gold btn-search-submit">
                SEARCH
              </button>
              <button
                type="button"
                className="hdr-search-close"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                title="Close (Esc)"
              >
                ✕
              </button>
            </form>
            <div className="hdr-search-quick">
              <span>Quick suggestions:</span>
              <button type="button" onClick={() => handleQuickSearch('Accreditation')}>
                Accreditation
              </button>
              <button type="button" onClick={() => handleQuickSearch('Leadership Structure')}>
                Leadership Structure
              </button>
              <button type="button" onClick={() => handleQuickSearch('Master of Business')}>
                Master of Business
              </button>
              <button type="button" onClick={() => handleQuickSearch('Tuition Fees & Scholarship')}>
                Tuition Fees
              </button>
              <button type="button" onClick={() => handleQuickSearch('Computer Science')}>
                Computer Science
              </button>
              <button type="button" onClick={() => handleQuickSearch('Doctor of Philosophy')}>
                PhD
              </button>
              <button type="button" onClick={() => handleQuickSearch('Payment Guide')}>
                Payment Guide
              </button>
              <button type="button" onClick={() => handleQuickSearch('News & Articles')}>
                News &amp; Articles
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
