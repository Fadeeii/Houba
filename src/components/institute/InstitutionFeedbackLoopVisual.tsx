import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Repeat, CheckCircle2, ArrowRight } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const InstitutionFeedbackLoopVisual: React.FC = () => {
  const { setActiveTab } = useEcosystem();

  const instSteps = [
    '1. Industry Requirements Matrix',
    '2. Skill Demand Analysis',
    '3. Aggregated Student Skill Gaps',
    '4. Platform Recommendation',
    '5. Curriculum / Workshop Upgrade',
    '6. Peer Mentored Training',
    '7. Student Skill Re-Verification',
    '8. Enhanced Job Suitability Match',
    '9. Higher Placement Conversion'
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Institutional Feedback Loop Cycle</h1>
            <FeatureBadge text="ECOSYSTEM ALIGNMENT" variant="emerald" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Dynamic cycle updating college training programs based on live market recruitment feedback.
          </p>
        </div>
      </div>

      {/* Visual Diagram */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="w-12 h-12 bg-violet-600/30 text-violet-400 rounded-2xl flex items-center justify-center mx-auto border border-violet-500/30">
            <Repeat className="w-6 h-6 animate-spin-slow" />
          </div>
          <h2 className="text-2xl font-extrabold text-white">Institutional Curriculum Intelligence Loop</h2>
          <p className="text-xs text-slate-400">Transforming raw placement rejections into proactive syllabus enhancements.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {instSteps.map((step, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-violet-500 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-violet-600 text-white">Phase {idx + 1}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="font-bold text-white text-sm mt-1">{step}</h3>
            </div>
          ))}
        </div>

        <div className="pt-4 flex justify-center">
          <button
            onClick={() => setActiveTab('curriculum-gap')}
            className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold transition-all shadow-xl flex items-center gap-2"
          >
            <span>Execute Curriculum Gap Action</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
