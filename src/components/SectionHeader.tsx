import { motion } from 'motion/react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  gradientType?: 'coral' | 'cyan' | 'magenta' | 'blue' | 'lime' | 'emerald' | 'orange' | 'gold' | 'sunset' | 'default';
  titleClassName?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  gradientType = 'default',
  titleClassName
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  
  const getGradientClass = () => {
    if (gradientType === 'coral') return 'text-gradient-coral';
    if (gradientType === 'cyan') return 'text-gradient-cyan';
    if (gradientType === 'magenta') return 'text-gradient-magenta';
    if (gradientType === 'blue') return 'text-gradient-blue';
    if (gradientType === 'lime') return 'text-gradient-lime';
    if (gradientType === 'emerald') return 'text-gradient-emerald';
    if (gradientType === 'orange') return 'text-gradient-orange';
    if (gradientType === 'gold') return 'text-gradient-gold';
    if (gradientType === 'sunset') return 'text-gradient-sunset';
    return 'text-gradient-default';
  };

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-brand-cyan mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mr-2 animate-pulse" />
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`${titleClassName || 'text-h2'} text-white mb-4`}
      >
        {isCenter ? (
          <>
            {title.split(' ').slice(0, -2).join(' ')}{' '}
            <span className={getGradientClass()}>
              {title.split(' ').slice(-2).join(' ')}
            </span>
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-body text-gray-300 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
