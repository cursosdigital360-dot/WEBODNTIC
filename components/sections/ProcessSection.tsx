import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import ProcessStepCard from '@/components/shared/ProcessStepCard';

export default function ProcessSection() {
  const { process } = siteConfig;

  return (
    <Section id="proceso" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-[#3EA0FF] font-bold uppercase tracking-widest text-sm">
          Metodología Odontic
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#031E72]">
          Tu sonrisa diseñada digitalmente
        </h2>
        <p className="text-[#072A8C]/70 text-lg">
          Un flujo de trabajo preciso, sin sorpresas y con el respaldo de nuestro laboratorio propio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {process.steps.map((step, index) => (
          <ProcessStepCard 
            key={index}
            index={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </Section>
  );
}