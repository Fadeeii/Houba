import React, { useState } from 'react';
import { Send, Info } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const EmployerFeedbackEngine: React.FC = () => {
  const [candidateName, setCandidateName] = useState('Anupama Devi');
  const [technicalScore, setTechnicalScore] = useState(62);
  const [comments, setComments] = useState('Applicant demonstrated excellent Python knowledge, but technical assessment performance in DSA and React component state optimization fell slightly below our target cutoff.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Employer feedback recorded! This data will feed into the ecosystem feedback loop to help the student and institute improve.');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Candidate Structured Feedback Engine</h1>
            <FeatureBadge text="CLOSED LOOP FEEDBACK" variant="emerald" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Provide structured interview outcomes to power system-wide institutional curriculum insights.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700">Candidate Name</label>
            <input type="text" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 mt-1" />
          </div>

          <div>
            <label className="font-bold text-slate-700">Interview Technical Score (0 - 100%)</label>
            <input type="number" value={technicalScore} onChange={(e) => setTechnicalScore(Number(e.target.value))} className="w-full p-3 border rounded-xl bg-slate-50 mt-1 font-mono font-bold" />
          </div>

          <div>
            <label className="font-bold text-slate-700">Structured Interview Comments / Gap Reason</label>
            <textarea rows={4} value={comments} onChange={(e) => setComments(e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 mt-1" />
          </div>

          <div className="p-4 bg-indigo-50/70 rounded-xl border border-indigo-200 text-xs text-indigo-950 flex items-start gap-2">
            <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <p>
              Your feedback is securely anonymized for institution curriculum analysis, while providing the candidate with actionable improvement steps.
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-colors shadow-md flex items-center gap-2">
              <Send className="w-3.5 h-3.5" />
              <span>Submit Structured Feedback</span>
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};
