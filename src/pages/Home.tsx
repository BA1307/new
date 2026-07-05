import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  BookOpen, 
  Cpu, 
  Users, 
  Zap, 
  CheckCircle, 
  Sparkles, 
  Laptop, 
  GraduationCap, 
  Award,
  ChevronRight
} from 'lucide-react';
import { PageType } from '../types';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';
import { courses } from '../data/courses';
import CourseMobileCarousel from '../components/CourseMobileCarousel';
import CourseCard from '../components/CourseCard';

const AnimatedCounter = ({ value, duration = 1.8 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let active = true;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && active) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * value));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [value, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

interface HomeProps {
  setCurrentPage: (page: PageType) => void;
}

const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 opacity-50">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

export default function Home({ setCurrentPage }: HomeProps) {
  const featuredCourses = courses;

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const wasDraggedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial position in the middle set of courses to allow scrolling left or right
    const singleSetWidth = featuredCourses.length * 369; // 345px card width + 24px gap (gap-6)
    container.scrollLeft = singleSetWidth;

    let animationFrameId: number;
    let lastTime = performance.now();

    const scrollSpeed = 0.045; // pixels per millisecond

    const autoScroll = (time: number) => {
      if (!container) return;

      if (!isDragging && !isHovered) {
        const delta = (time - lastTime) * scrollSpeed;
        container.scrollLeft += delta;

        // Infinite wrapping logic
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft < singleSetWidth) {
          container.scrollLeft += singleSetWidth;
        }
      }

      lastTime = time;
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDragging, isHovered, featuredCourses.length]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const singleSetWidth = featuredCourses.length * 369;

    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft -= singleSetWidth;
    } else if (container.scrollLeft < singleSetWidth) {
      container.scrollLeft += singleSetWidth;
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    setIsDragging(true);
    const startX = e.pageX - container.offsetLeft;
    const initialScrollLeft = container.scrollLeft;
    const startY = e.pageY;
    wasDraggedRef.current = false;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!container) return;

      if (Math.abs(moveEvent.pageX - (startX + container.offsetLeft)) > 6 || Math.abs(moveEvent.pageY - startY) > 6) {
        wasDraggedRef.current = true;
      }

      const x = moveEvent.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag speed sensitivity
      container.scrollLeft = initialScrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      setTimeout(() => {
        wasDraggedRef.current = false;
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const stats = [
    { isNumeric: true, value: 49000, suffix: '+', label: 'Visitors' },
    { isNumeric: true, value: 25000, suffix: '+', label: 'Followers' },
  ];

  const problemCards = [
    {
      title: 'The Digital Skills Gap',
      desc: 'Traditional education struggles to keep pace with rapid technological shifts, leaving a severe mismatch between academic theory and active, modern job requirements.',
      icon: Cpu,
      color: 'border-[#11FF62]/20 shadow-[#11FF62]/5'
    },
    {
      title: 'Employability Risks',
      desc: 'Modern businesses require workers who are already proficient in digital tools, collaborative cloud workspaces, and content strategy, making entry-level positions hard to secure.',
      icon: Users,
      color: 'border-[#F4FF12]/20 shadow-[#F4FF12]/5'
    },
    {
      title: 'Stagnant Productivity',
      desc: 'Without modern automated workflow solutions and strategic Artificial Intelligence engineering, individuals waste hours daily on repetitive tasks that could easily be streamlined.',
      icon: Zap,
      color: 'border-[#11FF62]/20 shadow-[#11FF62]/5'
    }
  ];

  const whyChooseUs = [
    { title: 'Physical & Online Flexibility', desc: 'Learn in our modern BWENKE classroom facilities in Dar es Salaam or join our live, high-definition online interactive streams.' },
    { title: 'Project-Authoritative Curriculum', desc: 'Zero fluff theory. You build active marketing campaigns, design elegant vector assets, and construct functional AI workflows from day one.' },
    { title: 'NECTA Exam Specialization', desc: 'Highly targeted academic modules for Advanced level sciences, featuring in-depth specimen drawings and titration mastery.' },
    { title: 'Active Industry Instructors', desc: 'Learn from active product designers, founders, content creators, and expert science educators with proven local track records.' }
  ];

  return (
    <div id="home-view" className="relative pt-16 md:pt-24 pb-16 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section id="hero-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28 py-12 md:py-20 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto space-y-8 text-center flex flex-col items-center justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#11FF62]/5 border border-[#11FF62]/20 text-[#11FF62] text-xs font-mono font-semibold tracking-wider uppercase"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#F4FF12] animate-pulse" />
            <span>Tanzania's Premier Practical Lab</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h1 text-white tracking-tight leading-tight"
          >
            Jifunze Computer <br className="hidden sm:inline" />
            & <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">Akili Bandia (AI)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-gray-300 max-w-xl mx-auto"
          >
            BWENKE is the localized hub where you master practical tech, digital productivity, and hands-on laboratory sciences. We empower you to automate workflows and elevate your career capabilities.
          </motion.p>

          {/* Micro CTAs - Stacked Vertically */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4 pt-2"
          >
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 rounded-xl text-btn transition-all cursor-pointer bg-black/80 hover:bg-black border border-[#11FF62]/30 hover:border-[#F4FF12]/50 hover:shadow-lg hover:shadow-[#11FF62]/20 flex items-center justify-center space-x-2.5 overflow-hidden"
            >
              <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">
                Get Started Today
              </span>
              <ArrowRight className="h-4.5 w-4.5 text-[#F4FF12] group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            <button
              onClick={() => {
                setCurrentPage('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl text-btn tracking-wider text-gray-400 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center space-x-1.5 border border-transparent hover:border-white/10"
            >
              <span>Explore Classes</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>

          {/* Authority Metrics - Arranged Vertically */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col gap-6 pt-8 border-t border-white/5 w-full max-w-xs items-center mx-auto"
          >
            {stats.map((stat, idx) => (
              <a
                key={idx}
                href="https://www.tiktok.com/@bwenke"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full max-w-[240px] px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center block cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-[#F4FF12]/30 hover:bg-[#F4FF12]/[0.02] hover:shadow-[0_0_25px_rgba(244,255,18,0.15)]"
              >
                <div className="font-display font-normal text-3xl sm:text-4xl text-[#F4FF12] flex items-center justify-center space-x-0.5 group-hover:text-white transition-colors duration-300">
                  {stat.isNumeric ? (
                    <>
                      <AnimatedCounter value={stat.value} />
                      <span>{stat.suffix}</span>
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wider group-hover:text-[#F4FF12] transition-colors duration-300 mt-1">
                  {stat.label}
                </div>
              </a>
            ))}
          </motion.div>

          {/* Glowing background highlights behind elements */}
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#11FF62]/8 rounded-full blur-[90px] -z-10 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-[#F4FF12]/8 rounded-full blur-[80px] -z-10 pointer-events-none" />

        </div>
      </section>

      <SectionDivider />

      {/* 2. Problem We Solve Section */}
      <section id="problem-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28 py-12">
        <SectionHeader
          badge="Problem We Solve"
          title="Bridging the Critical Industry Disconnect"
          subtitle="Tanzanian institutions are advancing rapidly, but generic training leaves a heavy skills deficit. Here is the modern bottleneck we actively disassemble."
          gradientType="sunset"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={`h-full p-6 sm:p-8 rounded-2xl bg-black/40 border ${card.color} hover:border-[#11FF62]/40 transition-all duration-300 shadow-[0_0_20px_rgba(17,255,98,0.02)] group flex flex-col justify-between`}>
                  <div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#11FF62] mb-6 w-fit group-hover:text-[#F4FF12] transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-card-title text-white mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-small text-gray-300 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>Deficit Identifier</span>
                    <span className="text-[#11FF62] font-semibold">0{idx + 1}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* 3. Featured Courses Section */}
      <section id="featured-courses-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-[#11FF62] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#11FF62] mr-2 animate-pulse" />
              Featured Courses
            </span>
            <h2 className="text-h2 text-white leading-tight">
              Our High-Performance <br />
              <span className="bg-gradient-to-r from-[#11FF62] to-[#F4FF12] bg-clip-text text-transparent">Training Programs</span>
            </h2>
          </div>
          
          <button
            onClick={() => {
              setCurrentPage('courses');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-6 md:mt-0 group flex items-center space-x-2 text-btn text-[#11FF62] hover:text-white transition-all cursor-pointer border border-[#11FF62]/20 hover:border-[#11FF62]/40 bg-black/40 px-5 py-2.5 rounded-xl"
          >
            <span>View All Courses</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Desktop View Horizontal Draggable Marquee (moving right to left) */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsDragging(false);
          }}
          className="hidden md:block relative w-full overflow-x-auto scrollbar-none pt-12 pb-6 mask-horizontal cursor-grab active:cursor-grabbing select-none"
        >
          <div className="flex gap-6 w-max">
            {[...featuredCourses, ...featuredCourses, ...featuredCourses].map((course, idx) => (
              <div
                key={`${course.id}-${idx}`}
                className="w-[345px] flex-shrink-0"
              >
                <CourseCard
                  course={course}
                  onClick={() => {
                    if (wasDraggedRef.current) return;
                    setCurrentPage('courses');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View Slider with progress dots and swipe-left animations */}
        <div className="block md:hidden">
          <CourseMobileCarousel
            courses={featuredCourses}
            onEnroll={() => {
              setCurrentPage('courses');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            ctaText="Learn More"
          />
        </div>
      </section>

      <SectionDivider />

      {/* 4. Why Choose BWENKE Section */}
      <section id="why-choose-section" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28 py-12">
        
        {/* Centered Block: Why Choose us list */}
        <div className="max-w-3xl mx-auto space-y-8 text-center flex flex-col items-center justify-center">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-[#11FF62]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#11FF62] mr-2 animate-pulse" />
            Why Choose BWENKE
          </span>
          <h2 className="text-h2 text-white leading-tight">
            A Modern Space Engineered for <span className="bg-gradient-to-r from-[#11FF62] to-[#F4FF12] bg-clip-text text-transparent">Professional Mastery.</span>
          </h2>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            We don't read outdated lecture slides. Our programs are engineered around active practical workstations, 1-on-1 industry mentorship, and dynamic localized code templates.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 w-full text-left">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-left p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#11FF62]/20 hover:bg-[#11FF62]/[0.01] transition-all duration-300">
                <CheckCircle className="h-5 w-5 text-[#11FF62] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-card-title text-white">{item.title}</h4>
                  <p className="text-small text-gray-300 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ambient Neon Glow Highlights behind the centered content */}
        <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-[#11FF62]/4 rounded-full blur-[80px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-[#F4FF12]/4 rounded-full blur-[80px] -z-10 pointer-events-none" />
      </section>

      <SectionDivider />

      {/* 5. Final Call-to-Action Section */}
      <section id="cta-section" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
        <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-black/60 border border-white/10 overflow-hidden text-center">
          
          {/* Glowing elements behind CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#11FF62]/8 rounded-full blur-[90px] -z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#F4FF12]/8 rounded-full blur-[60px] -z-10 pointer-events-none" />

          <h2 className="text-h2 text-white mb-6 leading-tight max-w-2xl mx-auto">
            Ready to Drive Your <br />
            <span className="bg-gradient-to-r from-[#11FF62] to-[#F4FF12] bg-clip-text text-transparent">Professional Future?</span>
          </h2>

          <p className="text-body text-gray-300 max-w-xl mx-auto mb-8">
            Reserve your active workstation seat in our upcoming cohort today. Elevate your computer dexterity, master artificial intelligence, and secure a premium competitive advantage.
          </p>

          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 rounded-xl text-btn transition-all hover:scale-105 cursor-pointer bg-black/80 hover:bg-black border border-[#11FF62]/30 hover:border-[#F4FF12]/50 hover:shadow-lg hover:shadow-[#11FF62]/20 inline-flex items-center space-x-2.5 overflow-hidden"
          >
            <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">
              Register Your Interest
            </span>
            <ArrowRight className="h-4.5 w-4.5 text-[#F4FF12] group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
          
        </div>
      </section>

    </div>
  );
}
