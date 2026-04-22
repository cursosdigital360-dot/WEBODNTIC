import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import CTAInline from '@/components/shared/CTAInline';

export default function PricingSection() {
  const { pricing, contact } = siteConfig;
  const waLink = `https://wa.me/${contact.whatsapp.replace('+', '')}`;

  return (
    <Section id="precios" className="bg-[#F3F6FA]">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 shadow-sm">
            <svg className="w-8 h-8 text-[#3EA0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#031E72]">
            {pricing.title}
          </h2>
          <p className="text-xl text-[#072A8C]/70 leading-relaxed max-w-2xl mx-auto">
            {pricing.description}
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-[#072A8C]/5 border border-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="text-[10px] font-bold text-[#3EA0FF] uppercase tracking-tighter opacity-20 rotate-12">
              Odontic Transparency
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-2">
              <h4 className="font-bold text-[#031E72]">Presupuesto Final</h4>
              <p className="text-sm text-[#072A8C]/60">Sin cargos ocultos ni sorpresas de último momento.</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-[#F3F6FA] py-6 md:py-0 md:px-8">
              <h4 className="font-bold text-[#031E72]">Financiamiento</h4>
              <p className="text-sm text-[#072A8C]/60">Opciones flexibles diseñadas para tu comodidad económica.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#031E72]">Asesoría Digital</h4>
              <p className="text-sm text-[#072A8C]/60">Entendemos tus necesidades antes de hablar de costos.</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <p className="text-[#031E72] font-semibold">
              ¿Listo para conocer tu plan personalizado?
            </p>
            <CTAInline 
              label="Solicitar Presupuesto por WhatsApp" 
              href={waLink} 
              variant="secondary"
              external
            />
          </div>
        </div>
      </div>
    </Section>
  );
}