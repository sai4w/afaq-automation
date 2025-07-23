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
import { motion } from 'framer-motion';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <motion.header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
           <Link href="#home" className="flex items-center gap-2 font-bold text-lg">
                <BotMessageSquare className="h-8 w-8" style={{ color: 'hsl(var(--logo-red))' }} />
                <span className="font-headline text-foreground text-xl hidden sm:inline">{language === 'ar' ? 'آفاق' : 'Afaq'}</span>
            </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <Button asChild className="hidden lg:flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                <Link href="#contact">{t.navBookCall}</Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle Language" className="text-foreground hover:bg-foreground/10">
              <Languages className="h-5 w-5" />
            </Button>
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground hover:bg-foreground/10">
                    <Menu className="h-6 w-6" />
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
                          className="text-lg font-medium text-foreground transition-colors hover:text-accent"
                          onClick={closeSheet}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                     <Button variant="outline" size="lg" onClick={() => { closeSheet(); setLanguage(language === 'ar' ? 'en' : 'ar') }}>
                       {language === 'en' ? 'العربية' : 'English'}
                     </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </motion.header>
  );
}
