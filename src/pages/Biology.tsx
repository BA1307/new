import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Award, CheckCircle, GraduationCap, ArrowRight, Brain, 
  Clock, ShieldCheck, ZoomIn, Eye, Sparkles, ChevronDown, ChevronUp, 
  HelpCircle, Calendar, Users 
} from 'lucide-react';
import { PageType } from '../types';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

interface BiologyProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function Biology({ setCurrentPage }: BiologyProps) {
  // Specimen selection for practical simulator
  const [selectedSpecimen, setSelectedSpecimen] = useState<'amoeba' | 'dicot' | 'nephron'>('amoeba');
  
  // Magnification calculator state
  const [eyepiece, setEyepiece] = useState<number>(10);
  const [objective, setObjective] = useState<number>(40);

  // Active recall card index
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  // FAQ open index state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const curriculum = [
    {
      id: 'form-five',
      title: 'Form Five Biology Syllabus',
      description: 'Advanced foundation of biochemical and cytological structures.',
      outcomes: [
        'Understand organelle ultrastructures',
        'Learn biological classification rules',
        'Master organic biomolecules pathways',
        'Build foundations for ecological tracking'
      ],
      topics: [
        { title: 'Cytology & Cell Biology', desc: 'Detailed exploration of organelle ultrastructure, membrane dynamics, and fluid mosaic representations.' },
        { title: 'Principles of Classification', desc: 'Taxonomy of key kingdoms (Monera, Protoctista, Fungi, Plantae, Animalia) with exact taxonomic keys.' },
        { title: 'Biochemistry of Biomolecules', desc: 'Structural formulas of carbohydrates, proteins, lipids, peptide bonding mechanisms, and enzyme kinetics.' },
        { title: 'Ecology & Ecosystems', desc: 'Energy flow kinetics, biogeochemical cycling, population ecology, and conservation biochemistry.' }
      ]
    },
    {
      id: 'form-six',
      title: 'Form Six Biology Syllabus',
      description: 'Advanced plant and human physiology, genetics, and evolution pipelines.',
      outcomes: [
        'Command human gaseous exchange loops',
        'Solve complex Mendelian genetics problems',
        'Understand embryological pathways',
        'Master evolutionary biochemical evidence'
      ],
      topics: [
        { title: 'Human & Plant Physiology', desc: 'Detailed gas exchange, double circulation pathways, autonomic coordination, and kidney counter-current multipliers.' },
        { title: 'Genetics & Molecular Biology', desc: 'Mendelian inheritance, non-Mendelian linkages, protein synthesis transcripts, and recombinant DNA technology.' },
        { title: 'Reproduction & Development', desc: 'Gametogenesis, hormonal control loops in plants and animals, and early embryonic differentiation.' },
        { title: 'Evolutionary Biology', desc: 'Lamarckian vs Darwinian mechanisms, neo-Darwinism, speciation, and biochemical evidence of evolution.' }
      ]
    }
  ];

  const biologicalSpecimens = {
    amoeba: {
      name: 'Amoeba proteus (Protoctista)',
      keyFeatures: [
        'Unicellular, asymmetrical body layout showing dynamic pseudopodia.',
        'Presence of a clear contractile vacuole for water balance (osmoregulation).',
        'Distinct dark nucleus and granulated endoplasm/clear ectoplasm boundary.'
      ],
      drawingTip: 'Draw with light, irregular stippled lines. Never make pseudopodia look perfectly spherical or symmetrical.',
      labeling: ['Pseudopodium', 'Contractile Vacuole', 'Nucleus', 'Food Vacuole', 'Ectoplasm']
    },
    dicot: {
      name: 'Dicotyledonous Stem (T.S.)',
      keyFeatures: [
        'Vascular bundles arranged in a distinct concentric ring pattern.',
        'Presence of cambium layer separating xylem and phloem vessels.',
        'Well-developed central pith and narrow cortical layer.'
      ],
      drawingTip: 'Ensure vascular bundle wedges align symmetrically along the perimeter. Label xylem elements inside and phloem outside.',
      labeling: ['Epidermis', 'Cortex', 'Phloem', 'Cambium', 'Xylem', 'Pith']
    },
    nephron: {
      name: 'Mammalian Nephron Structure',
      keyFeatures: [
        'Bowman’s capsule enclosing the dense capillary network (glomerulus).',
        'Proximal convoluted tubule (PCT) with highly folded brush border membranes.',
        'Descending and ascending loops of Henle running deep into the medulla.'
      ],
      drawingTip: 'Show capillary walls thin and simple, while convoluted tubules must have distinct cellular lining indicators.',
      labeling: ['Glomerulus', 'Bowman’s Capsule', 'PCT', 'Loop of Henle', 'DCT', 'Collecting Duct']
    }
  };

  const activeRecallCards = [
    {
      q: 'What is the role of the counter-current multiplier system in the Loop of Henle?',
      a: 'It establishes a steep hypertonic osmotic gradient in the medullary interstitium, allowing the collecting duct to actively reabsorb water via aquaporins under ADH control.'
    },
    {
      q: 'How does carbon dioxide transport occur in Mammalian blood?',
      a: 'Primarily as bicarbonate ions (70%) generated via carbonic anhydrase in erythrocytes, bound to hemoglobin as carbaminohemoglobin (20%), and dissolved in plasma (10%).'
    },
    {
      q: 'Explain the difference between sympatric and allopatric speciation.',
      a: 'Allopatric speciation is triggered by geographic isolation (physical barriers), while sympatric speciation occurs within the same geographic area due to genetic, behavioral, or ecological barriers.'
    },
    {
      q: 'What are the three main steps of translation in protein synthesis?',
      a: '1. Initiation (ribosomal binding to mRNA at AUG codon), 2. Elongation (peptide bond linkage between tRNAs at A and P sites), and 3. Termination (release factors bind stop codons).'
    }
  ];

  const faqData = [
    {
      q: "What is the format of the NECTA Advanced Biology Practical (Paper 3)?",
      a: "Paper 3 is a 3-hour practical exam testing specimen drawings, classification, dissection modeling, food tests, and physiological experiments. Our physical labs replicate these exact testing setups."
    },
    {
      q: "Do I need to carry my own microscope to the laboratory classes?",
      a: "No. Our high-tech scientific lab is fully supplied with high-precision light microscopes, calibration slides, and active chemical reagent lines for every individual student."
    },
    {
      q: "How long is the Advanced Biology prep course?",
      a: "The prep series runs in modular 8-week cohorts, covering entire syllabus sections coupled with weekly practical mock laboratories."
    },
    {
      q: "Is there support for essay writing and structured scientific phrasing?",
      a: "Yes. Advanced Biology requires clear, structured explanations of physiological and genetic pathways. We provide pre-tested rubric blueprint outlines to help secure maximum grade metrics."
    }
  ];

  return (
    <div id="biology-view" className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* SECTION 1: Hero Section */}
      <section id="biology-hero" className="relative z-10 p-6 md:p-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-1 text-xs text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/30 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
              <GraduationCap className="h-3.5 w-3.5 mr-1" />
              Advanced Science Lab
            </span>
            <h1 className="text-h1 text-white tracking-tight leading-tight">
              Master Biological Sciences. <span className="text-gradient-lime">Excel in Your NECTA Exams.</span>
            </h1>
            <p className="text-body text-gray-300 max-w-2xl">
              Gain complete command of complex cell biology, organic biochemistry, human & plant physiological loops, and microscope drawing standards. Turn theoretical concepts into verified high-yield examination capability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => {
                  if (setCurrentPage) setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 text-btn tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-[#11FF62]/20 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">Enroll Now</span>
                <ArrowRight className="h-4 w-4 text-[#F4FF12]" />
              </button>
              <a
                href="#biology-syllabus"
                className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-btn tracking-wider uppercase rounded-xl transition-all text-center flex items-center justify-center cursor-pointer"
              >
                Explore Syllabus
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <GlassCard className="p-8 border border-white/10 !bg-brand-dark/45 relative z-10 overflow-hidden">
              <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Brain className="h-5 w-5 text-brand-cyan" />
                <span>The Biological Paradigm</span>
              </h3>
              <div className="space-y-4 text-xs text-gray-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-mono text-brand-cyan font-bold block mb-1">PRACTICAL PORTFOLIO IMPACT</span>
                  <p className="leading-relaxed">
                    Paper 3 (Practical) accounts for a massive portion of the final grade metrics. Mastery of micro-analysis holds the key to top grades.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-mono text-brand-magenta font-bold block mb-1">COGNITIVE ACTIVE RECALL</span>
                  <p className="leading-relaxed">
                    By training anatomical structures under active recall cycles, students double their factual retention over standard textbooks.
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
      <section id="biology-why" className="p-6 md:p-8 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-magenta font-mono uppercase tracking-widest bg-brand-magenta/10 border border-brand-magenta/20 px-3 py-1 rounded-full">
            Industry & Grade Relevance
          </span>
          <h2 className="text-h2 text-white mt-3">
            Why Master Advanced Biological Sciences?
          </h2>
          <p className="text-body text-gray-300 mt-2 max-w-3xl mx-auto">
            Advanced high school biological science forms the critical entry channel for professional medicine, biochemistry, agricultural technology, and molecular research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 border border-white/5 hover:border-white/10 transition-all">
            <BookOpen className="h-6 w-6 text-brand-cyan mb-4" />
            <h3 className="text-card-title text-white mb-2">NECTA Syllabus Compliance</h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Every anatomical label, metabolic equation, and ecological pathway is double-checked against the national examination rubrics.
            </p>
          </GlassCard>
          <GlassCard className="p-6 border border-white/5 hover:border-white/10 transition-all">
            <Users className="h-6 w-6 text-brand-magenta mb-4" />
            <h3 className="text-card-title text-white mb-2">Medical School Foundations</h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Acquire early mastery of kidney filtration, double blood circulation, and molecular replication schemas, setting you years ahead.
            </p>
          </GlassCard>
          <GlassCard className="p-6 border border-white/5 hover:border-white/10 transition-all">
            <Clock className="h-6 w-6 text-brand-blue mb-4" />
            <h3 className="text-card-title text-white mb-2">Practical Speed Calibration</h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Calibrate light path illumination, identify tissues under high-power fields, and output highly precise specimen drawings under test conditions.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* SECTION 3: Who Is This Course For? */}
      <section id="biology-who" className="p-6 md:p-8 text-left">
        <SectionHeader
          badge="Prerequisites & Targets"
          title="Designed for High School Achievers"
          subtitle="Whether preparing for your national High School Certificate exams or building base foundations for biological research fields."
          gradientType="gold"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Form Five Students", desc: "Build solid early cell structure and taxonomical taxonomy keys during your first academic advanced term." },
            { title: "Form Six Students", desc: "Accelerate your review of plant genetics, cellular embryology, evolution lines, and intense past mock laboratories." },
            { title: "Pre-Medical Hopefuls", desc: "Learn advanced physiological and molecular pathways to comfortably clear university entrance requirements." },
            { title: "High School Teachers", desc: "Refine practical microscope drawing layouts and stippling techniques according to modern standard grading rubrics." }
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
      <section id="biology-syllabus" className="p-6 md:p-8 text-left scroll-mt-24">
        <SectionHeader
          badge="Curriculum Outline"
          title="Syllabus Modules & High-Yield Units"
          subtitle="Explore the comprehensive level-by-level Advanced Biology modules. All units incorporate standard theoretical reviews and physical laboratories."
          gradientType="blue"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {curriculum.map((levelBlock) => (
            <GlassCard key={levelBlock.id} className="p-6 md:p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 bg-brand-magenta/15 rounded-xl text-brand-magenta border border-brand-magenta/20">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="text-h3 text-white mb-1">
                    {levelBlock.title}
                  </h3>
                </div>
                <p className="text-small text-gray-300 mb-6">{levelBlock.description}</p>

                <div className="space-y-4">
                  {levelBlock.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start space-x-3 border-l-2 border-brand-magenta/20 pl-4 py-1">
                      <div>
                        <h4 className="text-card-title text-white">
                          {topic.title}
                        </h4>
                        <p className="text-small text-gray-300 mt-1 leading-relaxed">
                          {topic.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
                <div className="text-[10px] font-mono uppercase tracking-wide text-brand-magenta">
                  Key Outcomes:
                </div>
                <div className="flex flex-wrap gap-2">
                  {levelBlock.outcomes.map((out, i) => (
                    <span key={i} className="text-[9px] bg-white/5 border border-white/5 text-gray-300 px-2 py-0.5 rounded-full font-mono">
                      {out}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 5: Learning Path */}
      <section id="biology-pathway" className="p-6 md:p-8 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Roadmap Sequence
          </span>
          <h2 className="text-h2 text-white mt-3">
            Syllabus Accumulation Roadmap
          </h2>
          <p className="text-body text-gray-300 mt-2 max-w-3xl mx-auto">
            Accelerate your understanding from initial taxonomic classifications up to advanced molecular replication kinetics and live exams prep.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "01",
              title: "Cellular & Taxonomic Blueprints",
              subtitle: "Cytology, Biochemistry, Taxonomy",
              desc: "Master key cellular organelle structures, fluid mosaic membranes, chemical lipid bonding structures, and taxonomic classification keys."
            },
            {
              step: "02",
              title: "Physiological Cycles",
              subtitle: "Gas Exchange, Circulation, Excretion",
              desc: "Master double cardiovascular circuits, neurological autonomic reflex routes, plant transpiration loops, and kidney medullary multipliers."
            },
            {
              step: "03",
              title: "Molecular Genetics & Evolution",
              subtitle: "Recombinant DNA, Lamarck vs Darwin",
              desc: "Solve advanced Mendelian crossing structures, protein synthesis pathways, embryonic differentiation stages, and NECTA Paper 3 setups."
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

      {/* SECTION 6: Skills You Will Gain */}
      <section id="biology-skills" className="p-6 md:p-8 text-left">
        <SectionHeader
          badge="Practical Laboratory Skills"
          title="Interactive Microscope & Specimen Laboratory"
          subtitle="Explore our interactive scientific drawing tool. Learn the critical rules of high-stakes biological drawing (Paper 3) including magnification calibration."
          gradientType="magenta"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-6">
          {/* Controls & Features */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block">
                Select Study Specimen:
              </span>
              <div className="flex flex-col gap-2">
                {(Object.keys(biologicalSpecimens) as Array<keyof typeof biologicalSpecimens>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedSpecimen(key)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      selectedSpecimen === key
                        ? 'border-brand-cyan bg-brand-cyan/10 text-white shadow-lg'
                        : 'border-white/5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Eye className={`h-5 w-5 ${selectedSpecimen === key ? 'text-brand-cyan' : 'text-gray-500'}`} />
                      <span className="text-card-title text-white">
                        {biologicalSpecimens[key].name}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 opacity-60" />
                  </button>
                ))}
              </div>
            </div>

            {/* Magnification Tool */}
            <GlassCard className="p-5 border border-white/5 bg-white/2">
              <div className="flex items-center space-x-2 text-brand-cyan mb-4">
                <ZoomIn className="h-5 w-5" />
                <h4 className="text-card-title text-white">Linear Magnification Tool</h4>
              </div>
              <p className="text-small text-gray-300 leading-relaxed mb-4">
                Calculate drawing magnification correctly: <code className="text-brand-yellow font-mono text-[10px]">Mag = Drawing Size / Actual Size</code>.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-gray-500 font-mono uppercase mb-1">Eyepiece Lens</label>
                  <select
                    value={eyepiece}
                    onChange={(e) => setEyepiece(Number(e.target.value))}
                    className="w-full bg-[#0d0e2c] border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none"
                  >
                    <option value={10}>10x</option>
                    <option value={15}>15x</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-gray-500 font-mono uppercase mb-1">Objective Lens</label>
                  <select
                    value={objective}
                    onChange={(e) => setObjective(Number(e.target.value))}
                    className="w-full bg-[#0d0e2c] border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none"
                  >
                    <option value={10}>10x (Low)</option>
                    <option value={40}>40x (High)</option>
                    <option value={100}>100x (Oil)</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 p-3 bg-brand-dark rounded-lg flex justify-between items-center border border-white/5">
                <span className="text-xs text-gray-400 font-medium">Total Microscopic Magnification:</span>
                <span className="text-sm font-mono font-bold text-brand-yellow">
                  {eyepiece * objective}x
                </span>
              </div>
            </GlassCard>
          </div>

          {/* Rendering Box */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between border border-white/10 relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-brand-cyan/20 text-brand-cyan text-[10px] font-mono px-2 py-0.5 rounded border border-brand-cyan/30">
                Interactive Viewer
              </div>
              
              <div>
                <h3 className="text-h3 text-white mb-2">
                  {biologicalSpecimens[selectedSpecimen].name}
                </h3>
                
                <div className="my-6 border border-white/10 rounded-2xl p-4 bg-brand-dark-card/50 flex flex-col items-center justify-center min-h-[220px]">
                  {selectedSpecimen === 'amoeba' && (
                    <div className="relative w-44 h-44 bg-brand-cyan/5 border-2 border-dashed border-brand-cyan/20 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-36 h-28 bg-brand-cyan/10 rounded-full border border-brand-cyan/40 relative transform rotate-12">
                        {/* Nucleus */}
                        <div className="absolute top-10 left-12 w-6 h-6 bg-brand-magenta/40 border border-brand-magenta rounded-full"></div>
                        {/* Vacuole */}
                        <div className="absolute top-4 right-10 w-8 h-8 bg-brand-blue/30 border border-brand-blue/50 rounded-full flex items-center justify-center text-[8px] font-mono">CV</div>
                        {/* Pseudopodia lines */}
                        <div className="absolute -left-3 top-8 w-6 h-6 bg-brand-cyan/10 rounded-full border-t border-brand-cyan/30"></div>
                      </div>
                    </div>
                  )}

                  {selectedSpecimen === 'dicot' && (
                    <div className="relative w-44 h-44 bg-brand-magenta/5 border border-dashed border-brand-magenta/20 rounded-full flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border-2 border-brand-magenta/30 flex items-center justify-center relative">
                        {/* Concentric rings represent vascular bundles */}
                        <div className="w-28 h-28 rounded-full border-2 border-brand-cyan/30 border-dashed flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-brand-yellow/10 border border-brand-yellow/20"></div>
                        </div>
                        {/* Vascular wedges */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                          <div
                            key={idx}
                            style={{ transform: `rotate(${angle}deg) translateY(-60px)` }}
                            className="absolute w-3 h-5 bg-brand-magenta/30 border border-brand-magenta rounded-sm"
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedSpecimen === 'nephron' && (
                    <div className="relative w-44 h-44 bg-brand-yellow/5 border border-dashed border-brand-yellow/20 rounded-full flex items-center justify-center">
                      <div className="w-36 h-28 flex flex-col items-center justify-center space-y-2 relative">
                        {/* Bowman Capsule representation */}
                        <div className="w-16 h-16 rounded-full border-2 border-brand-yellow/50 flex items-center justify-center relative">
                          <div className="w-10 h-10 rounded-full bg-brand-magenta/30 border border-brand-magenta animate-pulse"></div>
                        </div>
                        {/* Loop representation */}
                        <div className="w-4 h-16 border-l-2 border-r-2 border-brand-cyan/40 rounded-b-full"></div>
                      </div>
                    </div>
                  )}

                  <span className="text-[10px] text-gray-500 font-mono mt-4">
                    Schematic representation of cell/tissue architecture
                  </span>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <h5 className="font-mono text-xs uppercase tracking-wider text-brand-yellow mb-1.5">
                      Identifying Criteria:
                    </h5>
                    <ul className="space-y-1">
                      {biologicalSpecimens[selectedSpecimen].keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-small text-gray-300">
                          <CheckCircle className="h-3.5 w-3.5 text-brand-cyan mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-brand-yellow/5 border border-brand-yellow/10 rounded-xl">
                    <h5 className="font-mono text-xs text-brand-yellow mb-1">
                      Official Drawing Guideline (NECTA Standards):
                    </h5>
                    <p className="text-small text-gray-300 leading-relaxed">
                      {biologicalSpecimens[selectedSpecimen].drawingTip}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mr-2 self-center">
                  Required Labels:
                </span>
                {biologicalSpecimens[selectedSpecimen].labeling.map((lab, i) => (
                  <span key={i} className="bg-white/5 border border-white/5 text-gray-400 text-[10px] font-mono px-2 py-0.5 rounded-md">
                    {lab}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SECTION 7: Why Choose Us? */}
      <section id="biology-whychoose" className="p-6 md:p-8 text-left">
        <SectionHeader
          badge="The BWENKE Standard"
          title="Why Prep With BWENKE?"
          subtitle="We drop dry theoretical slides and focus on physical microscopes, active biological reagents, and intensive essay structuring drills."
          gradientType="cyan"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Individual Physical Microscopes", desc: "No crowding around a single system. Every student has an allocated light microscope, high-end optical sets, and biological calibration tools." },
            { title: "Rubric-Perfect Essay Blueprints", desc: "Advanced national papers require precise botanical and zoological terminology. We provide pre-tested rubric maps to unlock top examination scores." },
            { title: "Weekly Examination Simulators", desc: "Practice and complete food tests, physiological loop charts, and detailed anatomical stipple drawings under timed examination standards." },
            { title: "Supportive Academic Circles", desc: "Access continuous mentorship channels, mock question blueprints, past paper files, and active group study reviews." }
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
      <section id="biology-format" className="p-6 md:p-8 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Study Formats
          </span>
          <h2 className="text-h2 text-white mt-3">
            Choose Your High-Yield Laboratory Mode
          </h2>
          <p className="text-body text-gray-300 mt-2 max-w-3xl mx-auto">
            Standard prep modules are fully optimized to support students alongside their regular secondary schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Physical Laboratory Cohorts", subtitle: "Main Campus Labs", desc: "Immersive weekly hands-on laboratory sessions. Prepare, slice, dye, and calibrate real biological tissue specimens under active facilitator reviews." },
            { title: "Weekend Science Bootcamps", subtitle: "Saturdays & Sundays", desc: "Aggressive crash courses focused on rapid exam blueprint techniques, core genetic diagrams, and high-stakes food tests." },
            { title: "Hybrid Lecture Reviews", subtitle: "Theory Stream & Chat", desc: "Participate in live interactive theoretical seminars while retaining full authorization to use our physical laboratories for private practical practice." }
          ].map((format, idx) => (
            <GlassCard key={idx} className="p-6 border border-white/5 flex flex-col justify-between">
              <div>
                <Calendar className="h-5 w-5 text-brand-cyan mb-3" />
                <h4 className="text-card-title text-white">{format.title}</h4>
                <span className="text-[10px] font-mono text-brand-magenta tracking-wider uppercase block mt-1 mb-3">{format.subtitle}</span>
                <p className="text-small text-gray-300 leading-relaxed">{format.desc}</p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-3 text-[10px] text-gray-500 font-mono flex justify-between items-center">
                <span>INTAKE ACTIVE</span>
                <span className="text-brand-cyan">Register Now</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 9: Certificate */}
      <section id="biology-certificate" className="p-6 md:p-8 text-left max-w-4xl mx-auto">
        <GlassCard className="p-8 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="space-y-4 flex-1">
            <span className="inline-flex items-center space-x-1 text-[10px] text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
              <Award className="h-3 w-3 mr-1" />
              Academic Certification
            </span>
            <h3 className="text-h3 text-white">
              Earn Your Science Laboratory Credentials
            </h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Upon successful mastery of drawing mechanics, specimen classifications, and mock exam runs, you will receive the <strong>BWENKE Certified Laboratory Specialist</strong> credential, demonstrating complete physical command of biology practical rubrics.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li className="flex items-center"><CheckCircle className="h-3.5 w-3.5 text-[#11FF62] mr-2" /> QR-code academic verification seal</li>
              <li className="flex items-center"><CheckCircle className="h-3.5 w-3.5 text-[#11FF62] mr-2" /> Verified endorsement from national science panel</li>
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
              <div className="text-[7px] text-brand-cyan uppercase">ADVANCED BIOLOGY LABS</div>
            </div>
            
            <div className="flex justify-between items-end border-t border-white/10 pt-2 text-[6px] text-gray-500">
              <div>
                <div>SERIAL: DLA-BIO-4892</div>
                <div>VERIFIED LABORATORY ON SYSTEM</div>
              </div>
              <div className="text-right text-[#11FF62]">GRADE: EXCELLENT</div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* SECTION 10: Frequently Asked Questions (FAQ) */}
      <section id="biology-faq" className="p-6 md:p-8 text-left max-w-3xl mx-auto space-y-12">
        <div>
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
                      <div className="p-4 pt-0 text-small text-gray-300 border-t border-white/5 bg-[#050619]/30">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* ACTIVE RECALL COMPONENT EMBEDDED UNDER COGNITIVE FAQ HELP */}
        <div className="border border-white/10 p-6 rounded-3xl bg-brand-dark/20 relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
              Academic Tool Sandbox
            </span>
            <h3 className="text-h3 text-white mt-3">
              Factual Active Recall Practice
            </h3>
            <p className="text-small text-gray-300 mt-1">
              Active recall is proven to boost physiological factual retention. Flip cards to self-verify.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Card Frame */}
            <div className="perspective-1000 min-h-[220px] w-full" onClick={() => setIsCardFlipped(!isCardFlipped)}>
              <div
                className={`relative w-full h-48 transition-all duration-500 transform-style-3d cursor-pointer ${
                  isCardFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front side */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <GlassCard className="h-full w-full p-8 flex flex-col justify-between items-center text-center border-2 border-brand-magenta/25 bg-[#0d0f2f]/90 hover:border-brand-magenta transition-all">
                    <div className="flex items-center space-x-2 text-brand-magenta mb-2">
                      <Brain className="h-5 w-5" />
                      <span className="text-[10px] uppercase font-mono tracking-widest">Question {activeCardIndex + 1} of {activeRecallCards.length}</span>
                    </div>
                    
                    <h3 className="text-card-title text-white max-w-md">
                      {activeRecallCards[activeCardIndex].q}
                    </h3>

                    <span className="text-[10px] text-gray-500 font-mono italic">
                      Click to flip & read answer
                    </span>
                  </GlassCard>
                </div>

                {/* Back side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <GlassCard className="h-full w-full p-6 sm:p-8 flex flex-col justify-between items-center text-center border-2 border-brand-cyan/20 bg-[#07132a]/90">
                    <div className="flex items-center space-x-2 text-brand-cyan mb-2">
                      <Sparkles className="h-5 w-5 animate-pulse" />
                      <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan">Verified Answer Blueprint</span>
                    </div>
                    
                    <p className="text-small text-gray-300 leading-relaxed max-w-lg overflow-y-auto">
                      {activeRecallCards[activeCardIndex].a}
                    </p>

                    <span className="text-[10px] text-brand-yellow font-mono italic">
                      Correct answers secure full marks
                    </span>
                  </GlassCard>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCardFlipped(false);
                  setTimeout(() => {
                    setActiveCardIndex((prev) => (prev - 1 + activeRecallCards.length) % activeRecallCards.length);
                  }, 150);
                }}
                className="px-4 py-2 bg-white/5 border border-white/10 hover:border-[#11FF62]/30 rounded-xl text-btn cursor-pointer transition-colors"
              >
                <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">Previous Card</span>
              </button>
              <span className="text-xs text-gray-500 font-mono">
                Card {activeCardIndex + 1} / {activeRecallCards.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCardFlipped(false);
                  setTimeout(() => {
                    setActiveCardIndex((prev) => (prev + 1) % activeRecallCards.length);
                  }, 150);
                }}
                className="px-4 py-2 bg-white/5 border border-white/10 hover:border-[#11FF62]/30 rounded-xl text-btn cursor-pointer transition-colors"
              >
                <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">Next Card</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Final Call-to-Action */}
      <section id="biology-cta" className="max-w-5xl mx-auto py-12 text-center">
        <div className="relative p-8 sm:p-12 md:p-16 text-center shadow-3xl">
          <div className="absolute inset-0 bg-radial-gradient from-brand-cyan/20 to-transparent blur-[80px]" />
          
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-brand-cyan mb-4">
            Enrollment is active
          </span>

          <h2 className="text-h2 text-white mb-4 max-w-2xl mx-auto">
            Ready to Secure an Excellent Grade in Biology?
          </h2>

          <p className="text-body text-gray-300 max-w-xl mx-auto mb-8">
            Join BWENKE and work directly in our physical laboratories. Access microscope setups, interactive study aids, past-paper essay keys, and dedicated biological drawing seminars.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative px-8 py-3.5 rounded-xl text-btn transition-all hover:scale-[1.02] cursor-pointer bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 hover:shadow-lg hover:shadow-[#11FF62]/20 inline-flex items-center space-x-2 overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent uppercase tracking-wider">Enroll Now</span>
              <ArrowRight className="h-4 w-4 text-[#F4FF12] group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/255658515833?text=Hello%20BWENKE%20I%20want%20to%20register%20for%20Advanced%20Biology%20classes."
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

    </div>
  );
}
