'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Languages, BotMessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

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
    <header className="w-full p-4">
      <div 
        className="container flex h-16 items-center justify-between rounded-full border border-border/20 bg-black/5 backdrop-blur-md supports-[backdrop-filter]:bg-black/5 shadow-lg px-8 max-w-7xl mx-auto"
      >
        <div className="hidden md:flex items-center gap-6 w-1/3">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="#home" className="flex items-center gap-2 font-bold text-lg justify-center w-1/3">
          <BotMessageSquare className="h-7 w-7" style={{ color: 'hsl(var(--logo-red))' }} />
          <span className="font-headline text-foreground">آفاق</span>
        </Link>
        
        <div className="flex items-center gap-2 justify-end w-1/3">
           <div className="hidden md:flex items-center gap-6">
            {navLinks.slice(3, 6).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle Language">
            <Languages className="h-5 w-5 text-foreground" />
          </Button>
          <Button asChild className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
            <Link href="#contact">{t.navBookCall}</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'ar' ? 'right' : 'left'} className="bg-background">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="#home" onClick={closeSheet} className="flex items-center gap-2 font-bold text-lg text-foreground">
                    <BotMessageSquare className="h-7 w-7" style={{ color: 'hsl(var(--logo-red))' }} />
                    <span className="font-headline">آفاق</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground transition-colors hover:text-primary-foreground/80"
                        onClick={closeSheet}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={closeSheet}>
                     <Link href="#contact">{t.navBookCall}</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
