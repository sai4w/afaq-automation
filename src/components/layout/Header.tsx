'use client';

import * as React from 'react';
import { useState } from 'react';
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
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "top-4" : "top-0"
      )}
    >
      <div 
        className={cn(
          "container flex h-16 items-center justify-between transition-all duration-300",
           scrolled ? "rounded-xl border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg" : "bg-transparent"
        )}
      >
        <Link href="#home" className="flex items-center gap-2 font-bold text-lg">
          <BotMessageSquare className="h-7 w-7" style={{ color: 'hsl(var(--logo-red))' }} />
          <span className="font-headline">آفاق</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle Language">
            <Languages className="h-5 w-5" />
          </Button>
          <Button asChild className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#contact">{t.navBookCall}</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'ar' ? 'right' : 'left'}>
                <div className="flex flex-col gap-6 p-6">
                  <Link href="#home" onClick={closeSheet} className="flex items-center gap-2 font-bold text-lg">
                    <BotMessageSquare className="h-7 w-7" style={{ color: 'hsl(var(--logo-red))' }} />
                    <span className="font-headline">آفاق</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
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
