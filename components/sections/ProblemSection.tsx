import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

export default function ProblemSection() {
  const { problem } = siteConfig;

  const points = [
    "Incertidumbre sobre el resultado final",
    "Miedo a tratamientos dolorosos o invasivos",
    "Preocupación por la durabilidad y naturalidad",
    "Falta de claridad en tiempos y costos"
  ];

  return (
    <Section id="problema" className="bg-[#F3F6FA]">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 space-y-6">
          <span className="text-[#3EA0FF] font-bold uppercase tracking-widest text-sm">
            La realidad de la estética dental
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#031E72] leading-tight">
            {problem.title}
          </h2>
          <p className="text-lg text-[#072A8C]/70 leading-relaxed">
            {problem.description}
          </p>
          
          <ul className="grid gap-4 pt-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-[#3EA0FF]" />
                <span className="text-[#031E72] font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#031E72]">
            <img 
              src="/images/general/odontic-precision-focus.webp"
              alt="Precisión y diagnóstico en Odontic"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031E72]/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-medium italic">
                "La mayoría de los pacientes temen que su sonrisa se vea artificial; nosotros garantizamos armonía natural mediante software 3D."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}