'use client';
import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import ServiceCard from '@/components/shared/ServiceCard';
// Iconos de Lucide: Brillos para Diseño, Diamante para Carillas, Latido para Ortodoncia
import { Sparkles, Gem, Activity } from 'lucide-react';

export default function ServicesSection() {
  const { services, contact } = siteConfig;
  // Botón con el mensaje prellenado conectado!
  const waLink = `https://wa.me/${contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(contact.whatsappMessage)}`;
  
  const icons = [Sparkles, Gem, Activity];

  return (
    <Section id="servicios" className="bg-[#F8FAFC] relative overflow-hidden py-24">
      {/* Luz de fondo sutil para dar ambiente de modernidad */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3EA0FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="text-[#3EA0FF] font-bold uppercase tracking-[0.2em] text-[10px] bg-[#3EA0FF]/10 px-4 py-2 rounded-full mb-6 inline-block">
          Especialidades Premium
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#031E72] tracking-tighter mb-6">
          {services.title}
        </h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-[#3EA0FF] to-transparent mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10 max-w-6xl mx-auto items-center">
        {services.items.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            href={waLink}
            ctaLabel="Consultar tratamiento"
            Icon={icons[index]}
            // EL TRUCO: Solo la tarjeta 1 (la de en medio) será oscura
            isDark={index === 1}
          />
        ))}
      </div>
    </Section>
  );
}