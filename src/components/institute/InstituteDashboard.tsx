import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { ArrowUpRight, Building2 } from 'lucide-react';

export const InstituteDashboard: React.FC = () => {
  const { setActiveTab } = useEcosystem();

  return (
    <div className="space-y-6">
      
      {/* Header (Navy & Powder Blue) */}
      <div className="bg-[#24324A] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-[#1A2536] shadow-xs">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEBFF] text-[#1E3A8A] text-xs font-bold border border-[#BFD9FF]">
              <Building2 className="w-3.5 h-3.5" />
              <span>INSTITUTIONAL PORTAL</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">National Institute of Technology</h1>
            <p className="text-xs text-[#BFD9FF] font-medium">
              Monitoring 1,240 enrolled engineering students across verified skill growth & industry readiness.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('curriculum-gap')}
            className="px-5 py-2.5 bg-[#DCEBFF] text-[#1E3A8A] hover:bg-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2 shrink-0 hover:scale-[1.02]"
          >
            <span>Curriculum Gap Analyzer</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 5 Metric Summaries */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#EAE6DB] shadow-xs space-y-1">
          <div className="text-xs text-[#5A6E85] font-bold uppercase">Total Students</div>
          <div className="text-3xl font-extrabold text-[#24324A]">1,240</div>
          <div className="text-[10px] text-[#8A9EB5] font-medium">4 Batches</div>
        </div>

        <div className="bg-[#DDF4E7] p-5 rounded-2xl border border-[#B8E6CB] shadow-xs space-y-1">
          <div className="text-xs text-[#065F46] font-bold uppercase">Verified Profiles</div>
          <div className="text-3xl font-extrabold text-[#065F46]">890</div>
          <div className="text-[10px] text-[#065F46] font-bold">71.7% Audited</div>
        </div>

        <div className="bg-[#DCEBFF] p-5 rounded-2xl border border-[#BFD9FF] shadow-xs space-y-1">
          <div className="text-xs text-[#1E3A8A] font-bold uppercase">Job Ready</div>
          <div className="text-3xl font-extrabold text-[#1E3A8A]">436</div>
          <div className="text-[10px] text-[#1E3A8A] font-medium">Suitability ≥80%</div>
        </div>

        <div className="bg-[#FFF0B8] p-5 rounded-2xl border border-[#FDE074] shadow-xs space-y-1">
          <div className="text-xs text-[#854D0E] font-bold uppercase">Industry Matched</div>
          <div className="text-3xl font-extrabold text-[#854D0E]">312</div>
          <div className="text-[10px] text-[#854D0E] font-medium">Matched with jobs</div>
        </div>

        <div className="bg-[#FFE0D2] p-5 rounded-2xl border border-[#FFC9B5] shadow-xs space-y-1">
          <div className="text-xs text-[#9A3412] font-bold uppercase">Placed</div>
          <div className="text-3xl font-extrabold text-[#9A3412]">154</div>
          <div className="text-[10px] text-[#9A3412] font-medium">Offers accepted</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Placement Funnel Analytics */}
        <div className="bg-white p-6 rounded-2xl border border-[#EAE6DB] shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#F4F0E6] pb-3">
            <h3 className="font-extrabold text-[#24324A] text-base">Placement Funnel Analytics</h3>
            <button onClick={() => setActiveTab('placement-analytics')} className="text-xs text-[#1E3A8A] font-bold hover:underline">View Breakdown →</button>
          </div>

          <div className="space-y-4 pt-2">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between font-bold text-[#24324A]">
                <span>Total Applications Submitted</span>
                <span>1,240</span>
              </div>
              <div className="w-full bg-[#F4F0E6] h-3 rounded-full overflow-hidden">
                <div className="bg-[#24324A] h-full rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between font-bold text-[#24324A]">
                <span>Interviews Conducted</span>
                <span>620 (50%)</span>
              </div>
              <div className="w-full bg-[#F4F0E6] h-3 rounded-full overflow-hidden">
                <div className="bg-[#1E3A8A] h-full rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between font-bold text-[#24324A]">
                <span>Job Offers Received</span>
                <span>230 (18.5%)</span>
              </div>
              <div className="w-full bg-[#F4F0E6] h-3 rounded-full overflow-hidden">
                <div className="bg-[#854D0E] h-full rounded-full" style={{ width: '37%' }}></div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between font-bold text-[#24324A]">
                <span>Confirmed Placements</span>
                <span>185 (14.9%)</span>
              </div>
              <div className="w-full bg-[#F4F0E6] h-3 rounded-full overflow-hidden">
                <div className="bg-[#065F46] h-full rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Aggregated Rejection Skill Gaps */}
        <div className="bg-white p-6 rounded-2xl border border-[#EAE6DB] shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#F4F0E6] pb-3">
            <h3 className="font-extrabold text-[#24324A] text-base">Aggregated Rejection Skill Gaps</h3>
            <span className="text-[10px] bg-[#FFE0D2] text-[#9A3412] px-2.5 py-0.5 rounded-full font-bold">
              INSIGHT ENGINE
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { skill: 'Data Structures & Algorithms', pct: 47, desc: '47% of rejections cited algorithmic complexity gaps' },
              { skill: 'React.js State Architecture', pct: 38, desc: '38% cited missing production frontend project repos' },
              { skill: 'Technical Communication', pct: 31, desc: '31% cited interview presentation clarity' },
              { skill: 'Cloud & Serverless Deployment', pct: 19, desc: '19% cited lack of AWS / Azure lab exposure' },
            ].map((rg, idx) => (
              <div key={idx} className="p-3.5 bg-[#FFFDF7] rounded-xl border border-[#EAE6DB] space-y-1 text-xs">
                <div className="flex items-center justify-between font-bold text-[#24324A]">
                  <span>{rg.skill}</span>
                  <span className="text-[#9A3412]">{rg.pct}% of rejections</span>
                </div>
                <p className="text-[11px] text-[#5A6E85] font-medium">{rg.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
