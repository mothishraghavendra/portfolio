import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'K Mothish Raghavendra — Portfolio',
  description: 'Computer Science student at JNTU Anantapur. Quantum computing, full-stack development, and post-quantum cryptography.',
  keywords: ['portfolio', 'quantum computing', 'DRDO', 'Qiskit', 'full-stack'],
  icons: {
    // This tells Next.js exactly where the file is and what type it is
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}