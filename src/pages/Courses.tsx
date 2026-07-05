import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, Cpu, TrendingUp, Video, Clock, Award, BookOpen, 
  CheckCircle, ArrowRight, X, ChevronDown, ChevronUp, 
  ShieldCheck, HelpCircle, Calendar, MapPin, Users 
} from 'lucide-react';
import { Course, PageType } from '../types';
import { courses } from '../data/courses';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';
import CourseMobileCarousel from '../components/CourseMobileCarousel';
import CourseCard from '../components/CourseCard';

interface CoursesProps {
  setCurrentPage: (page: PageType) => void;
}

export default function Courses({ setCurrentPage }: CoursesProps) {
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeCourseId) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [activeCourseId]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="h-6 w-6 text-brand-cyan" />;
      case 'Cpu': return <Cpu className="h-6 w-6 text-brand-magenta" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6 text-brand-blue" />;
      case 'Video': return <Video className="h-6 w-6 text-brand-violet" />;
      default: return <Laptop className="h-6 w-6 text-brand-cyan" />;
    }
  };

  const activeCourse = courses.find(c => c.id === activeCourseId);

  // FAQ Data for Digital Academy
  const faqData = [
    {
      q: "What is the typical duration of these digital courses?",
      a: "Our courses typically run for 4 to 8 weeks, with 32 to 64 hours of practical laboratory and lecture sessions depending on the depth of the program."
    },
    {
      q: "Do I need to own a high-end laptop to enroll?",
      a: "A standard laptop is highly recommended for practicing outside of class, but our physical digital laboratory is fully equipped with computers which are open to students during designated hours."
    },
    {
      q: "Can I pay my course fees in installments?",
      a: "Yes, we support a flexible payment structure where course fees can be paid in up to two standard installments over the duration of the module."
    },
    {
      q: "Is the certificate globally recognizable?",
      a: "Absolutely. BWENKE certificates represent rigorous, project-verified practical mastery that local and international employers recognize and value."
    },
    {
      q: "What kind of support do I get after graduation?",
      a: "Graduates join our exclusive BWENKE Alumni group where they receive job listings, portfolio-review meetups, and continuous mentorship from our core instructors."
    }
  ];

  return (
    <div id="courses-view" className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* SECTION 1: Hero Section */}
      <section id="courses-hero" className="relative z-10 p-6 md:p-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-1 text-xs text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/30 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
              <Laptop className="h-3.5 w-3.5 mr-1" />
              Academic Digital Catalog
            </span>
            <h1 className="text-h1 text-white tracking-tight leading-tight">
              Master Practical Digital Skills. <span className="text-gradient-cyan">Elevate Your Career.</span>
            </h1>
            <p className="text-body text-gray-300 max-w-2xl">
              Acquire high-demand expertise in advanced computer applications, digital marketing, graphic design, content creation, and website architecture. Learn through hands-on practice in state-of-the-art software pipelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 text-btn tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-[#11FF62]/20 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">Enroll in a Cohort</span>
                <ArrowRight className="h-4 w-4 text-[#F4FF12]" />
              </button>
              <a
                href="#courses-catalog"
                className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-btn tracking-wider uppercase rounded-xl transition-all text-center flex items-center justify-center cursor-pointer"
              >
                Explore Courses
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <GlassCard className="p-8 border border-white/10 !bg-brand-dark/45 relative z-10 overflow-hidden">
              <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Award className="h-5 w-5 text-brand-cyan" />
                <span>BWENKE Core Matrix</span>
              </h3>
              <div className="space-y-4 text-xs text-gray-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-mono text-brand-cyan font-bold block mb-1">PRACTICAL INTENSITY</span>
                  <p className="leading-relaxed">
                    Zero dry theory. 100% of curriculum time is allocated to building projects, configuring files, and design iterations.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-mono text-brand-magenta font-bold block mb-1">EXPERT MENTORSHIP</span>
                  <p className="leading-relaxed">
                    Classes are fully directed by veteran workspace specialists who actively debug, guide, and review portfolios.
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
      <section id="courses-why" className="p-6 md:p-8 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-magenta font-mono uppercase tracking-widest bg-brand-magenta/10 border border-brand-magenta/20 px-3 py-1 rounded-full">
            Market Demands
          </span>
          <h2 className="text-h2 text-white mt-3">
            Why Master Digital & Computer Literacy?
          </h2>
          <p className="text-body text-gray-300 mt-2 max-w-3xl mx-auto">
            Modern corporate, creative, and administrative workspaces operate on sophisticated software. High-yield skills secure competitive opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 border border-white/5 hover:border-white/10 transition-all">
            <TrendingUp className="h-6 w-6 text-brand-cyan mb-4" />
            <h3 className="text-card-title text-white mb-2">High-Income Adaptability</h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Mastering SEO, web builders, vector layouts, and data analytics unlocks self-reliance, remote freelance opportunities, and premium office roles.
            </p>
          </GlassCard>
          <GlassCard className="p-6 border border-white/5 hover:border-white/10 transition-all">
            <Users className="h-6 w-6 text-brand-magenta mb-4" />
            <h3 className="text-card-title text-white mb-2">Workspace Automation</h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Transform standard administrative tasks. Use spreadsheets and automated doc layouts to complete tasks 10x faster with zero errors.
            </p>
          </GlassCard>
          <GlassCard className="p-6 border border-white/5 hover:border-white/10 transition-all">
            <Cpu className="h-6 w-6 text-brand-blue mb-4" />
            <h3 className="text-card-title text-white mb-2">Continuous Career Growth</h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Stay fully competitive as technologies evolve. Acquire modular tech training that aligns perfectly with East Africa's digitizing market.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* SECTION 3: Who Is This Course For? */}
      <section id="courses-who" className="p-6 md:p-8 text-left">
        <SectionHeader
          badge="Prerequisites & Targets"
          title="Designed for Ambitious Achievers"
          subtitle="Whether starting from scratch or aiming to refine current technical execution, our programs support standard development pathways."
          gradientType="gold"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Undergraduate Students", desc: "Gain robust professional qualifications alongside your academic studies to guarantee instant employment readiness." },
            { title: "Freelance Creatives", desc: "Acquire vector asset design, editing, and web creation pipelines to manage high-paying clients independently." },
            { title: "Office Administrators", desc: "Accelerate report drafting, formatting, data filing, and spreadsheet models to lead office coordinates." },
            { title: "Business Founders", desc: "Construct landing pages, design visual brand logos, and launch high-ROI advertising campaigns independently." }
          ].map((profile, idx) => (
            <GlassCard key={idx} className="p-6 flex flex-col justify-between h-full border border-white/5 hover:border-white/10 transition-all">
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase block mb-1">TARGET 0{idx + 1}</span>
                <h4 className="text-card-title text-white mb-2">{profile.title}</h4>
                <p className="text-small text-gray-300 leading-relaxed">{profile.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 4: Available Courses / Modules */}
      <section id="courses-catalog" className="p-6 md:p-8 text-left scroll-mt-24">
        <SectionHeader
          badge="Academic Catalog"
          title="Available Digital Courses"
          subtitle="Explore our industry-standard training programs. All modules are fully practical, project-centric, and directed by veteran instructors."
          gradientType="blue"
        />

        {/* Courses Flex Row Grid */}
        <div className="hidden md:flex flex-row flex-wrap justify-center gap-0 max-w-[1035px] mx-auto">
          <AnimatePresence mode="popLayout">
            {courses.map((course) => (
              <motion.div
                layout
                key={course.id}
                className="flex-shrink-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <CourseCard
                  course={course}
                  onClick={() => setActiveCourseId(course.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe-Enabled Right-to-Left Course Slider */}
        <div className="block md:hidden my-8">
          <CourseMobileCarousel
            courses={courses}
            onLearnMore={(course) => setActiveCourseId(course.id)}
            onEnroll={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            ctaText="Quick Enroll"
          />
        </div>
      </section>

      {/* SECTION 5: Learning Path */}
      <section id="courses-pathway" className="p-6 md:p-8 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Progression Roadmap
          </span>
          <h2 className="text-h2 text-white mt-3">
            Your Structured Path to Tech Excellence
          </h2>
          <p className="text-body text-gray-300 mt-2 max-w-3xl mx-auto">
            Accelerate your learning curve through three strategic checkpoints designed to build compound workspace capability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {[
            {
              step: "01",
              title: "Foundation Blueprint",
              subtitle: "Advanced Computer Applications",
              desc: "Master key file operations, professional spreadsheet formulations, data processing layouts, and secure cloud file collaborations."
            },
            {
              step: "02",
              title: "Creative & Web Build",
              subtitle: "Illustrator, Video & Web Creation",
              desc: "Acquire vector geometric layouts, mobile vertical cinematography, multi-track timeline editing, and no-code responsive web designs."
            },
            {
              step: "03",
              title: "Market Integration",
              subtitle: "SEO, Digital Marketing & AI",
              desc: "Deploy search optimization strategies, build paid social funnels, configure subscriber automations, and manage AI-powered prompt loops."
            }
          ].map((item, idx) => (
            <GlassCard key={idx} className="p-6 border border-white/5 relative flex flex-col justify-between h-full">
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

      {/* SECTION 6: Skills You Will Gain */}
      <section id="courses-skills" className="p-6 md:p-8 text-left">
        <SectionHeader
          badge="Practical Toolbox"
          title="Skills You Will Take Home"
          subtitle="Obtain high-yield practical competencies that allow you to operate at 10x capacity inside any creative or professional pipeline."
          gradientType="magenta"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Spreadsheet Modeling", desc: "Build automated, data-rich templates that clean records, compute statements, and parse dashboards." },
            { title: "Vector Graphic Assets", desc: "Utilize precise pen controls, color palettes, and typographic grid mechanics to design custom logos." },
            { title: "Search Engine Optimization", desc: "Index web pages at the peak of search results organically to drive customer conversion loops." },
            { title: "Dynamic Video Editing", desc: "Edit vertical video reels with clear subtitles, synchronized sound transitions, and color grading." }
          ].map((skill, idx) => (
            <GlassCard key={idx} className="p-6 border border-white/5">
              <CheckCircle className="h-5 w-5 text-[#11FF62] mb-3" />
              <h4 className="text-card-title text-white mb-1">{skill.title}</h4>
              <p className="text-small text-gray-300 leading-relaxed">{skill.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 7: Why Choose Us? */}
      <section id="courses-whychoose" className="p-6 md:p-8 text-left">
        <SectionHeader
          badge="The BWENKE Standard"
          title="Why Train With BWENKE?"
          subtitle="We discard passive, slow classroom practices in favor of interactive software labs and immediate output construction."
          gradientType="cyan"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "100% Practical Classrooms", desc: "No boring dictation or heavy note-taking. Every lesson is conducted inside our functional laboratory layouts where you build real-world files continuously." },
            { title: "Experienced Industry Instructors", desc: "Learn directly from practitioners like Makoba (TE) who actively build client sites, manage campaigns, and configure commercial automation tools." },
            { title: "Portfolio-First Delivery", desc: "Graduates complete the academy with a rich personal digital portfolio containing live websites, brand books, spreadsheet models, and campaign sheets." },
            { title: "Supportive Alumni Network", desc: "Access continuous mentorship, software installations, class repeats, and direct employment listings from our active collaborative groups." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4 pl-4 border-l-2 border-brand-cyan/20">
              <div className="p-2 bg-brand-cyan/15 rounded-lg text-brand-cyan border border-brand-cyan/10">
                <BookOpen className="h-4 w-4" />
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
      <section id="courses-format" className="p-6 md:p-8 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Flexible Cohorts
          </span>
          <h2 className="text-h2 text-white mt-3">
            Choose Your Ideal Study Blueprint
          </h2>
          <p className="text-body text-gray-300 mt-2 max-w-3xl mx-auto">
            Our schedules are engineered to fit students, working professionals, and business owners seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Physical Lab Cohorts", subtitle: "Main Campus Labs", desc: "Fully immersive hands-on training inside our modern computer workspace using high-speed network lines and guided tutor panels." },
            { title: "Weekend Class Bootcamps", subtitle: "Saturdays & Sundays", desc: "Designed for corporate workers. Intensive morning and afternoon deep dives focused on practical workflows with lunch-break networking." },
            { title: "Hybrid Flexible Modules", subtitle: "Anytime/Anywhere", desc: "Participate in live collaborative stream links while retaining full authorization to use our physical laboratory for project reviews." }
          ].map((format, idx) => (
            <GlassCard key={idx} className="p-6 border border-white/5 flex flex-col justify-between">
              <div>
                <Calendar className="h-5 w-5 text-brand-cyan mb-3" />
                <h4 className="text-card-title text-white">{format.title}</h4>
                <span className="text-[10px] font-mono text-brand-magenta tracking-wider uppercase block mt-1 mb-3">{format.subtitle}</span>
                <p className="text-small text-gray-300 leading-relaxed">{format.desc}</p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-3 text-[10px] text-gray-500 font-mono flex justify-between items-center">
                <span>IN-TAKE ACTIVE</span>
                <span className="text-brand-cyan">Register Now</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 9: Certificate */}
      <section id="courses-certificate" className="p-6 md:p-8 text-left max-w-4xl mx-auto">
        <GlassCard className="p-8 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="space-y-4 flex-1">
            <span className="inline-flex items-center space-x-1 text-[10px] text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
              <Award className="h-3 w-3 mr-1" />
              Verified Graduation Credentials
            </span>
            <h3 className="text-h3 text-white">
              Graduate with a Professional Creative Portfolio
            </h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Upon successful completion of all cohort lab projects and files, you will receive the <strong>BWENKE Certified Digital Specialist</strong> certificate, demonstrating physical command of advanced software, design suites, and digital pipelines.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li className="flex items-center"><CheckCircle className="h-3.5 w-3.5 text-[#11FF62] mr-2" /> QR-code cert verification seal</li>
              <li className="flex items-center"><CheckCircle className="h-3.5 w-3.5 text-[#11FF62] mr-2" /> Direct showcase to our hiring employers</li>
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
              <div className="text-[7px] text-brand-cyan uppercase">DIGITAL SPECIALIST PIPELINE</div>
            </div>
            
            <div className="flex justify-between items-end border-t border-white/10 pt-2 text-[6px] text-gray-500">
              <div>
                <div>SERIAL: DLA-88219-X</div>
                <div>VERIFIED ON BLOCK</div>
              </div>
              <div className="text-right text-[#11FF62]">GRADE: EXCELLENT</div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* SECTION 10: Frequently Asked Questions (FAQ) */}
      <section id="courses-faq" className="p-6 md:p-8 text-left max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs text-brand-magenta font-mono uppercase tracking-widest bg-brand-magenta/10 border border-brand-magenta/20 px-3 py-1 rounded-full">
            Help Center
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
      <section id="courses-cta" className="max-w-5xl mx-auto py-12 text-center">
        <div className="relative p-8 sm:p-12 md:p-16 text-center shadow-3xl">
          <div className="absolute inset-0 bg-radial-gradient from-brand-cyan/20 to-transparent blur-[80px]" />
          
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-brand-cyan mb-4">
            <ShieldCheck className="h-4 w-4 mr-1 text-brand-cyan" />
            Limited Laboratory Slots
          </span>

          <h2 className="text-h2 text-white mb-4 max-w-2xl mx-auto">
            Ready to Accelerate Your Career Success?
          </h2>

          <p className="text-body text-gray-300 max-w-xl mx-auto mb-8">
            Register for your preferred digital cohort today. Secure your physical laboratory seat and practice on premium software setups.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative px-8 py-3.5 rounded-xl text-btn transition-all hover:scale-[1.02] cursor-pointer bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 hover:shadow-lg hover:shadow-[#11FF62]/20 inline-flex items-center space-x-2 overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent uppercase tracking-wider">Enroll Now</span>
              <ArrowRight className="h-4 w-4 text-[#F4FF12] group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/255658515833?text=Hello%20BWENKE%20I%20want%20to%20register%20for%20a%20digital%20academy%20course."
              target="_blank"
              rel="noreferrer"
              className="group px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#11FF62]/30 text-btn uppercase rounded-xl transition-all text-center flex items-center justify-center space-x-2 cursor-pointer w-full sm:w-auto"
            >
              <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">Inquire on WhatsApp</span>
              <ArrowRight className="h-4 w-4 text-[#11FF62] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Syllabus Modal (Preserved exactly as requested) */}
      <AnimatePresence>
        {activeCourseId && activeCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCourseId(null)}
              className="absolute inset-0 bg-[#050619]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-[#0b0d30] border border-white/10 max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl relative z-10 p-6 md:p-8 shadow-2xl no-scrollbar text-left"
            >
              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={() => setActiveCourseId(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Course Title */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-white/5 border border-white/5 rounded-xl">
                  {getIcon(activeCourse.iconName)}
                </div>
                <span className="text-xs font-semibold text-brand-cyan font-mono uppercase tracking-widest">
                  Detailed Outline
                </span>
              </div>

              <h3 className="text-h2 text-white mb-4 pr-10">
                {activeCourse.title}
              </h3>

              <p className="text-body text-gray-300 mb-6">
                {activeCourse.longDescription}
              </p>

              {/* Grid Structure */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-6">
                {/* Left Side: Course Syllabus / Modules */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta" />
                    <span>Weekly Syllabus (Syllabi)</span>
                  </h4>
                  <ul className="space-y-3">
                    {activeCourse.modules.map((mod, index) => (
                      <li key={index} className="flex items-start space-x-2.5 text-xs text-gray-400 leading-relaxed">
                        <span className="text-[10px] font-mono font-bold text-brand-magenta bg-brand-magenta/10 px-2 py-0.5 rounded border border-brand-magenta/10 mt-0.5">
                          0{index + 1}
                        </span>
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Audience and Benefits */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      <span>Who should enroll?</span>
                    </h4>
                    <ul className="space-y-2">
                      {activeCourse.audience.map((aud, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-gray-400">
                          <CheckCircle className="h-3.5 w-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                          <span>{aud}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                      <span>Strategic Outcomes</span>
                    </h4>
                    <ul className="space-y-2">
                      {activeCourse.benefits.map((ben, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-gray-400">
                          <CheckCircle className="h-3.5 w-3.5 text-brand-violet flex-shrink-0 mt-0.5" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Enroll CTA bottom */}
              <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-mono">Cohort Intake</div>
                  <div className="text-sm font-semibold text-white">Enrollment Ongoing</div>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    id="modal-cancel-btn"
                    onClick={() => setActiveCourseId(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-btn transition-all border border-white/5 text-center cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    id="modal-enroll-btn"
                    onClick={() => {
                      setActiveCourseId(null);
                      setCurrentPage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 text-btn transition-all hover:shadow-lg hover:shadow-[#11FF62]/20 text-center cursor-pointer"
                  >
                    <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">Enroll Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
