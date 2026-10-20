'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
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

export default function Footer({ onNavigate }: FooterProps) {
  const handleView = (
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
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-main">
          <div className="ftr-brand">
            <Link
              href="/"
              className="logo"
              aria-label="AUI Home"
              onClick={(e) => handleView(e, 'home')}
            >
              <img
                src="/img/logo-footer.png"
                alt="ASEAN University International logo"
                width={210}
                height={56}
                style={{ height: '56px', width: 'auto' }}
              />
            </Link>
            <p>
              ASEAN University International is committed to transformative, multidisciplinary higher
              education that empowers leaders and impacts global society.
            </p>
            <div className="soc" aria-label="Social links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a>
            </div>
          </div>
          <div>
            <h4>Programmes</h4>
            <ul>
              <li>
                <Link href="/academic" onClick={(e) => handleView(e, 'academic')}>Master of Business</Link>
              </li>
              <li>
                <Link href="/academic" onClick={(e) => handleView(e, 'academic')}>Bachelor of CS</Link>
              </li>
              <li>
                <Link href="/academic" onClick={(e) => handleView(e, 'academic')}>Doctor of Philosophy</Link>
              </li>
              <li>
                <Link href="/academic" onClick={(e) => handleView(e, 'academic')}>Health Sciences</Link>
              </li>
              <li>
                <Link href="/academic" onClick={(e) => handleView(e, 'academic')}>Executive Education</Link>
              </li>
              <li>
                <Link href="/academic" onClick={(e) => handleView(e, 'academic')}>All Programmes →</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about" onClick={(e) => handleView(e, 'about')}>About AUI</Link></li>
              <li><Link href="/structure" onClick={(e) => handleView(e, 'structure')}>Structure</Link></li>
              <li><Link href="/admissions" onClick={(e) => handleView(e, 'admissions')}>Admissions</Link></li>
              <li><Link href="/academic" onClick={(e) => handleView(e, 'academic')}>Academic</Link></li>
              <li><Link href="/accreditation" onClick={(e) => handleView(e, 'accreditation')}>Accreditation</Link></li>
              <li><a href="#news">News &amp; Articles</a></li>
              <li><a href="#tuition">Admissions &amp; Fees</a></li>
              <li><a href="#network">AUI Network</a></li>
              <li><a href="#tuition">Scholarship Available</a></li>
              <li><a href="#anywhere">Study From Anywhere</a></li>
              <li><a href="#students">portal-aui</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>✉ <a href="mailto:admin@aui.university">admin@aui.university</a></li>
              <li>☎ <a href="tel:+60165680906">+60 165 680 906</a></li>
              <li>◎ <a href="#students">portal-aui</a></li>
              <li style={{ marginTop: '8px' }}>
                F-2-23, Jalan BG 3B/1 Bangi Gateway 3B, Seksyen 15, 43650 Bandar Baru Bangi, Selangor, Malaysia
              </li>
            </ul>
          </div>
        </div>
        <div className="ftr-btm">
          <span>ASIAN INTERNATIONAL EDUCATION SDN BHD | 2026 &copy; All Rights Reserved.</span>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Use</a></li>
            <li><a href="#accessibility">Accessibility</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
