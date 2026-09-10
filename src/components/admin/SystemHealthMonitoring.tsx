import React from 'react';
import { systemHealthData } from '../../data/mockData';
import { CheckCircle2, Server } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const SystemHealthMonitoring: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Ecosystem System Health</h1>
            <FeatureBadge text="LIVE INFRASTRUCTURE" variant="emerald" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time operational status for matching engines, assessment quiz execution, and payment microservices.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {systemHealthData.map((sh, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Server className="w-4 h-4 text-indigo-600" />
                {sh.service}
              </span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[10px] rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Operational
              </span>
            </div>

            <div className="flex justify-between text-xs text-slate-600 font-mono">
              <span>Avg Latency: <strong>{sh.latency}</strong></span>
              <span>Uptime: <strong className="text-emerald-700">{sh.uptime}</strong></span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
