"use client";

import { useState } from "react";
import { projects, skills } from "@/data/projects";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const email = "miska.kirri@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div>
      {/* Yläpalkki */}
      <nav className="pf-nav">
        <div className="pf-container pf-nav-inner">
          <a href="#" className="pf-logo">
            Miska Kirri<span>.</span>
          </a>
          <div className="pf-nav-links">
            <a href="#minusta">Minusta</a>
            <a href="#projektit">Projektit</a>
            <a
              href="https://github.com/miskaab"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="#yhteystiedot" className="pf-nav-cta">
              Yhteystiedot
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pf-hero">
        <div className="pf-container">
          <div className="pf-badge">
            <span className="pf-badge-dot" />
            Portfolio &amp; Projektit
          </div>

          <h1>
            Hei, olen <span className="pf-gradient-name">Miska Kirri</span>
          </h1>

          <p className="pf-hero-desc">
            Rakennan moderneja, nopeita ja käyttäjäystävällisiä
            verkkosovelluksia. Tältä sivulta pääset tutustumaan tarkemmin
            osaamiseeni ja julkaisemiini projekteihin.
          </p>

          <div className="pf-actions">
            <a href="#projektit" className="pf-btn-primary">
              Katso projektit
            </a>
            <a
              href="https://github.com/miskaab"
              target="_blank"
              rel="noopener noreferrer"
              className="pf-btn-secondary"
            >
              GitHub
            </a>
          </div>

          <div className="pf-stats">
            <div className="pf-stat-card">
              <p className="pf-stat-label">Kehittäjä</p>
              <p className="pf-stat-value">Miska Kirri</p>
            </div>
            <div className="pf-stat-card">
              <p className="pf-stat-label">Fokus</p>
              <p className="pf-stat-value">Full-Stack Web-kehitys</p>
            </div>
            <div className="pf-stat-card">
              <p className="pf-stat-label">Pääteknologiat</p>
              <p className="pf-stat-value accent">
                Next.js · React · Svelte · Supabase
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Minusta & Teknologiat */}
      <section id="minusta" className="pf-about">
        <div className="pf-container pf-about-grid">
          <div className="pf-about-card">
            <p className="pf-eyebrow">Esittely</p>
            <h2>Minusta</h2>
            <p className="pf-about-text">
              Olen Miska Kirri 18-vuotias, web-kehityksen opiskelija
              ammattiopisto Gradiassa. Suunnittelen ja toteutan kokonaisia
              verkkosovelluksia käyttöliittymästä tietokantaan saakka
              painottaen selkeyttä, suorituskykyä ja käytännöllisyyttä.
            </p>
          </div>

          <div className="pf-about-card">
            <p className="pf-eyebrow">Työkalupakki</p>
            <h2>Teknologiat</h2>
            <p className="pf-about-text">
              Teknologiat, joita olen käyttänyt projekteissani:
            </p>
            <div className="pf-skills-grid">
              {skills.map((skill) => (
                <span key={skill} className="pf-skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projektit */}
      <main id="projektit" className="pf-projects">
        <div className="pf-container">
          <div className="pf-section-header">
            <div>
              <p className="pf-eyebrow">Julkaistut työt</p>
              <h2>Projektit</h2>
            </div>
          </div>

          <div className="pf-grid">
            {projects.map((project) => (
              <article key={project.number} className="pf-card">
                <div>
                  <div className="pf-card-top">
                    <div className="pf-card-meta">
                      <span className="pf-project-num">{project.number}</span>
                      <span className="pf-cat-pill">{project.category}</span>
                    </div>
                    {project.status && (
                      <span className="pf-status-pill">{project.status}</span>
                    )}
                  </div>

                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  {project.technologies.length > 0 && (
                    <div className="pf-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="pf-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.apis.length > 0 && (
                    <p className="pf-apis">
                      <span className="pf-apis-label">APIt / integraatiot: </span>
                      {project.apis.join(", ")}
                    </p>
                  )}
                </div>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="pf-card-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-link-demo"
                      >
                        Avaa sovellus &rarr;
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-link-code"
                      >
                        GitHub &rarr;
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Yhteystiedot-osio */}
      <section id="yhteystiedot" className="pf-contact">
        <div className="pf-container">
          <div className="pf-contact-card">
            <p className="pf-eyebrow">Ota yhteyttä</p>
            <h2>Kiinnostuitko yhteistyöstä?</h2>
            <p className="pf-contact-desc">
              Laita viestiä sähköpostilla tai tutustu tarkemmin koodeihini
              GitHubissa. Vastaan mielelläni viesteihin!
            </p>

            <div className="pf-contact-actions">
              <div className="pf-email-box">
                <span className="pf-email-text">{email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="pf-copy-btn"
                >
                  {copied ? "Kopioitu! ✓" : "Kopioi sähköposti"}
                </button>
              </div>

              <a
                href={`https://mail.google.com/mail/?view=cm&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-btn-secondary"
              >
                Avaa Gmailissa &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alatunniste */}
      <footer className="pf-footer">
        <div className="pf-container pf-footer-inner">
          <p>
            &copy; {new Date().getFullYear()} Miska Kirri. Kaikki oikeudet
            pidätetään.
          </p>
          <div className="pf-footer-links">
            <a
              href="https://github.com/miskaab"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="#yhteystiedot">Yhteystiedot</a>
          </div>
        </div>
      </footer>
    </div>
  );
}