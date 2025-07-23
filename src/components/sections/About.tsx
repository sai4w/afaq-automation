'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import Image from 'next/image';
import { useOnScreen } from '@/hooks/use-on-screen';
import React from 'react';
import { cn } from '@/lib/utils';

export function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <section id="about" ref={ref} className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className={cn(
              "space-y-6 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}
          >
             <div className="space-y-3">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-foreground">{t.aboutTitle}</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t.aboutSubtitle}
                </p>
             </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.aboutText}
            </p>
          </div>
           <div className={cn(
               "flex justify-center items-center transition-all duration-700 ease-out delay-200",
               isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
               )}
            >
             <Image
              src="https://placehold.co/550x550.png"
              data-ai-hint="team collaboration"
              width={550}
              height={550}
              alt="About Us"
              className="rounded-xl object-cover aspect-square"
             />
           </div>
        </div>
      </div>
    </section>
  );
}
