import { LogoLinkedin } from "@carbon/icons-react";

export default function About() {
  return (
    <section id="about" className="section" style={{ borderBottom: '1px solid var(--color-hairline)' }}>
      <div className="container">
        {/* Section label */}
        <p className="t-eyebrow" style={{ marginBottom: 'var(--space-md)' }}>
          01 — About
        </p>

        <div className="about-grid">
          {/* Left column */}
          <div>
            <h2 className="t-display-md" style={{ marginBottom: 'var(--space-lg)' }}>
              Engineering secure futures, one quantum bit at a time.
            </h2>

            <p
              className="t-body"
              style={{ color: 'var(--color-ink-muted)', marginBottom: 'var(--space-md)' }}
            >
              I am a B.Tech Computer Science student at JNTU Anantapur (Diploma → B.Tech pathway),
              focused on the intersection of quantum computing, post-quantum cryptography, and
              full-stack software engineering.
            </p>

            <p
              className="t-body"
              style={{ color: 'var(--color-ink-muted)', marginBottom: 'var(--space-xl)' }}
            >
              My work ranges from Chrome extensions powered by neural networks to complete LAN
              messenger architectures secured with lattice-based cryptography. I believe in building
              systems that are not only functional but resilient against the threats of tomorrow.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
              <a href="#projects" className="btn btn-primary">See my work</a>
              <a
                href="https://linkedin.com/in/mothish-raghavendra"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost about-linkedin-btn"
              >
                <LogoLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {/* DRDO card — elevated highlight */}
            <div
              style={{
                background: 'var(--color-inverse-canvas)',
                color: 'var(--color-inverse-ink)',
                padding: 'var(--space-xl)',
                borderLeft: '2px solid var(--color-primary)',
              }}
            >
              <p className="t-eyebrow" style={{ color: '#78a9ff', marginBottom: 'var(--space-xs)' }}>
                Active internship
              </p>
              <p className="t-card-title" style={{ color: 'var(--color-inverse-ink)', marginBottom: 'var(--space-sm)' }}>
                DRDO Centre for Airborne Systems
              </p>
              <p className="t-body-sm" style={{ color: 'var(--color-inverse-ink-muted)' }}>
                Developing <strong style={{ color: 'var(--color-inverse-ink)' }}>Qkavach</strong> — a
                post-quantum cryptographic LAN chat application using ML-KEM-768 and ML-DSA-65 for
                secure internal departmental communication.
              </p>
            </div>

            {/* Education cards */}
            {[
              {
                eyebrow: '2024 – 2027',
                title: 'B.Tech Computer Science & Engineering',
                sub: 'JNTU Anantapur · GPA 8.63 / 10',
              },
              {
                eyebrow: '2021 – 2024',
                title: 'Diploma in Computer Engineering',
                sub: 'Sree Vidyanikethan Engineering College · 92.5%',
              },
            ].map((e) => (
              <div key={e.title} className="card">
                <p className="t-eyebrow" style={{ marginBottom: 'var(--space-xs)' }}>
                  {e.eyebrow}
                </p>
                <p className="t-body-em" style={{ color: 'var(--color-ink)', marginBottom: 4 }}>
                  {e.title}
                </p>
                <p className="t-body-sm" style={{ color: 'var(--color-ink-muted)' }}>
                  {e.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xxl);
          align-items: start;
        }

        /* LinkedIn button — matches pill height of btn-primary,
           shows icon + label side by side */
        .about-linkedin-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          /* inherit all btn sizing so height matches "See my work" */
        }

        @media (max-width: 1056px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .about-grid {
            gap: var(--space-xl) !important;
          }
        }

        @media (max-width: 480px) {
          .about-grid {
            gap: var(--space-lg) !important;
          }

          /* Stack buttons vertically on very small screens */
          #about .btn {
            width: 100%;
            justify-content: center;
          }

          #about div[style*="display: flex"][style*="gap"] {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}