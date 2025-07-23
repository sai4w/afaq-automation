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
    { icon: <Smile className="w-10 h-10 text-primary" />, value: 95, label: t.metric1Label, suffix: '%' },
    { icon: <BarChart className="w-10 h-10 text-primary" />, value: 150, label: t.metric2Label, suffix: '+' },
    { icon: <Users className="w-10 h-10 text-primary" />, value: 40, label: t.metric3Label, suffix: '%' },
    { icon: <Clock className="w-10 h-10 text-primary" />, value: 24, label: t.metric4Label, suffix: '/7' },
  ];

  return (
    <section id="metrics" className="bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center space-y-3 p-6 bg-background rounded-lg shadow-md transition-transform hover:scale-105">
              {metric.icon}
              <div className="text-5xl font-bold text-primary">
                <AnimatedCounter from={0} to={metric.value} />
                <span className="text-4xl">{metric.suffix}</span>
              </div>
              <p className="text-lg font-medium text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
