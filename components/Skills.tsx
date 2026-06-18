import { Db2Database } from "@carbon/icons-react";
import { AiLabel } from '@carbon/icons-react';
import { QOperation } from '@carbon/icons-react';
import { Settings } from '@carbon/icons-react';
import { Code } from '@carbon/icons-react';
import { Http } from '@carbon/icons-react';

const skillGroups = [
  {
    category: 'Languages',
    icon: <Code />,
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL', 'C#', 'Go'],
  },
  {
    category: 'Web & Frameworks',
    icon: <Http />,
    skills: ['React.js', 'Node.js', 'Express.js', 'Django', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    category: 'AI & Machine Learning',
    icon: <AiLabel />,
    skills: ['TensorFlow.js', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Neural Networks'],
  },
  {
    category: 'Quantum Computing',
    icon: <QOperation />,
    skills: ['IBM Qiskit', 'ML-KEM-768', 'ML-DSA-65', 'Quantum Circuits', 'PQC Cryptography'],
  },
  {
    category: 'Databases',
    icon: <Db2Database />,
    skills: ['MySQL', 'MongoDB', 'SQLite'],
  },
  {
    category: 'Tools & Platforms',
    icon: <Settings />,
    skills: ['Git', 'WPF / .NET', 'Chrome Extensions API', 'MVVM', 'TCP Networking'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section section--alt" style={{ borderBottom: '1px solid var(--color-hairline)' }}>
      <div className="container">
        <p className="t-eyebrow" style={{ marginBottom: 'var(--space-md)' }}>
          02 — Skills
        </p>
        <h2 className="t-display-md" style={{ marginBottom: 'var(--space-xxl)', maxWidth: 560 }}>
          Technologies I build with.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            border: '1px solid var(--color-hairline)',
          }}
        >
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              style={{
                padding: 'var(--space-xl)',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--color-hairline)' : 'none',
                borderBottom: i < 3 ? '1px solid var(--color-hairline)' : 'none',
                background: 'var(--color-canvas)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                <span
                  className="t-mono"
                  style={{
                    color: 'var(--color-primary)',
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {group.icon}
                </span>
                <p className="t-body-em" style={{ color: 'var(--color-ink)' }}>
                  {group.category}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1056px) {
          #skills [style*="repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 672px) {
          #skills [style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}