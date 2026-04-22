import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = "",
  external = false
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#3EA0FF] text-white hover:bg-[#031E72] focus:ring-[#3EA0FF]",
    secondary: "bg-[#031E72] text-white hover:bg-[#3EA0FF] focus:ring-[#031E72]",
    outline: "border-2 border-[#3EA0FF] text-[#3EA0FF] hover:bg-[#3EA0FF] hover:text-white focus:ring-[#3EA0FF]",
    ghost: "text-[#031E72] hover:bg-[#F3F6FA] focus:ring-[#F3F6FA]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = external || href.startsWith('http') || href.startsWith('https') || href.startsWith('tel:') || href.startsWith('mailto:');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={combinedClasses} 
          target={external ? "_blank" : undefined} 
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses}>
      {children}
    </button>
  );
}