'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Star } from 'lucide-react';

export function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const testimonials = [
    {
      quote: t.testimonial1,
      name: t.testimonial1Name,
      company: t.testimonial1Company,
    },
    {
      quote: t.testimonial2,
      name: t.testimonial2Name,
      company: t.testimonial2Company,
    },
    {
      quote: t.testimonial3,
      name: t.testimonial3Name,
      company: t.testimonial3Company,
    },
  ];

  return (
    <section id="testimonials" className="bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-foreground">{t.testimonialsTitle}</h2>
          </div>
        </div>
        <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="shadow-lg bg-card/10 backdrop-blur-sm">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                      <div className="flex gap-1" style={{ color: 'hsl(var(--logo-red))' }}>
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <p className="text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                      <div className="mt-2">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
