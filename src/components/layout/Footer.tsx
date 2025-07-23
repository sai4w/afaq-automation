'use client';
import { BotMessageSquare, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-secondary/30">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2 font-bold text-lg text-foreground">
             <BotMessageSquare className="h-7 w-7" style={{ color: 'hsl(var(--logo-red))' }} />
             <span className="font-headline">{language === 'ar' ? 'آفاق للأتمتة' : 'Afaq Automation'}</span>
           </div>
           <div className="flex gap-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
           </div>
        </div>
        <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Afaq Automation. {t.footerRights}
        </div>
      </div>
    </footer>
  );
}
