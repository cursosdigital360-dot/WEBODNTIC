import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 overflow-hidden ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}