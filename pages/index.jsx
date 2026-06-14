import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';
import ContactPage from '../components/Connect';

// ── Data imports (edit these JSON files to update your portfolio content) ──
import profile from '../data/profile.json';
import experience from '../data/experience.json';
import projects from '../data/projects.json';
import skills from '../data/skills.json';
import education from '../data/education.json';
import certifications from '../data/certifications.json';
import activities from '../data/activities.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>{profile.name} · Portfolio</title>
        <meta name="description" content={`${profile.tagline} — ${profile.subTagline}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content={`${profile.name} · Portfolio`} />
        <meta property="og:description" content={profile.summary} />
        <meta property="og:type" content="website" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar name={profile.name} />

      <main>
        <Hero profile={profile} />

        <div className="section-divider" />
        <Experience items={experience} />

        <div className="section-divider" />
        <Projects items={projects} />

        <div className="section-divider" />
        <Skills data={skills} />

        <div className="section-divider" />
        <Education items={education} />

        <div className="section-divider" />
        <Certifications items={certifications} activities={activities} />

        <div className="section-divider" />
        <ContactPage />
      </main>

      <Footer profile={profile} />
    </>
  );
}
