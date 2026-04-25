'use client';
import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';

export default function GallerySection() {
  const { gallery } = siteConfig;

  return (
    <Section id="galeria" className="bg-white">
      <div className="space-y-12">
        {/* Encabezado de la Sección */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[#3EA0FF] font-bold uppercase tracking-widest text-sm">
            Nuestra Clínica
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#031E72] leading-tight">
            {gallery.title}
          </h2>
          <p className="text-lg text-[#072A8C]/70 leading-relaxed max-w-2xl mx-auto">
            {gallery.subtitle}
          </p>
        </div>

        {/* Cuadrícula de Galería Estilo Retrato de Instagram (4:5) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {gallery.images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl border border-[#072A8C]/5 shadow-lg shadow-[#072A8C]/5 aspect-[4/5]"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy" // Optimización de carga
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay sutil al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#031E72]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-medium tracking-wider opacity-80">
                  Odontic Tepic
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}