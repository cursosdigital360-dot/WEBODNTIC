import React from 'react';
import { siteConfig } from '@/content/site.config';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function ContactSection() {
  const { contact, contactSection } = siteConfig;
  const waLink = `https://wa.me/${contact.whatsapp.replace('+', '')}`;

  return (
    <Section id="contacto" className="bg-[#F3F6FA] mb-12">
      <div className="bg-[#031E72] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        {/* Info Side */}
        <div className="flex-1 p-8 md:p-16 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {contactSection.title}
            </h2>
            <p className="text-white/70 text-lg">
              {contactSection.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#3EA0FF]/20 flex items-center justify-center text-[#3EA0FF] flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold">Ubicación</p>
                <p className="text-white/60 text-sm">{contact.address}, {contact.city}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#3EA0FF]/20 flex items-center justify-center text-[#3EA0FF] flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold">Horario de Atención</p>
                <p className="text-white/60 text-sm">{contact.hours}</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button href={waLink} variant="primary" size="lg" external className="w-full sm:w-auto">
              Hablar por WhatsApp
            </Button>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 min-h-[300px] relative">
          <img 
            src="/images/location/consultorio-odontic-tepic.webp" 
            alt="Consultorio de Odontic en Tepic"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031E72] to-transparent lg:block hidden" />
        </div>
      </div>
    </Section>
  );
}