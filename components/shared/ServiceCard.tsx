import React from 'react';
import Button from '@/components/ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  ctaLabel = "Saber más",
  className = ""
}: ServiceCardProps) {
  return (
    <div className={`group flex flex-col p-8 bg-white border border-[#F3F6FA] rounded-2xl transition-all duration-300 hover:border-[#3EA0FF]/30 hover:shadow-xl hover:shadow-[#072A8C]/5 ${className}`}>
      <div className="mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#F3F6FA] flex items-center justify-center group-hover:bg-[#3EA0FF]/10 transition-colors">
          <svg className="w-6 h-6 text-[#3EA0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-[#031E72] mb-3 group-hover:text-[#072A8C] transition-colors">
        {title}
      </h3>
      
      <p className="text-[#072A8C]/70 text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {href && (
        <Button 
          href={href} 
          variant="ghost" 
          size="sm" 
          className="justify-start px-0 text-[#3EA0FF] hover:translate-x-2 transition-transform"
          external
        >
          {ctaLabel} →
        </Button>
      )}
    </div>
  );
}