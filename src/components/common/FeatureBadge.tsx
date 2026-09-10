import React from 'react';

interface FeatureBadgeProps {
  text?: string;
  variant?: 'purple' | 'emerald' | 'amber' | 'blue' | 'slate';
}

export const FeatureBadge: React.FC<FeatureBadgeProps> = ({ text = 'CORE FEATURE', variant = 'slate' }) => {
  const styles = {
    slate: 'bg-slate-100 text-slate-800 border-slate-300',
    purple: 'bg-slate-100 text-slate-800 border-slate-300 font-semibold',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    amber: 'bg-amber-50 text-amber-900 border-amber-300',
    blue: 'bg-blue-50 text-blue-900 border-blue-300',
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase border ${styles[variant]}`}>
      {text}
    </span>
  );
};
