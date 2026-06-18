'use client'

import { useEffect, useRef } from 'react'
import { LogoGithub } from '@carbon/icons-react'

const stats = [
  { number: '8.63', unit: '/10', label: 'B.Tech GPA' },
  { number: '92.5', unit: '%', label: 'Diploma Score' },
  { number: 'DRDO', unit: '', label: 'CABS Intern' },
  { number: 'AQVH', unit: '', label: 'Grand Finalist 2025' },
  { number: 'ZOHO', unit: '', label: 'Schools Shortlisted' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let w = 0
    let h = 0

    const resize = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight

      canvas.width = w
      canvas.height = h
    }

    resize()
    window.addEventListener('resize', resize)

    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy

        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      })

      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)

          if (d < 160) {
            ctx.strokeStyle = `rgba(15,98,254,${0.12 * (1 - d / 160)})`
            ctx.lineWidth = 1

            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })

        ctx.fillStyle = 'rgba(15,98,254,0.25)'
        ctx.beginPath()
        ctx.arc(a.x, a.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-canvas)',
        borderBottom: '1px solid var(--color-hairline)',
      }}
    >
      {/* Background animation */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: 96,
          paddingBottom: 96,
        }}
      >
        {/* Eyebrow */}
        <p
          className="t-eyebrow"
          style={{
            marginBottom: 'var(--space-md)',
          }}
        >
          Computer Science · Quantum Computing · Post-Quantum Cryptography
        </p>

        {/* Heading */}
        <h1
          className="t-display-xl"
          style={{
            maxWidth: 900,
            color: 'var(--color-ink)',
            marginBottom: 24,
          }}
        >
          K Mothish{' '}
          <span style={{ color: 'var(--color-primary)' }}>
            Raghavendra
          </span>
        </h1>

        {/* Description */}
        <p
          className="t-body-lg"
          style={{
            maxWidth: 700,
            color: 'var(--color-ink-muted)',
            marginBottom: 48,
          }}
        >
          Building secure systems at the intersection of quantum algorithms,
          post-quantum cryptography, and modern software engineering.
          Currently interning at DRDO CABS, developing secure LAN
          infrastructure using next-generation cryptographic standards.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
            marginBottom: 64,
          }}
        >
          <a
            href="#projects"
            className="btn btn-primary"
          >
            View Projects →
          </a>

          <a
            href="#contact"
            className="btn btn-tertiary"
          >
            Get In Touch
          </a>

          <a
            href="https://github.com/mothishraghavendra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              GitHub
              <LogoGithub size={16} />
            </span>
          </a>
        </div>

        {/* Stats */}
        <div
          className="hero-stats"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            borderTop: '1px solid var(--color-hairline)',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: 24,
                minHeight: 120,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRight:
                  i < stats.length - 1
                    ? '1px solid var(--color-hairline)'
                    : 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 4,
                }}
              >
                <span
                  className="stat-number"
                  style={{
                    fontSize:
                      s.number.length > 6
                        ? 24
                        : 42,
                    lineHeight: 1.1,
                  }}
                >
                  {s.number}
                </span>

                {s.unit && (
                  <span
                    className="t-body-sm"
                    style={{
                      color:
                        'var(--color-ink-muted)',
                    }}
                  >
                    {s.unit}
                  </span>
                )}
              </div>

              <p className="stat-label">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .hero-stats {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .hero-stats > div {
            border-right: none !important;
            border-bottom: 1px solid var(--color-hairline);
          }

          .t-display-xl {
            font-size: 48px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            grid-template-columns: 1fr !important;
          }

          .t-display-xl {
            font-size: 36px !important;
          }

          .t-body-lg {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}