import React from 'react';

interface TrustBadgeProps {
  label: string;
  className?: string;
}

export default function TrustBadge({ label, className = "" }: TrustBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F6FA] border border-[#3EA0FF]/20 ${className}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-[#3EA0FF]" />
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#072A8C]">
        {label}
      </span>
    </div>
  );
}