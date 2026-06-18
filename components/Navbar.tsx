'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Utility bar */}
      <div className="utility-bar">
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl)' }}>
          <span className="t-caption" style={{ color: 'var(--color-ink-muted)' }}>
            B.Tech CSE · JNTU Anantapur · Intern @ DRDO CABS
          </span>
          <span style={{ marginLeft: 'auto' }}>
            <a
              href="mailto:mothish.k.raghavendra@gmail.com"
              className="t-caption"
              style={{ color: 'var(--color-ink-muted)', textDecoration: 'none' }}
            >
              mothish.k.raghavendra@gmail.com
            </a>
          </span>
        </div>
      </div>

      {/* Top nav */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: 'var(--color-canvas)',
          borderBottom: `1px solid ${scrolled ? 'var(--color-hairline)' : 'var(--color-hairline)'}`,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          boxShadow: scrolled ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
          transition: 'box-shadow 200ms ease',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', alignItems: 'center', height: '100%', gap: 'var(--space-xl)' }}
        >
        

          {/* Desktop links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              marginLeft: 'auto',
            }}
            className="nav-desktop"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="t-body-sm"
                onClick={() => setActive(link.href)}
                style={{
                  color: active === link.href ? 'var(--color-primary)' : 'var(--color-ink)',
                  textDecoration: 'none',
                  padding: '0 var(--space-md)',
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: active === link.href ? '2px solid var(--color-primary)' : '2px solid transparent',
                  transition: 'color 120ms, border-color 120ms',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--color-primary)' }}
                onMouseLeave={(e) => {
                  if (active !== link.href) (e.target as HTMLElement).style.color = 'var(--color-ink)'
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/resume/Mothish_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginLeft: 'var(--space-sm)', height: 40, fontSize: 14 }}
            >
              Resume ↗
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="nav-hamburger"
            style={{
              marginLeft: 'auto',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 'var(--space-xs)',
              color: 'var(--color-ink)',
            }}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {menuOpen ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <>
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 80,
            left: 0,
            right: 0,
            background: 'var(--color-canvas)',
            borderBottom: '1px solid var(--color-hairline)',
            zIndex: 999,
            padding: 'var(--space-md)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="t-body-sm"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: 'var(--color-ink)',
                padding: 'var(--space-sm) var(--space-md)',
                borderBottom: '1px solid var(--color-hairline)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 672px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 673px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </>
  )
}