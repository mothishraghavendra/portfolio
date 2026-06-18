export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-hairline)",
        background: "var(--color-surface-1)",
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: "var(--space-xxl)",
          paddingBottom: "var(--space-xxl)",
        }}
      >
        {/* Top */}
        <div className="footer-grid">
          <div>
            <p
              className="t-eyebrow"
              style={{ marginBottom: "var(--space-sm)" }}
            >
              K MOTHISH RAGHAVENDRA
            </p>

            <p
              className="t-body"
              style={{
                color: "var(--color-ink-muted)",
                maxWidth: 520,
              }}
            >
              Computer Science student specializing in Quantum Computing,
              Post-Quantum Cryptography, Secure Systems, and Full-Stack
              Engineering.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "var(--color-hairline)",
            marginTop: "var(--space-xl)",
            marginBottom: "var(--space-lg)",
          }}
        />

        {/* Bottom */}
        <div className="footer-bottom">
          <p
            className="t-caption"
            style={{ color: "var(--color-ink-subtle)" }}
          >
            © {year} K Mothish Raghavendra. All rights reserved.
          </p>

          <p
            className="t-caption"
            style={{ color: "var(--color-ink-subtle)" }}
          >
            Built with Next.js, TypeScript & Carbon Design System.
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-md);
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}