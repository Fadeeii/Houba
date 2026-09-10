import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Search, Briefcase } from 'lucide-react';

export const IndustryDashboard: React.FC = () => {
  const { setActiveTab } = useEcosystem();

  return (
    <div className="space-y-6">
      
      {/* Professional Navy Header */}
      <div className="bg-[#24324A] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-[#1A2536] shadow-xs">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF4E7] text-[#065F46] text-xs font-bold border border-[#B8E6CB]">
              <Briefcase className="w-3.5 h-3.5" />
              <span>RECRUITER WORKSPACE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">ABC Technologies Hiring Portal</h1>
            <p className="text-xs text-[#BFD9FF] font-medium">
              Access 317 evidence-verified candidates matching your defined technical skill matrices.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('talent-discovery')}
              className="px-5 py-2.5 bg-[#DDF4E7] text-[#065F46] hover:bg-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Find Suitable Candidates</span>
            </button>
            <button
              onClick={() => setActiveTab('post-job')}
              className="px-4 py-2.5 bg-[#DCEBFF] text-[#1E3A8A] hover:bg-white rounded-xl text-xs font-bold transition-all"
            >
              Post Job Matrix
            </button>
          </div>
        </div>
      </div>

      {/* 5 Metric Summaries */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#EAE6DB] shadow-xs space-y-1">
          <div className="text-xs text-[#5A6E85] font-bold uppercase">Active Jobs</div>
          <div className="text-3xl font-extrabold text-[#24324A]">12</div>
          <div className="text-[10px] text-[#8A9EB5] font-medium">3 Roles Open</div>
        </div>

        <div className="bg-[#DCEBFF] p-5 rounded-2xl border border-[#BFD9FF] shadow-xs space-y-1">
          <div className="text-xs text-[#1E3A8A] font-bold uppercase">Applications</div>
          <div className="text-3xl font-extrabold text-[#1E3A8A]">482</div>
          <div className="text-[10px] text-[#1E3A8A] font-medium">Total received</div>
        </div>

        <div className="bg-[#DDF4E7] p-5 rounded-2xl border border-[#B8E6CB] shadow-xs space-y-1">
          <div className="text-xs text-[#065F46] font-bold uppercase">Verified Candidates</div>
          <div className="text-3xl font-extrabold text-[#065F46]">317</div>
          <div className="text-[10px] text-[#065F46] font-bold">Suitability ≥ 75%</div>
        </div>

        <div className="bg-[#FFF0B8] p-5 rounded-2xl border border-[#FDE074] shadow-xs space-y-1">
          <div className="text-xs text-[#854D0E] font-bold uppercase">Shortlisted</div>
          <div className="text-3xl font-extrabold text-[#854D0E]">64</div>
          <div className="text-[10px] text-[#854D0E] font-medium">Interview stage</div>
        </div>

        <div className="bg-[#FFE0D2] p-5 rounded-2xl border border-[#FFC9B5] shadow-xs space-y-1">
          <div className="text-xs text-[#9A3412] font-bold uppercase">Hired</div>
          <div className="text-3xl font-extrabold text-[#9A3412]">18</div>
          <div className="text-[10px] text-[#9A3412] font-medium">Offers accepted</div>
        </div>
      </div>

    </div>
  );
};
