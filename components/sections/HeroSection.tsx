import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TrustBadge from '@/components/shared/TrustBadge';

export default function HeroSection() {
  const { hero, contact, trust, brand } = siteConfig;

  return (
    <Section className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F3F6FA] -z-10 hidden lg:block" />
      
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {trust.items.slice(0, 2).map((item, index) => (
              <TrustBadge key={index} label={item} />
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#031E72] leading-[1.1] tracking-tight">
            {hero.title}
          </h1>

          <p className="text-lg md:text-xl text-[#072A8C]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Button 
              href={`https://wa.me/${contact.whatsapp.replace('+', '')}`}
              variant="primary" 
              size="lg"
              className="w-full sm:w-auto shadow-lg shadow-[#3EA0FF]/20"
              external
            >
              {hero.primaryCta}
            </Button>
            <div className="flex flex-col items-center lg:items-start text-sm">
              <span className="text-[#031E72] font-bold">{contact.city}</span>
              <span className="text-[#072A8C]/60">{contact.hours}</span>
            </div>
          </div>
        </div>

        {/* Visual Content Area */}
        <div className="flex-1 w-full max-w-2xl lg:max-w-none">
          <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[#F3F6FA] border border-[#3EA0FF]/10 shadow-2xl">
            <img 
              src="/images/hero/hero-odontic-digital.webp"
              alt="Diseño de sonrisa digital en Odontic Clínica Integral Tepic"
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-white flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#3EA0FF] flex items-center justify-center text-white font-bold">
                DSD
              </div>
              <div>
                <p className="text-xs font-bold text-[#031E72] uppercase">Tecnología Digital</p>
                <p className="text-[10px] text-[#072A8C]">Digital Smile Design System 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}