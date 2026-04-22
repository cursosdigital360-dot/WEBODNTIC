import React from 'react';

interface ProcessStepCardProps {
  index: number;
  title: string;
  description: string;
  className?: string;
}

export default function ProcessStepCard({ index, title, description, className = "" }: ProcessStepCardProps) {
  // Formatear el índice a 01, 02, etc.
  const stepNumber = index < 10 ? `0${index}` : index;

  return (
    <div className={`group p-8 rounded-2xl bg-white border border-[#F3F6FA] hover:border-[#3EA0FF]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#072A8C]/5 ${className}`}>
      <div className="flex flex-col h-full">
        <span className="text-4xl font-black text-[#F3F6FA] group-hover:text-[#3EA0FF]/10 transition-colors duration-300">
          {stepNumber}
        </span>
        
        <div className="mt-4 space-y-3">
          <h3 className="text-xl font-bold text-[#031E72] group-hover:text-[#3EA0FF] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[#072A8C]/70 leading-relaxed text-sm">
            {description}
          </p>
        </div>
        
        <div className="mt-auto pt-6">
          <div className="w-10 h-1 bg-[#F3F6FA] group-hover:w-full group-hover:bg-[#3EA0FF] transition-all duration-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}