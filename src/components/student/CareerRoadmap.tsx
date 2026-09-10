import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { CheckCircle2, Clock, ArrowRight, Map } from 'lucide-react';

export const CareerRoadmap: React.FC = () => {
  const { setActiveTab } = useEcosystem();

  const stages = [
    { num: '01', title: 'Assess Baseline Skills', status: 'completed', desc: 'Baseline testing completed for Python, SQL, DSA, React' },
    { num: '02', title: 'Verify Proof Evidence', status: 'completed', desc: 'Level 4 Demonstrated status achieved for Python' },
    { num: '03', title: 'Identify Skill Gaps', status: 'completed', desc: 'Gap detected in DSA (-9%) & React (-6%)' },
    { num: '04', title: 'Build Project Portfolio', status: 'active', desc: 'Developing Full-Stack FastAPI & React microservice repo' },
    { num: '05', title: 'Attempt Industry Challenge', status: 'completed', desc: 'Passed ABC Tech Challenge with 94% score' },
    { num: '06', title: 'Calculate Job Match', status: 'completed', desc: 'Calculated 93% High Suitability match' },
    { num: '07', title: 'Apply with Proof', status: 'active', desc: 'Applications submitted to ABC Tech & DataPulse' },
    { num: '08', title: 'Grow & Get Hired', status: 'pending', desc: 'Interview scheduled for DataPulse Analytics' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#EAE6DB] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEBFF] text-[#1E3A8A] text-xs font-bold border border-[#BFD9FF]">
            <Map className="w-3.5 h-3.5" />
            <span>INTERACTIVE TIMELINE</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#24324A] mt-2">Personalized Career Roadmap</h1>
          <p className="text-xs text-[#5A6E85] font-medium mt-1">
            Visual journey tracking progress from baseline evaluation to job offer.
          </p>
        </div>
      </div>

      {/* Timeline container */}
      <div className="bg-white rounded-2xl border border-[#EAE6DB] p-6 sm:p-8 shadow-xs">
        <div className="relative border-l-2 border-[#EAE6DB] ml-4 sm:ml-8 space-y-6">
          {stages.map((st, idx) => {
            const isCompleted = st.status === 'completed';
            const isActive = st.status === 'active';

            return (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                
                {/* Numbered circle */}
                <div className={`absolute -left-[19px] top-0 w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all font-bold text-xs ${
                  isCompleted ? 'bg-[#DDF4E7] border-[#B8E6CB] text-[#065F46]' :
                  isActive ? 'bg-[#DCEBFF] border-[#BFD9FF] text-[#1E3A8A]' :
                  'bg-[#FFFDF7] border-[#EAE6DB] text-[#8A9EB5]'
                }`}>
                  {isCompleted ? <CheckCircle2 className="w-4 h-4 text-[#065F46]" /> :
                   isActive ? <Clock className="w-4 h-4 text-[#1E3A8A]" /> :
                   st.num}
                </div>

                <div className={`p-4 rounded-2xl border transition-all ${
                  isCompleted ? 'bg-[#DDF4E7]/30 border-[#B8E6CB]' :
                  isActive ? 'bg-[#DCEBFF]/40 border-[#BFD9FF]' :
                  'bg-[#FFFDF7] border-[#EAE6DB]'
                }`}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-[#24324A] text-sm">{st.num} {st.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                      isCompleted ? 'bg-[#DDF4E7] text-[#065F46] border-[#B8E6CB]' :
                      isActive ? 'bg-[#DCEBFF] text-[#1E3A8A] border-[#BFD9FF]' :
                      'bg-[#F4F0E6] text-[#8A9EB5] border-[#EAE6DB]'
                    }`}>
                      {isCompleted ? '✓ Completed' : isActive ? '⏳ In Progress' : 'Upcoming'}
                    </span>
                  </div>
                  <p className="text-xs text-[#5A6E85] font-medium mt-1">{st.desc}</p>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-[#F4F0E6] flex justify-end">
          <button
            onClick={() => setActiveTab('job-suitability')}
            className="px-6 py-3 bg-[#24324A] hover:bg-[#1A2536] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs"
          >
            <span>Proceed to Job Suitability</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
