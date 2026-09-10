import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Activity, ShieldAlert } from 'lucide-react';

export const AdminOverview: React.FC = () => {
  const { setActiveTab } = useEcosystem();

  return (
    <div className="space-y-6">
      
      {/* Dark Governance Header */}
      <div className="bg-[#24324A] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-[#1A2536] shadow-xs">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE0D2] text-[#9A3412] text-xs font-bold border border-[#FFC9B5]">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>ECOSYSTEM CONTROL</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">System Governance & Verification Audit</h1>
            <p className="text-xs text-[#BFD9FF] font-medium">
              Monitoring 24,580 nationwide students across 84 accredited institutes and 436 industry partners.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('master-feedback-loop')}
            className="px-5 py-2.5 bg-white text-[#24324A] hover:bg-[#DCEBFF] rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2 shrink-0 hover:scale-[1.02]"
          >
            <span>Master Feedback Loop</span>
            <Activity className="w-4 h-4 text-[#1E3A8A]" />
          </button>
        </div>
      </div>

      {/* Information Dense Clean Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="bg-white p-4 rounded-2xl border border-[#EAE6DB] shadow-xs space-y-1">
          <div className="text-xs text-[#8A9EB5] font-bold uppercase">Students Enrolled</div>
          <div className="text-2xl font-extrabold text-[#24324A]">24,580</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-[#EAE6DB] shadow-xs space-y-1">
          <div className="text-xs text-[#8A9EB5] font-bold uppercase">Institutes Onboarded</div>
          <div className="text-2xl font-extrabold text-[#1E3A8A]">84</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-[#EAE6DB] shadow-xs space-y-1">
          <div className="text-xs text-[#8A9EB5] font-bold uppercase">Partner Companies</div>
          <div className="text-2xl font-extrabold text-[#065F46]">436</div>
        </div>

        <div className="bg-[#DDF4E7] p-4 rounded-2xl border border-[#B8E6CB] shadow-xs space-y-1">
          <div className="text-xs text-[#065F46] font-bold uppercase">Verified Audits</div>
          <div className="text-2xl font-extrabold text-[#065F46]">92,430</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-[#EAE6DB] shadow-xs space-y-1">
          <div className="text-xs text-[#8A9EB5] font-bold uppercase">Active Jobs</div>
          <div className="text-2xl font-extrabold text-[#24324A]">1,280</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-[#EAE6DB] shadow-xs space-y-1">
          <div className="text-xs text-[#8A9EB5] font-bold uppercase">Active Internships</div>
          <div className="text-2xl font-extrabold text-[#1E3A8A]">620</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-[#EAE6DB] shadow-xs space-y-1">
          <div className="text-xs text-[#8A9EB5] font-bold uppercase">Skill Peer Sessions</div>
          <div className="text-2xl font-extrabold text-[#854D0E]">3,450</div>
        </div>

        <div className="bg-[#DCEBFF] p-4 rounded-2xl border border-[#BFD9FF] shadow-xs space-y-1">
          <div className="text-xs text-[#1E3A8A] font-bold uppercase">Successful Matches</div>
          <div className="text-2xl font-extrabold text-[#1E3A8A]">7,840</div>
        </div>
      </div>

    </div>
  );
};
