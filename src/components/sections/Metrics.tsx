'use client';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { BarChart, Users, Smile, Clock } from 'lucide-react';
import React from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

export function Metrics() {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');


  const metrics = [
    { icon: <Smile className="w-10 h-10 text-primary" />, value: 95, label: t.metric1Label, suffix: '%' },
    { icon: <BarChart className="w-10 h-10 text-primary" />, value: 150, label: t.metric2Label, suffix: '+' },
    { icon: <Users className="w-10 h-10 text-primary" />, value: 40, label: t.metric3Label, suffix: '%' },
    { icon: <Clock className="w-10 h-10 text-primary" />, value: 24, label: t.metric4Label, suffix: '/7' },
  ];

  return (
    <section id="metrics" ref={ref} className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center justify-center text-center space-y-3 p-6 bg-card rounded-lg shadow-sm border transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {metric.icon}
              <div className="text-5xl font-bold text-foreground">
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
