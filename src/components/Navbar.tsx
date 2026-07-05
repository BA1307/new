import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  BookOpen, 
  Cpu, 
  Dna, 
  Beaker, 
  GraduationCap, 
  Mail 
} from 'lucide-react';
import { PageType } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

const navLinks: { name: string; page: PageType }[] = [
  { name: 'Home', page: 'home' },
  { name: 'Courses', page: 'courses' },
  { name: 'AI Training', page: 'ai-training' },
  { name: 'Biology', page: 'biology' },
  { name: 'Chemistry', page: 'chemistry' },
  { name: 'CBC', page: 'cbc' },
  { name: 'Contact', page: 'contact' },
];

const dropdownItems = [
  { 
    name: 'Courses', 
    page: 'courses' as PageType, 
    icon: BookOpen,
    description: 'Explore our flagship digital & computer training modules.'
  },
  { 
    name: 'AI Training', 
    page: 'ai-training' as PageType, 
    icon: Cpu,
    description: 'Learn artificial intelligence, Python foundations, and tools.'
  },
  { 
    name: 'Biology', 
    page: 'biology' as PageType, 
    icon: Dna,
    description: 'Explore interactive anatomy, laboratory records, and theory.'
  },
  { 
    name: 'Chemistry', 
    page: 'chemistry' as PageType, 
    icon: Beaker,
    description: 'Simulate organic chemistry and physical laboratory sessions.'
  },
  { 
    name: 'CBC Curriculum', 
    page: 'cbc' as PageType, 
    icon: GraduationCap,
    description: 'Aligned standard training modules for modern learners.'
  },
  { 
    name: 'Contact Us', 
    page: 'contact' as PageType, 
    icon: Mail,
    description: 'Connect with our team to enroll or request a customized program.'
  }
];

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-[#050619]/80 backdrop-blur-lg border-b border-white/10 py-2.5 shadow-xl shadow-black/30'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              id="navbar-logo"
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2.5 text-white hover:opacity-90 transition-all duration-300 cursor-pointer text-left"
            >
              <Logo
                className={`transition-all duration-300 ease-in-out text-white flex-shrink-0 ${
                  isScrolled
                    ? 'h-8 w-8 text-brand-cyan'
                    : 'h-[38px] w-[38px] md:h-[50px] md:w-[50px] text-white'
                }`}
              />
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-xl tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-brand-cyan">
                  BWEN<span className="text-brand-magenta">KE</span>
                </span>
                <span className="block text-[9px] text-brand-cyan/80 uppercase tracking-widest font-mono mt-0.5">
                  Digital Academy
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;

                if (link.page === 'home') {
                  return (
                    <div
                      key={link.page}
                      className="relative"
                      onMouseEnter={() => setIsHomeHovered(true)}
                      onMouseLeave={() => setIsHomeHovered(false)}
                    >
                      <button
                        id={`nav-link-${link.page}`}
                        onClick={() => handleNavClick(link.page)}
                        className={`relative px-4 py-2 text-nav transition-colors cursor-pointer rounded-full flex items-center space-x-1.5 ${
                          isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeNavIndicator"
                            className="absolute inset-0 bg-white/5 rounded-full border border-white/10 -z-10"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span>{link.name.toUpperCase()}</span>
                        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isHomeHovered ? 'rotate-180 text-brand-magenta' : 'text-gray-400'}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isHomeHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-[310px] md:w-[330px]"
                          >
                            <div className="bg-[#050619]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/90 text-left">
                              <div className="text-[10px] uppercase font-mono tracking-wider text-brand-cyan/80 mb-2.5 px-2 border-b border-white/5 pb-1.5 flex items-center justify-between">
                                <span>Explore Academy</span>
                                <span className="text-white/30">✦</span>
                              </div>
                              <div className="flex flex-col gap-1">
                                {dropdownItems.map((item) => (
                                  <button
                                    key={item.page}
                                    onClick={() => {
                                      handleNavClick(item.page);
                                      setIsHomeHovered(false);
                                    }}
                                    className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/5 transition-all duration-200 text-left group cursor-pointer w-full"
                                  >
                                    <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 group-hover:text-brand-magenta group-hover:border-brand-magenta/30 transition-colors flex-shrink-0">
                                      <item.icon className="h-3.5 w-3.5" />
                                    </div>
                                    <div>
                                      <div className="text-[11px] font-bold text-white group-hover:text-brand-magenta transition-colors tracking-wide uppercase">
                                        {item.name}
                                      </div>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    id={`nav-link-${link.page}`}
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`relative px-4 py-2 text-nav transition-colors cursor-pointer rounded-full ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/5 rounded-full border border-white/10 -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name.toUpperCase()}
                  </button>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                id="desktop-enroll-cta"
                onClick={() => handleNavClick('contact')}
                className="group relative px-6 py-2.5 rounded-full text-btn transition-all cursor-pointer bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 hover:shadow-lg hover:shadow-[#11FF62]/20 flex items-center space-x-1.5 overflow-hidden"
              >
                <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">
                  Enroll Now
                </span>
                <ArrowRight className="h-4 w-4 text-[#F4FF12] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-lg cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-40 bg-[#090b29]/95 backdrop-blur-xl border-b border-white/10 py-6 px-4 shadow-2xl lg:hidden flex flex-col space-y-4"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    id={`mobile-nav-link-${link.page}`}
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`px-4 py-3 text-left rounded-xl transition-all text-nav flex justify-between items-center cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-magenta/10 to-brand-violet/10 text-white border-l-4 border-brand-magenta'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name.toUpperCase()}</span>
                    <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isActive ? 'translate-x-1 text-brand-magenta' : 'text-gray-600'}`} />
                  </button>
                );
              })}
            </nav>
            <div className="pt-4 border-t border-white/10 flex flex-col">
              <button
                id="mobile-enroll-cta"
                onClick={() => handleNavClick('contact')}
                className="w-full bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 py-3 rounded-xl text-center text-btn transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:shadow-[#11FF62]/20"
              >
                <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">
                  Enroll Now
                </span>
                <ArrowRight className="h-4 w-4 text-[#F4FF12]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
