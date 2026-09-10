import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Star, CheckCircle2, Send } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const StudentMentorDiscovery: React.FC = () => {
  const { candidates } = useEcosystem();
  const [invitedId, setInvitedId] = useState<string | null>(null);

  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Student Peer Mentor Discovery</h1>
            <FeatureBadge text="VERIFIED PEER MENTORS" variant="purple" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Identify top-performing Level-4 verified students eligible to lead junior peer workshops and tutoring sessions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {candidates.map((cand) => (
          <div key={cand.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src={cand.avatar} alt={cand.name} className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/30" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-1">
                    <span>{cand.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </h3>
                  <div className="text-xs text-slate-500">{cand.degree} • {cand.graduationYear}</div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                <div className="flex justify-between font-semibold">
                  <span>Top Verified Skill:</span>
                  <span className="text-indigo-600 font-bold">Python (91%)</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Demonstrated Projects:</span>
                  <span className="text-slate-800">{cand.projectsCount} Repos</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Teaching Rating:</span>
                  <span className="text-amber-500 font-bold flex items-center gap-0.5"><Star className="w-3 h-3 fill-amber-400" /> 4.8 / 5.0</span>
                </div>
              </div>
            </div>

            <div>
              {invitedId === cand.id ? (
                <div className="p-2.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-xl text-center border border-emerald-300">
                  ✓ Invited as Peer Mentor
                </div>
              ) : (
                <button
                  onClick={() => setInvitedId(cand.id)}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Invite as Peer Mentor</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
