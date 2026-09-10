import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const PostChallengeIndustry: React.FC = () => {
  const [title, setTitle] = useState('Build a Scalable Microservice Architecture');
  const [difficulty, setDifficulty] = useState('Advanced');

  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Post Industry Challenges</h1>
            <FeatureBadge text="PRACTICAL EVALUATION" variant="amber" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Issue real-world practical challenges to evaluate student code quality before conducting formal interviews.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 max-w-xl shadow-xs">
        <h3 className="text-base font-bold text-slate-900">Create New Practical Challenge</h3>
        
        <div className="space-y-3 text-xs">
          <div>
            <label className="font-bold text-slate-700">Challenge Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2.5 border rounded-xl bg-slate-50 mt-1" />
          </div>

          <div>
            <label className="font-bold text-slate-700">Difficulty Level</label>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="w-full p-2.5 border rounded-xl bg-slate-50 mt-1 font-bold">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <button
            onClick={() => alert('Industry challenge published to student portal!')}
            className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <Trophy className="w-4 h-4" />
            <span>Publish Challenge</span>
          </button>
        </div>
      </div>

    </div>
  );
};
