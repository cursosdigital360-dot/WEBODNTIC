'use client';
import React, { useState } from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';

export default function FAQSection() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#031E72]">
            Preguntas Frecuentes
          </h2>
          <p className="text-[#072A8C]/70">
            Resolvemos tus dudas sobre el diseño de sonrisa y nuestros procesos.
          </p>
        </div>

        <div className="space-y-4">
          {faq.items.map((item, index) => (
            <div 
              key={index} 
              className="border border-[#F3F6FA] rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#F3F6FA]/50 transition-colors"
              >
                <span className="font-bold text-[#031E72] pr-8">{item.question}</span>
                <svg 
                  className={`w-5 h-5 text-[#3EA0FF] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-[#072A8C]/70 leading-relaxed border-t border-[#F3F6FA]">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}