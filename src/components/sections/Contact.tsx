'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground">{t.contactTitle}</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
              {t.contactSubtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">{t.contactFormMessage}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input type="text" placeholder={t.contactFormName} className="bg-background focus:ring-accent focus:border-accent" />
                <Input type="email" placeholder={t.contactFormEmail} className="bg-background focus:ring-accent focus:border-accent" />
                <Textarea placeholder={t.contactFormMessage} className="bg-background focus:ring-accent focus:border-accent" />
                <Button type="submit" className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">{t.sendMessage}</Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-6 pt-8 md:pt-0">
            <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-card transition-colors">
              <Phone className="w-8 h-8 text-accent" />
              <div>
                <h3 className="font-semibold text-foreground">{t.contactPhone}</h3>
                <a href="tel:+966123456789" className="text-muted-foreground hover:text-accent" dir="ltr">+966 12 345 6789</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-card transition-colors">
              <Mail className="w-8 h-8 text-accent" />
              <div>
                <h3 className="font-semibold text-foreground">{t.contactEmail}</h3>
                <a href="mailto:info@afaq.sa" className="text-muted-foreground hover:text-accent">info@afaq.sa</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-card transition-colors">
              <MessageCircle className="w-8 h-8 text-accent" />
              <div>
                <h3 className="font-semibold text-foreground">{t.contactWhatsApp}</h3>
                <a href="https://wa.me/966123456789" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent" dir="ltr">+966 12 345 6789</a>
              </div>
            </div>
             <Button asChild size="lg" className="rounded-full bg-logo-red text-white hover:bg-red-700">
               <Link href="#">{t.navBookCall}</Link>
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
