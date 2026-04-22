import React from 'react';
import Button from '@/components/ui/Button';

interface CTAInlineProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  external?: boolean;
}

export default function CTAInline({
  label,
  href,
  variant = 'primary',
  className = "",
  external = false
}: CTAInlineProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Button 
        href={href} 
        variant={variant} 
        size="md" 
        external={external}
        className="shadow-sm"
      >
        {label}
      </Button>
    </div>
  );
}