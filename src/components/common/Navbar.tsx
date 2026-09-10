import React, { useState } from 'react';
import { useEcosystem } from '../../context/EcosystemContext';
import type { UserRole } from '../../types';
import { 
  Search, 
  Bell, 
  User, 
  Building2, 
  Briefcase, 
  ShieldAlert, 
  Compass,
  Check,
  Sparkles
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentRole, switchRole } = useEcosystem();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const roles: { role: UserRole; label: string; icon: React.ReactNode; activeStyle: string }[] = [
    { role: 'landing', label: 'Overview', icon: <Compass className="w-3.5 h-3.5" />, activeStyle: 'bg-[#DCEBFF] text-[#1E3A8A] border-[#BFD9FF]' },
    { role: 'student', label: 'Student', icon: <User className="w-3.5 h-3.5" />, activeStyle: 'bg-[#DCEBFF] text-[#1E3A8A] border-[#BFD9FF]' },
    { role: 'institute', label: 'Institute', icon: <Building2 className="w-3.5 h-3.5" />, activeStyle: 'bg-[#DDF4E7] text-[#065F46] border-[#B8E6CB]' },
    { role: 'industry', label: 'Industry', icon: <Briefcase className="w-3.5 h-3.5" />, activeStyle: 'bg-[#FFF0B8] text-[#854D0E] border-[#FDE074]' },
    { role: 'admin', label: 'Admin', icon: <ShieldAlert className="w-3.5 h-3.5" />, activeStyle: 'bg-[#FFE0D2] text-[#9A3412] border-[#FFC9B5]' },
  ];

  const getNotificationsForRole = () => {
    if (currentRole === 'student') {
      return [
        { id: 1, text: '🎉 Your Python skill has been verified to Level 4 (Demonstrated)!', time: '10m ago', unread: true },
        { id: 2, text: '⭐ New job opening at ABC Technologies with 93% suitability match!', time: '1h ago', unread: true },
        { id: 3, text: '📝 Application feedback available for Software Developer role.', time: '1d ago', unread: false },
      ];
    } else if (currentRole === 'institute') {
      return [
        { id: 1, text: '⚡ React skill gap increased by 8% in pre-final year batch.', time: '15m ago', unread: true },
        { id: 2, text: '🎓 Curriculum Alert: Cloud Computing demand critical in industry.', time: '3h ago', unread: true },
      ];
    } else if (currentRole === 'industry') {
      return [
        { id: 1, text: '✨ 14 new verified students match Software Developer requirements.', time: '5m ago', unread: true },
      ];
    } else {
      return [
        { id: 1, text: '🔍 5 new company profiles awaiting credential verification.', time: '12m ago', unread: true },
      ];
    }
  };

  const currentNotifs = getNotificationsForRole();
  const unreadCount = currentNotifs.filter(n => n.unread).length;

  return (
    <header className="bg-[#FFFDF7] border-b border-[#EAE6DB] text-[#24324A] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Cute Brand */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => switchRole('landing')}>
            <div className="w-9 h-9 bg-[#DCEBFF] border border-[#BFD9FF] rounded-xl flex items-center justify-center font-bold text-sm text-[#24324A] shadow-xs group-hover:scale-105 transition-transform">
              SB ✦
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-[#24324A]">
                  SkillBridge
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FFF0B8] text-[#854D0E] border border-[#FDE074]">
                  ECOSYSTEM
                </span>
              </div>
            </div>
          </div>

          {/* Cute Role Switcher Toolbar */}
          <div className="hidden lg:flex items-center bg-[#F4F0E6] p-1 rounded-2xl border border-[#EAE6DB] gap-1">
            {roles.map(r => {
              const isActive = currentRole === r.role;
              return (
                <button
                  key={r.role}
                  onClick={() => switchRole(r.role)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                    isActive
                      ? `${r.activeStyle} shadow-xs font-bold`
                      : 'text-[#5A6E85] border-transparent hover:bg-white/60 hover:text-[#24324A]'
                  }`}
                >
                  {r.icon}
                  <span>{r.label}</span>
                  {isActive && <Check className="w-3 h-3 stroke-[2.5]" />}
                </button>
              );
            })}
          </div>

          {/* Right Search & Profile */}
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block w-48">
              <input
                type="text"
                placeholder="Search skills, jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-xs text-[#24324A] placeholder-[#8A9EB5] rounded-xl px-3 py-2 pl-9 border border-[#EAE6DB] focus:outline-none focus:border-[#BFD9FF] focus:ring-2 focus:ring-[#DCEBFF] transition-all"
              />
              <Search className="w-3.5 h-3.5 text-[#8A9EB5] absolute left-3 top-2.5" />
            </div>

            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-[#5A6E85] hover:text-[#24324A] rounded-xl hover:bg-[#DCEBFF]/50 transition-colors relative"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#FFB8A5] border-2 border-white rounded-full"></span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-[#EAE6DB] rounded-2xl shadow-lg z-50 text-[#24324A] p-2">
                  <div className="p-2 bg-[#FFFDF7] border-b border-[#EAE6DB] rounded-xl flex justify-between items-center text-xs font-bold text-[#24324A]">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#24324A]" /> NOTIFICATIONS
                    </span>
                    <span className="text-[10px] bg-[#FFE0D2] text-[#9A3412] px-2 py-0.5 rounded-full font-bold">
                      {unreadCount} NEW
                    </span>
                  </div>
                  <div className="divide-y divide-[#F4F0E6] text-xs max-h-60 overflow-y-auto">
                    {currentNotifs.map(n => (
                      <div key={n.id} className={`p-3 rounded-xl hover:bg-[#FFFDF7] transition-colors ${n.unread ? 'bg-[#DCEBFF]/20 font-semibold' : 'text-[#5A6E85]'}`}>
                        <div>{n.text}</div>
                        <div className="text-[10px] text-[#8A9EB5] mt-1 font-mono">{n.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 border-l border-[#EAE6DB] pl-3">
              <div className="w-8 h-8 rounded-full bg-[#DCEBFF] border border-[#BFD9FF] flex items-center justify-center font-bold text-xs text-[#1E3A8A]">
                {currentRole === 'student' && 'AD'}
                {currentRole === 'institute' && 'NIT'}
                {currentRole === 'industry' && 'AT'}
                {currentRole === 'admin' && 'AD'}
                {currentRole === 'landing' && 'VI'}
              </div>
              <div className="text-right hidden sm:block text-xs">
                <div className="font-bold text-[#24324A]">
                  {currentRole === 'student' && 'Anupama Devi 👋'}
                  {currentRole === 'institute' && 'NIT Campus'}
                  {currentRole === 'industry' && 'ABC Tech'}
                  {currentRole === 'admin' && 'Administrator'}
                  {currentRole === 'landing' && 'Visitor'}
                </div>
                <div className="text-[10px] text-[#5A6E85] font-medium capitalize">{currentRole} Portal</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
