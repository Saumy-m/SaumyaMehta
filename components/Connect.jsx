import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import profile from '../data/profile.json';

const CONTACT_CHANNELS = [
    {
        label: 'Email',
        value: 'saumyamehta.0610@gmail.com',
        href: 'mailto:saumyamehta.0610@gmail.com',
        icon: (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        label: 'Phone',
        value: '(613) 304-1816',
        href: 'tel:+16133041816',
        icon: (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/saumya-mehta06',
        href: 'https://linkedin.com/in/saumya-mehta06',
        icon: (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        value: 'github.com/Saumy-m',
        href: 'https://github.com/Saumy-m',
        icon: (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
];

const SUBJECTS = [
    'Job Opportunity',
    'Freelance Project',
    'Collaboration',
    'Open Source',
    'Other',
];

// Arrow icon reused in info cards
function ArrowRight() {
    return (
        <svg className="contact-info-arrow" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}

export default function ContactPage() {
    const [fields, setFields] = useState({
        name: '',
        email: '',
        subject: SUBJECTS[0],
        message: '',
    });

    function handleChange(e) {
        setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    // Build a mailto: link from the form fields so clicking Send opens the mail client
    // pre-filled — no backend needed. Swap for a fetch() to Formspree/EmailJS later.
    function buildMailto() {
        const body = `${fields.message}`;
        return `mailto:${profile.email}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;
    }

    return (
        <>
            <Head>
                <title>Contact · {profile.name}</title>
                <meta name="description" content={`Get in touch with ${profile.name} — ${profile.tagline}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Navbar name={profile.name} />

            <main>
                {/* ── Hero header ── */}


                {/* ── Main content ── */}
                <section className="contact-section" id='connect'>
                    <div className="contact-hero">
                        <div className="container">
                            <div className="contact-hero-inner">
                                <p className="section-label">Get In Touch</p>
                                <h1 className="hero-name" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '14px' }}>
                                    Let&apos;s Work Together
                                </h1>
                                <p className="hero-sub" style={{ maxWidth: '520px' }}>
                                    Whether you have a job opportunity, a project idea, or just want to connect —
                                    I&apos;m always happy to hear from you. I typically reply within 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="contact-grid">

                            {/* LEFT: contact info cards */}
                            <div className="contact-info-stack">
                                {CONTACT_CHANNELS.map((ch) => (
                                    <a
                                        key={ch.label}
                                        href={ch.href}
                                        className="contact-info-card"
                                        target={ch.href.startsWith('http') ? '_blank' : undefined}
                                        rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        <div className="contact-info-icon">{ch.icon}</div>
                                        <div className="contact-info-body">
                                            <p className="contact-info-label">{ch.label}</p>
                                            <p className="contact-info-value">{ch.value}</p>
                                        </div>
                                        <ArrowRight />
                                    </a>
                                ))}
                            </div>

                            {/* RIGHT: form */}
                            <div className="contact-form-card">
                                <h2 className="contact-form-title">Send a Message</h2>
                                <p className="contact-form-sub">
                                    Fill in the form and hit Send — it opens your mail client pre-filled.
                                </p>

                                <div className="contact-form">
                                    {/* Name + Email row */}
                                    <div className="contact-form-row">
                                        <div className="contact-field">
                                            <label className="contact-label" htmlFor="name">Your Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                className="contact-input"
                                                placeholder="Jane Smith"
                                                value={fields.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="contact-field">
                                            <label className="contact-label" htmlFor="email">Your Email</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                className="contact-input"
                                                placeholder="jane@company.com"
                                                value={fields.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="contact-field">
                                        <label className="contact-label" htmlFor="subject">Subject</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            className="contact-select"
                                            value={fields.subject}
                                            onChange={handleChange}
                                        >
                                            {SUBJECTS.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="contact-field">
                                        <label className="contact-label" htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="contact-textarea"
                                            placeholder="Tell me about the role, project, or what you have in mind..."
                                            value={fields.message}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Note */}
                                    <p className="contact-form-note">
                                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                                        </svg>
                                        Opens your default mail client with fields pre-filled.
                                    </p>

                                    {/* Send button — mailto: href, no backend needed */}
                                    <a href={buildMailto()} className="contact-submit">
                                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <line x1="22" y1="2" x2="11" y2="13" />
                                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                        </svg>
                                        Send Message
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
