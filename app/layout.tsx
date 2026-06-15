import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'davinci.fyi | AI SaaS Infrastructure & Automation',
  description: 'Technical operator building AI SaaS infra with FastAPI, Next.js, PostgreSQL, n8n automation, and operator capital.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
