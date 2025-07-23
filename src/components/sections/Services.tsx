'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Cog, BrainCircuit, BarChart3, DatabaseZap, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

const iconVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.2 },
  },
};

export function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: <Cog className="w-10 h-10 text-accent" />,
      title: t.service1Title,
      description: t.service1Desc,
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-accent" />,
      title: t.service2Title,
      description: t.service2Desc,
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-accent" />,
      title: t.service3Title,
      description: t.service3Desc,
    },
    {
      icon: <DatabaseZap className="w-10 h-10 text-accent" />,
      title: t.service4Title,
      description: t.service4Desc,
    },
    {
      icon: <Briefcase className="w-10 h-10 text-accent" />,
      title: t.service5Title,
      description: t.service5Desc,
    },
  ];

  return (
    <section id="services" className="bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
          <div className="space-y-3">
            <div className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">{t.navServices}</div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-foreground">{t.servicesTitle}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              {t.servicesSubtitle}
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="h-full"
            >
              <Card className="flex flex-col text-left p-6 h-full transition-all duration-300 shadow-sm hover:shadow-xl hover:border-accent bg-card border">
                <CardHeader className="p-0 mb-4">
                  <motion.div variants={iconVariants}>{service.icon}</motion.div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col flex-grow">
                  <CardTitle className="mb-2 text-xl font-semibold text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed flex-grow text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
