import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Laptop, Cpu, TrendingUp, Video, Clock, Award, ChevronLeft, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import { Course } from '../types';
import GlassCard from './GlassCard';

interface CourseMobileCarouselProps {
  courses: Course[];
  onLearnMore?: (course: Course) => void;
  onEnroll?: (course: Course) => void;
  ctaText?: string;
}

export default function CourseMobileCarousel({
  courses,
  onLearnMore,
  onEnroll,
  ctaText = 'Learn More'
}: CourseMobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right (next), -1 = left (prev)

  // Reset index to 0 when the courses array changes (due to filtering)
  useEffect(() => {
    setCurrentIndex(0);
  }, [courses]);

  if (!courses || courses.length === 0) return null;

  // Double-check index safety
  const safeIndex = currentIndex >= courses.length ? 0 : currentIndex;
  const currentCourse = courses[safeIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="h-6 w-6 text-brand-cyan" />;
      case 'Cpu': return <Cpu className="h-6 w-6 text-brand-magenta" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6 text-brand-blue" />;
      case 'Video': return <Video className="h-6 w-6 text-brand-violet" />;
      default: return <Laptop className="h-6 w-6 text-brand-cyan" />;
    }
  };

  // Modern right-to-left animation variants for mobile transition
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="block md:hidden w-full relative px-2">
      {/* Cards Container with relative wrapper */}
      <div className="relative overflow-hidden min-h-[380px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <GlassCard className="h-full flex flex-col justify-between text-left p-6 relative">
              <div>
                <div className="flex justify-between items-center mb-5">
                  <div className="p-2.5 bg-white/5 border border-white/5 rounded-xl">
                    {getIcon(currentCourse.iconName)}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center space-x-1 text-[10px] text-gray-400 font-mono bg-white/5 px-2 py-1 rounded-md border border-white/5">
                      <Clock className="h-3 w-3 text-brand-cyan mr-1" />
                      {currentCourse.duration}
                    </span>
                    <span className="flex items-center space-x-1 text-[10px] text-gray-400 font-mono bg-white/5 px-2 py-1 rounded-md border border-white/5">
                      <Award className="h-3 w-3 text-brand-magenta mr-1" />
                      {currentCourse.skillLevel}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2 leading-tight">
                  {currentCourse.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 line-clamp-5 font-sans">
                  {currentCourse.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-white/5 flex gap-3 mt-auto">
                {onLearnMore ? (
                  <button
                    onClick={() => onLearnMore(currentCourse)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 font-semibold text-[11px] tracking-wider uppercase border border-white/5 hover:border-[#11FF62]/30 transition-all text-center flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-[#11FF62]" />
                    <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">Modules</span>
                  </button>
                ) : null}
                
                <button
                  onClick={() => onEnroll && onEnroll(currentCourse)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-black/40 hover:bg-black/60 font-semibold text-[11px] tracking-wider uppercase border border-white/10 hover:border-[#F4FF12]/30 transition-all text-center flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">{ctaText}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#F4FF12]" />
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress indicators and dots */}
      <div className="flex items-center justify-between mt-5 px-3">
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-all active:scale-90 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Progress Dots */}
        <div className="flex gap-2.5">
          {courses.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? 'w-6 bg-brand-yellow' : 'w-2 bg-white/10 hover:bg-white/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-all active:scale-90 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
