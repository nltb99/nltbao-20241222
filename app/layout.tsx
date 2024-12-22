import '../styles/globals.css';

import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { WrapperProvider } from '@/components/WrapperProvider';

export const metadata: Metadata = {
  title: 'nltb99',
  description: 'nltb99',
  applicationName: 'nltb99',
  authors: { name: 'nltb99' },
  viewport: { width: 'device-width', initialScale: 1 },
  creator: 'nltb99',
  publisher: 'nltb99',
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Suspense fallback={null}>
          <WrapperProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </WrapperProvider>
        </Suspense>
      </body>
    </html>
  );
}
