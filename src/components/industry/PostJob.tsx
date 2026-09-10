import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Sliders, ArrowRight } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const PostJob: React.FC = () => {
  const { setActiveTab } = useEcosystem();

  const [title, setTitle] = useState('Senior Full Stack Developer');
  const [location, setLocation] = useState('Bengaluru, India');
  const [salary, setSalary] = useState('₹10.0 - ₹14.0 LPA');
  const [pythonCutoff, setPythonCutoff] = useState(75);
  const [sqlCutoff, setSqlCutoff] = useState(70);
  const [dsaCutoff, setDsaCutoff] = useState(65);
  const [reactCutoff, setReactCutoff] = useState(70);
  const [minProjects] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Job posting published with defined Skill Requirement Matrix!');
    setActiveTab('talent-discovery');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Post Job with Skill Matrix</h1>
            <FeatureBadge text="MATRIX MATCHING" variant="emerald" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Define verifiable skill cutoffs instead of subjective resume descriptions.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-slate-700">Job Title</label>
              <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 mt-1" />
            </div>
            <div>
              <label className="font-bold text-slate-700">Location</label>
              <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 mt-1" />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700">Salary Range</label>
            <input type="text" required value={salary} onChange={(e) => setSalary(e.target.value)} className="w-full p-3 border rounded-xl bg-slate-50 mt-1 font-mono font-bold" />
          </div>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-600" />
                Define Skill Requirement Matrix Cutoffs
              </h4>
              <FeatureBadge text="AUTOMATED SUITABILITY FILTER" variant="purple" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded-lg border space-y-1">
                <div className="flex justify-between font-bold">
                  <span>Python Verification Score:</span>
                  <span className="font-mono text-emerald-600">≥{pythonCutoff}%</span>
                </div>
                <input type="range" min="50" max="95" value={pythonCutoff} onChange={(e) => setPythonCutoff(Number(e.target.value))} className="w-full" />
              </div>

              <div className="p-3 bg-white rounded-lg border space-y-1">
                <div className="flex justify-between font-bold">
                  <span>SQL Verification Score:</span>
                  <span className="font-mono text-emerald-600">≥{sqlCutoff}%</span>
                </div>
                <input type="range" min="50" max="95" value={sqlCutoff} onChange={(e) => setSqlCutoff(Number(e.target.value))} className="w-full" />
              </div>

              <div className="p-3 bg-white rounded-lg border space-y-1">
                <div className="flex justify-between font-bold">
                  <span>DSA Verification Score:</span>
                  <span className="font-mono text-emerald-600">≥{dsaCutoff}%</span>
                </div>
                <input type="range" min="50" max="95" value={dsaCutoff} onChange={(e) => setDsaCutoff(Number(e.target.value))} className="w-full" />
              </div>

              <div className="p-3 bg-white rounded-lg border space-y-1">
                <div className="flex justify-between font-bold">
                  <span>React.js Verification Score:</span>
                  <span className="font-mono text-emerald-600">≥{reactCutoff}%</span>
                </div>
                <input type="range" min="50" max="95" value={reactCutoff} onChange={(e) => setReactCutoff(Number(e.target.value))} className="w-full" />
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border flex items-center justify-between">
              <span className="font-bold">Minimum Demonstrated Projects:</span>
              <span className="font-mono text-indigo-600 font-extrabold">{minProjects} Repos</span>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button type="submit" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors shadow-md flex items-center gap-2">
              <span>Publish Job Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};
