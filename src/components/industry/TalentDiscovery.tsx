import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { FeatureBadge } from '../common/FeatureBadge';

export const TalentDiscovery: React.FC = () => {
  const { candidates, setEvidenceModalData, shortlistCandidate } = useEcosystem();
  const [shortlistedMap, setShortlistedMap] = useState<Record<string, boolean>>({});

  const handleShortlist = (id: string) => {
    setShortlistedMap(prev => ({ ...prev, [id]: true }));
    shortlistCandidate(id);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-900">Verified Talent Discovery Engine</h1>
            <FeatureBadge text="RANKED MATCHING" variant="slate" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Candidates ranked according to your published job matrix requirement cutoffs.
          </p>
        </div>

        <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
          37 Verified Candidate Matches
        </span>
      </div>

      {/* Clean Candidate Ranking Table */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center text-xs font-bold text-slate-700">
          <span>RANKED CANDIDATE MATRIX</span>
          <span className="font-mono text-slate-500">FILTERED BY ABC TECH SOFTWARE DEVELOPER ROLE</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-200 text-slate-500 font-semibold uppercase text-[10px]">
                <th className="py-3 px-4">Rank & Name</th>
                <th className="py-3 px-4">College & Degree</th>
                <th className="py-3 px-4">Suitability Match</th>
                <th className="py-3 px-4">Verification Strength</th>
                <th className="py-3 px-4">Demonstrated Proof</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {candidates.map((cand, idx) => {
                const isShortlisted = shortlistedMap[cand.id];

                return (
                  <tr key={cand.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="font-mono text-slate-400 font-bold text-xs">#{idx + 1}</div>
                        <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center font-mono shrink-0">
                          {cand.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{cand.name}</div>
                          <div className="text-[10px] text-slate-500 font-mono">ID: {cand.id}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 text-slate-600">
                      <div>{cand.college}</div>
                      <div className="text-[11px] text-slate-400">{cand.degree} ({cand.graduationYear})</div>
                    </td>

                    <td className="py-3.5 px-4 font-mono">
                      <span className="text-base font-bold text-slate-900">{cand.suitabilityForJob}%</span>
                      <span className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-300 px-1.5 py-0.5 rounded font-bold ml-2">HIGH</span>
                    </td>

                    <td className="py-3.5 px-4 font-mono font-bold text-slate-800">
                      {cand.verificationStrength}
                    </td>

                    <td className="py-3.5 px-4 text-slate-600 font-mono text-[11px]">
                      {cand.projectsCount} Repos • {cand.challengesCompletedCount} Challenges • {cand.certificationsCount} Certs
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEvidenceModalData({ title: `${cand.name} Verification Audit`, candidate: cand })}
                          className="px-2.5 py-1 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 rounded text-xs font-semibold"
                        >
                          View Evidence
                        </button>

                        {isShortlisted ? (
                          <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-semibold border border-emerald-300">
                            ✓ Shortlisted
                          </span>
                        ) : (
                          <button
                            onClick={() => handleShortlist(cand.id)}
                            className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold"
                          >
                            Shortlist
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
