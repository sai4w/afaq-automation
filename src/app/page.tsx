import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Metrics } from '@/components/sections/Metrics';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { HeadlineOptimizer } from '@/components/sections/HeadlineOptimizer';
import { OurWork } from '@/components/sections/OurWork';
import { Blog } from '@/components/sections/Blog';
import { Pricing } from '@/components/sections/Pricing';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Metrics />
        <About />
        <OurWork />
        <Testimonials />
        <Blog />
        <Pricing />
        <HeadlineOptimizer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
