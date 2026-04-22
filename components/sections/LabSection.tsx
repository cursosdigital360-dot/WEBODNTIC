import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import CTAInline from '@/components/shared/CTAInline';

export default function LabSection() {
  const { labAdvantage, contact } = siteConfig;
  const waLink = `https://wa.me/${contact.whatsapp.replace('+', '')}`;

  const benefits = [
    "Ajustes en tiempo real durante tu cita",
    "Control total de materiales y tonalidades",
    "Reducción drástica en tiempos de entrega",
    "Precisión micrométrica bajo flujo digital"
  ];

  return (
    <Section id="laboratorio" className="bg-[#031E72] text-white">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Visual Area */}
        <div className="flex-1 w-full order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/images/lab/laboratorio-dental-digital.webp"
              alt="Técnico trabajando en laboratorio dental digital en Tepic"
              className="w-full h-full object-cover aspect-video lg:aspect-square grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031E72] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <span className="px-3 py-1 bg-[#3EA0FF] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                Tecnología In-House
              </span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {labAdvantage.title}
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              {labAdvantage.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#3EA0FF]" />
                <span className="text-sm font-medium text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <CTAInline 
              label="Agendar Valoración" 
              href={waLink} 
              variant="primary"
              external
            />
          </div>
        </div>
      </div>
    </Section>
  );
}