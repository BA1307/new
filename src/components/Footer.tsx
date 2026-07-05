import { PageType } from '../types';
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handlePageTransition = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-black/80 backdrop-blur-md border-t border-white/5 relative z-10 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5 text-white">
              <Logo className="h-6 w-6 sm:h-8 sm:w-8 text-white flex-shrink-0" />
              <span className="font-display font-bold text-lg tracking-tight leading-none">
                BWEN<span className="text-[#11FF62]">KE</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              A premium digital education and training academy empowering students with the skills required to lead, automate, and succeed in a hyper-technological economy.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-magenta/20 hover:text-white flex items-center justify-center transition-all border border-white/5"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-blue/20 hover:text-white flex items-center justify-center transition-all border border-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-violet/20 hover:text-white flex items-center justify-center transition-all border border-white/5"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-cyan/20 hover:text-white flex items-center justify-center transition-all border border-white/5"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Academy Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handlePageTransition('home')}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  Home Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageTransition('courses')}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  Featured Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageTransition('ai-training')}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  AI Training Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageTransition('biology')}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  Biology Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageTransition('chemistry')}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  Chemistry Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageTransition('cbc')}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  CBC Curriculum
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Programs */}
          <div>
            <h3 className="font-display text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Core Skills Programs
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handlePageTransition('courses')}
                  className="hover:text-white transition-colors text-left cursor-pointer block"
                >
                  Advanced Computer Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageTransition('ai-training')}
                  className="hover:text-white transition-colors text-left cursor-pointer block text-brand-cyan font-medium"
                >
                  Artificial Intelligence Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageTransition('courses')}
                  className="hover:text-white transition-colors text-left cursor-pointer block"
                >
                  Strategic Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageTransition('courses')}
                  className="hover:text-white transition-colors text-left cursor-pointer block"
                >
                  Content Creation & Socials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageTransition('biology')}
                  className="hover:text-white transition-colors text-left cursor-pointer block text-brand-magenta font-medium"
                >
                  Biology Lab & Practicals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageTransition('chemistry')}
                  className="hover:text-white transition-colors text-left cursor-pointer block text-brand-cyan font-medium"
                >
                  Chemistry Synthesis & Analysis
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="font-display text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Information
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-cyan mt-1 flex-shrink-0" />
                <span className="leading-tight">
                  BWENKE Facility, Dar es Salaam, Tanzania
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-cyan flex-shrink-0" />
                <span>+255 745 288 882</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-cyan flex-shrink-0" />
                <span>info@bwenke.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                <span>
                  By appointment only<br />
                  <span className="text-xs text-gray-500">Mon - Sat: 9:00 AM - 6:00 PM</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BWENKE Academy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button
              onClick={() => handlePageTransition('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handlePageTransition('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
