'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { useOnScreen } from '@/hooks/use-on-screen';
import React from 'react';
import { cn } from '@/lib/utils';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section id="home" ref={ref} className="w-full h-[calc(100vh-80px)] flex items-center justify-center bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Hero Background"
            data-ai-hint="futuristic technology abstract"
            fill
            className="object-cover opacity-30"
            priority
        />
        <div className="container px-4 md:px-6 z-20">
            <div className={cn(
                "flex flex-col items-center text-center space-y-6 transition-all duration-1000 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
            >
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-foreground">
                    {t.heroTitle}
                </h1>
                <p className="max-w-[700px] text-lg md:text-xl text-foreground/80">
                    {t.heroSubtitle}
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="#services">
                            {t.heroCta}
                            <ArrowRight className="ms-2 h-5 w-5 rtl:rotate-180" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent text-foreground border-foreground/30 hover:bg-foreground/5">
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
