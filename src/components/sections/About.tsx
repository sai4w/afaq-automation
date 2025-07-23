'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import Image from 'next/image';

export function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
             <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">{t.aboutTitle}</h2>
            <h3 className="text-xl font-semibold">{t.aboutSubtitle}</h3>
            <p className="text-muted-foreground">
              {t.aboutText}
            </p>
          </div>
           <div className="flex justify-center items-center">
             <Image
              src="https://placehold.co/550x310.png"
              data-ai-hint="team collaboration"
              width={550}
              height={310}
              alt="About Us"
              className="rounded-xl object-cover"
             />
           </div>
        </div>
      </div>
    </section>
  );
}
