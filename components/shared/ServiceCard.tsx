'use client';
import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  Icon: LucideIcon;
  isDark?: boolean; // El prop que cambia la personalidad de la tarjeta
}

export default function ServiceCard({
  title,
  description,
  href,
  ctaLabel = "Saber más",
  Icon,
  isDark
}: ServiceCardProps) {
  return (
    <div className={`group flex flex-col p-8 sm:p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden h-full ${
      isDark 
        ? 'bg-[#031E72] text-white shadow-2xl shadow-blue-900/40 border border-[#031E72] z-10 md:scale-105' // La oscura resalta y es un poco más grande en desktop
        : 'bg-white/70 backdrop-blur-xl border border-white text-[#031E72] shadow-xl shadow-[#072A8C]/5'
    }`}>
      
      {/* Decoración de luz interna para la tarjeta oscura */}
      {isDark && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3EA0FF]/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
      )}
      
      <div className="mb-8 relative z-10">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
          isDark ? 'bg-white/10 text-[#3EA0FF]' : 'bg-[#3EA0FF]/10 text-[#3EA0FF]'
        }`}>
          <Icon size={32} strokeWidth={1.5} />
        </div>
      </div>
      
      <h3 className={`text-2xl font-bold mb-4 tracking-tight relative z-10 ${isDark ? 'text-white' : 'text-[#031E72]'}`}>
        {title}
      </h3>
      
      <p className={`text-sm leading-relaxed mb-10 flex-grow relative z-10 ${isDark ? 'text-white/80' : 'text-[#072A8C]/70'}`}>
        {description}
      </p>

      {href && (
        <div className="relative z-10 mt-auto pt-4 border-t border-current/10">
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-4 ${
              isDark ? 'text-[#3EA0FF] hover:text-white' : 'text-[#3EA0FF] hover:text-[#031E72]'
            }`}
          >
            {ctaLabel} <ArrowRight size={16} />
          </a>
        </div>
      )}
    </div>
  );
}