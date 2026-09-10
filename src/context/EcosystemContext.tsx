import React, { createContext, useContext, useState } from 'react';
import type {
  UserRole,
  StudentSkill,
  JobPosting,
  JobApplication,
  IndustryChallenge,
  PeerSkillSession,
  TeachingEligibility,
  EarningsRecord,
  CurriculumGap,
  CandidateProfile
} from '../types';
import {
  initialSkills,
  initialJobs,
  initialApplications,
  initialChallenges,
  initialSessions,
  initialTeachingEligibility,
  initialEarnings,
  initialCurriculumGaps,
  initialCandidates
} from '../data/mockData';

interface EcosystemContextType {
  currentRole: UserRole;
  activeTab: string;
  skills: StudentSkill[];
  jobs: JobPosting[];
  applications: JobApplication[];
  challenges: IndustryChallenge[];
  sessions: PeerSkillSession[];
  teachingEligibility: TeachingEligibility[];
  earnings: EarningsRecord;
  curriculumGaps: CurriculumGap[];
  candidates: CandidateProfile[];
  
  evidenceModalData: { title: string; skill?: StudentSkill; candidate?: CandidateProfile } | null;
  setEvidenceModalData: (data: { title: string; skill?: StudentSkill; candidate?: CandidateProfile } | null) => void;

  switchRole: (role: UserRole, defaultTab?: string) => void;
  setActiveTab: (tab: string) => void;
  updateSkillScore: (skillId: string, newScore: number) => void;
  submitChallenge: (challengeId: string, score: number) => void;
  applyToJob: (jobId: string) => void;
  createSession: (session: Partial<PeerSkillSession>) => void;
  createTrainingProgram: (gapId: string) => void;
  shortlistCandidate: (candidateId: string) => void;
}

const EcosystemContext = createContext<EcosystemContextType | undefined>(undefined);

export const EcosystemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>('landing');
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [skills, setSkills] = useState<StudentSkill[]>(initialSkills);
  const [jobs, setJobs] = useState<JobPosting[]>(initialJobs);
  const [applications, setApplications] = useState<JobApplication[]>(initialApplications);
  const [challenges, setChallenges] = useState<IndustryChallenge[]>(initialChallenges);
  const [sessions, setSessions] = useState<PeerSkillSession[]>(initialSessions);
  const [teachingEligibility, setTeachingEligibility] = useState<TeachingEligibility[]>(initialTeachingEligibility);
  const [earnings, setEarnings] = useState<EarningsRecord>(initialEarnings);
  const [curriculumGaps, setCurriculumGaps] = useState<CurriculumGap[]>(initialCurriculumGaps);
  const [candidates, setCandidates] = useState<CandidateProfile[]>(initialCandidates);
  
  const [evidenceModalData, setEvidenceModalData] = useState<{ title: string; skill?: StudentSkill; candidate?: CandidateProfile } | null>(null);

  const switchRole = (role: UserRole, defaultTab = 'dashboard') => {
    setCurrentRole(role);
    setActiveTab(defaultTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateSkillScore = (skillId: string, newScore: number) => {
    setSkills(prev => prev.map(sk => {
      if (sk.id === skillId || sk.name.toLowerCase().includes(skillId.toLowerCase())) {
        const newLevel = newScore >= 85 ? 4 : newScore >= 70 ? 3 : 2;
        const prof = newScore >= 85 ? 'Advanced' : newScore >= 70 ? 'Intermediate' : 'Beginner';
        return {
          ...sk,
          score: newScore,
          verificationLevel: newLevel as any,
          proficiencyLevel: prof as any,
          status: newScore >= 70 ? 'Verified' : 'Improvement Required',
          evidence: {
            ...sk.evidence,
            assessmentScore: newScore,
            lastVerifiedDate: 'Just now'
          }
        };
      }
      return sk;
    }));

    setJobs(prev => prev.map(job => {
      const updatedReqs = job.requirements.map(req => {
        if (req.skillName.toLowerCase().includes(skillId.toLowerCase())) {
          return { ...req, studentScore: newScore, meetsRequirement: newScore >= req.requiredScore };
        }
        return req;
      });
      const metCount = updatedReqs.filter(r => r.meetsRequirement).length;
      const newSuitability = Math.min(98, Math.round((metCount / updatedReqs.length) * 85 + 10));
      return {
        ...job,
        requirements: updatedReqs,
        suitabilityScore: newSuitability
      };
    }));

    setTeachingEligibility(prev => prev.map(te => {
      if (te.skillName.toLowerCase().includes(skillId.toLowerCase())) {
        const isEligible = newScore >= 85;
        return {
          ...te,
          score: newScore,
          isEligible,
          verificationStrength: isEligible ? 'HIGH' : 'INSUFFICIENT',
          reasons: isEligible 
            ? ['Assessment score updated to ' + newScore + '% (Exceeds 85% requirement)', 'Verified level 4 active']
            : ['Assessment score (' + newScore + '%) is below minimum 85% requirement']
        };
      }
      return te;
    }));
  };

  const submitChallenge = (challengeId: string, score: number) => {
    setChallenges(prev => prev.map(c => {
      if (c.id === challengeId) {
        return {
          ...c,
          userStatus: 'Submitted',
          userScore: score
        };
      }
      return c;
    }));

    setJobs(prev => prev.map(job => {
      if (job.id === 'job-1') {
        return {
          ...job,
          suitabilityScore: Math.min(99, job.suitabilityScore + 8),
          projectRelevancePercentage: 98
        };
      }
      return job;
    }));
  };

  const applyToJob = (jobId: string) => {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;
    const exists = applications.some(a => a.jobId === jobId);
    if (exists) return;

    const newApp: JobApplication = {
      id: 'app-' + (applications.length + 1),
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      companyLogo: job.logo,
      appliedDate: 'Today',
      status: 'Applied',
      suitabilityAtApplication: job.suitabilityScore
    };
    setApplications([newApp, ...applications]);
  };

  const createSession = (sessionData: Partial<PeerSkillSession>) => {
    const newSess: PeerSkillSession = {
      id: 'sess-' + (sessions.length + 1),
      title: sessionData.title || 'New Skill Session',
      mentorName: 'Anupama Devi',
      mentorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      mentorRating: 5.0,
      skillName: sessionData.skillName || 'Python',
      mentorScore: 91,
      type: sessionData.type || 'Workshop',
      price: sessionData.price || 199,
      duration: sessionData.duration || '60 mins',
      schedule: sessionData.schedule || 'Tomorrow, 6:00 PM',
      enrolledStudentsCount: 1,
      maxStudents: sessionData.maxStudents || 15,
      description: sessionData.description || 'Interactive hands-on session.',
      isUserMentor: true
    };
    setSessions([newSess, ...sessions]);

    setEarnings(prev => ({
      ...prev,
      totalThisMonth: prev.totalThisMonth + (sessionData.price || 199),
      totalLifetime: prev.totalLifetime + (sessionData.price || 199),
      sessionsCompleted: prev.sessionsCompleted + 1
    }));
  };

  const createTrainingProgram = (gapId: string) => {
    setCurriculumGaps(prev => prev.map(g => g.id === gapId ? { ...g, status: 'Program Scheduled' } : g));
  };

  const shortlistCandidate = (candidateId: string) => {
    setCandidates(prev => prev.map(c => c.id === candidateId ? { ...c, careerReadiness: Math.min(99, c.careerReadiness + 2) } : c));
  };

  return (
    <EcosystemContext.Provider
      value={{
        currentRole,
        activeTab,
        skills,
        jobs,
        applications,
        challenges,
        sessions,
        teachingEligibility,
        earnings,
        curriculumGaps,
        candidates,
        evidenceModalData,
        setEvidenceModalData,
        switchRole,
        setActiveTab,
        updateSkillScore,
        submitChallenge,
        applyToJob,
        createSession,
        createTrainingProgram,
        shortlistCandidate
      }}
    >
      {children}
    </EcosystemContext.Provider>
  );
};

export const useEcosystem = () => {
  const context = useContext(EcosystemContext);
  if (!context) {
    throw new Error('useEcosystem must be used within an EcosystemProvider');
  }
  return context;
};
