import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';

export default function TestimonialsSection() {
  // @ts-ignore - En caso de que el editor tarde en refrescar el nuevo tipado del config
  const { testimonials } = siteConfig;

  return (
    <Section id="testimonios" className="bg-[#031E72] text-white">
      <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <span className="text-[#3EA0FF] font-bold uppercase tracking-widest text-sm">
          Prueba Social
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          {testimonials.title}
        </h2>
        <p className="text-white/70 text-lg">
          {testimonials.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.items.map((testimonial: any, index: number) => (
          <div 
            key={index} 
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col h-full relative"
          >
            {/* Comilla decorativa */}
            <div className="absolute top-6 right-6 opacity-20">
              <svg className="w-12 h-12 text-[#3EA0FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="flex-grow">
              <p className="text-white/80 leading-relaxed italic relative z-10 mb-8">
                "{testimonial.text}"
              </p>
            </div>
            
            <div className="border-t border-white/10 pt-6 mt-auto">
              <p className="font-bold text-white text-lg">{testimonial.name}</p>
              <p className="text-[#3EA0FF] text-sm font-medium">{testimonial.treatment}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}