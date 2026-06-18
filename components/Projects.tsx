'use client'
import { useState } from 'react'
import { projects } from '@/data/projects'
import { LogoGithub } from "@carbon/icons-react";

const categories = ['All', 'Post-Quantum Cryptography', 'Quantum Computing', 'Machine Learning', 'Full Stack', 'Systems / Cryptography']

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="section" style={{ borderBottom: '1px solid var(--color-hairline)' }}>
      <div className="container">
        <p className="t-eyebrow" style={{ marginBottom: 'var(--space-md)' }}>
          03 — Projects
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'var(--space-xl)',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
          }}
        >
          <h2 className="t-display-md" style={{ maxWidth: 480 }}>
            What I have built.
          </h2>
          <a
            href="https://github.com/mothishraghavendra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            View all on GitHub <LogoGithub />
          </a>
        </div>

        {/* Tab filter */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid var(--color-hairline)',
            marginBottom: 'var(--space-xl)',
            overflowX: 'auto',
            gap: 0,
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 'var(--space-md) var(--space-lg)',
                fontFamily: 'IBM Plex Sans',
                fontSize: 14,
                fontWeight: active === cat ? 600 : 400,
                letterSpacing: '0.16px',
                color: active === cat ? 'var(--color-ink)' : 'var(--color-ink-muted)',
                borderBottom: active === cat ? '2px solid var(--color-primary)' : '2px solid transparent',
                whiteSpace: 'nowrap',
                transition: 'color 120ms, border-color 120ms',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 0,
            border: '1px solid var(--color-hairline)',
          }}
        >
          {filtered.map((project, i) => (
            <div
              key={project.id}
              style={{
                padding: 'var(--space-xl)',
                borderRight: i % 2 === 0 ? '1px solid var(--color-hairline)' : 'none',
                borderBottom: i < filtered.length - 2 ? '1px solid var(--color-hairline)' : 'none',
                background: project.highlight ? 'var(--color-canvas)' : 'var(--color-canvas)',
                position: 'relative',
                transition: 'background 150ms ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--color-surface-1)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--color-canvas)' }}
            >
              {/* Highlight bar */}
              {project.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 2,
                    height: '100%',
                    background: 'var(--color-primary)',
                  }}
                />
              )}

              <div style={{ paddingLeft: project.highlight ? 'var(--space-md)' : 0 }}>
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 'var(--space-sm)',
                    gap: 'var(--space-md)',
                    flexWrap: 'wrap',
                  }}
                >
                  <span className="tag tag--blue">{project.category}</span>
                  <span className="t-caption" style={{ color: 'var(--color-ink-subtle)' }}>
                    {project.year}
                  </span>
                </div>

                <h3
                  className="t-card-title"
                  style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-ink)' }}
                >
                  {project.title}
                </h3>

                <p
                  className="t-body-sm"
                  style={{ color: 'var(--color-ink-muted)', marginBottom: 'var(--space-md)' }}
                >
                  {project.description}
                </p>

                {/* Details list */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 var(--space-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  {project.details.map((d) => (
                    <li
                      key={d}
                      className="t-body-sm"
                      style={{
                        color: 'var(--color-ink-muted)',
                        paddingLeft: 'var(--space-md)',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--color-primary)',
                          fontWeight: 600,
                        }}
                      >
                        —
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.links && (
                  <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost"
                        style={{ padding: 0, fontSize: 14 }}
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1056px) {
          #projects [style*="repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}