import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import { Plus, GraduationCap, Star, CheckCircle2, Sparkles } from 'lucide-react';

export const SkillSharingEarn: React.FC = () => {
  const { sessions, teachingEligibility, createSession } = useEcosystem();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [title, setTitle] = useState('');
  const [skillName, setSkillName] = useState('Python');
  const [type, setType] = useState<'Workshop' | '1-to-1 Mentoring' | 'Project Guidance' | 'Doubt Session'>('Workshop');
  const [price, setPrice] = useState<number>(199);
  const [duration, setDuration] = useState('90 mins');
  const [schedule] = useState('Tomorrow, 6:00 PM');
  const [description, setDescription] = useState('');

  const eligibleSkills = teachingEligibility.filter(t => t.isEligible);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    createSession({
      title,
      skillName,
      type,
      price,
      duration,
      schedule,
      description
    });
    setShowCreateModal(false);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-[#EAE6DB] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0B8] text-[#854D0E] text-xs font-bold border border-[#FDE074]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>STUDENT COMMUNITY MARKETPLACE</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#24324A] mt-2">Peer Skill Sharing & Mentorship</h1>
          <p className="text-xs text-[#5A6E85] font-medium mt-1">
            Share verified skills with fellow students. Only Level-4 verified mentors are eligible to host sessions.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          disabled={eligibleSkills.length === 0}
          className="px-5 py-2.5 bg-[#24324A] hover:bg-[#1A2536] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 disabled:opacity-50 shrink-0 shadow-xs hover:scale-[1.02]"
        >
          <Plus className="w-4 h-4" />
          <span>Host Skill Session</span>
        </button>
      </div>

      {/* Teaching Eligibility Checklist */}
      <div className="bg-white rounded-2xl border border-[#EAE6DB] p-6 space-y-4 shadow-xs">
        <div className="flex justify-between items-center border-b border-[#F4F0E6] pb-3">
          <h3 className="font-extrabold text-[#24324A] text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#065F46]" /> Verified-to-Teach Eligibility
          </h3>
          <span className="text-[10px] bg-[#DDF4E7] text-[#065F46] px-2.5 py-0.5 rounded-full font-bold">
            LEVEL-4 AUDIT
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {teachingEligibility.map((te, idx) => (
            <div key={idx} className={`p-4 rounded-xl border space-y-1.5 ${
              te.isEligible ? 'bg-[#DDF4E7]/40 border-[#B8E6CB]' : 'bg-[#FFFDF7] border-[#EAE6DB]'
            }`}>
              <div className="flex justify-between font-bold">
                <span className="text-[#24324A]">{te.skillName}</span>
                <span className={`text-[10px] font-bold ${te.isEligible ? 'text-[#065F46]' : 'text-[#8A9EB5]'}`}>
                  {te.isEligible ? '✓ Eligible to Teach' : 'Ineligible'}
                </span>
              </div>
              <div className="text-[11px] text-[#5A6E85]">Assessment Score: <strong className="text-[#24324A] font-bold">{te.score}%</strong></div>
              <div className="text-[10px] text-[#8A9EB5]">{te.reasons[0]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Peer Mentor Marketplace Profile Cards (Friendly student vibe) */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-extrabold text-[#24324A] text-base">Active Student Mentors</h3>
          <span className="text-xs text-[#5A6E85] font-medium">{sessions.length} sessions available</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sessions.map((sess) => (
            <div key={sess.id} className="bg-white rounded-2xl border border-[#EAE6DB] p-6 space-y-4 flex flex-col justify-between hover:border-[#BFD9FF] transition-all shadow-xs">
              <div className="space-y-3 text-xs">
                
                {/* Profile header */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#DCEBFF] border border-[#BFD9FF] text-[#1E3A8A] font-extrabold flex items-center justify-center text-xs shrink-0">
                    {sess.mentorName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-extrabold text-[#24324A] text-sm">{sess.mentorName}</div>
                    <div className="text-[11px] text-[#065F46] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#065F46]" /> Verified {sess.skillName} Mentor
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#FFFDF7] border border-[#EAE6DB] rounded-xl italic text-[#5A6E85] leading-relaxed font-medium">
                  "{sess.description}"
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#5A6E85] border-t border-[#F4F0E6] pt-2.5 font-semibold">
                  <span className="flex items-center gap-1 text-[#854D0E] bg-[#FFF0B8] px-2 py-0.5 rounded-full border border-[#FDE074] font-bold">
                    <Star className="w-3 h-3 fill-current" /> {sess.mentorRating}
                  </span>
                  <span>{sess.enrolledStudentsCount} students taught</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-3 border-t border-[#F4F0E6] flex items-center justify-between">
                <div>
                  <div className="text-base font-extrabold text-[#24324A]">₹{sess.price} <span className="text-[10px] font-normal text-[#8A9EB5]">/ session</span></div>
                  <div className="text-[10px] text-[#8A9EB5] font-medium">{sess.schedule}</div>
                </div>

                <button
                  onClick={() => alert(`🎉 Enrolled in ${sess.title}! Details sent to your email.`)}
                  className="px-4 py-2 bg-[#24324A] hover:bg-[#1A2536] text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  Join Session
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#24324A]/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full space-y-4 border border-[#EAE6DB] shadow-xl">
            <h3 className="text-base font-extrabold text-[#24324A]">Host a Peer Skill Session</h3>

            <form onSubmit={handleCreate} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-[#24324A]">Session Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Python Core & Practical Automation Workshop"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2.5 border border-[#EAE6DB] rounded-xl bg-[#FFFDF7] mt-1 text-[#24324A] focus:outline-none focus:border-[#BFD9FF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#24324A]">Verified Skill</label>
                  <select
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    className="w-full p-2.5 border border-[#EAE6DB] rounded-xl bg-[#FFFDF7] mt-1 font-bold text-[#24324A]"
                  >
                    {eligibleSkills.map(es => (
                      <option key={es.skillName} value={es.skillName}>{es.skillName} ({es.score}%)</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-[#24324A]">Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as any)}
                    className="w-full p-2.5 border border-[#EAE6DB] rounded-xl bg-[#FFFDF7] mt-1 text-[#24324A]"
                  >
                    <option value="Workshop">Workshop</option>
                    <option value="1-to-1 Mentoring">1-to-1 Mentoring</option>
                    <option value="Project Guidance">Project Guidance</option>
                    <option value="Doubt Session">Doubt Session</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#24324A]">Price (₹)</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full p-2.5 border border-[#EAE6DB] rounded-xl bg-[#FFFDF7] mt-1 font-bold text-[#24324A]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#24324A]">Duration</label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full p-2.5 border border-[#EAE6DB] rounded-xl bg-[#FFFDF7] mt-1 text-[#24324A]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-[#24324A]">Short Description</label>
                <textarea
                  rows={2}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Beginner-friendly Python sessions focused on problem solving."
                  className="w-full p-2.5 border border-[#EAE6DB] rounded-xl bg-[#FFFDF7] mt-1 text-[#24324A]"
                ></textarea>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 bg-[#F4F0E6] text-[#24324A] rounded-xl font-bold hover:bg-[#EAE6DB]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#24324A] text-white rounded-xl font-bold hover:bg-[#1A2536]"
                >
                  Publish Session
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
