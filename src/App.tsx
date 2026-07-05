import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PageType } from './types';

// Page imports
import Home from './pages/Home';
import Courses from './pages/Courses';
import AiTraining from './pages/AiTraining';
import Biology from './pages/Biology';
import Chemistry from './pages/Chemistry';
import Cbc from './pages/Cbc';
import Contact from './pages/Contact';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isVideoModalOpen]);

  // Read current page from URL hash, fallback to 'home'
  const getPageFromHash = (): PageType => {
    const hash = window.location.hash.replace('#', '') as PageType;
    const validPages: PageType[] = ['home', 'courses', 'ai-training', 'biology', 'chemistry', 'cbc', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getPageFromHash());

  // Handle back/forward buttons and initial load deep-linking
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      // Clean page scroll transition
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial hash if it doesn't exist
    if (!window.location.hash) {
      window.location.hash = 'home';
    } else {
      // Trigger scroll top for initial page render
      window.scrollTo({ top: 0 });
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Programmatic navigation utility
  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  // Render active page component dynamically
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={handlePageChange} />;
      case 'courses':
        return <Courses setCurrentPage={handlePageChange} />;
      case 'ai-training':
        return <AiTraining setCurrentPage={handlePageChange} />;
      case 'biology':
        return <Biology setCurrentPage={handlePageChange} />;
      case 'chemistry':
        return <Chemistry setCurrentPage={handlePageChange} />;
      case 'cbc':
        return <Cbc setCurrentPage={handlePageChange} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={handlePageChange} />;
    }
  };

  // Get dynamic background gradient class for each section
  const getBgClass = () => {
    switch (currentPage) {
      case 'home':
        return 'bg-fluid-home';
      case 'courses':
        return 'bg-fluid-courses';
      case 'ai-training':
        return 'bg-fluid-ai-training';
      case 'biology':
        return 'bg-fluid-biology';
      case 'chemistry':
        return 'bg-fluid-chemistry';
      case 'cbc':
        return 'bg-fluid-cbc';
      case 'contact':
        return 'bg-fluid-contact';
      default:
        return 'bg-fluid-cosmic';
    }
  };

  return (
    <div className={`min-h-screen ${getBgClass()} text-white selection:bg-brand-yellow selection:text-brand-dark antialiased relative flex flex-col justify-between transition-all duration-1000`}>
      <div>
        {/* Sticky Top Header Navigation */}
        <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />

        {/* Dynamic Page Layout Renderer */}
        <main className="relative z-10 pt-4">
          <div key={currentPage} className="animate-fade-in">
            {renderPage()}
          </div>
        </main>
      </div>

      {/* Comprehensive Footer Block */}
      <Footer setCurrentPage={handlePageChange} />

      {/* Embedded High-Fidelity Mock Video Player Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-md"
          id="video-player-modal"
        >
          <div className="bg-brand-dark border border-white/10 rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative">
            
            {/* Header / Actions bar */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-brand-dark-card text-white">
              <h4 className="font-display font-bold text-sm text-brand-yellow tracking-widest uppercase">
                BWENKE - Course Intro Walkthrough
              </h4>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-400 hover:text-white font-bold p-1 cursor-pointer"
                id="close-video-modal-btn"
                aria-label="Close video player"
              >
                ✕
              </button>
            </div>

            {/* Video Body Content */}
            <div className="aspect-video bg-black flex flex-col items-center justify-center relative p-8 text-center text-white">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              <div className="z-10 max-w-md space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center mx-auto text-xl font-bold animate-pulse">
                  ▶
                </div>
                <h3 className="font-display font-bold text-xl">BWENKE Walking Tour</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Learn more about our fully loaded hardware laboratories, Scratch code modules, and how our interactive science and Biochemistry training securing student success.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <a
                    href="https://wa.me/255658515833?text=Hello%20BWENKE%20I%20just%20watched%20the%20intro%20video%20and%20want%20to%20know%20more."
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold px-5 py-2.5 rounded-xl text-xs shadow-md cursor-pointer"
                    id="video-cta-whatsapp"
                  >
                    Ask us on WhatsApp
                  </a>
                  <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                    id="video-cta-close"
                  >
                    Back to Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
