import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';

export const SkillVerification: React.FC = () => {
  const { skills, setEvidenceModalData } = useEcosystem();

  const levels = [
    { level: 1, title: 'Level 1: Claimed', desc: 'Self-reported proficiency on profile. Unverified.' },
    { level: 2, title: 'Level 2: Certified', desc: 'Backed by third-party course or institute certificates.' },
    { level: 3, title: 'Level 3: Assessed', desc: 'Verified via standardized timed platform coding exams.' },
    { level: 4, title: 'Level 4: Demonstrated', desc: 'Proven through audited GitHub repos & company challenges.' }
  ];

  return (
    <div className="space-y-6">
      
      <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Skill Verification Standard</h1>
          <p className="text-xs text-slate-500 mt-1">
            SkillBridge replaces generic resume buzzwords with a 4-level objective verification framework.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {levels.map((lvl) => (
            <div key={lvl.level} className="p-3 rounded border border-slate-200 bg-slate-50 space-y-1">
              <div className="font-bold text-xs text-slate-900">{lvl.title}</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">{lvl.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center text-xs font-bold text-slate-700">
          <span>PORTFOLIO VERIFICATION AUDIT LEDGER</span>
          <span className="font-mono text-slate-500">5 ACTIVE SKILLS EVALUATED</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-white border-b border-slate-200 text-slate-500 font-semibold uppercase text-[10px]">
                <th className="py-3 px-4">Skill Name</th>
                <th className="py-3 px-4">Verification Level</th>
                <th className="py-3 px-4">Score</th>
                <th className="py-3 px-4">Demonstrated Proof</th>
                <th className="py-3 px-4">Last Audit</th>
                <th className="py-3 px-4 text-right">Audit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {skills.map((skill) => (
                <tr key={skill.id} className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">{skill.name}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                      skill.verificationLevel === 4 ? 'bg-emerald-50 text-emerald-800 border-emerald-300' :
                      skill.verificationLevel === 3 ? 'bg-blue-50 text-blue-800 border-blue-300' :
                      'bg-amber-50 text-amber-900 border-amber-300'
                    }`}>
                      Level {skill.verificationLevel}: {skill.verificationLevel === 4 ? 'Demonstrated' : skill.verificationLevel === 3 ? 'Assessed' : 'Certified'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-800">{skill.score}%</td>
                  <td className="py-3.5 px-4 text-slate-600 font-mono text-[11px]">
                    {skill.evidence.certificationsCount || 1} Certs • {skill.evidence.projectsCount || 0} Repos
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">{skill.evidence.lastVerifiedDate}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => setEvidenceModalData({ title: `${skill.name} Verification Evidence`, skill })}
                      className="text-xs font-semibold text-slate-900 hover:underline"
                    >
                      View Evidence →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
