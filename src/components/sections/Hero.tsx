'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="w-full h-screen flex items-center justify-center bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Hero Background"
            data-ai-hint="futuristic technology abstract"
            fill
            className="object-cover"
            priority
        />
        <div className="container px-4 md:px-6 z-20">
            <div className="flex flex-col items-center text-center space-y-6">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-foreground">
                    {t.heroTitle}
                </h1>
                <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground">
                    {t.heroSubtitle}
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="#services">
                            {t.heroCta}
                            <ArrowRight className="ms-2 h-5 w-5 rtl:rotate-180" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="#">
                            <PlayCircle className="me-2 h-5 w-5" />
                            Watch Demo
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
