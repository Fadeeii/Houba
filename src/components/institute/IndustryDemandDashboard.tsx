import React from 'react';
import { initialSkillDemands } from '../../data/mockData';
import { TrendingUp } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const IndustryDemandDashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Real-Time Industry Skill Demand</h1>
            <FeatureBadge text="LIVE RECRUITER METRICS" variant="emerald" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Aggregated hiring requirements posted across 436 industry partner companies.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900">Top In-Demand Market Competencies</h3>

        <div className="space-y-4">
          {initialSkillDemands.map((sd, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold">
                <span className="text-slate-900 text-sm flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                  {sd.skillName}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-mono text-[11px]">{sd.growthRate}</span>
                  <span className="text-slate-600 font-mono">{sd.openJobsCount} Active Job Openings</span>
                </div>
              </div>

              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-violet-600 h-full rounded-full" style={{ width: `${sd.demandPercentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
