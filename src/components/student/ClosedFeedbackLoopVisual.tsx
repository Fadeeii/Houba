import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { ArrowRight } from 'lucide-react';

export const ClosedFeedbackLoopVisual: React.FC = () => {
  const { setActiveTab } = useEcosystem();

  const loopSteps = [
    { num: '01', title: 'Application', desc: 'Student applies to job with verified skill proof' },
    { num: '02', title: 'Outcome', desc: 'Employer logs selection or non-selection decision' },
    { num: '03', title: 'Feedback', desc: 'Structured feedback and test scores captured' },
    { num: '04', title: 'Skill Gap', desc: 'System pinpoints specific requirement deficiencies' },
    { num: '05', title: 'Improvement', desc: 'Student completes targeted assessment / project' },
    { num: '06', title: 'Verification', desc: 'Skill status upgrades to Level 3 / Level 4' },
    { num: '07', title: 'New Suitability', desc: 'Job suitability increases from 72% → 88%' },
  ];

  return (
    <div className="space-y-6">
      
      <div className="bg-white p-6 rounded-lg border border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">Closed Feedback Loop Cycle</h1>
        <p className="text-xs text-slate-500 mt-1">
          Editorial process timeline showing how application outcomes drive continuous profile enhancement.
        </p>
      </div>

      {/* Clean Editorial Vertical Timeline */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="text-xs font-mono uppercase font-bold text-slate-500">FEEDBACK LOOP ARCHITECTURE</div>
          <h2 className="text-lg font-bold text-slate-900 mt-0.5">Application Outcome to Verified Re-Match</h2>
        </div>

        <div className="space-y-4">
          {loopSteps.map((st, idx) => (
            <div key={idx} className="flex items-start gap-4 p-3 bg-slate-50 border border-slate-200 rounded text-xs">
              <div className="font-mono font-bold text-slate-400 text-sm shrink-0 w-8">{st.num}</div>
              <div className="space-y-0.5 flex-1">
                <div className="font-bold text-slate-900 text-sm">{st.title}</div>
                <div className="text-slate-600">{st.desc}</div>
              </div>
              {idx < loopSteps.length - 1 && (
                <div className="text-slate-300 font-mono hidden sm:block">↓</div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-4 flex justify-end">
          <button
            onClick={() => setActiveTab('assessments')}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold flex items-center gap-1.5 shadow-xs"
          >
            <span>Improve Profile Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
