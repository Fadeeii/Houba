import React, { useState } from 'react';
import { FeatureBadge } from '../common/FeatureBadge';

export const VerificationQueueMgmt: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, type: 'Certificate Audit', target: 'Python Professional - Coursera Hash', entity: 'Anupama Devi', status: 'Pending Review' },
    { id: 2, type: 'Company Credentials', target: 'TechCorp India GST & Registration', entity: 'TechCorp HR', status: 'Pending Review' },
    { id: 3, type: 'Institute Accreditation', target: 'BITS Pilani CS Syllabus Mapping', entity: 'BITS Dean Office', status: 'Approved' },
    { id: 4, type: 'Assessment Flag', target: 'High Speed DSA Submission Audit', entity: 'Rohan Verma', status: 'Approved' }
  ]);

  const handleAction = (id: number, status: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, status } : item));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Verification Queue & Moderation</h1>
            <FeatureBadge text="AUDIT LEDGER" variant="purple" />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Reviewing pending skill certifications, company credentials, and automated anomaly alerts.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <h3 className="font-bold text-sm">Audit Queue List</h3>
          <span className="text-xs text-slate-400 font-mono">4 Records Queued</span>
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          {items.map((item) => (
            <div key={item.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">{item.target}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 font-mono text-[10px] text-slate-600">{item.type}</span>
                </div>
                <div className="text-slate-500">Submitted by: {item.entity}</div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-full font-bold text-[11px] ${
                  item.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' :
                  item.status === 'Rejected' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {item.status}
                </span>

                {item.status === 'Pending Review' && (
                  <div className="flex gap-1">
                    <button onClick={() => handleAction(item.id, 'Approved')} className="px-3 py-1 bg-emerald-600 text-white rounded-lg font-bold">Approve</button>
                    <button onClick={() => handleAction(item.id, 'Rejected')} className="px-3 py-1 bg-rose-600 text-white rounded-lg font-bold">Reject</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
