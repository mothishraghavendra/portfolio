import {
  Email,
  LogoLinkedin,
  LogoGithub,
  Location,
} from "@carbon/icons-react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p
          className="t-eyebrow"
          style={{ marginBottom: "var(--space-md)" }}
        >
          05 — Contact
        </p>

        <h2
          className="t-display-md"
          style={{ marginBottom: "var(--space-xl)" }}
        >
          Let's build something meaningful together.
        </h2>

        <p
          className="t-body"
          style={{
            color: "var(--color-ink-muted)",
            maxWidth: 720,
            marginBottom: "var(--space-xxl)",
          }}
        >
          I'm always open to discussing software engineering,
          cybersecurity, open-source projects, research opportunities,
          and innovative ideas.
        </p>

        {/* Contact Buttons */}
        <div className="contact-actions">
          <a
            href="mailto:mothish.k.raghavendra@gmail.com"
            className="btn btn-tertiary contact-btn"
          >
            <span className="contact-icon">
              <Email size={20} />
            </span>
            <span>Email</span>
          </a>

          <a
            href="https://linkedin.com/in/mothish-raghavendra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tertiary contact-btn"
          >
            <span className="contact-icon">
              <LogoLinkedin size={20} />
            </span>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/mothishraghavendra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tertiary contact-btn"
          >
            <span className="contact-icon">
              <LogoGithub size={20} />
            </span>
            <span>GitHub</span>
          </a>
        </div>

        {/* Location */}
        <div
          className="card"
          style={{
            marginTop: "var(--space-xl)",
            maxWidth: 500,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-sm)",
            }}
          >
            <Location size={20} />
            <span className="t-body">
              Anantapur, Andhra Pradesh, India
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
          align-items: center;
        }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
        }

        /* Fixed-width icon column for perfect alignment */
        .contact-icon {
          width: 24px;
          min-width: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-icon svg {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 768px) {
          .contact-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .contact-btn {
            width: 100%;
            justify-content: flex-start;
            padding-left: var(--space-lg);
          }
        }

        @media (max-width: 480px) {
          .contact-btn {
            min-height: 44px;
            padding-left: var(--space-md);
          }
        }
      `}</style>
    </section>
  );
}