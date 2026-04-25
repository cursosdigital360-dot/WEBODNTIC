import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import CTAInline from '@/components/shared/CTAInline';

export default function PricingSection() {
  const { pricing, contact } = siteConfig;
  // Enlace actualizado con el mensaje global prellenado
  const waLink = `https://wa.me/${contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(contact.whatsappMessage)}`;

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
          
          {/* Fila de Confianza Original */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-2">
              <h4 className="font-bold text-[#031E72]">Presupuesto Final</h4>
              <p className="text-sm text-[#072A8C]/60">Sin cargos ocultos ni sorpresas de último momento.</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-[#F3F6FA] py-6 md:py-0 md:px-8">
              <h4 className="font-bold text-[#031E72]">Transparencia</h4>
              <p className="text-sm text-[#072A8C]/60">Claridad absoluta en cada etapa de tu tratamiento digital.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#031E72]">Asesoría Digital</h4>
              <p className="text-sm text-[#072A8C]/60">Entendemos tus necesidades antes de hablar de costos.</p>
            </div>
          </div>

          {/* NUEVA FILA: Métodos de Pago y Financiamiento */}
          <div className="mt-10 pt-10 border-t border-[#F3F6FA] grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            {/* Tarjetas */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F3F6FA] flex items-center justify-center text-[#3EA0FF]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#031E72] text-sm">Tarjetas Bancarias</h4>
                <p className="text-xs text-[#072A8C]/70 mt-1">Aceptamos todas las tarjetas de crédito y débito.</p>
              </div>
            </div>

            {/* MSI */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F3F6FA] flex items-center justify-center text-[#3EA0FF]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#031E72] text-sm">Meses sin Intereses</h4>
                <p className="text-xs text-[#072A8C]/70 mt-1">Disponibles con tarjetas de crédito participantes.</p>
              </div>
            </div>

            {/* Financiamiento Personalizado (Resaltado para generar preguntas) */}
            <div className="flex flex-col items-center space-y-3 p-4 bg-[#3EA0FF]/5 rounded-2xl border border-[#3EA0FF]/20 relative">
              <div className="absolute -top-3 right-3">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3EA0FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3EA0FF]"></span>
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#3EA0FF]/10 flex items-center justify-center text-[#3EA0FF]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#3EA0FF] text-sm">Financiamiento Interno</h4>
                <p className="text-xs text-[#031E72]/80 font-medium mt-1">Pregunta por nuestros planes personalizados.</p>
              </div>
            </div>

          </div>

          <div className="mt-10 flex flex-col items-center gap-6">
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