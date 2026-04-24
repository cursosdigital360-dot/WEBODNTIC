'use client';
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
    <Section id="laboratorio" className="bg-[#031E72] text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Visual Area - Facebook Video Integration (Square container) */}
        <div className="flex-1 w-full order-2 lg:order-1 flex justify-center">
          {/* Contenedor Cuadrado con fondo negro para letterboxing */}
          <div className="relative w-full max-w-xl aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(62,160,255,0.15)] bg-black">
            {/* Overlay sutil para dar acabado */}
            <div className="absolute inset-0 pointer-events-none z-10 rounded-2xl" />
            
            {/* El iframe llena el contenedor cuadrado. Facebook centrará el video horizontal */}
            <iframe 
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1057572302043762&show_text=false" 
              title="Video Laboratorio Odontic Tepic"
              className="absolute inset-0 w-full h-full border-none rounded-2xl"
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
            />
            
            {/* Badge de Tecnología - Posición ajustada */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 bg-[#3EA0FF]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded-full whitespace-nowrap shadow-lg">
                Proceso Real en Laboratorio
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
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 transition-colors hover:bg-white/10">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#3EA0FF]" />
                <span className="text-sm font-medium text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            {/* Botón actualizado con la petición del cliente */}
            <CTAInline 
              label="Solicita tu valoración aquí" 
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