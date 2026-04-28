'use client';
import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import CTAInline from '@/components/shared/CTAInline';
// Importamos iconos premium de Lucide
import { ShieldCheck, CreditCard, Wallet, BadgePercent, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  const { pricing, contact } = siteConfig;
  const waLink = `https://wa.me/${contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  return (
    <Section id="precios" className="bg-[#F8FAFC] relative overflow-hidden py-24">
      {/* Fondo sutil tipo gradiente para mantener el estilo premium */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3EA0FF]/5 rounded-full blur-[100px] pointer-events-none -mt-32 -mr-32" />

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Header de Sección */}
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#031E72] shadow-xl shadow-blue-900/20 mb-2 transform -rotate-3">
            <ShieldCheck className="w-8 h-8 text-[#3EA0FF]" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#031E72] tracking-tight">
            {pricing.title}
          </h2>
          <p className="text-xl text-[#072A8C]/70 leading-relaxed max-w-2xl mx-auto font-medium">
            {pricing.description}
          </p>
        </div>

        {/* Tarjeta Principal de Confianza (Glassmorphism Light) */}
        <div className="bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-[#072A8C]/5 border border-white relative overflow-hidden text-left">
          
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <ShieldCheck className="w-48 h-48" />
          </div>
          
          {/* Fila de Pilares de Transparencia */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-[#F3F6FA] pb-12">
            <div className="space-y-3">
              <h4 className="font-bold text-[#031E72] text-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#3EA0FF]" /> Presupuesto Final
              </h4>
              <p className="text-[#072A8C]/60 leading-relaxed">Sin cargos ocultos ni sorpresas de último momento.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-[#031E72] text-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#3EA0FF]" /> Transparencia
              </h4>
              <p className="text-[#072A8C]/60 leading-relaxed">Claridad absoluta en cada etapa de tu tratamiento digital.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-[#031E72] text-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#3EA0FF]" /> Asesoría Digital
              </h4>
              <p className="text-[#072A8C]/60 leading-relaxed">Entendemos tus necesidades antes de hablar de costos.</p>
            </div>
          </div>

          {/* NUEVA FILA: Dinámica de Pagos */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tarjetas Bancarias */}
            <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#F3F6FA] flex flex-col justify-center transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#031E72]">
                  <CreditCard className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-[#031E72]">Tarjetas Bancarias</h4>
              </div>
              <p className="text-sm text-[#072A8C]/60">Aceptamos todas las tarjetas de crédito y débito (Visa, Mastercard, Amex).</p>
            </div>

            {/* MSI */}
            <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#F3F6FA] flex flex-col justify-center transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#031E72]">
                  <BadgePercent className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-[#031E72]">Meses sin Intereses</h4>
              </div>
              <p className="text-sm text-[#072A8C]/60">Disponibles de 3 a 12 MSI con tarjetas de crédito participantes.</p>
            </div>

            {/* Financiamiento Personalizado (El Zebra Dark Card) */}
            <div className="p-6 rounded-3xl bg-[#031E72] text-white shadow-xl shadow-blue-900/20 flex flex-col justify-center relative overflow-hidden transition-transform hover:-translate-y-1 transform md:scale-105">
              {/* Ping de atención */}
              <div className="absolute top-4 right-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3EA0FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3EA0FF]"></span>
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#3EA0FF]">
                  <Wallet className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-white">Plan Odontic</h4>
              </div>
              <p className="text-sm text-white/80 relative z-10">Financiamiento interno 100% personalizado. Pregunta por las opciones en tu valoración.</p>
            </div>

          </div>

          {/* CTA Final Integrado */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between bg-[#031E72]/5 p-6 md:p-8 rounded-3xl border border-[#031E72]/10">
            <div className="text-center sm:text-left mb-6 sm:mb-0">
              <p className="text-[#031E72] font-black text-xl">¿Listo para comenzar?</p>
              <p className="text-[#072A8C]/70 text-sm mt-1">Agenda tu cita hoy mismo.</p>
            </div>
            
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#3EA0FF] text-white font-bold rounded-xl shadow-lg shadow-[#3EA0FF]/30 hover:bg-[#2B8DE8] hover:-translate-y-1 transition-all w-full sm:w-auto"
            >
              {pricing.ctaLabel} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
        </div>
      </div>
    </Section>
  );
}