'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import Image from 'next/image';

export function OurWork() {
  const { language } = useLanguage();
  const t = translations[language];

  const caseStudies = [
    {
      title: 'Streamlining Logistics for a Major Retailer',
      image: 'https://placehold.co/600x400.png',
      hint: 'logistics warehouse'
    },
    {
      title: 'AI-Powered Insights for a Financial Firm',
      image: 'https://placehold.co/600x400.png',
      hint: 'financial data chart'
    },
    {
      title: 'Automating Customer Support with Chatbots',
      image: 'https://placehold.co/600x400.png',
      hint: 'customer support chatbot'
    },
  ];

  return (
    <section id="work" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground">{t.ourWorkTitle}</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
              {t.ourWorkSubtitle}
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                        <Image src={study.image} alt={study.title} width={600} height={400} className="object-cover" data-ai-hint={study.hint} />
                    </CardHeader>
                    <CardContent className="p-6">
                        <CardTitle className="text-lg font-semibold">{study.title}</CardTitle>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                         <Button variant="outline" asChild>
                            <Link href="#">Explore Case Study</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
