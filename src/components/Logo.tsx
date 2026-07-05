import React from 'react';

interface LogoProps {
  className?: string;
  height?: number | string;
}

export default function Logo({ className = '', height }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={height ? { height } : undefined}
    >
      {/* Outer Circle with balanced stroke */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      {/* Left Column, curved/slanted outer edge conforming with circle shape */}
      <path
        d="M 37.5,23.5 C 29,28 19,38 19,50 C 19,62 29,72 37.5,76.5 Z"
        fill="currentColor"
      />
      {/* Center Column, beautifully rounded top and bottom caps */}
      <path
        d="M 44.5,26 Q 50,23 55.5,26 L 55.5,74 Q 50,77 44.5,74 Z"
        fill="currentColor"
      />
      {/* Right Column, curved/slanted outer edge symmetric with left */}
      <path
        d="M 62.5,23.5 C 71,28 81,38 81,50 C 81,62 71,72 62.5,76.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}
