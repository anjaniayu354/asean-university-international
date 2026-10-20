'use client';

import React from 'react';
import Link from 'next/link';

interface AcademicDetailViewProps {
  onNavigate?: (view: 'home' | 'detail' | 'about' | 'structure' | 'admissions' | 'academic') => void;
}

export default function AcademicDetailView({ onNavigate }: AcademicDetailViewProps) {
  return (
    <main className="view is-on" id="view-detail">
<div className="wrap">
            <div className="crumb">
                <a href="#" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate("home"); window.scrollTo({top:0, behavior: "instant"}); } }}>Home</a><span>/</span>
                <a href="#programmes">Academic</a><span>/</span>
                <b style={{ color: "var(--brand)" }}>Master</b>
            </div>
        </div>

        <section className="phero">
            <img className="phero-img"
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=70"
                alt="Master programme study" />
            <div className="wrap">
                <div className="eyebrow">Postgraduate Programme · ASEAN University International</div>
                <h1>Master</h1>
                <div className="sub">
                    <span>Tuition: <b>MYR 45,000</b></span>
                    <span>Study mode: <b>Online · At your own pace</b></span>
                    <span>Accredited programme of study</span>
                    <span>Scholarship: <b>Available</b></span>
                </div>
            </div>
        </section>

        <div className="wrap">
            <div className="pdetail">

                <aside className="side">
                    <div className="side-box">
                        <h3>Quick Info</h3>
                        <dl>
                            <div>
                                <dt>Programme level</dt>
                                <dd>Master (Postgraduate)</dd>
                            </div>
                            <div>
                                <dt>Tuition fee</dt>
                                <dd className="price-tag">MYR 45,000</dd>
                            </div>
                            <div>
                                <dt>Scholarship</dt>
                                <dd>Available</dd>
                            </div>
                            <div>
                                <dt>Study method</dt>
                                <dd>Online / own pace</dd>
                            </div>
                            <div>
                                <dt>Location</dt>
                                <dd>Study from anywhere in the world</dd>
                            </div>
                            <div>
                                <dt>Faculties</dt>
                                <dd>5 academic faculties · 20+ research centers</dd>
                            </div>
                            <div>
                                <dt>Admissions</dt>
                                <dd>admin@aui.university<br />+60 165 680 906</dd>
                            </div>
                        </dl>
                        <a href="#" className="btn btn-gold">Apply now</a>
                        <a href="#contact" className="btn btn-line">Ask Admissions</a>
                        <a href="#tuition" className="btn btn-line">Payment Information</a>
                    </div>
                    <div className="side-box" style={{ background: "var(--brand)", color: "#fff", border: "0" }}>
                        <h3 style={{ color: "#fff", borderColor: "rgba(255,255,255,.2)" }}>Scholarship Available</h3>
                        <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,.8)", margin: "0" }}>Every AUI programme — Bachelor,
                            Master, and Doctor — offers scholarship opportunities. Contact admissions for the current
                            special offer.</p>
                    </div>
                </aside>

                <div className="pmain">

                    <section className="rv">
                        <h2>Programme Overview</h2>
                        <p>The Master programme at ASEAN University International (AUI) can be studied from anywhere in
                            the world – choose to study online, or at your own pace with or without attending classes.
                        </p>
                        <p>Whichever study method you choose, you'll experience the same high‑quality, accredited
                            education programme of study. AUI fosters excellent education that is engaging and
                            enthusiastically presented, with an emphasis on disseminating practical and pertinent
                            knowledge, taught by professionals — so you graduate with essential skills for the latest
                            industries.</p>
                    </section>

                    <section className="rv">
                        <h2>Programme Snapshot</h2>
                        <table className="kur">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Detail</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Level</td>
                                    <td>Master (Postgraduate)</td>
                                    <td>Programme level 2 of 3 — Bachelor · Master · Doctor</td>
                                </tr>
                                <tr>
                                    <td>Tuition Fee</td>
                                    <td>MYR 45,000</td>
                                    <td>Payment Information available on homepage</td>
                                </tr>
                                <tr>
                                    <td>Scholarship</td>
                                    <td>Available</td>
                                    <td>Special offer — contact admissions</td>
                                </tr>
                                <tr>
                                    <td>Study Method</td>
                                    <td>Online / own pace</td>
                                    <td>With or without attending classes</td>
                                </tr>
                                <tr>
                                    <td>Accreditation</td>
                                    <td>High-quality accredited education</td>
                                    <td>Same quality whichever study method you choose</td>
                                </tr>
                                <tr>
                                    <td>Delivery</td>
                                    <td>Anywhere in the world</td>
                                    <td>Personalised and flexible learning experience</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className="rv">
                        <h2>Study Methods</h2>
                        <div className="netgrid">
                            <div><b>Online</b><span>Every programme can be studied from anywhere in the world.</span>
                            </div>
                            <div><b>Own Pace</b><span>Study with or without attending classes.</span></div>
                            <div><b>Same Quality</b><span>The same high‑quality, accredited education programme of
                                    study.</span></div>
                        </div>
                    </section>

                    <section className="rv">
                        <h2>The AUI Network</h2>
                        <p>By joining AUI, you become part of a powerful, connected network right across the globe.</p>
                        <div className="kpi">
                            <div>
                                <div className="row"><b><span data-count="3000">0</span></b><span className="sym"
                                        data-sym>+</span></div>
                                <span>students enrolled from 5+ countries</span>
                            </div>
                            <div>
                                <div className="row"><b><span data-count="90">0</span></b><span className="sym"
                                        data-sym>%</span></div>
                                <span>graduate employability within 6 months</span>
                            </div>
                            <div>
                                <div className="row"><b><span data-count="100">0</span></b><span className="sym"
                                        data-sym>+</span></div>
                                <span>industry partnerships worldwide</span>
                            </div>
                        </div>
                        <p>With nearly 30,000 students and 20,000 alumni, we offer a part of a powerful, connected
                            network right across the globe. AUI ensures that you have the resources to succeed in your
                            studies along the way, making an unbelievably positive impact on your academic and
                            professional growth.</p>
                    </section>

                    <section className="rv">
                        <h2>Tuition Fees &amp; Special Offer</h2>
                        <div className="rel">
                            <article className="card">
                                <div className="body">
                                    <span className="lvl">Undergraduate</span>
                                    <h3>Bachelor</h3>
                                    <div className="price">MYR 35,000</div>
                                    <div className="sch">Scholarship Available</div>
                                    <a href="#" className="link-gold">Apply Now →</a>
                                </div>
                            </article>
                            <article className="card" style={{ borderColor: "var(--gold)" }}>
                                <div className="body">
                                    <span className="lvl">Postgraduate · You are here</span>
                                    <h3>Master</h3>
                                    <div className="price">MYR 45,000</div>
                                    <div className="sch">Scholarship Available</div>
                                    <a href="#" className="link-gold">Apply Now →</a>
                                </div>
                            </article>
                            <article className="card">
                                <div className="body">
                                    <span className="lvl">Doctoral</span>
                                    <h3>Doctor</h3>
                                    <div className="price">MYR 65,000</div>
                                    <div className="sch">Scholarship Available</div>
                                    <a href="#" className="link-gold">Apply Now →</a>
                                </div>
                            </article>
                        </div>
                        <p style={{ marginTop: "20px" }}>For payment methods and instalment information, visit <a
                                href="#tuition" style={{ color: "var(--gold)", fontWeight: "700" }}>Payment Information</a>.</p>
                    </section>

                    <section className="rv">
                        <h2>Frequently Asked Questions</h2>
                        <details className="faq">
                            <summary>Can I study the Master programme from my own country?</summary>
                            <p>Yes. Every programme AUI offers can be studied from anywhere in the world — choose to
                                study online, or at your own pace with or without attending classes.</p>
                        </details>
                        <details className="faq">
                            <summary>Is the education accredited if I study online?</summary>
                            <p>Whichever study method you choose, you'll experience the same high‑quality, accredited
                                education programme of study.</p>
                        </details>
                        <details className="faq">
                            <summary>Are scholarships available for the Master programme?</summary>
                            <p>Yes. Scholarship is available for the Master programme (and also for Bachelor and
                                Doctor). Contact admissions at admin@aui.university for the current special offer.</p>
                        </details>
                        <details className="faq">
                            <summary>How large is the AUI student community?</summary>
                            <p>AUI has nearly 30,000 students and 20,000 alumni, with 3,000+ students enrolled from 5+
                                countries, 5 academic faculties, 20+ research centers, and 100+ industry partnerships
                                worldwide.</p>
                        </details>
                        <details className="faq">
                            <summary>How do I contact admissions?</summary>
                            <p>Email admin@aui.university, call +60 165 680 906, or use the student portal (portal-aui).
                                Our office is at F-2-23, Jalan BG 3B/1 Bangi Gateway 3B, Seksyen 15, 43650 Bandar Baru
                                Bangi, Selangor, Malaysia.</p>
                        </details>
                    </section>

                    <section className="rv">
                        <div className="pcta">
                            <div>
                                <h3>Ready to start your Master programme?</h3>
                                <p>Tuition MYR 45,000 · Scholarship Available · Study from anywhere in the world.</p>
                            </div>
                            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                                <a href="#" className="btn btn-gold">Apply now</a>
                                <a href="#" className="btn btn-ghost" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate("home"); window.scrollTo({top:0, behavior: "instant"}); } }}>← Back to Home</a>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </main>
  );
}
