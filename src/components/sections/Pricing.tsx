'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Pricing() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="pricing" className="bg-background">
      <div className="container px-4 md:px-6">
        <Card className="text-center shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">{t.pricingTitle}</CardTitle>
            <CardDescription className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.pricingSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6">{t.pricingDesc}</p>
            <Button variant="outline" asChild>
                <Link href="#contact">Get a Quote</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
