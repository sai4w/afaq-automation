'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { ArrowLeft } from 'lucide-react';

export function Hero() {
  const { language, direction } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                {t.heroTitle}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {t.heroSubtitle}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#services">
                  {t.heroCta}
                  <ArrowLeft className="ms-2 h-5 w-5 rtl:rotate-180" />
                </Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/5 hover:text-primary">
                <Link href="#contact">
                  {t.navBookCall}
                </Link>
              </Button>
            </div>
          </div>
          <img
            src="https://placehold.co/600x400.png"
            data-ai-hint="business automation technology"
            alt="Hero"
            width="600"
            height="400"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
