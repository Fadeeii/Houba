import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import {
  LayoutDashboard,
  Award,
  ShieldCheck,
  CheckSquare,
  Target,
  BarChart3,
  Map,
  Briefcase,
  Trophy,
  FileSpreadsheet,
  HelpCircle,
  Repeat,
  DollarSign,
  TrendingUp,
  BookOpen,
  GraduationCap,
  Users,
  Search,
  PlusSquare,
  Activity,
  Sparkles
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { currentRole, activeTab, setActiveTab } = useEcosystem();

  if (currentRole === 'landing') return null;

  interface NavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    badge?: string;
    badgeColor?: string;
  }

  const studentItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'my-skills', label: 'My Skills Profile', icon: <Award className="w-4 h-4" /> },
    { id: 'verification', label: 'Skill Verification', icon: <ShieldCheck className="w-4 h-4" />, badge: 'L1–L4', badgeColor: 'bg-[#DDF4E7] text-[#065F46]' },
    { id: 'assessments', label: 'Skill Assessments', icon: <CheckSquare className="w-4 h-4" /> },
    { id: 'skill-gap', label: 'Skill Gap Analysis', icon: <Target className="w-4 h-4" />, badge: '-6%', badgeColor: 'bg-[#FFE0D2] text-[#9A3412]' },
    { id: 'job-suitability', label: 'Job Suitability', icon: <BarChart3 className="w-4 h-4" />, badge: '93%', badgeColor: 'bg-[#DCEBFF] text-[#1E3A8A]' },
    { id: 'roadmap', label: 'Career Roadmap', icon: <Map className="w-4 h-4" /> },
    { id: 'jobs', label: 'Jobs & Internships', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'challenges', label: 'Industry Challenges', icon: <Trophy className="w-4 h-4" /> },
    { id: 'applications', label: 'Applications', icon: <FileSpreadsheet className="w-4 h-4" /> },
    { id: 'insights', label: 'Why Was I Rejected?', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'feedback-loop', label: 'Closed Feedback Loop', icon: <Repeat className="w-4 h-4" /> },
    { id: 'skill-sharing', label: 'Skill Sharing & Earn', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'earnings', label: 'My Earnings', icon: <DollarSign className="w-4 h-4" />, badge: '₹4.8k', badgeColor: 'bg-[#FFF0B8] text-[#854D0E]' },
  ];

  const instituteItems: NavItem[] = [
    { id: 'dashboard', label: 'Overview Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'student-analytics', label: 'Student Analytics', icon: <Users className="w-4 h-4" /> },
    { id: 'industry-demand', label: 'Industry Demand', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'curriculum-gap', label: 'Curriculum Gap Analyzer', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'training', label: 'Training Programs', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'mentor-discovery', label: 'Peer Mentor Discovery', icon: <Users className="w-4 h-4" /> },
    { id: 'inst-feedback-loop', label: 'Feedback Loop Visual', icon: <Repeat className="w-4 h-4" /> },
    { id: 'placement-analytics', label: 'Placement Analytics', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  const industryItems: NavItem[] = [
    { id: 'dashboard', label: 'Company Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'post-job', label: 'Post Job Matrix', icon: <PlusSquare className="w-4 h-4" /> },
    { id: 'talent-discovery', label: 'Talent Discovery', icon: <Search className="w-4 h-4" />, badge: '96% match', badgeColor: 'bg-[#DDF4E7] text-[#065F46]' },
    { id: 'post-challenge', label: 'Industry Challenges', icon: <Trophy className="w-4 h-4" /> },
    { id: 'employer-feedback', label: 'Candidate Feedback', icon: <Repeat className="w-4 h-4" /> },
  ];

  const adminItems: NavItem[] = [
    { id: 'dashboard', label: 'Ecosystem Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'verification-mgmt', label: 'Verification Queue', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'system-health', label: 'System Health', icon: <Activity className="w-4 h-4" />, badge: '100%', badgeColor: 'bg-[#DDF4E7] text-[#065F46]' },
    { id: 'ecosystem-insights', label: 'Ecosystem Insights', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'master-feedback-loop', label: 'Master Feedback Loop', icon: <Repeat className="w-4 h-4" /> },
  ];

  const currentItems = 
    currentRole === 'student' ? studentItems :
    currentRole === 'institute' ? instituteItems :
    currentRole === 'industry' ? industryItems : adminItems;

  return (
    <aside className="w-64 bg-[#FFFDF7] border-r border-[#EAE6DB] shrink-0 min-h-[calc(100vh-4rem)] p-4 flex flex-col justify-between hidden md:flex">
      <div className="space-y-4">
        {/* Workspace Label */}
        <div className="px-3 py-2 bg-[#F4F0E6] rounded-xl border border-[#EAE6DB] flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A9EB5]">Portal Mode</div>
            <div className="font-extrabold text-xs text-[#24324A] capitalize flex items-center gap-1.5 mt-0.5">
              <span>{currentRole} Workspace</span>
              <Sparkles className="w-3 h-3 text-[#24324A]" />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {currentItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all ${
                  isActive
                    ? 'bg-[#DCEBFF] text-[#1E3A8A] font-extrabold border border-[#BFD9FF] shadow-xs'
                    : 'text-[#5A6E85] hover:bg-[#F4F0E6]/80 hover:text-[#24324A] font-semibold border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${
                    isActive ? 'bg-[#BFD9FF] text-[#1E3A8A]' : 'bg-[#EAE6DB]/60 text-[#5A6E85]'
                  }`}>
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
                
                {item.badge && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    item.badgeColor || (isActive ? 'bg-[#1E3A8A] text-white' : 'bg-[#EAE6DB] text-[#5A6E85]')
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="pt-4 border-t border-[#EAE6DB] text-[11px] text-[#8A9EB5] px-2 space-y-1">
        <div className="font-bold text-[#24324A]">SkillBridge Platform v2.4 ✦</div>
        <div className="text-[10px] text-[#5A6E85]">Verified Talent Infrastructure</div>
      </div>
    </aside>
  );
};
