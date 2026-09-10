import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { ArrowRight, Sparkles, CheckCircle2, AlertCircle, TrendingUp, Compass } from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const { setActiveTab } = useEcosystem();

  return (
    <div className="space-y-6">
      
      {/* Friendly Student Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#EAE6DB] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEBFF] text-[#1E3A8A] text-xs font-bold border border-[#BFD9FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STUDENT PROFILE OVERVIEW</span>
          </div>
          
          <h1 className="text-2xl font-extrabold text-[#24324A] mt-2 flex items-center gap-2">
            Good morning, Anupama 👋
          </h1>

          <p className="text-xs text-[#5A6E85] mt-1 flex flex-wrap items-center gap-2 font-medium">
            <span>Target Role: <strong className="text-[#24324A] font-bold">Software Developer</strong></span>
            <span>•</span>
            <span className="text-[#065F46] bg-[#DDF4E7] px-2 py-0.5 rounded-full font-bold">"You're getting closer! Nice progress."</span>
          </p>
        </div>

        <button
          onClick={() => setActiveTab('job-suitability')}
          className="px-5 py-2.5 bg-[#24324A] hover:bg-[#1A2536] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 shadow-xs hover:scale-[1.02]"
        >
          <span>View Job Suitability</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 4 Colorful Metric Cards (Subtle Pastels as per Spec #6) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Soft Blue: Career Readiness */}
        <div className="bg-[#DCEBFF] p-5 rounded-2xl border border-[#BFD9FF] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">Career Readiness</span>
            <span className="p-1.5 bg-white/70 rounded-lg text-[#1E3A8A]"><TrendingUp className="w-4 h-4" /></span>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-[#1E3A8A]">87%</div>
            <div className="text-xs text-[#1E3A8A]/80 font-medium mt-1">High suitability threshold</div>
            <div className="w-full bg-white/60 h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-[#1E3A8A] h-full rounded-full" style={{ width: '87%' }}></div>
            </div>
          </div>
        </div>

        {/* Soft Mint: Verified Skills */}
        <div className="bg-[#DDF4E7] p-5 rounded-2xl border border-[#B8E6CB] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-[#065F46] uppercase tracking-wider">Verified Skills</span>
            <span className="p-1.5 bg-white/70 rounded-lg text-[#065F46]"><CheckCircle2 className="w-4 h-4" /></span>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-[#065F46]">8 Verified</div>
            <div className="text-xs text-[#065F46]/80 font-medium mt-1">5 Level-4 Demonstrated</div>
            <div className="flex gap-1 mt-3">
              <span className="w-3 h-2 rounded-full bg-[#065F46]"></span>
              <span className="w-3 h-2 rounded-full bg-[#065F46]"></span>
              <span className="w-3 h-2 rounded-full bg-[#065F46]"></span>
              <span className="w-3 h-2 rounded-full bg-[#065F46]"></span>
              <span className="w-3 h-2 rounded-full bg-[#065F46]/40"></span>
            </div>
          </div>
        </div>

        {/* Soft Peach: Skill Gaps */}
        <div className="bg-[#FFE0D2] p-5 rounded-2xl border border-[#FFC9B5] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-[#9A3412] uppercase tracking-wider">Skill Gaps</span>
            <span className="p-1.5 bg-white/70 rounded-lg text-[#9A3412]"><AlertCircle className="w-4 h-4" /></span>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-[#9A3412]">3 To Improve</div>
            <div className="text-xs text-[#9A3412]/80 font-medium mt-1">React (-6%), DSA (-9%), Cloud</div>
            <div className="text-[11px] font-bold text-[#9A3412] mt-2 underline cursor-pointer" onClick={() => setActiveTab('skill-gap')}>
              View 3 action steps →
            </div>
          </div>
        </div>

        {/* Soft Yellow: Industry Matches */}
        <div className="bg-[#FFF0B8] p-5 rounded-2xl border border-[#FDE074] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-[#854D0E] uppercase tracking-wider">Industry Matches</span>
            <span className="p-1.5 bg-white/70 rounded-lg text-[#854D0E]"><Compass className="w-4 h-4" /></span>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-extrabold text-[#854D0E]">12 Matches</div>
            <div className="text-xs text-[#854D0E]/80 font-medium mt-1">Based on cutoff matrices</div>
            <div className="text-[11px] font-bold text-[#854D0E] mt-2 underline cursor-pointer" onClick={() => setActiveTab('jobs')}>
              Explore open roles →
            </div>
          </div>
        </div>

      </div>

      {/* 12-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Top Skill Gaps (Left 7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-[#EAE6DB] space-y-4 shadow-xs">
          <div className="flex justify-between items-center border-b border-[#F4F0E6] pb-3">
            <div>
              <h3 className="font-bold text-[#24324A] text-sm flex items-center gap-2">
                <span>Top Skill Gaps</span>
                <span className="px-2 py-0.5 rounded-full bg-[#FFE0D2] text-[#9A3412] text-[10px] font-bold">Needs Action</span>
              </h3>
              <p className="text-xs text-[#5A6E85]">Target Software Developer requirements comparison</p>
            </div>
            <button onClick={() => setActiveTab('skill-gap')} className="text-xs text-[#1E3A8A] font-bold hover:underline">
              View Analysis →
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-[#FFFDF7] text-[#8A9EB5] font-bold uppercase text-[10px] border-b border-[#EAE6DB]">
                  <th className="py-2.5 px-3">Skill</th>
                  <th className="py-2.5 px-3">Your Level</th>
                  <th className="py-2.5 px-3">Required</th>
                  <th className="py-2.5 px-3">Gap</th>
                  <th className="py-2.5 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4F0E6]">
                <tr className="hover:bg-[#FFFDF7]">
                  <td className="py-3 px-3 font-bold text-[#24324A]">React.js</td>
                  <td className="py-3 px-3 font-semibold text-[#5A6E85]">64%</td>
                  <td className="py-3 px-3 font-semibold text-[#5A6E85]">70%</td>
                  <td className="py-3 px-3 font-bold text-[#9A3412]">-6%</td>
                  <td className="py-3 px-3 text-right">
                    <span className="px-2.5 py-1 bg-[#FFE0D2] text-[#9A3412] border border-[#FFC9B5] rounded-full text-[10px] font-bold">
                      Needs improvement
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#FFFDF7]">
                  <td className="py-3 px-3 font-bold text-[#24324A]">Data Structures & Algorithms</td>
                  <td className="py-3 px-3 font-semibold text-[#5A6E85]">61%</td>
                  <td className="py-3 px-3 font-semibold text-[#5A6E85]">70%</td>
                  <td className="py-3 px-3 font-bold text-[#9A3412]">-9%</td>
                  <td className="py-3 px-3 text-right">
                    <span className="px-2.5 py-1 bg-[#FFE0D2] text-[#9A3412] border border-[#FFC9B5] rounded-full text-[10px] font-bold">
                      Needs improvement
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#FFFDF7]">
                  <td className="py-3 px-3 font-bold text-[#24324A]">Cloud Computing</td>
                  <td className="py-3 px-3 font-semibold text-[#5A6E85]">48%</td>
                  <td className="py-3 px-3 font-semibold text-[#5A6E85]">60%</td>
                  <td className="py-3 px-3 font-bold text-[#9A3412]">-12%</td>
                  <td className="py-3 px-3 text-right">
                    <span className="px-2.5 py-1 bg-[#FFE0D2] text-[#9A3412] border border-[#FFC9B5] rounded-full text-[10px] font-bold">
                      Needs improvement
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity List (Right 5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#EAE6DB] space-y-4 shadow-xs">
          <div className="border-b border-[#F4F0E6] pb-3">
            <h3 className="font-bold text-[#24324A] text-sm">Recent Activity</h3>
            <p className="text-xs text-[#5A6E85]">Your recent skill assessment & application audit log</p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-[#DDF4E7]/40 border border-[#B8E6CB] rounded-xl flex justify-between items-center">
              <div>
                <div className="font-bold text-[#065F46] flex items-center gap-1.5">
                  <span>Python Verified</span>
                  <span className="text-[10px] bg-[#DDF4E7] text-[#065F46] px-1.5 py-0.2 rounded font-bold">Level 4</span>
                </div>
                <div className="text-[11px] text-[#5A6E85] mt-0.5">Demonstrated evidence uploaded</div>
              </div>
              <span className="text-[10px] text-[#8A9EB5] font-mono">10m ago</span>
            </div>

            <div className="p-3 bg-[#DCEBFF]/40 border border-[#BFD9FF] rounded-xl flex justify-between items-center">
              <div>
                <div className="font-bold text-[#1E3A8A]">ABC Tech Job Match</div>
                <div className="text-[11px] text-[#5A6E85] mt-0.5">Calculated 93% suitability score</div>
              </div>
              <span className="text-[10px] text-[#8A9EB5] font-mono">1h ago</span>
            </div>

            <div className="p-3 bg-[#FFF0B8]/40 border border-[#FDE074] rounded-xl flex justify-between items-center">
              <div>
                <div className="font-bold text-[#854D0E]">Application Feedback Ready</div>
                <div className="text-[11px] text-[#5A6E85] mt-0.5">Software Developer role assessment</div>
              </div>
              <span className="text-[10px] text-[#8A9EB5] font-mono">1d ago</span>
            </div>
          </div>
        </div>

      </div>

      {/* Recommended Improvement Actions */}
      <div className="bg-white p-6 rounded-2xl border border-[#EAE6DB] space-y-4 shadow-xs">
        <div className="border-b border-[#F4F0E6] pb-3 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-[#24324A] text-sm">Recommended Improvement Actions</h3>
            <p className="text-xs text-[#5A6E85]">Short tasks curated to boost your 87% readiness score</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          
          <div className="p-4 bg-[#FFFDF7] border border-[#EAE6DB] rounded-xl space-y-3 flex flex-col justify-between hover:border-[#BFD9FF] transition-all">
            <div>
              <div className="font-bold text-[#24324A] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#DCEBFF] text-[#1E3A8A] text-[10px] font-bold flex items-center justify-center">1</span>
                <span>Complete React Quiz</span>
              </div>
              <p className="text-[11px] text-[#5A6E85] mt-2">Score ≥70% to reach Level 3 Assessed status.</p>
            </div>
            <button onClick={() => setActiveTab('assessments')} className="w-full py-2 bg-[#24324A] text-white rounded-xl text-xs font-bold hover:bg-[#1A2536] transition-colors">
              Start Quiz (15m)
            </button>
          </div>

          <div className="p-4 bg-[#FFFDF7] border border-[#EAE6DB] rounded-xl space-y-3 flex flex-col justify-between hover:border-[#BFD9FF] transition-all">
            <div>
              <div className="font-bold text-[#24324A] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#DDF4E7] text-[#065F46] text-[10px] font-bold flex items-center justify-center">2</span>
                <span>Build One React App</span>
              </div>
              <p className="text-[11px] text-[#5A6E85] mt-2">Attach GitHub repository link for Level 4.</p>
            </div>
            <button onClick={() => setActiveTab('my-skills')} className="w-full py-2 bg-white text-[#24324A] border border-[#EAE6DB] rounded-xl text-xs font-bold hover:bg-[#F4F0E6] transition-colors">
              Attach Link
            </button>
          </div>

          <div className="p-4 bg-[#FFFDF7] border border-[#EAE6DB] rounded-xl space-y-3 flex flex-col justify-between hover:border-[#BFD9FF] transition-all">
            <div>
              <div className="font-bold text-[#24324A] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#FFF0B8] text-[#854D0E] text-[10px] font-bold flex items-center justify-center">3</span>
                <span>Join DSA Session</span>
              </div>
              <p className="text-[11px] text-[#5A6E85] mt-2">Led by Peer Mentor Rahul Verma (NIT Campus).</p>
            </div>
            <button onClick={() => setActiveTab('skill-sharing')} className="w-full py-2 bg-white text-[#24324A] border border-[#EAE6DB] rounded-xl text-xs font-bold hover:bg-[#F4F0E6] transition-colors">
              Enroll Session
            </button>
          </div>

          <div className="p-4 bg-[#FFFDF7] border border-[#EAE6DB] rounded-xl space-y-3 flex flex-col justify-between hover:border-[#BFD9FF] transition-all">
            <div>
              <div className="font-bold text-[#24324A] flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#FFE0D2] text-[#9A3412] text-[10px] font-bold flex items-center justify-center">4</span>
                <span>Attempt Cloud Quiz</span>
              </div>
              <p className="text-[11px] text-[#5A6E85] mt-2">Evaluate AWS & Azure fundamentals.</p>
            </div>
            <button onClick={() => setActiveTab('assessments')} className="w-full py-2 bg-white text-[#24324A] border border-[#EAE6DB] rounded-xl text-xs font-bold hover:bg-[#F4F0E6] transition-colors">
              Take Quiz
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
