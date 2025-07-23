'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cog, BrainCircuit, BarChart3, DatabaseZap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { useOnScreen } from '@/hooks/use-on-screen';
import React from 'react';
import { cn } from '@/lib/utils';

export function Services() {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  const services = [
    {
      icon: <Cog className="w-12 h-12 text-primary" />,
      title: t.service1Title,
      description: t.service1Desc,
    },
    {
      icon: <BrainCircuit className="w-12 h-12 text-primary" />,
      title: t.service2Title,
      description: t.service2Desc,
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: t.service3Title,
      description: t.service3Desc,
    },
    {
      icon: <DatabaseZap className="w-12 h-12 text-primary" />,
      title: t.service4Title,
      description: t.service4Desc,
    },
  ];

  return (
    <section id="services" ref={ref} className="bg-background">
      <div className="container px-4 md:px-6">
        <div className={cn(
            "flex flex-col items-center justify-center space-y-4 text-center transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
        >
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground font-medium">{t.navServices}</div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-foreground">{t.servicesTitle}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.servicesSubtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="flex flex-col text-left p-6 h-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 hover:border-primary/50 bg-card">
                <CardHeader className="p-0 mb-4">
                  {service.icon}
                </CardHeader>
                <CardContent className="p-0 flex flex-col">
                  <CardTitle className="mb-2 text-xl font-semibold text-card-foreground">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
