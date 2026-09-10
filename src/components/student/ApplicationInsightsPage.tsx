import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { ArrowRight, HelpCircle, AlertCircle, Sparkles } from 'lucide-react';

export const ApplicationInsightsPage: React.FC = () => {
  const { applications, setActiveTab } = useEcosystem();

  const rejectedApp = applications.find(a => a.status === 'Not Selected') || applications[0];
  const { employerFeedback, platformAnalysis } = rejectedApp;

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#EAE6DB] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE0D2] text-[#9A3412] text-xs font-bold border border-[#FFC9B5]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLOSED FEEDBACK DIAGNOSTICS</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#24324A] mt-2">Application Outcome & Analysis</h1>
          <p className="text-xs text-[#5A6E85] font-medium mt-1">
            Converting application outcomes into diagnostic insights and clear skill improvement steps.
          </p>
        </div>
      </div>

      {/* Main Outcome Block */}
      <div className="bg-white rounded-2xl border border-[#EAE6DB] p-6 sm:p-8 space-y-6 shadow-xs">
        
        {/* Outcome Title Block */}
        <div className="border-b border-[#F4F0E6] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#8A9EB5]">APPLICATION OUTCOME</span>
            <h2 className="text-xl font-extrabold text-[#24324A] mt-0.5">{rejectedApp.jobTitle}</h2>
            <p className="text-xs text-[#5A6E85] font-medium mt-0.5">{rejectedApp.company} • Applied on {rejectedApp.appliedDate}</p>
          </div>

          <div className="p-3 bg-[#FFE0D2] border border-[#FFC9B5] rounded-2xl text-center">
            <span className="px-3 py-1 bg-[#9A3412] text-white rounded-full text-xs font-bold uppercase tracking-wider">
              Not Selected
            </span>
          </div>
        </div>

        {/* 1. EMPLOYER FEEDBACK BLOCK (Soft Coral Box as requested) */}
        <div className="p-5 bg-[#FFE0D2]/60 border border-[#FFC9B5] rounded-2xl space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-extrabold text-[#9A3412] text-xs uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" /> Employer Feedback
            </h3>
            <span className="text-[10px] font-bold uppercase bg-[#9A3412] text-white px-2.5 py-0.5 rounded-full">
              Provided by employer
            </span>
          </div>
          <p className="text-xs text-[#9A3412] leading-relaxed font-semibold italic pl-3 border-l-2 border-[#9A3412]">
            "{employerFeedback?.comments || 'Technical assessment score was below the required threshold.'}"
          </p>
          <div className="text-[10px] text-[#9A3412]/80 font-medium">Feedback recorded on {employerFeedback?.providedDate}</div>
        </div>

        {/* 2. PLATFORM ANALYSIS BLOCK (Soft Blue Box as requested) */}
        <div className="p-5 bg-[#DCEBFF]/50 border border-[#BFD9FF] rounded-2xl space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-extrabold text-[#1E3A8A] text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#1E3A8A]" /> Platform Analysis
            </h3>
            <span className="text-[10px] font-bold uppercase bg-[#1E3A8A] text-white px-2.5 py-0.5 rounded-full">
              Generated from profile data
            </span>
          </div>

          <p className="text-xs text-[#1E3A8A] font-medium">
            This analysis identifies areas where your verified profile was weaker than the role requirements.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse border border-[#BFD9FF] bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#DCEBFF] border-b border-[#BFD9FF] text-[#1E3A8A] font-bold uppercase text-[10px]">
                  <th className="p-3">Skill Requirement</th>
                  <th className="p-3">Your Score</th>
                  <th className="p-3">Required Cutoff</th>
                  <th className="p-3 text-right">Variance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#BFD9FF]/40">
                {platformAnalysis?.gapsIdentified.map((gap, idx) => (
                  <tr key={idx} className="hover:bg-[#DCEBFF]/20">
                    <td className="p-3 font-bold text-[#24324A]">{gap.skillName}</td>
                    <td className="p-3 font-bold text-[#9A3412]">{gap.studentScore}%</td>
                    <td className="p-3 font-semibold text-[#5A6E85]">{gap.requiredScore}%</td>
                    <td className="p-3 text-right font-bold text-[#9A3412]">
                      -{gap.requiredScore - gap.studentScore}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. YOUR NEXT OPPORTUNITY BLOCK (Soft Yellow Box as requested) */}
        <div className="p-6 bg-[#FFF0B8] border border-[#FDE074] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#854D0E] bg-white px-2.5 py-0.5 rounded-full border border-[#FDE074]">
              YOUR NEXT OPPORTUNITY
            </span>
            <p className="text-xs text-[#854D0E] mt-2 font-bold leading-relaxed">
              Improving DSA and React could increase your suitability for 8 currently listed target roles.
            </p>
            <div className="text-[11px] text-[#065F46] mt-1 font-extrabold">
              Current Suitability: {platformAnalysis?.currentSuitability}% → Potential: {platformAnalysis?.potentialSuitability}% (+16%)
            </div>
          </div>

          <button
            onClick={() => setActiveTab('assessments')}
            className="px-6 py-3 bg-[#24324A] hover:bg-[#1A2536] text-white rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 shadow-xs hover:scale-[1.02]"
          >
            <span>View Improvement Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
