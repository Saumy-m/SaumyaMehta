import { useEffect, useState } from 'react';

export default function Hero({ profile }) {
  const [typed, setTyped] = useState('');
  const fullCmd = 'cat saumya.json';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullCmd.slice(0, i + 1));
      i++;
      if (i >= fullCmd.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const terminalDone = typed.length >= fullCmd.length;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          {/* ── Left: Text ── */}
          <div className="hero-text">
            <p className="hero-eyebrow">Available for work</p>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <p className="hero-sub">{profile.subTagline}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#experience" className="btn btn-outline">
                My Experience
              </a>
              <a href="#connect" className="btn btn-ghost">
                Connect
              </a>
            </div>

            <div className="hero-available">
              <div className="hero-available-dot" />
              <span>
                Open to on-site, hybrid &amp; remote · Ottawa &amp; anywhere in Canada
              </span>
            </div>

            <div className="hero-socials">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="hero-social-link">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* ── Right: Terminal card ── */}
          <div className="hero-terminal">
            <div className="hero-terminal-bar">
              <div className="hero-terminal-dot" />
              <div className="hero-terminal-dot" />
              <div className="hero-terminal-dot" />
              <span className="hero-terminal-title">~/portfolio — zsh</span>
            </div>
            <div className="hero-terminal-body">
              <div className="hero-terminal-line">
                <span className="hero-terminal-prompt">❯</span>
                <span className="hero-terminal-cmd">{typed}</span>
                {!terminalDone && <span className="hero-terminal-cursor" />}
              </div>
              {terminalDone && (
                <div style={{ marginTop: '16px' }}>
                  <div className="hero-terminal-output">
                    <span style={{ color: 'var(--text-muted)' }}>{'{'}</span>
                  </div>
                  <div className="hero-terminal-output">
                    &nbsp;&nbsp;<span className="key">"name"</span>
                    <span style={{ color: 'var(--text-muted)' }}>: </span>
                    <span className="str">"{profile.name}"</span>
                    <span style={{ color: 'var(--text-muted)' }}>,</span>
                  </div>
                  <div className="hero-terminal-output">
                    &nbsp;&nbsp;<span className="key">"role"</span>
                    <span style={{ color: 'var(--text-muted)' }}>: </span>
                    <span className="str">"{profile.tagline}"</span>
                    <span style={{ color: 'var(--text-muted)' }}>,</span>
                  </div>
                  <div className="hero-terminal-output">
                    &nbsp;&nbsp;<span className="key">"location"</span>
                    <span style={{ color: 'var(--text-muted)' }}>: </span>
                    <span className="str">"{profile.location}"</span>
                    <span style={{ color: 'var(--text-muted)' }}>,</span>
                  </div>
                  <div className="hero-terminal-output">
                    &nbsp;&nbsp;<span className="key">"openTo"</span>
                    <span style={{ color: 'var(--text-muted)' }}>: </span>
                    <span className="val">[</span>
                  </div>
                  {profile.availableFor.map((item, i) => (
                    <div key={i} className="hero-terminal-output">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="str">"{item}"</span>
                      {i < profile.availableFor.length - 1 && (
                        <span style={{ color: 'var(--text-muted)' }}>,</span>
                      )}
                    </div>
                  ))}
                  <div className="hero-terminal-output">
                    &nbsp;&nbsp;<span className="val">]</span>
                  </div>
                  <div className="hero-terminal-output">
                    <span style={{ color: 'var(--text-muted)' }}>{'}'}</span>
                  </div>
                  <div className="hero-terminal-line" style={{ marginTop: '12px' }}>
                    <span className="hero-terminal-prompt">❯</span>
                    <span className="hero-terminal-cursor" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="7" y="5" width="2" height="5" rx="1" fill="currentColor">
            <animate attributeName="y" values="5;12;5" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
          </rect>
        </svg>
        scroll
      </div>
    </section>
  );
}
