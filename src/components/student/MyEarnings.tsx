import React from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Star, ArrowDownRight, CreditCard } from 'lucide-react';
import { FeatureBadge } from '../common/FeatureBadge';

export const MyEarnings: React.FC = () => {
  const { earnings } = useEcosystem();

  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Peer Mentoring Earnings</h1>
            <FeatureBadge text="MONETIZED VERIFICATION" variant="emerald" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Track your financial earnings from conducting verified student peer workshops and 1-on-1 tutoring sessions.
          </p>
        </div>

        <button
          onClick={() => alert(`Simulated Payout: ₹${earnings.totalThisMonth} transferred to your linked UPI/Bank Account!`)}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors shadow-md flex items-center gap-2 shrink-0"
        >
          <CreditCard className="w-4 h-4" />
          <span>Withdraw Earnings</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-1">
          <div className="text-xs text-slate-500 font-medium">This Month</div>
          <div className="text-3xl font-extrabold text-slate-900 font-mono">₹{earnings.totalThisMonth}</div>
          <div className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
            <ArrowDownRight className="w-3.5 h-3.5 transform rotate-180" /> +24% vs last month
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-1">
          <div className="text-xs text-slate-500 font-medium">Sessions Taught</div>
          <div className="text-3xl font-extrabold text-indigo-600 font-mono">{earnings.sessionsCompleted}</div>
          <div className="text-[11px] text-slate-500">100% completion rate</div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-1">
          <div className="text-xs text-slate-500 font-medium">Students Mentored</div>
          <div className="text-3xl font-extrabold text-purple-600 font-mono">{earnings.studentsTaught}</div>
          <div className="text-[11px] text-slate-500">Across 3 courses</div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-1">
          <div className="text-xs text-slate-500 font-medium">Peer Feedback Rating</div>
          <div className="text-3xl font-extrabold text-amber-500 font-mono flex items-center gap-1">
            {earnings.rating} <Star className="w-6 h-6 fill-amber-400" />
          </div>
          <div className="text-[11px] text-slate-500">Based on 28 reviews</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <h3 className="font-bold text-sm">Recent Payout Ledger</h3>
          <span className="text-xs text-slate-400 font-mono">Automated Escrow Clearance</span>
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          {earnings.recentTransactions.map((tx) => (
            <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
              <div className="space-y-0.5">
                <div className="font-bold text-slate-900">{tx.sessionTitle}</div>
                <div className="text-slate-500">Student: {tx.studentName} • Date: {tx.date}</div>
              </div>
              <div className="text-right">
                <div className="font-extrabold text-emerald-600 text-sm font-mono">+₹{tx.amount}</div>
                <div className="text-[10px] text-slate-400">Cleared ✓</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
