import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
  key?: any;
}

export default function GlassCard({ children, className = '', hoverGlow = true, ...props }: GlassCardProps) {
  return (
    <div
      {...props}
      className={`relative py-4 transition-all duration-300 group ${className}`}
    >
      {children}
    </div>
  );
}
