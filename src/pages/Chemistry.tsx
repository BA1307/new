import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Award, CheckCircle, GraduationCap, ArrowRight, Brain, 
  Clock, ShieldCheck, Flame, FlaskConical, Sparkles, ChevronDown, ChevronUp, 
  HelpCircle, Calendar, Users 
} from 'lucide-react';
import { PageType } from '../types';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

interface ChemistryProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function Chemistry({ setCurrentPage }: ChemistryProps) {
  // Active recall cards
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  // FAQ open index state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const curriculum = [
    {
      id: 'general-inorganic',
      title: 'General and Inorganic Chemistry',
      description: 'Master the fundamental building blocks of matter, quantum atomic models, chemical bond dynamics, and inorganic transitions.',
      outcomes: [
        'Atomic Structure',
        'Chemical Bonding',
        'Periodic Trends',
        'Transition Elements'
      ],
      topics: [
        { title: '1. The Atom', desc: 'Atomic structure, quantum numbers, electron configuration, and orbitals.' },
        { title: '2. Chemical Bonding', desc: 'Ionic, covalent, metallic bonding, intermolecular forces, and geometry.' },
        { title: '3. Periodic Classification', desc: 'Periodic trends, group behaviors, diagonal relationships, and s-block/p-block trends.' },
        { title: '4. Transition Elements', desc: 'Electronic configurations, variable oxidation states, ligand complex formation, color mechanics, and catalysis.' }
      ]
    },
    {
      id: 'organic',
      title: 'Organic Chemistry',
      description: 'Dive deep into organic synthesis, functional group transformations, reaction pathways, and polymerization mechanisms.',
      outcomes: [
        'POC Principles',
        'Aliphatic Reactions',
        'Arene Mechanism',
        'Polymer Types'
      ],
      topics: [
        { title: '1. Introduction to Organic Chemistry (POC)', desc: 'Purification, qualitative/quantitative analysis, empirical and molecular formulas.' },
        { title: '2. Aliphatic Hydrocarbons', desc: 'Preparation, properties, and addition/substitution mechanisms of alkanes, alkenes, and alkynes.' },
        { title: '3. Arenes', desc: 'Structure of benzene, resonance, and electrophilic aromatic substitution.' },
        { title: '4. Halogens Derivatives', desc: 'Nucleophilic substitution and elimination reaction pathways of haloalkanes.' },
        { title: '5. Phenol & Alcohol', desc: 'Structure, hydrogen bonding, acidity, esterification, and distinguishing chemical tests.' },
        { title: '6. Carbonyl Compounds', desc: 'Nucleophilic addition reactions of aldehydes and ketones, and qualitative identification.' },
        { title: '7. Carboxylic Acids', desc: 'Preparation, acidity factors, and derivatives such as esters, amides, and acyl chlorides.' },
        { title: '8. Amines', desc: 'Basicity, preparation, diazotization reactions, and azo dyes coupling.' },
        { title: '9. Polymers', desc: 'Classification, addition vs condensation polymerization, industrial plastics, and rubbers.' }
      ]
    },
    {
      id: 'physical',
      title: 'Physical Chemistry',
      description: 'Explore the thermodynamic, gas phase, kinetic, and colligative principles governing chemical behavior.',
      outcomes: [
        'Ideal & Real Gases',
        'Colligative Laws',
        'Vapor Pressures',
        'Solution Dynamics'
      ],
      topics: [
        { title: '1. Gases', desc: 'Gas laws, Ideal Gas Equation, kinetic molecular theory, and deviation of real gases.' },
        { title: '2. Colligative Properties', desc: 'Raoult’s Law, relative lowering of vapor pressure, boiling point elevation, freezing point depression, and osmotic pressure.' }
      ]
    }
  ];

  const activeRecallCards = [
    {
      q: 'What determines the suitability of an indicator in an acid-base titration?',
      a: 'The pH transition range of the indicator must fall completely within the rapid pH jump region of the titration curve at the equivalence point.'
    },
    {
      q: 'Why do transition metals exhibit variable oxidation states?',
      a: 'Because the energy difference between the 3d and 4s subshells is very small. Both 4s and 3d electrons can be lost or shared in chemical bonding.'
    },
    {
      q: 'State Hess’s Law of Constant Heat Summation.',
      a: 'The total enthalpy change in a chemical reaction is constant, regardless of whether the reaction occurs in a single step or through multiple sequential steps, provided initial and final states are identical.'
    },
    {
      q: 'Explain the mechanism of a nucleophilic substitution reaction (Sn1 vs Sn2).',
      a: 'Sn1 occurs in two steps via a stable carbocation intermediate (favored by tertiary haloalkanes). Sn2 occurs in a single concerted step through a pentacoordinate transition state (favored by primary haloalkanes).'
    }
  ];

  const faqData = [
    {
      q: "What does the Chemistry Practical Exam (Paper 3) test?",
      a: "NECTA Paper 3 tests acid-base volumetric analysis (titrations), oxidation-reduction calculations, qualitative chemical analysis of salts, and dynamic heat-of-neutralization calculations."
    },
    {
      q: "Is there any danger when working with strong acids and bases in the lab?",
      a: "Safety is our absolute highest priority. Our physical laboratories are outfitted with professional eye wash basins, ventilation setups, and premium safety gloves/goggles under active supervision."
    },
    {
      q: "How are qualitative salts identified in our laboratories?",
      a: "We systematically guide students through Group-Cation analytical separations, flame tests, gas identification assays, and specific confirmatory tests using fresh chemical reagents."
    },
    {
      q: "Can I repeat a practical if I get incorrect volumetric readings?",
      a: "Absolutely. BWENKE supports continuous laboratory repeats, allowing you to fine-tune your pipetting and buret stopcock calibration until you get precise results."
    }
  ];

  return (
    <div id="chemistry-view" className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* SECTION 1: Hero Section */}
      <section id="chemistry-hero" className="relative z-10 p-6 md:p-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-1 text-xs text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/30 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
              <FlaskConical className="h-3.5 w-3.5 mr-1" />
              Advanced Science Lab
            </span>
            <h1 className="text-h1 text-white tracking-tight leading-tight">
              Master Chemical Kinetics. <span className="text-gradient-cyan">Solve Multi-Step Syntheses.</span>
            </h1>
            <p className="text-body text-gray-300 max-w-2xl">
              Gain complete command of general atomics, thermodynamics, inorganic transitions, and analytical chemical salts. Accelerate your pipetting technique and titration speed inside our high-tech chemistry laboratory.
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
                href="#chemistry-syllabus"
                className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-btn tracking-wider uppercase rounded-xl transition-all text-center flex items-center justify-center cursor-pointer"
              >
                Explore Syllabus
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <GlassCard className="p-8 border border-white/10 !bg-brand-dark/45 relative z-10 overflow-hidden">
              <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Flame className="h-5 w-5 text-brand-yellow" />
                <span>The Chemistry Standard</span>
              </h3>
              <div className="space-y-4 text-xs text-gray-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-mono text-brand-cyan block mb-1">VOLUMETRIC REPEATABILITY</span>
                  <p className="leading-relaxed">
                    Paper 3 Acid-Base and Redox titrations require extreme accuracy. We train your hands to detect equivalence within 0.1mL deviation.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-mono text-brand-magenta block mb-1">QUALITATIVE SALTS INSIGHT</span>
                  <p className="leading-relaxed">
                    Identify transition metal complexes, cation groups, and gas effluents rapidly via chemical separation schemes.
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
      <section id="chemistry-why" className="p-6 md:p-8 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-magenta font-mono uppercase tracking-widest bg-brand-magenta/10 border border-brand-magenta/20 px-3 py-1 rounded-full">
            Scientific Value
          </span>
          <h2 className="text-h2 text-white mt-3">
            Why Master Advanced Chemistry?
          </h2>
          <p className="text-body text-gray-300 mt-2 max-w-3xl mx-auto">
            Chemistry bridges the physical sciences with biology. Command of reaction mechanisms is required for professional chemical engineering, pharmacological synthesis, and materials development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 border border-white/5 hover:border-white/10 transition-all">
            <BookOpen className="h-6 w-6 text-brand-cyan mb-4" />
            <h3 className="text-card-title text-white mb-2">Detailed Theory Blueprints</h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Understand Born-Haber energy loops, quantum orbitals, transition ligand mechanisms, and complex organic electrophilic reactions.
            </p>
          </GlassCard>
          <GlassCard className="p-6 border border-white/5 hover:border-white/10 transition-all">
            <Users className="h-6 w-6 text-brand-magenta mb-4" />
            <h3 className="text-card-title text-white mb-2">Industrial Career Alignment</h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Acquire early structural knowledge of chemical manufacturing, soap and plastics synthesis, and qualitative forensic testing layouts.
            </p>
          </GlassCard>
          <GlassCard className="p-6 border border-white/5 hover:border-white/10 transition-all">
            <Clock className="h-6 w-6 text-brand-blue mb-4" />
            <h3 className="text-card-title text-white mb-2">Accurate Analytical Readings</h3>
            <p className="text-small text-gray-300 leading-relaxed">
              Learn exact acid-base indicator endpoints, qualitative cation test steps, and redox calculations to guarantee maximum lab marks.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* SECTION 3: Who Is This Course For? */}
      <section id="chemistry-who" className="p-6 md:p-8 text-left">
        <SectionHeader
          badge="Prerequisites & Profiles"
          title="Engineered for Ambitious Minds"
          subtitle="Whether starting Form Five physical units or final-term Form Six analytical chemical salt review challenges."
          gradientType="gold"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Form Five Students", desc: "Formulate atomic energy layers, balance stoichiometry, and calculate reaction rate laws early." },
            { title: "Form Six Students", desc: "Master transition metal orbital trends, multi-step synthesis steps, and back-titration volumetric calculations." },
            { title: "Chemical/Pharmacy Hopefuls", desc: "Gain early command of organic reaction setups, synthesis distillation loops, and standard analytical schemes." },
            { title: "Science Instructors", desc: "Refine laboratory preparation techniques, salt qualitative tables, and titration indicator endpoints." }
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
      <section id="chemistry-syllabus" className="p-6 md:p-8 text-left scroll-mt-24">
        <SectionHeader
          badge="Academic Outline"
          title="Chemistry Syllabus Programs & Units"
          subtitle="All academic modules include physical classroom lectures and weekly hands-on laboratory setups."
          gradientType="blue"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {curriculum.map((levelBlock) => (
            <GlassCard key={levelBlock.id} className="p-6 md:p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 bg-brand-cyan/15 rounded-xl text-brand-cyan border border-brand-cyan/20">
                    <FlaskConical className="h-5 w-5" />
                  </div>
                  <h3 className="text-h3 text-white mb-1">
                    {levelBlock.title}
                  </h3>
                </div>
                <p className="text-small text-gray-300 mb-6">{levelBlock.description}</p>

                <div className="space-y-4">
                  {levelBlock.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start space-x-3 border-l-2 border-brand-cyan/20 pl-4 py-1">
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
                <div className="text-[10px] font-mono uppercase tracking-wide text-brand-cyan">
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
      <section id="chemistry-pathway" className="p-6 md:p-8 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Roadmap Stages
          </span>
          <h2 className="text-h2 text-white mt-3">
            Syllabus Accumulation Blueprint
          </h2>
          <p className="text-body text-gray-300 mt-2 max-w-3xl mx-auto">
            Progress systematically from atomic quantum parameters up to advanced multi-step organic reaction mechanisms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "01",
              title: "Physical Chemistry Foundations",
              subtitle: "Quantum Orbitals & Energetics",
              desc: "Master quantum numbers, electron orbits, rate equations, Hess Law energy loops, and chemical dynamic equilibriums."
            },
            {
              step: "02",
              title: "Inorganic & Volumetric",
              subtitle: "Transition Ligands & Titrations",
              desc: "Command transition element variable oxidation states, ligand complex colors, buret calibration, and back-titration equations."
            },
            {
              step: "03",
              title: "Organic Pathways & Salts",
              subtitle: "Substitution Steps & Qualitative Analysis",
              desc: "Navigate Sn1/Sn2 reaction pathways, aromatic electrophilic steps, qualitative salt separations, and buret tests."
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
      <section id="chemistry-whychoose" className="p-6 md:p-8 text-left">
        <SectionHeader
          badge="The BWENKE Standard"
          title="Why Train at Our Chemistry Labs?"
          subtitle="We bridge dry physical equations with active reagents, safe ventilation benches, and complete qualitative separation schematics."
          gradientType="cyan"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Individual Laboratory Desks", desc: "Every student has their own analytical buret stand, quantitative pipettes, burner blocks, and complete salt-testing reagent lines." },
            { title: "NECTA Rubric-Aligned Facilitators", desc: "Learn directly from high school specialists who double-check titration endpoints, redox formulas, and qualitative tables." },
            { title: "Weekly Chemical Sandbox Runs", desc: "Practice and complete qualitative anion identification, redox back-titration runs, and energetics calculations under live test parameters." },
            { title: "Open Laboratory Hours", desc: "Need more practice? Access the BWENKE laboratories for private pipette calibrations and salt analysis replays under physical tutor support." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4 pl-4 border-l-2 border-brand-cyan/20">
              <div className="p-2 bg-brand-cyan/15 rounded-lg text-brand-cyan border border-brand-cyan/10">
                <FlaskConical className="h-4 w-4" />
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
      <section id="chemistry-format" className="p-6 md:p-8 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Study Modes
          </span>
          <h2 className="text-h2 text-white mt-3">
            Choose Your Analytical Pathway
          </h2>
          <p className="text-body text-gray-300 mt-2 max-w-3xl mx-auto">
            Chemistry cohorts are fully optimized to complement students secondary routines and prepare them for national standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Physical Laboratory Cohorts", subtitle: "Main Campus Labs", desc: "Participate in weekly hands-on titration, calorimetry, and qualitative chemical separations inside our fully furnished laboratory." },
            { title: "Weekend Science Bootcamps", subtitle: "Saturdays & Sundays", desc: "Aggressive crash programs designed to master buret calibrations, back-titration maths, and qualitative salts separation rules." },
            { title: "Hybrid Lecture Reviews", subtitle: "Theory Stream & Chat", desc: "Access standard theoretical atomic and organic lectures online while maintaining complete authorization to practice labs in-person." }
          ].map((format, idx) => (
            <GlassCard key={idx} className="p-6 border border-white/5 flex flex-col justify-between">
              <div>
                <Calendar className="h-5 w-5 text-brand-cyan mb-3" />
                <h4 className="text-card-title text-white">{format.title}</h4>
                <span className="text-[10px] font-mono text-brand-magenta tracking-wider uppercase block mt-1 mb-3">{format.subtitle}</span>
                <p className="text-small text-gray-300 leading-relaxed">{format.desc}</p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-3 text-[10px] text-gray-500 font-mono flex justify-between items-center">
                <span>INTAKE OPEN</span>
                <span className="text-brand-cyan">Register Now</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 9: Certificate */}
      <section id="chemistry-certificate" className="p-6 md:p-8 text-left max-w-4xl mx-auto">
        <GlassCard className="p-8 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
          <div className="space-y-4 flex-1">
            <span className="inline-flex items-center space-x-1 text-[10px] text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
              <Award className="h-3 w-3 mr-1" />
              Academic Credentials
            </span>
            <h3 className="text-h2 text-white">
              Graduate with Confirmed Volumetric Competency
            </h3>
            <p className="text-small text-gray-300">
              Upon successful completion of all physical titration challenges, organic reaction pathway tests, and qualitative salt assays, you will receive the <strong>BWENKE Chemistry Laboratory Specialist</strong> certificate.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li className="flex items-center"><CheckCircle className="h-3.5 w-3.5 text-[#11FF62] mr-2" /> QR-code verifiable serial stamp</li>
              <li className="flex items-center"><CheckCircle className="h-3.5 w-3.5 text-[#11FF62] mr-2" /> Direct verification access for academic reviewers</li>
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
              <div className="text-[7px] text-brand-cyan uppercase">ADVANCED CHEMISTRY LABS</div>
            </div>
            
            <div className="flex justify-between items-end border-t border-white/10 pt-2 text-[6px] text-gray-500">
              <div>
                <div>SERIAL: DLA-CHM-8893</div>
                <div>SECURE QUANTITATIVE ID</div>
              </div>
              <div className="text-right text-[#11FF62]">GRADE: EXCELLENT</div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* SECTION 10: Frequently Asked Questions (FAQ) */}
      <section id="chemistry-faq" className="p-6 md:p-8 text-left max-w-3xl mx-auto space-y-12">
        <div>
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
              Physical & Organic Active Recall Practice
            </h3>
            <p className="text-small text-gray-300 mt-1">
              Active recall is highly effective for remembering chemical kinetics, transition metal structures, and reaction rules.
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
                    
                    <p className="text-small text-gray-300 max-w-lg overflow-y-auto">
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
                className="px-4 py-2 bg-white/5 border border-white/10 hover:border-[#11FF62]/30 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
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
                className="px-4 py-2 bg-white/5 border border-white/10 hover:border-[#11FF62]/30 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
              >
                <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">Next Card</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Final Call-to-Action */}
      <section id="chemistry-cta" className="max-w-5xl mx-auto py-12 text-center">
        <div className="relative p-8 sm:p-12 md:p-16 text-center shadow-3xl">
          <div className="absolute inset-0 bg-radial-gradient from-brand-cyan/20 to-transparent blur-[80px]" />
          
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-brand-cyan mb-4">
            Enrollment is active
          </span>

          <h2 className="text-h2 text-white mb-4 max-w-2xl mx-auto">
            Ready to Secure an Excellent Grade in Chemistry?
          </h2>

          <p className="text-body text-gray-300 max-w-xl mx-auto mb-8">
            Join BWENKE and work directly in our physical laboratories. Access chemical pathways, titrations, salt analysis schemes, and group-cation separation practical runs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative px-8 py-3.5 rounded-xl transition-all hover:scale-[1.02] cursor-pointer bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 hover:shadow-lg hover:shadow-[#11FF62]/20 inline-flex items-center space-x-2 overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent uppercase tracking-wider text-btn">Enroll Now</span>
              <ArrowRight className="h-4 w-4 text-[#F4FF12] group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/255658515833?text=Hello%20BWENKE%20I%20want%20to%20register%20for%20Advanced%20Chemistry%20classes."
              target="_blank"
              rel="noreferrer"
              className="group px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#11FF62]/30 text-btn tracking-wider uppercase rounded-xl transition-all text-center flex items-center justify-center space-x-2 cursor-pointer w-full sm:w-auto"
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
