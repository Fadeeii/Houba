import React from 'react';
import { FeatureBadge } from '../common/FeatureBadge';

export const PlacementAnalytics: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Placement & Rejection Analytics</h1>
            <FeatureBadge text="AGGREGATED INSIGHTS" variant="blue" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Auditing campus placement outcomes and identifying recurring technical bottlenecks.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Applications</div>
          <div className="text-2xl font-extrabold text-slate-900 font-mono">1,240</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Interviews</div>
          <div className="text-2xl font-extrabold text-indigo-600 font-mono">620</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Offers</div>
          <div className="text-2xl font-extrabold text-purple-600 font-mono">230</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Placements</div>
          <div className="text-2xl font-extrabold text-emerald-600 font-mono">185</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Rejections</div>
          <div className="text-2xl font-extrabold text-rose-600 font-mono">410</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
        <h3 className="text-base font-bold text-slate-900">Common Skill Gaps Behind Rejections</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 space-y-2">
            <div className="flex justify-between text-xs font-bold text-rose-900">
              <span>Data Structures & Algorithms</span>
              <span className="font-mono">47% of rejections</span>
            </div>
            <p className="text-xs text-rose-800">Students struggle with dynamic programming & tree complexity bounds during live coding rounds.</p>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
            <div className="flex justify-between text-xs font-bold text-amber-900">
              <span>React.js Architecture</span>
              <span className="font-mono">38% of rejections</span>
            </div>
            <p className="text-xs text-amber-800">Lack of verified level 4 demonstrated GitHub project repositories.</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-900">
              <span>Technical Communication</span>
              <span className="font-mono">31% of rejections</span>
            </div>
            <p className="text-xs text-slate-700">Articulating architectural decisions during system design interviews.</p>
          </div>

          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 space-y-2">
            <div className="flex justify-between text-xs font-bold text-purple-900">
              <span>Cloud Computing</span>
              <span className="font-mono">19% of rejections</span>
            </div>
            <p className="text-xs text-purple-800">Limited hands-on containerization and AWS/Azure deployment laboratory exposure.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
