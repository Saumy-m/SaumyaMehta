import { useState, useEffect } from 'react';

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initials = name
    ? name.split(' ').map((w) => w[0]).join('')
    : 'SM';

  const links = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          {initials.split('').map((c, i) => (
            i === 0 ? <span key={i}>{c}</span> : c
          ))}
        </a>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="mailto:saumyamehta.0610@gmail.com" className="navbar-cta">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
