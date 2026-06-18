import { certifications, achievements } from '@/data/certifications'

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section"
      style={{ borderBottom: '1px solid var(--color-hairline)' }}
    >
      <div className="container">
        <p
          className="t-eyebrow"
          style={{ marginBottom: 'var(--space-md)' }}
        >
          04 — Certifications & Achievements
        </p>

        <h2
          className="t-display-md"
          style={{ marginBottom: 'var(--space-xxl)' }}
        >
          Continuous learning and recognition.
        </h2>

        <div
          style={{
            border: '1px solid var(--color-hairline)',
            marginBottom: 'var(--space-xxl)',
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr 100px',
                padding: 'var(--space-lg)',
                borderBottom:
                  index !== certifications.length - 1
                    ? '1px solid var(--color-hairline)'
                    : 'none',
              }}
            >
              <div>
                <span className="tag">
                  {cert.category}
                </span>
              </div>

              <div>
                <h3 className="t-body-em">
                  {cert.title}
                </h3>

                <p
                  className="t-body-sm"
                  style={{ color: 'var(--color-ink-muted)' }}
                >
                  {cert.issuer}
                </p>
              </div>

              <div
                style={{
                  textAlign: 'right',
                  color: 'var(--color-ink-subtle)',
                }}
              >
                {cert.year}
              </div>
            </div>
          ))}
        </div>

        <h3
          className="t-headline"
          style={{ marginBottom: 'var(--space-lg)' }}
        >
          Achievements
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            border: '1px solid var(--color-hairline)',
          }}
        >
          {achievements.map((item) => (
            <div
              key={item.title}
              style={{
                padding: 'var(--space-xl)',
                borderRight: '1px solid var(--color-hairline)',
              }}
            >
              <p
                className="t-caption"
                style={{
                  marginBottom: 'var(--space-sm)',
                  color: 'var(--color-primary)',
                }}
              >
                {item.year}
              </p>

              <h4
                className="t-card-title"
                style={{ marginBottom: 'var(--space-sm)' }}
              >
                {item.title}
              </h4>

              <p
                className="t-body-sm"
                style={{ color: 'var(--color-ink-muted)' }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}