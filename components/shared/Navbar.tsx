'use client';
import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/content/site.config';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { brand, contact } = siteConfig;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#031E72] shadow-xl py-3' : 'bg-transparent py-5'
    }`}>
      <Container className="flex items-center justify-between">
        
        {/* Logo Visual (Sin filtros, colores originales) */}
        <a href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
          <img 
            src="/images/brand/logo-odontic.webp" 
            alt={`Logo de ${brand.name}`} 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                isScrolled 
                  ? 'text-white hover:text-[#3EA0FF]' 
                  : 'text-[#031E72] hover:text-[#3EA0FF]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button 
            href={`https://wa.me/${contact.whatsapp.replace('+', '')}`} 
            variant="primary" 
            size="sm"
            external
          >
            Cita WhatsApp
          </Button>
        </div>

        {/* Mobile Mini CTA */}
        <div className="md:hidden">
          <Button 
            href={`https://wa.me/${contact.whatsapp.replace('+', '')}`} 
            variant="primary" 
            size="sm"
            external
          >
            WhatsApp
          </Button>
        </div>
      </Container>
    </nav>
  );
}