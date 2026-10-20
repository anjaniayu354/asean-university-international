import React from 'react';
import Link from 'next/link';

export default function UtilityBar() {
  return (
    <div className="util">
      <div className="wrap">
        <ul>
          <li>
            <a href="mailto:admin@aui.university">✉ admin@aui.university</a>
          </li>
          <li className="sep">|</li>
          <li>
            <a href="tel:+60165680906">☎ +60 165 680 906</a>
          </li>
          <li className="sep">|</li>
          <li>
            <a href="#students">Portal AUI (Students)</a>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/payment-information">Payment Information</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#">EN</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
