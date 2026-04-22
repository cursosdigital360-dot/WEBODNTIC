import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function ResultsSection() {
  const { results, contact } = siteConfig;
  const waLink = `https://wa.me/${contact.whatsapp.replace('+', '')}`;

  return (
    <Section id="resultados" className="bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 order-2 lg:order-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#3EA0FF]/5 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/images/results/resultado-sonrisa-natural.webp"
                alt="Paciente mostrando resultado natural de diseño de sonrisa en Tepic"
                className="w-full h-full object-cover aspect-[4/5] md:aspect-video lg:aspect-[4/5]"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 order-1 lg:order-2 space-y-8">
          <div className="space-y-4 text-center lg:text-left">
            <span className="text-[#3EA0FF] font-bold uppercase tracking-widest text-sm">
              Tu mejor versión
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#031E72] leading-tight">
              {results.title}
            </h2>
            <p className="text-lg text-[#072A8C]/70 leading-relaxed">
              {results.description}
            </p>
          </div>

          <div className="p-6 bg-[#F3F6FA] rounded-2xl border-l-4 border-[#3EA0FF]">
            <p className="text-[#031E72] font-medium leading-snug">
              "El diseño de sonrisa digital no se trata de dientes perfectos, sino de armonía real con tu rostro."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button href={waLink} variant="primary" size="lg" external>
              Ver disponibilidad
            </Button>
            <Button href="#proceso" variant="outline" size="lg">
              Ver proceso digital
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}