import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { ArrowRight, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

export const JobSuitabilityPage: React.FC = () => {
  const { jobs, applyToJob, setActiveTab, setEvidenceModalData } = useEcosystem();

  const targetJob = jobs[0];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#EAE6DB] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEBFF] text-[#1E3A8A] text-xs font-bold border border-[#BFD9FF]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PLATFORM-VERIFIED REPORT</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#24324A] mt-2">Job Suitability Audit</h1>
          <p className="text-xs text-[#5A6E85] font-medium mt-1">
            Quantitative suitability audit based on objective employer requirement matrices.
          </p>
        </div>
      </div>

      {/* Professional Report Card */}
      <div className="bg-white rounded-2xl border border-[#EAE6DB] p-6 sm:p-8 space-y-6 shadow-xs">
        
        {/* Title block */}
        <div className="border-b border-[#F4F0E6] pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E3A8A] bg-[#DCEBFF] px-2.5 py-0.5 rounded-full border border-[#BFD9FF]">
              JOB SUITABILITY REPORT
            </span>
            <h2 className="text-xl font-extrabold text-[#24324A] mt-1">{targetJob.title}</h2>
            <p className="text-xs text-[#5A6E85] font-medium mt-0.5">{targetJob.company} • {targetJob.location} • {targetJob.salary}</p>
          </div>

          <div className="p-4 bg-[#DCEBFF] border border-[#BFD9FF] rounded-2xl text-center shrink-0">
            <div className="text-[10px] uppercase font-bold text-[#1E3A8A]">Overall Suitability</div>
            <div className="text-3xl font-extrabold text-[#1E3A8A] mt-0.5">{targetJob.suitabilityScore}%</div>
            <div className="text-[10px] font-bold bg-[#DDF4E7] text-[#065F46] px-2 py-0.5 rounded-full uppercase tracking-wider mt-1 border border-[#B8E6CB] inline-block">
              HIGH SUITABILITY
            </div>
          </div>
        </div>

        {/* Skill requirements matrix table */}
        <div>
          <h3 className="font-extrabold text-[#24324A] text-sm mb-3">Skill Requirements Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse border border-[#EAE6DB] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#FFFDF7] border-b border-[#EAE6DB] text-[#8A9EB5] font-bold uppercase text-[10px]">
                  <th className="p-3">Skill Requirement</th>
                  <th className="p-3">Your Score</th>
                  <th className="p-3">Required Cutoff</th>
                  <th className="p-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F0E6]">
                {targetJob.requirements.map((req, idx) => (
                  <tr key={idx} className="hover:bg-[#FFFDF7]">
                    <td className="p-3 font-bold text-[#24324A]">{req.skillName}</td>
                    <td className="p-3 font-bold text-[#24324A]">{req.studentScore}%</td>
                    <td className="p-3 font-semibold text-[#5A6E85]">{req.requiredScore}%</td>
                    <td className="p-3 text-right">
                      {req.meetsRequirement ? (
                        <span className="px-2.5 py-1 bg-[#DDF4E7] text-[#065F46] border border-[#B8E6CB] rounded-full text-[10px] font-bold inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> ✓ Met
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-[#FFE0D2] text-[#9A3412] border border-[#FFC9B5] rounded-full text-[10px] font-bold inline-flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> Needs improvement
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="hover:bg-[#FFFDF7]">
                  <td className="p-3 font-bold text-[#24324A]">Demonstrated Projects</td>
                  <td className="p-3 font-bold text-[#24324A]">3 Repos</td>
                  <td className="p-3 font-semibold text-[#5A6E85]">2 Repos</td>
                  <td className="p-3 text-right">
                    <span className="px-2.5 py-1 bg-[#DDF4E7] text-[#065F46] border border-[#B8E6CB] rounded-full text-[10px] font-bold inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> ✓ Met
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Verification strength & evidence list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FFFDF7] p-5 rounded-2xl border border-[#EAE6DB] text-xs">
          <div className="space-y-2">
            <div className="text-[10px] uppercase font-bold text-[#8A9EB5]">Verification Strength</div>
            <div className="text-base font-extrabold text-[#065F46] bg-[#DDF4E7] px-3 py-1 rounded-xl border border-[#B8E6CB] inline-block">
              HIGH STRENGTH (L1–L4)
            </div>
            <p className="text-[11px] text-[#5A6E85] font-medium">Audited assessment logs & live GitHub repository hashes active.</p>
          </div>

          <div className="space-y-1.5">
            <div className="text-[10px] uppercase font-bold text-[#8A9EB5]">Evidence Available</div>
            <ul className="text-[11px] text-[#24324A] space-y-1 font-semibold">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#065F46]" /> 8 verified skills</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#065F46]" /> 3 demonstrated GitHub projects</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#065F46]" /> 2 third-party certificates</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#065F46]" /> 1 industry challenge passed (94% score)</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-4 bg-[#FFF0B8]/40 border border-[#FDE074] rounded-xl text-xs text-[#854D0E] font-medium">
          <strong>Disclaimer:</strong> Suitability indicates that your verified profile meets the defined job criteria based on platform data. Final selection remains with the employer.
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('skill-gap')}
              className="px-4 py-2.5 bg-white text-[#24324A] border border-[#EAE6DB] hover:bg-[#F4F0E6] rounded-xl text-xs font-bold transition-all"
            >
              View Skill Gaps
            </button>
            <button
              onClick={() => setEvidenceModalData({ title: `${targetJob.title} Verification Evidence` })}
              className="px-4 py-2.5 bg-white text-[#24324A] border border-[#EAE6DB] hover:bg-[#F4F0E6] rounded-xl text-xs font-bold transition-all"
            >
              Audit Evidence
            </button>
          </div>

          <button
            onClick={() => {
              applyToJob(targetJob.id);
              setActiveTab('applications');
            }}
            className="px-6 py-2.5 bg-[#24324A] hover:bg-[#1A2536] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs hover:scale-[1.02]"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
