import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import ServiceCard from '@/components/shared/ServiceCard';

export default function ServicesSection() {
  const { services, contact } = siteConfig;
  const waLink = `https://wa.me/${contact.whatsapp.replace('+', '')}`;

  return (
    <Section id="servicios" className="bg-[#F3F6FA]/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#031E72] mb-6">
          {services.title}
        </h2>
        <div className="w-20 h-1.5 bg-[#3EA0FF] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.items.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            href={waLink}
            ctaLabel="Consultar tratamiento"
          />
        ))}
      </div>
    </Section>
  );
}