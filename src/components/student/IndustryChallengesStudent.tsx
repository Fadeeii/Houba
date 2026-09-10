import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Trophy, CheckCircle2, ArrowRight } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const IndustryChallengesStudent: React.FC = () => {
  const { challenges, submitChallenge, setActiveTab } = useEcosystem();
  const [activeChallengeId, setActiveChallengeId] = useState<string | null>(null);
  const [repoUrl, setRepoUrl] = useState<string>('github.com/anupama/fastapi-rest-api');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChallengeSubmit = (id: string) => {
    setIsSubmitting(true);
    setTimeout(() => {
      submitChallenge(id, 94);
      setIsSubmitting(false);
      setActiveChallengeId(null);
    }, 800);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Industry Practical Challenges</h1>
            <FeatureBadge text="DIRECT INTERVIEW GATEWAY" variant="amber" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Solve real production coding challenges issued directly by industry recruiters to boost your job suitability score.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((chal) => {
          const isSubmitted = chal.userStatus === 'Submitted';

          return (
            <div key={chal.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={chal.companyLogo} alt={chal.company} className="w-8 h-8 rounded-lg object-cover border" />
                    <span className="text-xs font-bold text-slate-700">{chal.company}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-mono">{chal.difficulty}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{chal.title}</h3>

                <div className="flex flex-wrap gap-1.5">
                  {chal.skillsTested.map((sk, idx) => (
                    <span key={idx} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-mono font-medium">{sk}</span>
                  ))}
                </div>
              </div>

              {isSubmitted ? (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Challenge Completed!
                    </span>
                    <span className="font-mono text-base">Score: {chal.userScore}%</span>
                  </div>
                  <p className="text-xs text-emerald-700 font-medium">
                    ✨ Your Job Suitability Score for ABC Technologies increased from <strong>82%</strong> → <strong className="text-emerald-900">91%</strong>!
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center justify-between">
                    <span>Deadline: {chal.deadline}</span>
                    <span>Bonus: +{chal.suitabilityIncreaseBonus}% Suitability</span>
                  </div>
                  <p className="text-[11px] text-amber-800">Top 10% performers earn guaranteed technical screening interviews.</p>
                </div>
              )}

              <div>
                {isSubmitted ? (
                  <button
                    onClick={() => setActiveTab('job-suitability')}
                    className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Opportunities</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveChallengeId(chal.id)}
                    className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Trophy className="w-4 h-4" />
                    <span>Attempt Challenge</span>
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {activeChallengeId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full space-y-4 border border-slate-200 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900">Submit Challenge Artifact</h3>
            <p className="text-xs text-slate-500">Provide your public GitHub repository containing your REST API implementation.</p>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">GitHub Repository URL</label>
              <input
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-800"
              />
            </div>

            <div className="flex gap-2 justify-end pt-2">
              <button
                onClick={() => setActiveChallengeId(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold"
              >
                Cancel
              </button>
              <button
                onClick={() => handleChallengeSubmit(activeChallengeId)}
                className="px-5 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-1.5"
              >
                {isSubmitting ? 'Evaluating Artifact...' : 'Submit Artifact'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
