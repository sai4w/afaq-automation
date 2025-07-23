'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function OurWork() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="work" className="bg-background">
      <div className="container px-4 md:px-6">
        <Card className="text-center shadow-lg bg-card border-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-foreground">{t.ourWorkTitle}</CardTitle>
            <CardDescription className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.ourWorkSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-muted-foreground">{t.ourWorkDesc}</p>
            <Button variant="outline" asChild>
                <Link href="#">Explore Case Studies</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
