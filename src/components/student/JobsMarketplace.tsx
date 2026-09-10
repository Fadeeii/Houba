import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { CheckCircle2, AlertTriangle, Search, Filter, ArrowRight } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const JobsMarketplace: React.FC = () => {
  const { jobs, applyToJob, applications, setActiveTab } = useEcosystem();
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || job.workplace.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Verified Job Opportunities</h1>
            <FeatureBadge text="SUITABILITY RANKED" variant="purple" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Jobs are ranked according to your platform-verified skill suitability match percentage.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search job title or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-slate-800 focus:outline-none focus:border-indigo-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
          <span className="text-xs text-slate-500 font-medium hidden sm:block">Workplace:</span>
          {['all', 'remote', 'hybrid', 'on-site'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors ${
                filterType === type ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredJobs.map((job) => {
          const isApplied = applications.some(a => a.jobId === job.id);

          return (
            <div key={job.id} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 transition-all shadow-xs space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-start gap-4">
                  <img src={job.logo} alt={job.company} className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-xs" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                      <span className="text-[10px] bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded">{job.type}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{job.company} • {job.location} • <strong className="text-slate-800">{job.salary}</strong></p>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center shrink-0">
                  <div className="text-2xl font-extrabold text-emerald-600 font-mono">{job.suitabilityScore}%</div>
                  <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Suitability Match</div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{job.description}</p>

              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Verified Skill Requirements</div>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                        req.meetsRequirement
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}
                    >
                      {req.meetsRequirement ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />}
                      <span>{req.skillName} (≥{req.requiredScore}%)</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveTab('job-suitability')}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
                >
                  Check Detailed Suitability Matrix →
                </button>

                {isApplied ? (
                  <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold border border-emerald-300">
                    ✓ Applied (Under Evaluation)
                  </span>
                ) : (
                  <button
                    onClick={() => {
                      applyToJob(job.id);
                      setActiveTab('applications');
                    }}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shadow-md flex items-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
