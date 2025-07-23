'use client';

import * as React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
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
import Image from 'next/image';

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
      avatar: 'https://placehold.co/100x100.png',
      logo: 'https://placehold.co/100x40.png',
      logoHint: 'company logo',
    },
    {
      quote: t.testimonial2,
      name: t.testimonial2Name,
      company: t.testimonial2Company,
      avatar: 'https://placehold.co/100x100.png',
      logo: 'https://placehold.co/100x40.png',
      logoHint: 'company logo',
    },
    {
      quote: t.testimonial3,
      name: t.testimonial3Name,
      company: t.testimonial3Company,
      avatar: 'https://placehold.co/100x100.png',
      logo: 'https://placehold.co/100x40.png',
      logoHint: 'company logo',
    },
  ];

  return (
    <section id="testimonials" className="bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground">{t.testimonialsTitle}</h2>
          </div>
        </div>
        <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="shadow-sm bg-card border">
                    <CardHeader className="flex flex-row items-center justify-between p-6">
                      <div className="flex gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      </div>
                      <Image src={testimonial.logo} alt={`${testimonial.company} logo`} width={100} height={40} className="object-contain" data-ai-hint={testimonial.logoHint} />
                    </CardHeader>
                    <CardContent className="p-6 pt-0 space-y-4">
                      <p className="text-lg italic text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardFooter className="flex items-center gap-4 pt-4 border-t p-6">
                      <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full" data-ai-hint="person face" />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
