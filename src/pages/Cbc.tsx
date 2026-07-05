import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, Award, CheckCircle, GraduationCap, ArrowRight, Brain, 
  ShieldCheck, Target, Users, Zap, Compass, Star, FileText,
  Lightbulb, AlertTriangle, Check, Info, Sparkles, ClipboardList, HelpingHand
} from 'lucide-react';
import { PageType } from '../types';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

interface CbcProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function Cbc({ setCurrentPage }: CbcProps) {
  return (
    <div id="cbc-view" className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
      
      {/* SECTION 1: HERO SECTION */}
      <section id="cbc-hero" className="relative z-10 p-6 md:p-12 text-left scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-1.5 text-xs text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/30 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
              <GraduationCap className="h-4 w-4 text-brand-cyan" />
              <span>Pedagogy & Standards</span>
            </span>
            <h1 className="text-h1 text-white tracking-tight leading-tight font-display">
              Competency-Based <span className="text-gradient-orange">Curriculum (CBC)</span>
            </h1>
            <p className="text-lg font-mono text-brand-yellow/90 uppercase tracking-wide">
              A simple guide for teachers and teacher educators to understand CBC in teaching and learning.
            </p>
            <div className="space-y-4 text-body text-gray-300 leading-relaxed max-w-2xl">
              <p>
                Competency-Based Curriculum (CBC) is a way of teaching and learning where students develop knowledge, skills, and positive attitudes. The learner is at the center of learning, and the teacher guides learners to discover knowledge instead of only giving facts.
              </p>
              <p className="border-l-2 border-brand-cyan pl-4 text-white font-medium bg-brand-cyan/5 py-2 rounded-r-lg">
                CBC focuses on what a learner can do after learning, not only what they can remember.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  if (setCurrentPage) setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 text-btn tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-[#11FF62]/20 flex items-center justify-center space-x-2 cursor-pointer"
                id="cta-enroll-cbc"
              >
                <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">Get CBC Training</span>
                <ArrowRight className="h-4 w-4 text-[#F4FF12]" />
              </button>
              <a
                href="#what-is-cbc"
                className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-btn tracking-wider uppercase rounded-xl transition-all text-center flex items-center justify-center cursor-pointer"
              >
                Learn What is CBC
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <GlassCard className="p-8 border border-white/10 !bg-brand-dark/45 relative z-10 overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl" />
              <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <Target className="h-5 w-5 text-brand-cyan" />
                <span>The Core Focal Shift</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 shrink-0">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">Traditional Paradigm</h4>
                    <p className="text-xs text-gray-300 mt-1">Focuses strictly on rote memorization, high-stakes testing, and static lectures.</p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-1">
                  <div className="h-px bg-white/10 w-full relative">
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d0f2f] px-3 py-1 rounded-full text-[10px] font-mono text-brand-yellow uppercase tracking-widest border border-white/15">
                      Shift
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-brand-cyan">Competency Paradigm (CBC)</h4>
                    <p className="text-xs text-gray-300 mt-1">Focuses on practical skills, lifelong competence, active doing, and direct application.</p>
                  </div>
                </div>
              </div>
            </GlassCard>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-brand-cyan/15 rounded-full blur-[50px] -z-10" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-brand-magenta/15 rounded-full blur-[50px] -z-10" />
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS CBC? */}
      <section id="what-is-cbc" className="p-6 md:p-8 text-left scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="01 / Definition"
            title="What is Competency-Based Curriculum?"
            subtitle="Understand the basic expectations placed upon contemporary learners and how overall mastery is measured."
            gradientType="magenta"
          />

          <GlassCard className="p-8 md:p-10 border border-white/10 bg-slate-950/40 relative overflow-hidden mt-8">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none" />
            
            <p className="text-body text-gray-300 mb-6 leading-relaxed">
              CBC is a curriculum where learners are expected to cultivate multidimensional abilities. Rather than simple recitation, success is measured by the student's active transformation:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Understand", desc: "Understand what they are learning deeply", icon: <Brain className="h-5 w-5 text-brand-magenta" /> },
                { title: "Apply", desc: "Apply knowledge in real life scenarios", icon: <Compass className="h-5 w-5 text-brand-cyan" /> },
                { title: "Develop", desc: "Develop practical skills through active repetition", icon: <Zap className="h-5 w-5 text-brand-yellow" /> },
                { title: "Show", desc: "Show positive behaviour and attitudes", icon: <Award className="h-5 w-5 text-brand-blue" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3.5 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                  <div className="p-2 bg-white/5 rounded-lg text-white">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-0.5">{item.title}</span>
                    <p className="text-sm text-gray-200 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl flex items-center space-x-3.5">
              <CheckCircle className="h-6 w-6 text-brand-cyan shrink-0" />
              <p className="text-sm md:text-base font-semibold text-white tracking-wide">
                Learning is measured by competence, not only exams.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* SECTION 3: KEY PRINCIPLES OF CBC */}
      <section id="cbc-principles" className="p-6 md:p-8 text-left scroll-mt-24">
        <SectionHeader
          badge="02 / Key Principles"
          title="The Five Key Principles of CBC"
          subtitle="Explore the fundamental pillars that drive successful competency execution across modern classrooms."
          gradientType="cyan"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          {[
            {
              title: "Learner-Centered",
              label: "Learner-Centered Learning",
              desc: "Learners are the main focus and teachers guide learning.",
              color: "text-brand-magenta",
              bg: "bg-brand-magenta/10",
              border: "border-brand-magenta/25"
            },
            {
              title: "Learning by Doing",
              label: "Learning by Doing",
              desc: "Students learn through activities, projects, and practical work.",
              color: "text-brand-cyan",
              bg: "bg-brand-cyan/10",
              border: "border-brand-cyan/25"
            },
            {
              title: "Real-Life Application",
              label: "Real-Life Application",
              desc: "Learning connects to real situations directly.",
              color: "text-brand-yellow",
              bg: "bg-brand-yellow/10",
              border: "border-brand-yellow/25"
            },
            {
              title: "Continuous Assessment",
              label: "Continuous Assessment",
              desc: "Learners are assessed during learning, not only at the end.",
              color: "text-brand-blue",
              bg: "bg-brand-blue/10",
              border: "border-brand-blue/25"
            },
            {
              title: "Competence Development",
              label: "Competence Development",
              desc: "Focus is on skills and abilities, not memorization.",
              color: "text-[#11FF62]",
              bg: "bg-[#11FF62]/10",
              border: "border-[#11FF62]/25"
            }
          ].map((principle, idx) => (
            <GlassCard key={idx} className="p-5 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between h-full">
              <div>
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${principle.bg} ${principle.color} font-mono text-xs font-bold mb-4 border ${principle.border}`}>
                  0{idx + 1}
                </span>
                <h4 className="text-sm font-bold text-white mb-2 leading-tight">
                  {principle.label}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                Core Principle
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 4: ROLE OF A TEACHER IN CBC */}
      <section id="teacher-role" className="p-6 md:p-8 text-left scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <span className="text-xs text-brand-yellow font-mono uppercase tracking-widest bg-brand-yellow/10 border border-brand-yellow/20 px-3 py-1 rounded-full w-max">
              03 / Educator Role
            </span>
            <h2 className="text-h2 text-white">
              The Role of a Teacher in CBC
            </h2>
            <p className="text-body text-gray-300 leading-relaxed">
              Transitioning to CBC changes the entire dynamic of the classroom. Teachers shift away from being isolated deliverers of facts to active facilitators of organic human potential.
            </p>
            <div className="p-4 bg-[#0d0f2f] border border-white/10 rounded-xl">
              <p className="text-xs text-brand-cyan font-mono leading-relaxed uppercase tracking-wider">
                Crucial Objective:
              </p>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Teachers must create an environment where learners ask questions and explore ideas.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3.5">
              {[
                { title: "A facilitator, not only a lecturer", desc: "Guide discussions and keep active student collaboration alive rather than dominating speech times.", color: "border-brand-magenta" },
                { title: "A guide who supports learners", desc: "Step in to assist groups, diagnose learning obstacles, and offer targeted navigation.", color: "border-brand-cyan" },
                { title: "A designer of learning activities", desc: "Construct structured hand-on tasks, field research trips, and simulated playground exercises.", color: "border-brand-yellow" },
                { title: "An assessor of learner progress", desc: "Observe behavior, check portfolio files, analyze work habits, and record competencies continuously.", color: "border-brand-blue" },
                { title: "A motivator who builds curiosity in learners", desc: "Inspire personal confidence, encourage inquiry, and eliminate classroom intimidation.", color: "border-[#11FF62]" }
              ].map((role, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 bg-white/5 hover:bg-white/10 transition-all border-l-4 ${role.color} rounded-r-xl flex items-start space-x-4`}
                >
                  <div className="p-1 rounded bg-white/5 text-white shrink-0 mt-0.5">
                    <HelpingHand className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{role.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW LEARNING HAPPENS IN CBC */}
      <section id="how-learning-happens" className="p-6 md:p-8 text-left scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="04 / Methodology"
            title="How Learning Happens in CBC"
            subtitle="Active pathways where students absorb, apply, and refine their practical capabilities."
            gradientType="magenta"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[
              { name: "Group discussions", desc: "Interactive team logic", icon: <Users className="h-5 w-5 text-brand-magenta" /> },
              { name: "Projects and assignments", desc: "Constructive portfolio work", icon: <FileText className="h-5 w-5 text-brand-cyan" /> },
              { name: "Practical activities", desc: "Hands-on implementation", icon: <Zap className="h-5 w-5 text-brand-yellow" /> },
              { name: "Field work", desc: "Out-of-classroom experience", icon: <Compass className="h-5 w-5 text-brand-blue" /> },
              { name: "Problem-solving tasks", desc: "Logical solution building", icon: <Brain className="h-5 w-5 text-[#11FF62]" /> },
              { name: "Classroom interaction", desc: "Continuous student dialogues", icon: <Sparkles className="h-5 w-5 text-purple-400" /> }
            ].map((activity, idx) => (
              <GlassCard key={idx} className="p-4 border border-white/5 hover:border-white/10 hover:scale-[1.02] transition-all text-center flex flex-col items-center justify-center space-y-2">
                <div className="p-2.5 rounded-full bg-white/5 text-white mb-1">
                  {activity.icon}
                </div>
                <h4 className="text-xs font-bold text-white leading-tight">{activity.name}</h4>
                <p className="text-[10px] text-gray-400">{activity.desc}</p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-6 text-center">
            <span className="inline-flex items-center space-x-2 text-xs font-semibold font-mono tracking-wider text-brand-yellow uppercase bg-brand-yellow/10 border border-brand-yellow/20 px-4 py-2 rounded-full">
              <Brain className="h-3.5 w-3.5 text-brand-yellow animate-pulse" />
              <span>Learners are encouraged to think, question, and try.</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 6: ASSESSMENT IN CBC (NECTA & NACTVET) */}
      <section id="assessment-systems" className="p-6 md:p-8 text-left scroll-mt-24">
        <SectionHeader
          badge="05 / Standards & Evaluation"
          title="Assessment in CBC (NECTA & NACTVET)"
          subtitle="Explore how competency is tracked and evaluated under secondary and technical education structures in Tanzania."
          gradientType="blue"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* NECTA COLUMN */}
          <GlassCard className="p-6 md:p-8 border border-brand-magenta/25 bg-slate-950/40 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-magenta/5 rounded-full blur-2xl" />
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono tracking-widest text-brand-magenta uppercase bg-brand-magenta/10 px-2.5 py-1 border border-brand-magenta/20 rounded">
                  Secondary Education
                </span>
                <span className="text-xl font-black text-white/10 font-mono">NECTA</span>
              </div>
              <h3 className="text-h3 text-white mb-4">NECTA Assessment Framework</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Evaluation methodologies deployed to guide adolescent and secondary level academic progression:
              </p>
              <div className="space-y-3">
                {[
                  "Formative assessment during learning",
                  "Tests and quizzes",
                  "Projects and practical work",
                  "Final examinations"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs text-gray-200 bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <Check className="h-4 w-4 text-brand-magenta shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] text-gray-500 font-mono">
              Academic & Formative Pathway
            </div>
          </GlassCard>

          {/* NACTVET COLUMN */}
          <GlassCard className="p-6 md:p-8 border border-brand-cyan/25 bg-slate-950/40 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-2xl" />
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-2.5 py-1 border border-brand-cyan/20 rounded">
                  Technical Education
                </span>
                <span className="text-xl font-black text-white/10 font-mono">NACTVET</span>
              </div>
              <h3 className="text-h3 text-white mb-4">NACTVET Assessment Framework</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Applied and vocational metrics focused entirely on industrial readiness and professional competence:
              </p>
              <div className="space-y-3">
                {[
                  "Competency-based practical tasks",
                  "Work-based learning (industrial practice)",
                  "Continuous assessment tests (CATs)",
                  "Final trade/module assessments"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs text-gray-200 bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <Check className="h-4 w-4 text-brand-cyan shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] text-gray-500 font-mono">
              Vocational & Applied Standards
            </div>
          </GlassCard>
        </div>

        <div className="mt-8 p-4 bg-brand-yellow/10 border border-brand-yellow/20 rounded-xl text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand-yellow">
            The focus is on skills performance in real situations.
          </p>
        </div>
      </section>

      {/* SECTION 7: WHY CBC IS IMPORTANT */}
      <section id="why-cbc-important" className="p-6 md:p-8 text-left scroll-mt-24">
        <SectionHeader
          badge="06 / Core Value"
          title="Why CBC is Important"
          subtitle="Discover the transformative impact of adopting competency frameworks over traditional rote systems."
          gradientType="gold"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
          {[
            { title: "Develops Creativity", label: "Develops creativity and innovation", icon: <Sparkles className="h-5 w-5 text-brand-magenta" /> },
            { title: "Solves Problems", label: "Improves problem-solving skills", icon: <Brain className="h-5 w-5 text-brand-cyan" /> },
            { title: "Builds Confidence", label: "Builds learner confidence", icon: <Award className="h-5 w-5 text-brand-yellow" /> },
            { title: "Prepares Careers", label: "Prepares for employment and entrepreneurship", icon: <ShieldCheck className="h-5 w-5 text-brand-blue" /> },
            { title: "Deep Understanding", label: "Promotes deep understanding", icon: <Lightbulb className="h-5 w-5 text-[#11FF62]" /> }
          ].map((item, idx) => (
            <GlassCard key={idx} className="p-5 border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between h-full">
              <div>
                <div className="p-2.5 bg-white/5 rounded-xl w-10 h-10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">{item.title}</h4>
                <p className="text-sm font-bold text-white leading-snug">{item.label}</p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[9px] font-mono text-gray-500 uppercase">
                Long-term Benefit
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 8: CHALLENGES IN CBC IMPLEMENTATION */}
      <section id="cbc-challenges" className="p-6 md:p-8 text-left scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="07 / Constraints"
            title="Challenges in CBC Implementation"
            subtitle="Recognizing the systemic hurdles faced by instructors and school environments during curriculum migration."
            gradientType="magenta"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[
              { title: "Lack of teaching materials", desc: "Shortage of hands-on toolkits, science laboratories, and interactive digital resources." },
              { title: "Large class sizes", desc: "Crowded classrooms restricting customized feedback and one-on-one guide mentorship." },
              { title: "Limited teacher training", desc: "Traditional teaching habits requiring targeted professional re-skilling." },
              { title: "Time constraints in covering activities", desc: "Heavy schedules making it difficult to safely pacing elaborate practical projects." }
            ].map((challenge, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-red-950/10 border border-red-900/30 flex items-start space-x-4">
                <div className="p-2 bg-red-900/10 rounded-lg text-red-400 shrink-0 mt-0.5">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-red-200">{challenge.title}</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">{challenge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: HOW TEACHERS CAN IMPROVE CBC PRACTICE */}
      <section id="improving-practice" className="p-6 md:p-8 text-left scroll-mt-24">
        <SectionHeader
          badge="08 / Best Practices"
          title="How Teachers Can Improve CBC Practice"
          subtitle="Actionable, simple tactics that educators can execute immediately in their classrooms to build competency."
          gradientType="cyan"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Use simple teaching aids", desc: "Construct cheap and localized visual tools to represent physical formulas or biological functions." },
            { title: "Encourage learner participation", desc: "Invite students to demonstrate logic, lead active discussions, and peer-review answers." },
            { title: "Ask open-ended questions", desc: "Drive debate and inquiry instead of simple yes-or-no recitations." },
            { title: "Use group and project work", desc: "Foster collaborative peer-groups working on modular visual outputs or lab checklists." },
            { title: "Give regular feedback", desc: "Deliver continuous corrective notes during the task rather than just summative marks." },
            { title: "Focus on understanding", desc: "Focus strictly on deep structural understanding rather than surface-level memorization." }
          ].map((practice, idx) => (
            <GlassCard key={idx} className="p-5 border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between">
              <div>
                <div className="p-2 bg-brand-cyan/15 rounded-lg w-8 h-8 flex items-center justify-center text-brand-cyan mb-4 border border-brand-cyan/10">
                  <ClipboardList className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2 leading-tight">{practice.title}</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{practice.desc}</p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[9px] font-mono text-[#11FF62] uppercase tracking-wider flex items-center">
                <Check className="h-3 w-3 mr-1" /> Ready To Deploy
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SECTION 10: ROLE OF CURIOSITY IN LEARNING */}
      <section id="role-of-curiosity" className="p-6 md:p-8 text-left scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-10 border border-brand-yellow/30 bg-gradient-to-br from-brand-dark/90 via-[#0d0f2f]/60 to-slate-950/80 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="p-4 bg-brand-yellow/10 border border-brand-yellow/20 rounded-2xl text-brand-yellow shrink-0">
                <Lightbulb className="h-8 w-8 animate-pulse" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow bg-brand-yellow/15 border border-brand-yellow/30 px-2.5 py-0.5 rounded">
                  09 / Human Emotion Catalyst
                </span>
                <h3 className="text-h3 text-white">The Role of Curiosity in Learning</h3>
                <p className="text-body text-gray-300 leading-relaxed">
                  In CBC, curiosity is very important. When learners are curious, they ask questions, explore ideas, and understand deeply.
                </p>
                <div className="inline-block border-l-2 border-[#11FF62] pl-3.5 mt-2 text-xs md:text-sm text-white italic font-medium">
                  "A good teacher creates curiosity instead of fear."
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* SECTION 11: CONCLUSION */}
      <section id="cbc-conclusion" className="max-w-4xl mx-auto p-6 md:p-12 text-center scroll-mt-24">
        <GlassCard className="p-8 sm:p-12 md:p-16 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-brand-cyan/15 to-transparent blur-3xl pointer-events-none" />
          
          <span className="inline-flex items-center space-x-1.5 text-xs font-semibold font-mono tracking-wider uppercase bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan px-3 py-1 rounded-full mb-6">
            <Info className="h-3.5 w-3.5" />
            <span>10 / Conclusion Summary</span>
          </span>

          <h2 className="text-h2 text-white mb-6">
            Preparing Learners for Life
          </h2>

          <p className="text-body text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            CBC is a modern approach to education that focuses on skills, understanding, and real-life application. Teachers guide learners to become independent thinkers and problem solvers.
          </p>

          <div className="p-4 bg-[#11FF62]/10 border border-[#11FF62]/20 rounded-2xl inline-block max-w-md mx-auto mb-8">
            <p className="text-base font-bold text-[#11FF62] tracking-wide">
              CBC prepares learners for life, not only for exams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative px-8 py-3.5 rounded-xl transition-all hover:scale-[1.02] cursor-pointer bg-black/60 hover:bg-black/85 border border-[#11FF62]/30 hover:border-[#F4FF12]/50 hover:shadow-lg hover:shadow-[#11FF62]/20 inline-flex items-center space-x-2 overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent uppercase tracking-wider text-btn font-mono">Join CBC Educator Training</span>
              <ArrowRight className="h-4 w-4 text-[#F4FF12] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </GlassCard>
      </section>

    </div>
  );
}
