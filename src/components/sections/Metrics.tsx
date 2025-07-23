'use client';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { BarChart, Users, Smile, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Metrics() {
  const { language } = useLanguage();
  const t = translations[language];

  const metrics = [
    { value: 98, label: t.metric1Label, suffix: '%' },
    { value: 150, label: t.metric2Label, suffix: '+' },
    { value: 30, label: t.metric3Label, suffix: '%' },
  ];

  return (
    <section id="metrics" className="bg-transparent">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center text-center space-y-2 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            >
              <div className="text-5xl font-bold text-white">
                <AnimatedCounter from={0} to={metric.value} />
                <span className="text-4xl">{metric.suffix}</span>
              </div>
              <p className="text-lg font-medium text-white/80">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
