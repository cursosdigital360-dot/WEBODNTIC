import React from 'react';
import { siteConfig } from '@/content/site.config';
import Container from '@/components/ui/Container';

export default function Footer() {
  const { brand, contact } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#031E72] text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <a href="/" className="inline-block flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <img 
                src="/images/brand/logo-odontic.webp" 
                alt={`Logo de ${brand.name}`} 
                className="h-12 md:h-14 w-auto object-contain brightness-0 invert" 
                /* NOTA: brightness-0 invert vuelve el logo completamente blanco. 
                   Si tu logo webp ya es blanco, puedes borrar esas dos clases de Tailwind. */
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {brand.description}
            </p>
          </div>

          {/* Quick Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Ubicación y Horarios</h4>
            <div className="space-y-4 text-sm text-white/60">
              <p>{contact.address}<br />{contact.city}</p>
              <p className="text-[#3EA0FF] font-medium">{contact.hours}</p>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contacto Directo</h4>
            <div className="space-y-4 flex flex-col items-start">
              <a href={`tel:${contact.phone}`} className="inline-block text-xl font-bold hover:text-[#3EA0FF] transition-colors">
                {contact.phone}
              </a>
              <a 
                href={`https://wa.me/${contact.whatsapp.replace('+', '')}`} 
                className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar mensaje de WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Créditos de Agencia */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs">
            © {currentYear} {brand.name}. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-1.5 text-xs text-white/40">
            <span>Hecho con ❤️ por</span>
            <a 
              href="https://somoslazaro.marketing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#3EA0FF] font-semibold transition-colors underline underline-offset-4 decoration-[#3EA0FF]/30"
            >
              somoslazaro.marketing
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}