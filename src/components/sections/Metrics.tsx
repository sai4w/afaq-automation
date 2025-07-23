'use client';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { BarChart, Users, Smile, Clock } from 'lucide-react';
import React from 'react';

export function Metrics() {
  const { language } = useLanguage();
  const t = translations[language];

  const metrics = [
    { icon: <Smile className="w-8 h-8 text-accent" />, value: 95, label: t.metric1Label, suffix: '%' },
    { icon: <BarChart className="w-8 h-8 text-accent" />, value: 150, label: t.metric2Label, suffix: '+' },
    { icon: <Users className="w-8 h-8 text-accent" />, value: 40, label: t.metric3Label, suffix: '%' },
    { icon: <Clock className="w-8 h-8 text-accent" />, value: 24, label: t.metric4Label, suffix: '/7' },
  ];

  return (
    <section id="metrics" className="bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">{t.metricsTitle}</h2>
            <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.metricsSubtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              {metric.icon}
              <div className="text-5xl font-bold">
                <AnimatedCounter from={0} to={metric.value} />
                {metric.suffix}
              </div>
              <p className="text-sm font-medium text-primary-foreground/80">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
