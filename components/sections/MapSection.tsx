'use client';
import React from 'react';
import Section from '@/components/ui/Section';

export default function MapSection() {
  return (
    <Section id="ubicacion" className="py-0 overflow-hidden bg-white">
      <div className="w-full h-[450px] relative grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
        {/* Usamos el link exacto que me pasaste para la ficha de Odontic */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.845972777885!2d-104.90123682472992!3d21.513752280259702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737dbcf20e7c9%3A0x232b61c5fb2331f9!2sOdontic%20Cl%C3%ADnica%20Dental%20Integral%20%7C%20Dise%C3%B1o%20de%20Sonrisa%20en%20Tepic!5e0!3m2!1ses-419!2smx!4v1777336346138!5m2!1ses-419!2smx"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Odontic Clínica Integral en Tepic"
        ></iframe>
      </div>
    </Section>
  );
}