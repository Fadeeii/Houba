import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Plus, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const MySkills: React.FC = () => {
  const { skills, setEvidenceModalData, setActiveTab } = useEcosystem();

  return (
    <div className="space-y-6">
      
      {/* Cute Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#EAE6DB] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDF4E7] text-[#065F46] text-xs font-bold border border-[#B8E6CB]">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED SKILL PORTFOLIO</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#24324A] mt-2">My Skill Profile</h1>
          <p className="text-xs text-[#5A6E85] mt-1 font-medium">
            Skills verified through standardized quizzes, certificate hashes, live GitHub repos, and industry challenges.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('assessments')}
          className="px-5 py-2.5 bg-[#24324A] text-white hover:bg-[#1A2536] rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 shadow-xs hover:scale-[1.02]"
        >
          <Plus className="w-4 h-4" />
          <span>Assess New Skill</span>
        </button>
      </div>

      {/* Clean Skills Table */}
      <div className="bg-white rounded-2xl border border-[#EAE6DB] overflow-hidden shadow-xs">
        <div className="p-4 border-b border-[#F4F0E6] bg-[#FFFDF7] flex justify-between items-center text-xs font-bold text-[#24324A]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#1E3A8A]" /> VERIFIED AUDIT LEDGER
          </span>
          <span className="bg-[#DCEBFF] text-[#1E3A8A] px-2.5 py-1 rounded-full font-bold">
            {skills.length} SKILLS ACTIVE
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#EAE6DB] text-[#8A9EB5] font-bold uppercase text-[10px] bg-[#FFFDF7]">
                <th className="py-3.5 px-4">Skill Name</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Score</th>
                <th className="py-3.5 px-4">Verification Level</th>
                <th className="py-3.5 px-4">Evidence</th>
                <th className="py-3.5 px-4 text-right">Audit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F0E6]">
              {skills.map((skill) => {
                const isDemonstrated = skill.verificationLevel === 4;
                const isAssessed = skill.verificationLevel >= 3;

                return (
                  <tr key={skill.id} className="hover:bg-[#FFFDF7] transition-colors">
                    <td className="py-4 px-4 font-bold text-[#24324A]">
                      <div className="flex items-center gap-2">
                        {isDemonstrated && <CheckCircle2 className="w-4 h-4 text-[#065F46]" />}
                        <span>{skill.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#5A6E85] font-medium">{skill.category}</td>
                    <td className="py-4 px-4 font-bold text-[#24324A]">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-[#F4F0E6] h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${isDemonstrated ? 'bg-[#065F46]' : isAssessed ? 'bg-[#1E3A8A]' : 'bg-[#9A3412]'}`}
                            style={{ width: `${skill.score}%` }}
                          ></div>
                        </div>
                        <span>{skill.score}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 border ${
                        isDemonstrated ? 'bg-[#DDF4E7] text-[#065F46] border-[#B8E6CB]' :
                        isAssessed ? 'bg-[#DCEBFF] text-[#1E3A8A] border-[#BFD9FF]' :
                        'bg-[#FFE0D2] text-[#9A3412] border-[#FFC9B5]'
                      }`}>
                        Level {skill.verificationLevel}: {isDemonstrated ? 'Demonstrated' : isAssessed ? 'Assessed' : 'Certified'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[#5A6E85] font-mono text-[11px]">
                      {skill.evidence.certificationsCount || 1} Certs • {skill.evidence.projectsCount || 0} Repos • {skill.evidence.industryChallengesCount || 0} Challenges
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => setEvidenceModalData({ title: `${skill.name} Evidence Audit Report`, skill })}
                        className="px-3 py-1.5 bg-[#F4F0E6] text-[#24324A] hover:bg-[#DCEBFF] hover:text-[#1E3A8A] rounded-xl text-xs font-bold transition-all"
                      >
                        View Audit →
                      </button>
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
