import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

/**
 * Marketing Layout - Ensamblaje Final
 * Envuelve el contenido con la navegación y el pie de página institucional.
 */

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navegación persistente */}
      <Navbar />
      
      {/* Contenido principal de la página (Home) */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Pie de página institucional */}
      <Footer />
    </div>
  );
}