'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Languages, BotMessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { cn } from '@/lib/utils';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t.navHome },
    { href: '#services', label: t.navServices },
    { href: '#about', label: t.navAbout },
    { href: '#work', label: t.navWork },
    { href: '#blog', label: t.navBlog },
    { href: '#pricing', label: t.navPricing },
    { href: '#contact', label: t.navContact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="container my-4">
      <div className={cn(
        "relative flex h-20 items-center justify-between px-6 rounded-full bg-white/50 backdrop-blur-lg shadow-lg",
      )}>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="#home" className="flex items-center gap-2 font-bold text-lg">
                <BotMessageSquare className="h-8 w-8" style={{ color: 'hsl(var(--logo-red))' }} />
                <span className="font-headline text-foreground text-xl">{language === 'ar' ? 'آفاق' : 'Afaq'}</span>
            </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
           {navLinks.slice(4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary-foreground/80"
            >
              {link.label}
            </Link>
          ))}
           <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle Language">
            <Languages className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>


        <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'ar' ? 'right' : 'left'} className="bg-background">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="#home" onClick={closeSheet} className="flex items-center gap-2 font-bold text-lg text-foreground">
                    <BotMessageSquare className="h-7 w-7" style={{ color: 'hsl(var(--logo-red))' }} />
                    <span className="font-headline">{language === 'ar' ? 'آفاق' : 'Afaq'}</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground transition-colors hover:text-primary-foreground"
                        onClick={closeSheet}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                   <Button variant="ghost" size="lg" onClick={() => { toggleLanguage(); closeSheet(); }}>
                     {language === 'en' ? 'العربية' : 'English'}
                   </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

      </div>
    </header>
  );
}
