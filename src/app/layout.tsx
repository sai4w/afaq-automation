import type {Metadata} from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AppInitializer } from '@/components/AppInitializer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Afaq Automation',
  description: 'Automation, AI Integration, and Data Analytics Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <LanguageProvider>
          <AppInitializer />
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
