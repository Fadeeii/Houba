import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { FeatureBadge } from '../common/FeatureBadge';

export const MasterFeedbackLoopVisualization: React.FC = () => {
  const { switchRole } = useEcosystem();

  const cycleSteps = [
    { num: '01', title: 'INDUSTRY', desc: 'Defines skill requirement matrices & market demand cutoffs' },
    { num: '02', title: 'JOB REQUIREMENTS', desc: 'Sets quantitative score thresholds per competency' },
    { num: '03', title: 'STUDENT MATCHING', desc: 'Calculates verified Job Suitability % mathematically' },
    { num: '04', title: 'APPLICATION', desc: 'Student submits application backed by evidence portfolio' },
    { num: '05', title: 'EMPLOYER FEEDBACK', desc: 'Recruiter records structured interview feedback' },
    { num: '06', title: 'SKILL GAP ANALYSIS', desc: 'System isolates exact requirement deficiencies' },
    { num: '07', title: 'STUDENT IMPROVEMENT', desc: 'Student completes targeted assessment / project' },
    { num: '08', title: 'VERIFICATION ENGINE', desc: 'Skill upgrades from Level 2 Certified to Level 4 Demonstrated' },
    { num: '09', title: 'NEW SUITABILITY', desc: 'Job suitability increases from 72% → 88%' },
    { num: '10', title: 'HIRING OUTCOME', desc: 'Offer confirmed and placement recorded' },
    { num: '11', title: 'AGGREGATED INSIGHTS', desc: 'System aggregates campus rejection pattern metrics' },
    { num: '12', title: 'INSTITUTE HUB', desc: 'Curriculum Gap Analyzer receives automated alerts' },
    { num: '13. TRAINING UPGRADE', desc: 'College creates practical lab training & peer mentor modules' },
    { num: '14. GRADUATION MATCH', desc: 'Batches graduate with industry-aligned verified skills' },
  ];

  return (
    <div className="space-y-6">
      
      <div className="bg-white p-6 rounded-lg border border-slate-200">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-900">Master Ecosystem Feedback Loop</h1>
          <FeatureBadge text="MASTER PRESENTATION DIAGRAM" variant="slate" />
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Demonstrating that SkillBridge is an unbroken multi-stakeholder ecosystem.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="text-xs font-mono uppercase font-bold text-slate-500">CONTINUOUS ECOSYSTEM CYCLE</div>
          <h2 className="text-lg font-bold text-slate-900 mt-0.5">14-Stage Industry-Student-Institute Integration</h2>
        </div>

        <div className="space-y-3">
          {cycleSteps.map((st, idx) => (
            <div key={idx} className="flex items-start gap-4 p-3 bg-slate-50 border border-slate-200 rounded text-xs">
              <div className="font-mono font-bold text-slate-400 text-sm shrink-0 w-8">{st.num}</div>
              <div className="space-y-0.5 flex-1">
                <div className="font-bold text-slate-900 text-sm">{st.title}</div>
                <div className="text-slate-600">{st.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2 justify-center text-xs">
          <button onClick={() => switchRole('student')} className="px-4 py-2 bg-slate-900 text-white rounded font-semibold hover:bg-slate-800">
            Student View
          </button>
          <button onClick={() => switchRole('institute')} className="px-4 py-2 bg-white text-slate-800 border border-slate-300 rounded font-semibold hover:bg-slate-50">
            Institute View
          </button>
          <button onClick={() => switchRole('industry')} className="px-4 py-2 bg-white text-slate-800 border border-slate-300 rounded font-semibold hover:bg-slate-50">
            Industry View
          </button>
        </div>
      </div>

    </div>
  );
};
