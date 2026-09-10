import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { X, ShieldCheck, ExternalLink } from 'lucide-react';
import { FeatureBadge } from './FeatureBadge';

export const EvidenceModal: React.FC = () => {
  const { evidenceModalData, setEvidenceModalData } = useEcosystem();

  if (!evidenceModalData) return null;

  const { title, skill, candidate } = evidenceModalData;
  const targetSkill = skill || (candidate && candidate.topVerifiedSkills[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full border border-slate-300 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold">{title}</h3>
                <FeatureBadge text="VERIFIED AUDIT" variant="emerald" />
              </div>
              <div className="text-xs text-slate-400">Cryptographic Proof Ledger • Level {targetSkill?.verificationLevel || 4} Verification</div>
            </div>
          </div>
          <button
            onClick={() => setEvidenceModalData(null)}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5 text-xs text-slate-800 max-h-[75vh] overflow-y-auto">
          
          {/* Summary bar */}
          <div className="grid grid-cols-4 gap-3 bg-slate-50 p-3 rounded border border-slate-200 text-center font-mono">
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Assessment Score</div>
              <div className="text-lg font-bold text-slate-900">{targetSkill?.evidence?.assessmentScore || 91}%</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Certificates</div>
              <div className="text-lg font-bold text-slate-900">{targetSkill?.evidence?.certificationsCount || 2} Verified</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Live Projects</div>
              <div className="text-lg font-bold text-slate-900">{targetSkill?.evidence?.projectsCount || 3} Repos</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Challenges</div>
              <div className="text-lg font-bold text-slate-900">{targetSkill?.evidence?.industryChallengesCount || 1} Passed</div>
            </div>
          </div>

          {/* Certificates Table */}
          <div>
            <div className="font-bold text-slate-900 mb-2 uppercase text-[11px] tracking-wider text-slate-500">Verified Certifications</div>
            <table className="w-full text-left border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 font-semibold text-slate-700">
                  <th className="p-2">Certificate Title</th>
                  <th className="p-2">Issuing Authority</th>
                  <th className="p-2">Date Verified</th>
                  <th className="p-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {(targetSkill?.evidence?.certifications || [
                  { title: 'Advanced Python Professional', issuer: 'Python Institute', date: 'Jan 2026', verifyUrl: '#' },
                  { title: 'Data Analysis with Python', issuer: 'Coursera & IBM', date: 'Nov 2025', verifyUrl: '#' }
                ]).map((cert, i) => (
                  <tr key={i}>
                    <td className="p-2 font-medium">{cert.title}</td>
                    <td className="p-2 text-slate-600">{cert.issuer}</td>
                    <td className="p-2 font-mono text-[11px] text-slate-500">{cert.date}</td>
                    <td className="p-2 text-right">
                      <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded font-semibold text-[10px]">✓ Authenticated</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* GitHub Repos */}
          <div>
            <div className="font-bold text-slate-900 mb-2 uppercase text-[11px] tracking-wider text-slate-500">Demonstrated Code Artifacts</div>
            <div className="space-y-2">
              {(targetSkill?.evidence?.projects || [
                { title: 'Automated Log Analyzer API', techStack: ['Python', 'FastAPI', 'PostgreSQL'], url: '#', repoUrl: 'github.com/anupama/log-analyzer' },
                { title: 'Predictive Sales Dashboard', techStack: ['Python', 'Pandas'], url: '#', repoUrl: 'github.com/anupama/sales-ai' }
              ]).map((proj, i) => (
                <div key={i} className="p-3 bg-white border border-slate-200 rounded flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-slate-900">{proj.title}</div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">{proj.techStack.join(' • ')}</div>
                  </div>
                  <span className="font-mono text-slate-700 text-[11px] flex items-center gap-1 hover:underline">
                    {proj.repoUrl} <ExternalLink className="w-3 h-3 text-slate-400" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hash */}
          <div className="p-3 bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-600 flex justify-between">
            <span>AUDIT SHA-256: 0x8F92...B31A</span>
            <span>Audited: {targetSkill?.evidence?.lastVerifiedDate || 'Recently'}</span>
          </div>

        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={() => setEvidenceModalData(null)}
            className="px-4 py-1.5 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800"
          >
            Close Audit Report
          </button>
        </div>

      </div>
    </div>
  );
};
