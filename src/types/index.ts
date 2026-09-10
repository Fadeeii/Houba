export type UserRole = 'landing' | 'student' | 'institute' | 'industry' | 'admin';

export type VerificationLevel = 1 | 2 | 3 | 4;

export interface SkillEvidence {
  assessmentScore?: number;
  certificationsCount?: number;
  certifications?: { title: string; issuer: string; date: string; verifyUrl: string }[];
  projectsCount?: number;
  projects?: { title: string; techStack: string[]; url: string; repoUrl: string }[];
  industryChallengesCount?: number;
  industryChallengesCompleted?: { title: string; company: string; score: number }[];
  lastVerifiedDate: string;
}

export interface StudentSkill {
  id: string;
  name: string;
  category: string;
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  score: number; // 0-100%
  verificationLevel: VerificationLevel; // 1: Claimed, 2: Certified, 3: Assessed, 4: Demonstrated
  evidence: SkillEvidence;
  status: 'Verified' | 'Improvement Required' | 'Pending Verification';
}

export interface TargetRole {
  id: string;
  title: string;
  requiredSkills: {
    skillName: string;
    requiredScore: number;
  }[];
  minProjects: number;
}

export interface JobRequirementMatrix {
  skillName: string;
  requiredScore: number;
  studentScore: number;
  meetsRequirement: boolean;
}

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  workplace: 'Remote' | 'On-site' | 'Hybrid';
  salary: string;
  description: string;
  requirements: JobRequirementMatrix[];
  minProjectsRequired: number;
  suitabilityScore: number; // 0-100%
  verificationStrength: 'HIGH' | 'MEDIUM' | 'MODERATE';
  skillMatchPercentage: number;
  projectRelevancePercentage: number;
  postedDate: string;
}

export interface EmployerFeedback {
  technicalScore: number;
  comments: string;
  providedDate: string;
}

export interface PlatformAnalysis {
  gapsIdentified: { skillName: string; studentScore: number; requiredScore: number }[];
  recommendedImprovements: string[];
  currentSuitability: number;
  potentialSuitability: number;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  companyLogo: string;
  appliedDate: string;
  status: 'Applied' | 'Under Review' | 'Shortlisted' | 'Interview' | 'Selected' | 'Not Selected';
  suitabilityAtApplication: number;
  employerFeedback?: EmployerFeedback;
  platformAnalysis?: PlatformAnalysis;
}

export interface IndustryChallenge {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  skillsTested: string[];
  deadline: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  participantsCount: number;
  userStatus: 'Not Started' | 'In Progress' | 'Submitted';
  userScore?: number;
  suitabilityIncreaseBonus?: number; // e.g. 9%
}

export interface PeerSkillSession {
  id: string;
  title: string;
  mentorName: string;
  mentorAvatar: string;
  mentorRating: number;
  skillName: string;
  mentorScore: number; // e.g. 91% Python
  type: 'Workshop' | '1-to-1 Mentoring' | 'Project Guidance' | 'Doubt Session';
  price: number; // ₹
  duration: string;
  schedule: string;
  enrolledStudentsCount: number;
  maxStudents: number;
  description: string;
  isUserMentor?: boolean;
}

export interface TeachingEligibility {
  skillName: string;
  isEligible: boolean;
  score: number;
  projectsCount: number;
  certificationsCount: number;
  challengesCompleted: number;
  verificationStrength: 'HIGH' | 'MEDIUM' | 'INSUFFICIENT';
  reasons: string[];
}

export interface EarningsRecord {
  totalThisMonth: number;
  totalLifetime: number;
  sessionsCompleted: number;
  studentsTaught: number;
  rating: number;
  recentTransactions: {
    id: string;
    studentName: string;
    sessionTitle: string;
    amount: number;
    date: string;
  }[];
}

export interface IndustrySkillDemand {
  skillName: string;
  demandPercentage: number; // 0-100
  trend: 'UP' | 'STABLE' | 'DOWN';
  growthRate: string; // "+14% this quarter"
  openJobsCount: number;
}

export interface CurriculumGap {
  id: string;
  subject: string;
  industryDemandLevel: 'HIGH' | 'MEDIUM' | 'CRITICAL';
  studentProficiency: 'LOW' | 'MODERATE' | 'HIGH';
  currentCurriculumCoverage: 'LIMITED' | 'PARTIAL' | 'ADEQUATE';
  recommendation: string;
  targetBatches: string[];
  status: 'Action Needed' | 'Program Scheduled' | 'Resolved';
}

export interface CandidateProfile {
  id: string;
  name: string;
  avatar: string;
  email: string;
  college: string;
  degree: string;
  graduationYear: string;
  targetRole: string;
  careerReadiness: number;
  suitabilityForJob: number;
  verificationStrength: 'HIGH' | 'MEDIUM';
  topVerifiedSkills: StudentSkill[];
  projectsCount: number;
  challengesCompletedCount: number;
  certificationsCount: number;
}

export interface SystemHealthStatus {
  service: string;
  status: 'Operational' | 'Degraded' | 'Maintenance';
  latency: string;
  uptime: string;
}
