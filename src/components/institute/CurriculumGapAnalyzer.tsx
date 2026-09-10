import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Sparkles, Plus } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const CurriculumGapAnalyzer: React.FC = () => {
  const { curriculumGaps, createTrainingProgram } = useEcosystem();

  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Curriculum Gap Analyzer</h1>
            <FeatureBadge text="CORE INNOVATION" variant="purple" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Automated platform intelligence comparing Industry Demand + Student Skill Audits + Current Syllabus Coverage.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {curriculumGaps.map((gap) => {
          const isScheduled = gap.status === 'Program Scheduled';

          return (
            <div key={gap.id} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{gap.subject}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      gap.industryDemandLevel === 'CRITICAL' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {gap.industryDemandLevel} DEMAND GAP
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Target Batches: {gap.targetBatches.join(', ')}</p>
                </div>

                <div className="flex items-center gap-2">
                  {isScheduled ? (
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold border border-emerald-300">
                      ✓ Program Scheduled
                    </span>
                  ) : (
                    <button
                      onClick={() => createTrainingProgram(gap.id)}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Create Training Program</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-slate-500 font-medium">Industry Market Demand</div>
                  <div className="text-sm font-bold text-rose-600 mt-0.5">{gap.industryDemandLevel}</div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-slate-500 font-medium">Student Proficiency Audit</div>
                  <div className="text-sm font-bold text-amber-600 mt-0.5">{gap.studentProficiency}</div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-slate-500 font-medium">Current Curriculum Coverage</div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">{gap.currentCurriculumCoverage}</div>
                </div>
              </div>

              <div className="p-4 bg-indigo-50/70 rounded-xl border border-indigo-200 space-y-1 text-xs text-indigo-950">
                <div className="font-bold flex items-center gap-1.5 text-indigo-900">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  System Algorithmic Recommendation:
                </div>
                <p className="leading-relaxed font-medium">"{gap.recommendation}"</p>
                <div className="text-[10px] text-indigo-600 pt-1">* System recommendation based on 420 active industry job postings and Nit campus student assessment data.</div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
