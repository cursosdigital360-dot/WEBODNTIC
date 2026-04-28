'use client';
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepCardProps {
  index: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  isDark?: boolean; // Propiedad clave para el ritmo
}

export default function ProcessStepCard({ index, title, description, Icon, isDark }: ProcessStepCardProps) {
  return (
    <div className={`relative p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col shadow-2xl ${
      isDark 
        ? 'bg-[#031E72] text-white shadow-blue-900/20' 
        : 'bg-white/40 backdrop-blur-xl border border-white/40 text-[#031E72] shadow-[#3EA0FF]/5'
    }`}>
      
      {/* Badge de Número */}
      <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center font-black text-lg shadow-lg ${
        isDark ? 'bg-[#3EA0FF] text-white' : 'bg-white text-[#3EA0FF]'
      }`}>
        {index}
      </div>

      {/* Icono con contenedor dinámico */}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-12 ${
        isDark ? 'bg-white/10 text-[#3EA0FF]' : 'bg-[#3EA0FF]/10 text-[#3EA0FF]'
      }`}>
        <Icon size={32} strokeWidth={1.5} />
      </div>

      <h3 className={`text-2xl font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-[#031E72]'}`}>
        {title}
      </h3>
      
      <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-[#072A8C]/60'}`}>
        {description}
      </p>

      {/* Decoración de Glassmorphism interna (solo en las claras) */}
      {!isDark && (
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#3EA0FF]/10 rounded-full blur-3xl pointer-events-none" />
      )}
    </div>
  );
}