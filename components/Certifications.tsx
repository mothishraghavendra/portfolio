import { certifications, achievements } from '@/data/certifications'

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section"
      style={{ borderBottom: '1px solid var(--color-hairline)' }}
    >
      <div className="container">
        <p className="t-eyebrow" style={{ marginBottom: 'var(--space-md)' }}>
          04 — Certifications & Achievements
        </p>

        <h2 className="t-display-md" style={{ marginBottom: 'var(--space-xxl)' }}>
          Continuous learning and recognition.
        </h2>

        {/* ── Certifications table ── */}
        <div
          className="cert-table"
          style={{
            border: '1px solid var(--color-hairline)',
            marginBottom: 'var(--space-xxl)',
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="cert-row"
              style={{
                borderBottom:
                  index !== certifications.length - 1
                    ? '1px solid var(--color-hairline)'
                    : 'none',
              }}
            >
              {/* Category tag */}
              <div className="cert-category">
                <span className="tag">{cert.category}</span>
              </div>

              {/* Title + issuer */}
              <div className="cert-info">
                <h3 className="t-body-em">{cert.title}</h3>
                <p className="t-body-sm" style={{ color: 'var(--color-ink-muted)' }}>
                  {cert.issuer}
                </p>
              </div>

              {/* Year */}
              <div className="cert-year">
                {cert.year}
              </div>
            </div>
          ))}
        </div>

        {/* ── Achievements ── */}
        <h3 className="t-headline" style={{ marginBottom: 'var(--space-lg)' }}>
          Achievements
        </h3>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <div key={item.title} className="achievement-card">
              <p
                className="t-caption"
                style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-primary)' }}
              >
                {item.year}
              </p>
              <h4 className="t-card-title" style={{ marginBottom: 'var(--space-sm)' }}>
                {item.title}
              </h4>
              <p className="t-body-sm" style={{ color: 'var(--color-ink-muted)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Certifications row: 3-col on desktop ── */
        .cert-row {
          display: grid;
          grid-template-columns: 160px 1fr 100px;
          padding: var(--space-lg);
          align-items: start;
        }

        .cert-category {
          /* no extra styles needed on desktop */
        }

        .cert-year {
          text-align: right;
          color: var(--color-ink-subtle);
          white-space: nowrap;
        }

        /* ── Achievements: 2-col on desktop ── */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border: 1px solid var(--color-hairline);
        }

        .achievement-card {
          padding: var(--space-xl);
          border-right: 1px solid var(--color-hairline);
          border-bottom: 1px solid var(--color-hairline);
        }

        /* Remove double bottom border on last row */
        .achievement-card:last-child,
        .achievement-card:nth-last-child(2):nth-child(odd) {
          border-bottom: none;
        }

        /* Right column cards have no right border */
        .achievement-card:nth-child(even) {
          border-right: none;
        }

        /* ── Tablet (≤ 768px) ── */
        @media (max-width: 768px) {
          /* Certifications: hide year column in the grid,
             show it inline next to the issuer instead */
          .cert-row {
            grid-template-columns: 1fr;
            gap: var(--space-xs);
            padding: var(--space-md);
          }

          .cert-category {
            margin-bottom: 4px;
          }

          /* Move year to appear after issuer as a subtle inline label */
          .cert-year {
            text-align: left;
            font-size: 12px;
            color: var(--color-ink-subtle);
            margin-top: 2px;
          }

          /* Achievements: stay 2-col but tighter padding */
          .achievement-card {
            padding: var(--space-lg);
          }
        }

        /* ── Mobile (≤ 480px) ── */
        @media (max-width: 480px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }

          /* In single-column mode every card gets a bottom border */
          .achievement-card {
            border-right: none !important;
            border-bottom: 1px solid var(--color-hairline) !important;
            padding: var(--space-md);
          }

          .achievement-card:last-child {
            border-bottom: none !important;
          }

          .cert-row {
            padding: var(--space-md) var(--space-sm);
          }
        }
      `}</style>
    </section>
  )
}