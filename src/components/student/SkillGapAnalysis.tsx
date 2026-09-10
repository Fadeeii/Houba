import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { ArrowRight, Sparkles, Target } from 'lucide-react';

export const SkillGapAnalysis: React.FC = () => {
  const { setActiveTab } = useEcosystem();
  const [selectedRole, setSelectedRole] = useState<'sw_dev' | 'data_analyst' | 'ml_eng' | 'cyber'>('sw_dev');

  const roleSpecs = {
    sw_dev: {
      title: 'Software Developer (Full Stack)',
      suitability: 72,
      primaryGapSkill: 'React.js',
      yourScore: 64,
      requiredScore: 70,
      gapPct: -6,
      whyMatters: 'React.js is required by 8 of your 12 selected target roles.',
      nextSteps: [
        'Complete React assessment to verify Level 3 proficiency',
        'Build one project with dynamic state management',
        'Attempt an industry coding challenge'
      ],
      requirements: [
        { name: 'Python', yourScore: 91, requiredScore: 75, gap: '+16%', status: 'Met' },
        { name: 'SQL & Relational DBs', yourScore: 82, requiredScore: 70, gap: '+12%', status: 'Met' },
        { name: 'Data Structures & Algorithms', yourScore: 61, requiredScore: 70, gap: '-9%', status: 'Gap' },
        { name: 'React.js', yourScore: 64, requiredScore: 70, gap: '-6%', status: 'Gap' },
        { name: 'Demonstrated Projects', yourScore: 3, requiredScore: 2, gap: '+1 Repo', status: 'Met' }
      ]
    },
    data_analyst: {
      title: 'Data Analyst',
      suitability: 89,
      primaryGapSkill: 'Tableau / PowerBI',
      yourScore: 68,
      requiredScore: 75,
      gapPct: -7,
      whyMatters: 'Data visualization dashboards are required for 6 of 8 analytics roles.',
      nextSteps: [
        'Complete Data Visualization fundamentals assessment',
        'Build custom Pandas & Tableau dashboards'
      ],
      requirements: [
        { name: 'Python', yourScore: 91, requiredScore: 80, gap: '+11%', status: 'Met' },
        { name: 'SQL & Relational DBs', yourScore: 82, requiredScore: 75, gap: '+7%', status: 'Met' },
        { name: 'Tableau / PowerBI', yourScore: 68, requiredScore: 75, gap: '-7%', status: 'Gap' }
      ]
    },
    ml_eng: {
      title: 'Machine Learning Engineer',
      suitability: 65,
      primaryGapSkill: 'PyTorch',
      yourScore: 52,
      requiredScore: 75,
      gapPct: -23,
      whyMatters: 'PyTorch model training is specified in 90% of ML job matrices.',
      nextSteps: [
        'Complete Machine Learning specialization quiz',
        'Submit PyTorch neural network project repo'
      ],
      requirements: [
        { name: 'Python', yourScore: 91, requiredScore: 85, gap: '+6%', status: 'Met' },
        { name: 'PyTorch / TensorFlow', yourScore: 52, requiredScore: 75, gap: '-23%', status: 'Gap' }
      ]
    },
    cyber: {
      title: 'Cybersecurity Analyst',
      suitability: 58,
      primaryGapSkill: 'Network Security',
      yourScore: 50,
      requiredScore: 75,
      gapPct: -25,
      whyMatters: 'Network protocols & wireshark audits are baseline requirements.',
      nextSteps: ['Complete Network Security certification audit'],
      requirements: [
        { name: 'Network Security', yourScore: 50, requiredScore: 75, gap: '-25%', status: 'Gap' },
        { name: 'Python', yourScore: 91, requiredScore: 70, gap: '+21%', status: 'Met' }
      ]
    }
  };

  const currentSpec = roleSpecs[selectedRole];

  return (
    <div className="space-y-6">
      
      {/* Header & Role Selector */}
      <div className="bg-white p-6 rounded-2xl border border-[#EAE6DB] shadow-xs space-y-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE0D2] text-[#9A3412] text-xs font-bold border border-[#FFC9B5]">
            <Target className="w-3.5 h-3.5" />
            <span>PERSONAL PROGRESS PLANNER</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#24324A] mt-2">Here's what you can improve next.</h1>
          <p className="text-xs text-[#5A6E85] font-medium mt-1">
            Compare your verified skill scores against real employer target cutoffs.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { id: 'sw_dev', name: 'Software Developer' },
            { id: 'data_analyst', name: 'Data Analyst' },
            { id: 'ml_eng', name: 'ML Engineer' },
            { id: 'cyber', name: 'Cybersecurity Analyst' },
          ].map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRole(r.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedRole === r.id
                  ? 'bg-[#24324A] text-white border-[#24324A] shadow-xs'
                  : 'bg-[#F4F0E6] text-[#5A6E85] border-transparent hover:bg-white hover:text-[#24324A]'
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>

      {/* Large Central Comparison Section (Soft Peach Accent) */}
      <div className="bg-white rounded-2xl border border-[#EAE6DB] p-6 space-y-6 shadow-xs">
        
        <div className="border-b border-[#F4F0E6] pb-4 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A3412] bg-[#FFE0D2] px-2.5 py-0.5 rounded-full border border-[#FFC9B5]">
              Primary Target Gap
            </span>
            <h2 className="text-xl font-extrabold text-[#24324A] mt-1">{currentSpec.primaryGapSkill} — {currentSpec.title}</h2>
          </div>
          <div className="text-right">
            <div className="text-xs text-[#5A6E85] font-medium">Overall Suitability</div>
            <div className="text-2xl font-extrabold text-[#1E3A8A] bg-[#DCEBFF] px-3 py-0.5 rounded-xl border border-[#BFD9FF] inline-block mt-0.5">
              {currentSpec.suitability}%
            </div>
          </div>
        </div>

        {/* YOUR SKILL 64% | REQUIRED 70% | GAP -6% in Soft Peach Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center bg-[#FFE0D2]/50 p-6 rounded-2xl border border-[#FFC9B5]">
          <div className="bg-white p-4 rounded-xl border border-[#FFC9B5]">
            <div className="text-xs text-[#5A6E85] font-bold uppercase">Your Level</div>
            <div className="text-3xl font-extrabold text-[#24324A] mt-1">{currentSpec.yourScore}%</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#FFC9B5]">
            <div className="text-xs text-[#5A6E85] font-bold uppercase">Required Target</div>
            <div className="text-3xl font-extrabold text-[#24324A] mt-1">{currentSpec.requiredScore}%</div>
          </div>
          <div className="bg-[#9A3412] text-white p-4 rounded-xl shadow-xs">
            <div className="text-xs text-white/80 font-bold uppercase">Skill Gap</div>
            <div className="text-3xl font-extrabold mt-1">{currentSpec.gapPct}%</div>
          </div>
        </div>

        {/* Horizontal comparison bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold text-[#24324A]">
            <span>Verified Score vs Target Cutoff</span>
            <span>{currentSpec.yourScore}% / {currentSpec.requiredScore}%</span>
          </div>
          <div className="w-full bg-[#F4F0E6] h-4 rounded-full overflow-hidden relative border border-[#EAE6DB]">
            <div className="bg-[#1E3A8A] h-full rounded-full" style={{ width: `${currentSpec.yourScore}%` }}></div>
            <div className="absolute top-0 bottom-0 w-1 bg-[#9A3412]" style={{ left: `${currentSpec.requiredScore}%` }}></div>
          </div>
        </div>

        {/* Why this matters */}
        <div className="p-4 bg-[#FFF0B8]/50 border border-[#FDE074] rounded-xl space-y-1 text-xs">
          <h3 className="font-extrabold text-[#854D0E] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Why this matters
          </h3>
          <p className="text-[#854D0E] font-medium">"{currentSpec.whyMatters}"</p>
        </div>

        {/* What to do next (Numbered steps as requested) */}
        <div className="p-5 bg-[#FFFDF7] border border-[#EAE6DB] rounded-2xl space-y-3">
          <h3 className="font-extrabold text-[#24324A] text-sm">Your next steps</h3>
          <div className="space-y-2.5 text-xs text-[#24324A] font-semibold">
            {currentSpec.nextSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-[#EAE6DB] rounded-xl">
                <span className="w-6 h-6 rounded-full bg-[#DCEBFF] text-[#1E3A8A] font-extrabold text-xs flex items-center justify-center shrink-0">
                  {idx === 0 ? '①' : idx === 1 ? '②' : '③'}
                </span>
                <span className="mt-0.5">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Requirements Table */}
        <div>
          <h3 className="font-extrabold text-[#24324A] text-sm mb-3">Itemized Requirement Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse border border-[#EAE6DB] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#FFFDF7] border-b border-[#EAE6DB] text-[#8A9EB5] font-bold uppercase text-[10px]">
                  <th className="p-3">Requirement</th>
                  <th className="p-3">Your Level</th>
                  <th className="p-3">Required</th>
                  <th className="p-3">Variance</th>
                  <th className="p-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F0E6]">
                {currentSpec.requirements.map((req, idx) => (
                  <tr key={idx} className="hover:bg-[#FFFDF7]">
                    <td className="p-3 font-bold text-[#24324A]">{req.name}</td>
                    <td className="p-3 font-semibold text-[#5A6E85]">{req.yourScore}%</td>
                    <td className="p-3 font-semibold text-[#5A6E85]">{req.requiredScore}%</td>
                    <td className={`p-3 font-bold ${req.status === 'Met' ? 'text-[#065F46]' : 'text-[#9A3412]'}`}>
                      {req.gap}
                    </td>
                    <td className="p-3 text-right">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1 border ${
                        req.status === 'Met' ? 'bg-[#DDF4E7] text-[#065F46] border-[#B8E6CB]' : 'bg-[#FFE0D2] text-[#9A3412] border-[#FFC9B5]'
                      }`}>
                        {req.status === 'Met' ? '✓ Verified' : 'Needs improvement'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={() => setActiveTab('roadmap')}
            className="px-6 py-3 bg-[#24324A] hover:bg-[#1A2536] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs hover:scale-[1.02]"
          >
            <span>View Career Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
