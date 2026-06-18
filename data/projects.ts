export interface Project {
  id: string
  title: string
  year: string
  category: string
  description: string
  details: string[]
  tech: string[]
  links?: { label: string; href: string }[]
  highlight?: boolean
}

export const projects: Project[] = [
  {
    id: 'qkavach',
    title: 'Qkavach — Secure LAN Messenger',
    year: '2025',
    category: 'Post-Quantum Cryptography',
    description:
      'A WPF desktop LAN chat application built for DRDO CABS with a full post-quantum cryptographic backend.',
    details: [
      'C# TCP backend using ML-KEM-768 (key encapsulation) and ML-DSA-65 (digital signatures)',
      'GUID-based RequestId correlation to resolve key exchange race conditions',
      'IBM Carbon Design System–styled WPF server UI with CommunityToolkit.Mvvm',
      'Telegram-style sidebar with ChatItem UserControls and Dependency Properties',
    ],
    tech: ['C#', '.NET 8', 'WPF', 'ML-KEM-768', 'ML-DSA-65', 'TCP', 'MVVM'],
    highlight: true,
  },
  {
    id: 'sbox',
    title: 'Sbox — Smart Mail Classifier',
    year: '2025',
    category: 'Machine Learning',
    description:
      'Chrome extension using a supervised neural network to auto-categorize Gmail into 10 real-world categories.',
    details: [
      'TensorFlow.js neural network running entirely in the browser',
      'Classifies into Business, Finance, Job Applications, Travel Bookings, and 6 more',
      'Trained on labeled Gmail corpora; < 50ms inference latency',
    ],
    tech: ['TensorFlow.js', 'JavaScript', 'Chrome Extensions API', 'HTML', 'CSS', 'JSON'],
  },
  {
    id: 'quantum-jobs',
    title: 'Quantum Public Jobs Tracker',
    year: '2025',
    category: 'Quantum Computing',
    description:
      'Grand Finalist project at Amaravathi Quantum Valley Hackathon — a Qiskit-based circuit executor with a drag-and-drop UI.',
    details: [
      'Visual drag-and-drop circuit builder targeting IBM Qiskit',
      'Python code editor path for advanced circuit composition',
      'React-Material UI frontend backed by Django + MongoDB',
      'Selected as Grand Finalist from hundreds of teams',
    ],
    tech: ['IBM Qiskit', 'Python', 'Django', 'React', 'Material UI', 'MongoDB'],
    highlight: true,
  },
  {
    id: 'educycle',
    title: 'EduCycle — Student Supply Exchange',
    year: '2025',
    category: 'Full Stack',
    description:
      'Platform for students to buy, sell, and exchange used stationery and academic materials.',
    details: [
      'Full CRUD listing system with user authentication',
      'Node.js + Express REST API backed by MySQL',
      'Responsive vanilla HTML/CSS/JS frontend',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],
  },
  {
    id: 'lanmsg',
    title: 'LAN Messenger Architectures (Go)',
    year: '2024',
    category: 'Systems / Cryptography',
    description:
      'Explored Go-based LAN messenger projects (lanmsg, Locket) with hybrid PQC crypto layers and mDNS discovery.',
    details: [
      'ML-KEM-768 + X25519 hybrid key exchange',
      'mDNS/UDP peer discovery, Fyne GUI, SQLite persistence',
      'Domain-driven package organization and production-grade layout',
    ],
    tech: ['Go', 'ML-KEM-768', 'X25519', 'mDNS', 'Fyne', 'SQLite'],
  },
]