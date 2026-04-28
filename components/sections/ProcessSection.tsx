'use client';
import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import ProcessStepCard from '@/components/shared/ProcessStepCard';
import { ScanEye, MonitorSmartphone, Layers, Sparkles } from 'lucide-react';

export default function ProcessSection() {
  const { process } = siteConfig;
  const icons = [ScanEye, MonitorSmartphone, Layers, Sparkles];

  return (
    <Section id="proceso" className="bg-[#F8FAFC] relative overflow-hidden py-24">
      {/* Fondo dinámico: rompe el blanco puro */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#3EA0FF]/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#031E72]/5 rounded-full blur-[120px]" />
      </div>

      <div className="text-center max-w-4xl mx-auto mb-20 space-y-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-[#031E72] tracking-tighter">
          Tu sonrisa diseñada <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EA0FF] to-[#031E72]">
            bit a bit.
          </span>
        </h2>
        <p className="text-[#072A8C]/70 text-xl font-medium">
          Eliminamos la incertidumbre con un flujo 100% digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {process.steps.map((step, index) => (
          <ProcessStepCard 
            key={index}
            index={(index + 1).toString()}
            title={step.title}
            description={step.description}
            Icon={icons[index]}
            // Aquí está la magia del ritmo visual
            isDark={index % 2 !== 0} 
          />
        ))}
      </div>
    </Section>
  );
}