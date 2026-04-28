import { Metadata } from 'next';
import { siteConfig } from '@/content/site.config';

// Importación de secciones
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ResultsSection from '@/components/sections/ResultsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GallerySection from '@/components/sections/GallerySection'; // <-- Nueva importación de Galería
import LabSection from '@/components/sections/LabSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import MapSection from '@/components/sections/MapSection'; // <-- Importa el mapa
import ContactSection from '@/components/sections/ContactSection';

// Botón persistente
import WhatsAppStickyButton from '@/components/shared/WhatsAppStickyButton';

export const metadata: Metadata = {
  title: `${siteConfig.seo.title}`,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white pt-20">
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <ServicesSection />
      <ResultsSection />
      
      <TestimonialsSection />
      
      {/* Nueva Sección de Galería (Efecto Instagram) */}
      <GallerySection />
      
      <LabSection />
      <PricingSection />
      <FAQSection />
      <MapSection />
      <ContactSection />
      <WhatsAppStickyButton />
    </main>
  );
}