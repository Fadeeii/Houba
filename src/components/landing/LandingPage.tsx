import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import type { UserRole } from '../../types';
import { 
  ArrowRight, 
  ShieldCheck, 
  BarChart3, 
  Target, 
  Map, 
  Trophy, 
  GraduationCap, 
  Building2, 
  Search, 
  Repeat, 
  UserCheck, 
  Briefcase, 
  ShieldAlert,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { switchRole } = useEcosystem();

  const roleCards: { role: UserRole; title: string; subtitle: string; icon: React.ReactNode; bg: string; border: string; text: string }[] = [
    {
      role: 'student',
      title: 'Student Portal',
      subtitle: 'Build verified skills, address skill gaps, attempt industry challenges, and track applications.',
      icon: <UserCheck className="w-5 h-5 text-[#1E3A8A]" />,
      bg: 'bg-[#DCEBFF]',
      border: 'border-[#BFD9FF]',
      text: 'text-[#1E3A8A]'
    },
    {
      role: 'institute',
      title: 'Institute Portal',
      subtitle: 'Analyze curriculum gaps against real industry demands and deploy verified student peer mentors.',
      icon: <Building2 className="w-5 h-5 text-[#065F46]" />,
      bg: 'bg-[#DDF4E7]',
      border: 'border-[#B8E6CB]',
      text: 'text-[#065F46]'
    },
    {
      role: 'industry',
      title: 'Industry Portal',
      subtitle: 'Discover evidence-verified candidates matching exact technical skill requirement matrices.',
      icon: <Briefcase className="w-5 h-5 text-[#854D0E]" />,
      bg: 'bg-[#FFF0B8]',
      border: 'border-[#FDE074]',
      text: 'text-[#854D0E]'
    },
    {
      role: 'admin',
      title: 'Admin Portal',
      subtitle: 'Monitor ecosystem health, audit verification integrity, and track national hiring trends.',
      icon: <ShieldAlert className="w-5 h-5 text-[#9A3412]" />,
      bg: 'bg-[#FFE0D2]',
      border: 'border-[#FFC9B5]',
      text: 'text-[#9A3412]'
    }
  ];

  const features = [
    { icon: <ShieldCheck className="w-4 h-4 text-[#1E3A8A]" />, title: 'Evidence-Based Verification', desc: 'Skills backed by standardized assessments, certificate hashes, live GitHub repositories, and challenge metrics (Levels 1–4).' },
    { icon: <BarChart3 className="w-4 h-4 text-[#065F46]" />, title: 'Platform-Verified Suitability', desc: 'Quantitative job matching calculated against exact company requirement matrices.' },
    { icon: <Target className="w-4 h-4 text-[#9A3412]" />, title: 'Dynamic Skill Gap Analysis', desc: 'Identifies missing competencies with step-by-step personalized roadmaps.' },
    { icon: <Map className="w-4 h-4 text-[#854D0E]" />, title: 'Interactive Career Roadmaps', desc: 'Visual journey tracking progress from baseline assessment to job offer.' },
    { icon: <Trophy className="w-4 h-4 text-[#1E3A8A]" />, title: 'Industry Practical Challenges', desc: 'Companies issue real problems; high-scoring students earn direct interview invites.' },
    { icon: <GraduationCap className="w-4 h-4 text-[#065F46]" />, title: 'Skill Sharing & Earning', desc: 'Verified Level-4 student mentors conduct paid peer workshops.' },
    { icon: <Building2 className="w-4 h-4 text-[#854D0E]" />, title: 'Curriculum Gap Analyzer', desc: 'Automated insights comparing live market demand against college syllabi.' },
    { icon: <Search className="w-4 h-4 text-[#1E3A8A]" />, title: 'Talent Discovery Engine', desc: 'Industry recruiters search and filter candidates by verified suitability percentage.' },
    { icon: <Repeat className="w-4 h-4 text-[#9A3412]" />, title: 'Closed Application Feedback Loop', desc: 'Rejection outcomes trigger customized platform analysis and improvement plans.' }
  ];

  const steps = [
    { num: '01', title: 'Assess', bg: 'bg-[#DCEBFF]', border: 'border-[#BFD9FF]', text: 'text-[#1E3A8A]' },
    { num: '02', title: 'Verify', bg: 'bg-[#DDF4E7]', border: 'border-[#B8E6CB]', text: 'text-[#065F46]' },
    { num: '03', title: 'Identify Gaps', bg: 'bg-[#FFE0D2]', border: 'border-[#FFC9B5]', text: 'text-[#9A3412]' },
    { num: '04', title: 'Learn', bg: 'bg-[#FFF0B8]', border: 'border-[#FDE074]', text: 'text-[#854D0E]' },
    { num: '05', title: 'Build', bg: 'bg-[#DCEBFF]', border: 'border-[#BFD9FF]', text: 'text-[#1E3A8A]' },
    { num: '06', title: 'Match', bg: 'bg-[#DDF4E7]', border: 'border-[#B8E6CB]', text: 'text-[#065F46]' },
    { num: '07', title: 'Apply', bg: 'bg-[#FFE0D2]', border: 'border-[#FFC9B5]', text: 'text-[#9A3412]' },
    { num: '08', title: 'Feedback', bg: 'bg-[#FFF0B8]', border: 'border-[#FDE074]', text: 'text-[#854D0E]' },
    { num: '09', title: 'Improve', bg: 'bg-[#DDF4E7]', border: 'border-[#B8E6CB]', text: 'text-[#065F46]' },
    { num: '10', title: 'Get Hired', bg: 'bg-[#24324A]', border: 'border-[#24324A]', text: 'text-white' },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#24324A] font-sans">
      
      {/* Editorial Split Hero Section (Warm Cream Background) */}
      <div className="border-b border-[#EAE6DB] bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEBFF] text-[#1E3A8A] text-xs font-bold border border-[#BFD9FF]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STUDENT–INSTITUTE–INDUSTRY ECOSYSTEM ✦</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24324A] tracking-tight leading-tight">
                Build skills. <span className="bg-[#DCEBFF] text-[#1E3A8A] px-2 py-0.5 rounded-xl border border-[#BFD9FF]">Prove them.</span> Find better opportunities.
              </h1>

              <p className="text-sm sm:text-base text-[#5A6E85] leading-relaxed max-w-xl font-medium">
                SkillBridge connects students, educational institutions, and industry recruiters through objective evidence-based skill evaluation, automated job suitability scoring, and continuous feedback loops.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => switchRole('student')}
                  className="px-6 py-3 bg-[#24324A] text-white hover:bg-[#1A2536] rounded-xl font-bold text-xs transition-all shadow-xs flex items-center gap-2 hover:scale-[1.02]"
                >
                  <span>Explore Student Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => switchRole('industry')}
                  className="px-6 py-3 bg-white text-[#24324A] border border-[#EAE6DB] hover:bg-[#F4F0E6] rounded-xl font-bold text-xs transition-colors"
                >
                  Employer Talent Search
                </button>
              </div>

              {/* Cycle Flow Bar */}
              <div className="pt-4 text-xs font-medium text-[#5A6E85] border-t border-[#EAE6DB] flex flex-wrap gap-2 items-center">
                <span className="font-extrabold text-[#24324A] uppercase text-[10px] bg-[#FFF0B8] text-[#854D0E] px-2 py-0.5 rounded-full border border-[#FDE074]">
                  Process Cycle
                </span>
                <span>Measure</span> → <span>Verify</span> → <span>Analyze</span> → <span>Improve</span> → <span>Match</span> → <span>Feedback</span> → <span className="font-bold text-[#065F46] bg-[#DDF4E7] px-2 py-0.5 rounded-full">Get Hired</span>
              </div>
            </div>

            {/* RIGHT Realistic Product Dashboard Preview */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#EAE6DB] rounded-2xl p-6 shadow-sm space-y-4 relative">
                <div className="flex justify-between items-center border-b border-[#F4F0E6] pb-3">
                  <div>
                    <div className="text-sm font-extrabold text-[#24324A]">Anupama Devi 👋</div>
                    <div className="text-xs text-[#5A6E85]">Target: Software Developer</div>
                  </div>
                  <span className="px-3 py-1 bg-[#DDF4E7] text-[#065F46] border border-[#B8E6CB] rounded-full text-xs font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                  </span>
                </div>

                {/* 4 Metric Summaries */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-[#DCEBFF] border border-[#BFD9FF] rounded-xl">
                    <div className="text-[11px] text-[#1E3A8A] font-bold uppercase">Readiness</div>
                    <div className="text-2xl font-extrabold text-[#1E3A8A]">87%</div>
                  </div>
                  <div className="p-3 bg-[#DDF4E7] border border-[#B8E6CB] rounded-xl">
                    <div className="text-[11px] text-[#065F46] font-bold uppercase">Verified Skills</div>
                    <div className="text-2xl font-extrabold text-[#065F46]">8</div>
                  </div>
                  <div className="p-3 bg-[#FFE0D2] border border-[#FFC9B5] rounded-xl">
                    <div className="text-[11px] text-[#9A3412] font-bold uppercase">Skill Gaps</div>
                    <div className="text-2xl font-extrabold text-[#9A3412]">3</div>
                  </div>
                  <div className="p-3 bg-[#FFF0B8] border border-[#FDE074] rounded-xl">
                    <div className="text-[11px] text-[#854D0E] font-bold uppercase">Job Matches</div>
                    <div className="text-2xl font-extrabold text-[#854D0E]">12</div>
                  </div>
                </div>

                {/* Suitability Box */}
                <div className="p-3.5 bg-[#24324A] text-white rounded-xl flex justify-between items-center text-xs">
                  <div>
                    <div className="font-bold">ABC Tech — Full Stack Developer</div>
                    <div className="text-[11px] text-slate-300">Level 4 Python Verified</div>
                  </div>
                  <span className="text-base font-extrabold bg-[#DDF4E7] text-[#065F46] px-2.5 py-1 rounded-full">
                    93% Match
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Role Selection Section (Soft Blue Background as per Spec #11) */}
      <div className="bg-[#DCEBFF]/30 border-y border-[#BFD9FF]/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#DCEBFF] text-[#1E3A8A] px-3 py-1 rounded-full border border-[#BFD9FF]">
              Choose Your Portal Mode
            </span>
            <h2 className="text-2xl font-extrabold text-[#24324A] mt-2">
              One platform. Three sides of the talent ecosystem.
            </h2>
            <p className="text-xs text-[#5A6E85] mt-1 font-medium">Select a portal below to test realistic candidate evaluation engines and institutional insights.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roleCards.map((rc) => (
              <div key={rc.role} className="bg-white p-6 rounded-2xl border border-[#EAE6DB] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#BFD9FF] transition-all">
                <div className="space-y-3">
                  <div className={`p-3 ${rc.bg} rounded-xl w-fit border ${rc.border}`}>{rc.icon}</div>
                  <h3 className="font-extrabold text-[#24324A] text-base">{rc.title}</h3>
                  <p className="text-xs text-[#5A6E85] leading-relaxed font-medium">{rc.subtitle}</p>
                </div>

                <button
                  onClick={() => switchRole(rc.role)}
                  className={`w-full py-2.5 bg-[#24324A] text-white hover:bg-[#1A2536] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs`}
                >
                  <span>Enter Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Platform Features Section (Warm Cream Background) */}
      <div className="bg-[#FFFDF7] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider bg-[#FFF0B8] text-[#854D0E] px-3 py-1 rounded-full border border-[#FDE074]">
              Objective Standards
            </span>
            <h2 className="text-2xl font-extrabold text-[#24324A] mt-2">Core Platform Features</h2>
            <p className="text-xs text-[#5A6E85] mt-1 font-medium">Replacing resume buzzwords with objective evaluation metrics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-5 rounded-2xl border border-[#EAE6DB] space-y-3 bg-white hover:border-[#BFD9FF] transition-all">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#F4F0E6] rounded-xl">{f.icon}</div>
                  <h3 className="text-sm font-bold text-[#24324A]">{f.title}</h3>
                </div>
                <p className="text-xs text-[#5A6E85] leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 10-Step Process Flow (Soft Mint Background as per Spec #11) */}
      <div className="bg-[#DDF4E7]/30 border-y border-[#B8E6CB]/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider bg-[#DDF4E7] text-[#065F46] px-3 py-1 rounded-full border border-[#B8E6CB]">
              10-Stage Process Timeline
            </span>
            <h2 className="text-2xl font-extrabold text-[#24324A] mt-2">How SkillBridge Works</h2>
            <p className="text-xs text-[#5A6E85] mt-1 font-medium">Continuous cycle of assessment, verification, gap analysis, and industry placement.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {steps.map((step, idx) => (
              <div key={idx} className={`p-3 ${step.bg} border ${step.border} rounded-xl text-center space-y-1`}>
                <div className={`text-[10px] font-extrabold ${step.text}`}>{step.num}</div>
                <div className={`text-xs font-bold ${step.text}`}>{step.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Connect Section (Soft Peach Background as per Spec #11) */}
      <div className="bg-[#FFE0D2]/30 border-t border-[#FFC9B5]/40 py-10 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="w-10 h-10 bg-[#24324A] text-white rounded-2xl flex items-center justify-center font-extrabold text-sm mx-auto">
            SB ✦
          </div>
          <h3 className="text-lg font-extrabold text-[#24324A]">Ready to bridge the student–industry talent gap?</h3>
          <p className="text-xs text-[#5A6E85] font-medium max-w-lg mx-auto">
            SkillBridge provides standardized Level 1–4 verified skill infrastructure for universities and enterprise employers.
          </p>
          <div className="pt-2">
            <button
              onClick={() => switchRole('student')}
              className="px-6 py-2.5 bg-[#24324A] text-white hover:bg-[#1A2536] rounded-xl font-bold text-xs transition-all shadow-xs"
            >
              Get Started as Student 👋
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
