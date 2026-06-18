export interface Certification {
  title: string
  issuer: string
  year: string
  category: 'Quantum' | 'AI' | 'Other'
}

export const certifications: Certification[] = [
  {
    title: 'Quantum Fundamentals and Advanced Algorithms',
    issuer: 'WISER',
    year: '2026',
    category: 'Quantum',
  },
  {
    title: 'Quantum Enigmas',
    issuer: 'IBM SkillsBuild',
    year: '2025',
    category: 'Quantum',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    year: '2025',
    category: 'AI',
  },
  {
    title: 'Introduction to Quantum Technologies & Applications',
    issuer: 'QClairvoyance',
    year: '2025',
    category: 'Quantum',
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    year: '2023',
    category: 'Other',
  },
]

export const achievements = [
  {
    title: 'Grand Finalist — Amaravathi Quantum Valley Hackathon',
    year: '2025',
    description: 'Developed an IBM Qiskit–based Public Jobs Tracker selected from hundreds of national entries.',
  },
  {
    title: 'Shortlisted — Zoho Schools of Learning',
    year: '2023',
    description: 'Selected through a competitive national screening process.',
  },
]