'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Metrics } from './Metrics';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};


export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="w-full min-h-[100vh] flex flex-col justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Hero Background"
            data-ai-hint="glowing neural networks"
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container px-4 md:px-6 z-10">
        <motion.div
            className="flex flex-col items-center text-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 
              className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white"
              variants={itemVariants}
            >
                {t.heroTitle}
            </motion.h1>
            <motion.p 
              className="max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed"
              variants={itemVariants}
            >
                {t.heroSubtitle}
            </motion.p>
            <motion.div 
              className="flex flex-col gap-4 min-[400px]:flex-row justify-center"
              variants={itemVariants}
            >
                <Button asChild size="lg" className="bg-logo-red text-white hover:bg-red-700 rounded-full px-8 text-lg">
                    <Link href="#services">
                        {t.heroCta}
                        <ArrowRight className="ms-2 h-5 w-5 rtl:rotate-180" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-accent bg-accent text-accent-foreground hover:bg-accent/90 text-lg">
                    <Link href="#">
                        <PlayCircle className="me-2 h-5 w-5" />
                        Watch Demo
                    </Link>
                </Button>
            </motion.div>
        </motion.div>
      </div>
      <div className="w-full z-10 pt-16">
        <Metrics />
      </div>
    </section>
  );
}
