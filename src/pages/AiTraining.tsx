import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, Cpu, MessageSquare, Zap, Layers, Sparkles, Code, 
  CheckCircle, ArrowRight, X, ChevronDown, ChevronUp, HelpCircle, 
  Award, Calendar, ShieldCheck, Star, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { PageType } from '../types';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

const aiCourses = [
  {
    title: 'Introduction to Artificial Intelligence',
    description: 'A beginner-friendly course introducing core AI concepts and real-world applications.',
    duration: '4 Weeks',
    instructorName: 'Dr. Makoba',
    price: 'Ksh 12,000',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800',
    outcomes: [
      'Understand AI basics',
      'Learn real-world AI applications',
      'Build foundation for advanced AI learning'
    ]
  },
  {
    title: 'AI for Productivity and Office Work',
    description: 'Learn how to use AI tools to improve daily office work and productivity.',
    duration: '4 Weeks',
    instructorName: 'L. Kinyua',
    price: 'Ksh 10,000',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800',
    outcomes: [
      'AI for writing, emails, and reports',
      'Automate repetitive tasks',
      'Improve efficiency and time management'
    ]
  },
  {
    title: 'Basic Programming for AI (Python Foundations)',
    description: 'Learn Python programming from scratch focused on AI development logic.',
    duration: '6 Weeks',
    instructorName: 'Eng. Omondi',
    price: 'Ksh 15,000',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800',
    outcomes: [
      'Programming fundamentals',
      'Write basic Python programs',
      'Prepare for machine learning'
    ]
  },
  {
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to how machines learn from data and make predictions.',
    duration: '6 Weeks',
    instructorName: 'Dr. Makoba',
    price: 'Ksh 18,000',
    imageUrl: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800',
    outcomes: [
      'Supervised and unsupervised learning',
      'How AI models work',
      'Real-world AI applications'
    ]
  },
  {
    title: 'AI for Business and Entrepreneurship',
    description: 'Learn how AI can be used to start and grow businesses.',
    duration: '4 Weeks',
    instructorName: 'M. Wambua',
    price: 'Ksh 12,000',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    outcomes: [
      'AI for marketing and automation',
      'Business idea generation',
      'Data-driven decision making'
    ]
  },
  {
    title: 'Content Creation and AI Media Tools',
    description: 'Learn to create digital content using AI tools.',
    duration: '4 Weeks',
    instructorName: 'A. Hassan',
    price: 'Ksh 10,000',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800',
    outcomes: [
      'AI-generated images, videos, and posts',
      'Social media growth strategies',
      'Personal branding with AI'
    ]
  },
  {
    title: 'Advanced AI Projects (Capstone)',
    description: 'Hands-on course where learners build real AI projects.',
    duration: '8 Weeks',
    instructorName: 'Eng. Omondi',
    price: 'Ksh 22,000',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800',
    outcomes: [
      'Build complete AI projects',
      'Solve real-world problems',
      'Create portfolio-ready work'
    ]
  }
];

interface AiTrainingProps {
  setCurrentPage: (page: PageType) => void;
}

export default function AiTraining({ setCurrentPage }: AiTrainingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const wasDraggedRef = useRef(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial position in the middle set of courses to allow scrolling left or right
    const singleSetWidth = aiCourses.length * 369; // 345px card width + 24px gap (gap-6)
    container.scrollLeft = singleSetWidth;

    let animationFrameId: number;
    let lastTime = performance.now();

    const scrollSpeed = 0.045; // pixels per millisecond

    const autoScroll = (time: number) => {
      if (!container) return;

      // Only autoscroll if not dragging, not hovered, and NOT on mobile
      if (!isDragging && !isHovered && !isMobile) {
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
  }, [isDragging, isHovered, isMobile]);

  const scrollNext = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = 369; // 345px card + 24px gap
    const currentScroll = container.scrollLeft;
    const targetScroll = direction === 'right' 
      ? currentScroll + cardWidth 
      : currentScroll - cardWidth;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const singleSetWidth = aiCourses.length * 369;
    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft -= singleSetWidth;
    } else if (container.scrollLeft < singleSetWidth) {
      container.scrollLeft += singleSetWidth;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    wasDraggedRef.current = false;
    const container = containerRef.current;
    if (!container) return;

    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const x = moveEvent.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // Scroll multiplier
      container.scrollLeft = scrollLeft - walk;
      wasDraggedRef.current = true;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const benefits = [
    { title: '10x Speed Accretion', desc: 'Accelerate your report drafting, technical research, and content schedules with pre-tested workspace prompts.' },
    { title: 'Automated Redundant Cycles', desc: 'Delegate structural formatting, data cleaning, and scheduling chores directly to autonomous AI connectors.' },
    { title: 'Cognitive Upskilling', desc: 'Understand the underlying LLM paradigms to continually adapt as artificial intelligence systems expand globally.' },
    { title: 'Resume Competitive Dominance', desc: 'Present yourself as an AI-augmented professional capable of delivering the output of an entire traditional team.' }
  ];

  const profiles = [
    { title: 'Undergraduate Students', reason: 'Learn difficult scientific and technical topics ten times faster, analyze complex journals quickly, and formulate flawless reports.' },
    { title: 'Creative Freelancers', reason: 'Expand your graphic design, copywriting, and media production bandwidth, allowing you to handle multiple premium clients.' },
    { title: 'Office Coordinators', reason: 'Upgrade spreadsheets, automate heavy correspondence, write summaries of long meetings instantly, and run smooth logistics.' },
    { title: 'Startup Founders', reason: 'Launch operations, code basic web structures, and run marketing funnels with close to zero starting capital.' }
  ];

  const faqData = [
    {
      q: "Do I need to know programming or math to learn AI?",
      a: "Absolutely not! General AI use, prompt engineering, and workspace automation require zero programming. For Python Foundations and Machine Learning, we build all logical steps from scratch for beginners."
    },
    {
      q: "Which specific AI platforms are taught in the courses?",
      a: "We work directly with ChatGPT (GPT-4o), Claude 3.5 Sonnet, Midjourney, Canva AI, GitHub Copilot, v0, Zapier, and Make.com."
    },
    {
      q: "Is there support for working professionals?",
      a: "Yes. Our courses run in separate cohorts including intensive weekend sessions and evening hours designed for active employees."
    },
    {
      q: "How are student projects evaluated?",
      a: "Rather than dry paper exams, evaluation is based entirely on functional deliverables: building live automated pipelines, prompt portfolios, and capstone AI applications."
    }
  ];

  return (
    <div id="ai-training-view" className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* SECTION 1: Hero Section */}
      <section id="ai-hero" className="relative z-10 p-6 md:p-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-1 text-xs text-brand-magenta bg-brand-magenta/15 border border-brand-magenta/30 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
              <Brain className="h-3.5 w-3.5 mr-1" />
              Futuristic Engineering
            </span>
            <h1 className="text-h1 text-white tracking-tight leading-tight">
              Command Artificial Intelligence. <span className="text-gradient-cyan">Outpace the Curve.</span>
            </h1>
            <p className="text-body text-gray-300 max-w-2xl">
              AI is not a replacement; it is an amplifier. Acquire elite prompt engineering, custom workplace automations, and python-powered generative content workflows. Transform into an AI-augmented professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 text-btn tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-[#11FF62]/20 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">Enroll in AI Cohorts</span>
                <ArrowRight className="h-4 w-4 text-[#F4FF12]" />
              </button>
              <a
                href="#ai-available-courses"
                className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-btn tracking-wider uppercase rounded-xl transition-all text-center flex items-center justify-center cursor-pointer"
              >
                Explore Syllabus
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <GlassCard className="p-8 border border-white/10 !bg-brand-dark/45 relative z-10 overflow-hidden">
              <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Cpu className="h-5 w-5 text-brand-cyan" />
                <span>The AI Imperative</span>
              </h3>
              <div className="space-y-4 text-xs text-gray-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-mono text-brand-cyan font-bold block mb-1">GLOBAL MARKET STATISTIC</span>
                  <p className="leading-relaxed">
                    Over 82% of premium corporate roles now prioritize applicants who possess documented competencies in generative AI platforms.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-mono text-brand-magenta font-bold block mb-1">PROMPT VELOCITY OUTLOOK</span>
                  <p className="leading-relaxed">
                    Workers incorporating structural prompting models complete analytical writing and content operations 50% faster than traditional workflows.
                  </p>
                </div>
              </div>
            </GlassCard>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-brand-cyan/15 rounded-full blur-[50px] -z-10" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-brand-magenta/15 rounded-full blur-[50px] -z-10" />
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Learn This Course? */}
      <section id="ai-why" className="p-6 md:p-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-brand-cyan">
              Tangible Value
            </span>
            <h2 className="text-h2 text-white leading-tight">
              Practical Benefits of Cognitive Mastery
            </h2>
            <p className="text-body text-gray-300 leading-relaxed">
              We design our cohorts to produce instant real-world improvements. Here is how your daily professional life shifts after our training.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((ben, idx) => (
              <GlassCard key={idx} hoverGlow={false} className="border border-white/5 p-5">
                <CheckCircle className="h-5 w-5 text-brand-cyan mb-3 flex-shrink-0" />
                <h3 className="text-card-title text-white mb-2">{ben.title}</h3>
                <p className="text-small text-gray-300 leading-relaxed">{ben.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Who Is This Course For? */}
      <section id="ai-who" className="p-6 md:p-8 text-left">
        <SectionHeader
          badge="Target Audiences"
          title="Who Should Enroll in AI Cohorts?"
          subtitle="This program is designed for ambitious individuals looking to upgrade their efficiency and build a strong career advantage."
          gradientType="gold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, idx) => (
            <GlassCard key={idx} hoverGlow={true} className="flex flex-col justify-between h-full p-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-magenta uppercase tracking-widest block mb-1">PROFILE 0{idx + 1}</span>
                <h3 className="text-card-title text-white mb-3">
                  {profile.title}
                </h3>
                <p className="text-small text-gray-300 leading-relaxed">
                  {profile.reason}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 4: Available Courses / Modules */}
      <section id="ai-available-courses" className="p-6 md:p-8 text-left scroll-mt-24">
        <SectionHeader
          badge="Curriculum Programs"
          title="Available AI Courses"
          subtitle="Explore our comprehensive list of specialized artificial intelligence programs designed for every skill level."
          gradientType="magenta"
        />

        <div className="relative">
          <div 
            ref={containerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsDragging(false);
            }}
            className="relative w-full overflow-x-auto scrollbar-none pt-12 pb-6 mask-horizontal cursor-grab active:cursor-grabbing select-none"
          >
            <div className="flex gap-6 w-max">
              {[...aiCourses, ...aiCourses, ...aiCourses].map((course, idx) => (
                <div
                  key={`${course.title}-${idx}`}
                  className="w-[345px] flex-shrink-0"
                >
                  <div
                    onClick={() => {
                      if (wasDraggedRef.current) return;
                      setCurrentPage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="relative w-[345px] h-[425px] rounded-none overflow-hidden group border border-white/15 shadow-xl cursor-pointer bg-slate-900 transition-all duration-350 ease-out hover:-translate-y-8 hover:shadow-2xl hover:shadow-brand-magenta/10 hover:border-white/30 mx-auto"
                  >
                    {/* Background Image */}
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Cinematic Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/85 to-black/25 transition-opacity duration-300 group-hover:via-black/90" />

                    {/* Card Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end transition-transform duration-300 ease-out transform group-hover:-translate-y-16 group-hover:delay-[100ms]">
                      {/* Course Duration Badge */}
                      <div className="flex justify-between items-center mb-2.5 opacity-80 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] uppercase tracking-wider font-semibold font-mono text-brand-magenta">
                          {course.duration}
                        </span>
                        <Sparkles className="h-4 w-4 text-brand-magenta/80" />
                      </div>

                      {/* Course Title */}
                      <h3 className="text-card-title text-white text-left tracking-tight mb-2 group-hover:text-brand-magenta transition-colors">
                        {course.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-small text-gray-300 text-left leading-relaxed mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Divider line */}
                      <div className="border-t border-white/15 my-2.5" />

                      {/* Outcomes (Bullet points) */}
                      <div className="text-left mb-4">
                        <h4 className="text-[10px] font-mono font-bold text-white mb-2 uppercase tracking-wide">
                          Key Outcomes:
                        </h4>
                        <ul className="space-y-1.5">
                          {course.outcomes.map((outcome, oIdx) => (
                            <li key={oIdx} className="flex items-start text-xs text-gray-300 font-sans">
                              <CheckCircle className="h-3.5 w-3.5 text-brand-magenta mr-2 mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-1">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Instructor & Price Info Row */}
                      <div className="flex justify-between items-center text-xs text-white/95 font-medium border-t border-white/10 pt-3">
                        <div className="flex items-center space-x-1.5">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
                            <svg className="w-3.5 h-3.5 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>{course.instructorName}</span>
                        </div>

                        <div className="flex items-center space-x-1 text-brand-magenta">
                          <span className="font-bold text-sm font-mono text-brand-magenta">{course.price}</span>
                        </div>
                      </div>
                    </div>

                    {/* Slide-Up Course Detail Button block */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out group-hover:delay-[100ms] z-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (wasDraggedRef.current) return;
                          setCurrentPage('contact');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-[50%] bg-blue-600 text-white text-btn py-3 px-4 rounded-none tracking-wider uppercase hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer text-center"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left and Right Circular Navigation Buttons for Mobile */}
          <div className="flex md:hidden justify-center items-center space-x-6 mt-4 pb-2">
            <button
              onClick={() => scrollNext('left')}
              className="w-14 h-14 rounded-full border border-brand-magenta/35 bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-lg hover:bg-black/80"
              aria-label="Previous Course"
            >
              <ChevronLeft className="h-6 w-6 text-brand-magenta" />
            </button>
            <button
              onClick={() => scrollNext('right')}
              className="w-14 h-14 rounded-full border border-brand-magenta/35 bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-lg hover:bg-black/80"
              aria-label="Next Course"
            >
              <ChevronRight className="h-6 w-6 text-brand-magenta" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: Learning Path */}
      <section id="ai-pathway" className="p-6 md:p-8 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Progression Roadmap
          </span>
          <h2 className="text-h2 text-white mt-3">
            Syllabus Execution Framework
          </h2>
          <p className="text-body text-gray-300 mt-2 max-w-3xl mx-auto">
            Accelerate your neural literacy through three progressive checkpoints designed to build robust workspace proficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "01",
              title: "Prompt Foundations",
              subtitle: "AI Literacy & Prompt Engineering",
              desc: "Master chain-of-thought, structural frameworks, few-shot prompts, and dynamic contextual models inside ChatGPT and Claude."
            },
            {
              step: "02",
              title: "Autonomous Automation",
              subtitle: "Zapier & AI Background Connectors",
              desc: "Construct seamless workflow triggers. Automatically route communications, clean records, and build background AI agents."
            },
            {
              step: "03",
              title: "Advanced Logic",
              subtitle: "Python Foundations & Machine Learning",
              desc: "Write algorithmic code, parse structures, and demystify supervised and unsupervised learning models from scratch."
            }
          ].map((item, idx) => (
            <GlassCard key={idx} className="p-6 border border-white/5 flex flex-col justify-between h-full">
              <div>
                <span className="font-mono text-4xl font-extrabold text-brand-cyan/20 block mb-2">{item.step}</span>
                <span className="text-xs text-brand-magenta font-mono uppercase tracking-wider block mb-1">{item.title}</span>
                <h4 className="text-card-title text-white mb-3">{item.subtitle}</h4>
                <p className="text-small text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>Phase 0{idx + 1}</span>
                <span className="text-brand-cyan">Active Pipeline</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 7: Why Choose Us? */}
      <section id="ai-why-choose" className="p-6 md:p-8 text-left">
        <SectionHeader
          badge="The BWENKE Standard"
          title="Why Choose BWENKE AI Academy?"
          subtitle="We deliver a standard of practice designed to make technology an organic, high-efficiency extension of your workspace."
          gradientType="gold"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "No Theoretical Dryness", desc: "We skip boring math-heavy slide decks. Every classroom session occurs inside our active computer laboratories where students build and verify models on live accounts." },
            { title: "Expert Cohort Guidance", desc: "Learn directly from practitioners like Dr. Makoba and Eng. Omondi who actively build AI system architectures, integrations, and automation loops." },
            { title: "Personal AI Capstone Portfolios", desc: "Build a robust verified collection of custom workflow automations, prompt books, generative assets, and functional Python files." },
            { title: "Direct Lab Practice Hours", desc: "Students enjoy open-lab hours at BWENKE to test prompting structures and automate projects under active tutor support." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4 pl-4 border-l-2 border-brand-cyan/20">
              <div className="p-2 bg-brand-cyan/15 rounded-lg text-brand-cyan border border-brand-cyan/10">
                <Star className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-card-title text-white">{item.title}</h4>
                <p className="text-small text-gray-300 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: Training Format */}
      <section id="ai-format" className="p-6 md:p-8 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Cohorts Schedulers
          </span>
          <h2 className="text-h2 text-white mt-3">
            Tailored Instruction Modes
          </h2>
          <p className="text-body text-gray-300 mt-2 max-w-3xl mx-auto">
            Pick the format that fits your schedule. Balance physical laboratory immersion with responsive digital streams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Physical Lab Sessions", subtitle: "Active Laboratory Cohorts", desc: "Interact directly with instructors inside our high-performance computational suites. Perfect for real-time debugging and workflow building." },
            { title: "Online Evening Cohorts", subtitle: "Live Stream Syncs", desc: "Access the same elite curriculum from your home or office. Participate in interactive screen-shares and code reviews." },
            { title: "Weekend AI Bootcamps", subtitle: "Saturdays & Sundays", desc: "An intensive accelerated blueprint. Spend the weekend mastering prompting systems, custom connectors, and Python essentials." }
          ].map((format, idx) => (
            <GlassCard key={idx} className="p-6 border border-white/5 flex flex-col justify-between">
              <div>
                <Calendar className="h-5 w-5 text-brand-cyan mb-3" />
                <h4 className="text-card-title text-white">{format.title}</h4>
                <span className="text-[10px] font-mono text-brand-magenta tracking-wider uppercase block mt-1 mb-3">{format.subtitle}</span>
                <p className="text-small text-gray-300 leading-relaxed">{format.desc}</p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-3 text-[10px] text-gray-500 font-mono flex justify-between items-center">
                <span>INTAKE CURRENTLY OPEN</span>
                <span className="text-brand-cyan">Select Cohort</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 9: Certificate */}
      <section id="ai-certificate" className="p-6 md:p-8 text-left max-w-4xl mx-auto">
        <GlassCard className="p-8 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="space-y-4 flex-1">
            <span className="inline-flex items-center space-x-1 text-[10px] text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
              <Award className="h-3 w-3 mr-1" />
              Professional Endorsements
            </span>
            <h3 className="text-h3 text-white">
              Earn Your Certified AI Specialist Credential
            </h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Upon successful development and review of your custom AI systems capstone portfolio, you will receive the <strong>BWENKE Certified Artificial Intelligence Specialist (CAIS)</strong> certificate, proving your capacity to command neural systems professionally.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li className="flex items-center"><CheckCircle className="h-3.5 w-3.5 text-[#11FF62] mr-2" /> Encrypted QR validation stamp</li>
              <li className="flex items-center"><CheckCircle className="h-3.5 w-3.5 text-[#11FF62] mr-2" /> Direct verification access for recruiters</li>
            </ul>
          </div>
          
          <div className="w-full md:w-64 h-48 bg-gradient-to-br from-brand-cyan/10 via-brand-magenta/5 to-brand-blue/10 border border-white/10 rounded-2xl flex flex-col justify-between p-4 font-mono relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="flex justify-between items-start">
              <span className="text-[8px] text-gray-500">BWENKE ACADEMY</span>
              <Award className="h-6 w-6 text-[#F4FF12] animate-pulse" />
            </div>
            
            <div className="space-y-1 my-2">
              <div className="text-[10px] font-bold text-white tracking-wide">CERTIFICATE OF MASTERY</div>
              <div className="text-[7px] text-brand-cyan uppercase">AI COGNITIVE PIPELINE</div>
            </div>
            
            <div className="flex justify-between items-end border-t border-white/10 pt-2 text-[6px] text-gray-500">
              <div>
                <div>SERIAL: DLA-AI-99381</div>
                <div>SECURE ID STAMPED</div>
              </div>
              <div className="text-right text-[#11FF62]">GRADE: DISTINCTION</div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* SECTION 10: Frequently Asked Questions (FAQ) */}
      <section id="ai-faq" className="p-6 md:p-8 text-left max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs text-brand-magenta font-mono uppercase tracking-widest bg-brand-magenta/10 border border-brand-magenta/20 px-3 py-1 rounded-full">
            Help Desk
          </span>
          <h2 className="text-h2 text-white mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-white/5 bg-white/2 rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="text-card-title text-white pr-4 flex items-center">
                  <HelpCircle className="h-4 w-4 text-brand-cyan mr-2 shrink-0" />
                  {faq.q}
                </span>
                {openFaqIndex === idx ? (
                  <ChevronUp className="h-4 w-4 text-brand-cyan shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500 shrink-0" />
                )}
              </button>
              
              <AnimatePresence initial={false}>
                {openFaqIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 pt-0 text-small text-gray-300 border-t border-white/5 leading-relaxed bg-[#050619]/30">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11: Final Call-to-Action */}
      <section id="ai-cta" className="max-w-5xl mx-auto py-12 text-center">
        <div className="relative p-8 sm:p-12 md:p-16 text-center shadow-3xl">
          <div className="absolute inset-0 bg-radial-gradient from-brand-violet/20 to-transparent blur-[80px]" />
          
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-brand-cyan mb-4">
            Unlock Advanced Cognitive Power
          </span>

          <h2 className="text-h2 text-white mb-4 max-w-2xl mx-auto">
            Become an AI-Augmented Specialist
          </h2>

          <p className="text-body text-gray-300 max-w-xl mx-auto mb-8">
            Our registrations are open for the upcoming 4-week program. Secure your laboratory seat and scale your productivity today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative px-8 py-3.5 rounded-xl text-btn transition-all hover:scale-[1.02] cursor-pointer bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 hover:shadow-lg hover:shadow-[#11FF62]/20 inline-flex items-center space-x-2 overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent uppercase tracking-wider">Register for AI Training</span>
              <ArrowRight className="h-4 w-4 text-[#F4FF12] group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/255658515833?text=Hello%20BWENKE%20I%20want%20to%20register%20for%20AI%20Training."
              target="_blank"
              rel="noreferrer"
              className="group px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#11FF62]/30 text-btn uppercase rounded-xl transition-all text-center flex items-center justify-center space-x-2 cursor-pointer w-full sm:w-auto"
            >
              <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">WhatsApp Inquiry</span>
              <ArrowRight className="h-4 w-4 text-[#11FF62] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
