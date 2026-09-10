import type {
  StudentSkill,
  JobPosting,
  JobApplication,
  IndustryChallenge,
  PeerSkillSession,
  TeachingEligibility,
  EarningsRecord,
  IndustrySkillDemand,
  CurriculumGap,
  CandidateProfile,
  SystemHealthStatus
} from '../types';

export const initialSkills: StudentSkill[] = [
  {
    id: 'skill-1',
    name: 'Python',
    category: 'Programming',
    proficiencyLevel: 'Advanced',
    score: 91,
    verificationLevel: 4,
    status: 'Verified',
    evidence: {
      assessmentScore: 91,
      certificationsCount: 2,
      certifications: [
        { title: 'Advanced Python Professional', issuer: 'Python Institute', date: 'Jan 2026', verifyUrl: '#' },
        { title: 'Data Analysis with Python', issuer: 'Coursera & IBM', date: 'Nov 2025', verifyUrl: '#' }
      ],
      projectsCount: 3,
      projects: [
        { title: 'Automated Log Analyzer API', techStack: ['Python', 'FastAPI', 'PostgreSQL'], url: '#', repoUrl: 'github.com/anupama/log-analyzer' },
        { title: 'Predictive Sales Dashboard', techStack: ['Python', 'Pandas', 'Scikit-Learn'], url: '#', repoUrl: 'github.com/anupama/sales-ai' },
        { title: 'Web Scraper & ETL Pipeline', techStack: ['Python', 'BeautifulSoup', 'Celery'], url: '#', repoUrl: 'github.com/anupama/etl-pipeline' }
      ],
      industryChallengesCount: 1,
      industryChallengesCompleted: [
        { title: 'Build a Scalable REST API', company: 'ABC Technologies', score: 94 }
      ],
      lastVerifiedDate: '2 weeks ago'
    }
  },
  {
    id: 'skill-2',
    name: 'SQL & Relational DBs',
    category: 'Database',
    proficiencyLevel: 'Intermediate',
    score: 82,
    verificationLevel: 3,
    status: 'Verified',
    evidence: {
      assessmentScore: 82,
      certificationsCount: 1,
      certifications: [
        { title: 'PostgreSQL Database Administrator', issuer: 'Udemy Academic', date: 'Dec 2025', verifyUrl: '#' }
      ],
      projectsCount: 2,
      projects: [
        { title: 'E-commerce Schema & Query Optimizer', techStack: ['PostgreSQL', 'PL/pgSQL'], url: '#', repoUrl: 'github.com/anupama/sql-opt' }
      ],
      industryChallengesCount: 0,
      lastVerifiedDate: '1 month ago'
    }
  },
  {
    id: 'skill-3',
    name: 'React.js',
    category: 'Frontend',
    proficiencyLevel: 'Intermediate',
    score: 64,
    verificationLevel: 2,
    status: 'Improvement Required',
    evidence: {
      assessmentScore: 64,
      certificationsCount: 1,
      certifications: [
        { title: 'Frontend Developer Certificate', issuer: 'Meta Frontend Track', date: 'Aug 2025', verifyUrl: '#' }
      ],
      projectsCount: 1,
      projects: [
        { title: 'Personal Portfolio Site', techStack: ['React', 'TailwindCSS'], url: '#', repoUrl: 'github.com/anupama/portfolio' }
      ],
      industryChallengesCount: 0,
      lastVerifiedDate: '3 weeks ago'
    }
  },
  {
    id: 'skill-4',
    name: 'Data Structures & Algorithms',
    category: 'Core CS',
    proficiencyLevel: 'Intermediate',
    score: 61,
    verificationLevel: 2,
    status: 'Improvement Required',
    evidence: {
      assessmentScore: 61,
      certificationsCount: 1,
      certifications: [
        { title: 'Algorithmic Toolbox', issuer: 'UC San Diego (Coursera)', date: 'Oct 2025', verifyUrl: '#' }
      ],
      projectsCount: 0,
      industryChallengesCount: 0,
      lastVerifiedDate: '1 month ago'
    }
  },
  {
    id: 'skill-5',
    name: 'Web Development Fundamentals',
    category: 'Web',
    proficiencyLevel: 'Advanced',
    score: 88,
    verificationLevel: 4,
    status: 'Verified',
    evidence: {
      assessmentScore: 88,
      certificationsCount: 2,
      projectsCount: 3,
      industryChallengesCount: 1,
      lastVerifiedDate: '2 weeks ago'
    }
  }
];

export const initialJobs: JobPosting[] = [
  {
    id: 'job-1',
    title: 'Software Developer (Full Stack)',
    company: 'ABC Technologies',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=60',
    location: 'Bengaluru, India',
    type: 'Full-time',
    workplace: 'Hybrid',
    salary: '₹8.5 - ₹12.0 LPA',
    description: 'Looking for a skilled developer with solid Python, SQL, and algorithm foundations to build enterprise Cloud microservices.',
    requirements: [
      { skillName: 'Python', requiredScore: 75, studentScore: 91, meetsRequirement: true },
      { skillName: 'SQL & Relational DBs', requiredScore: 70, studentScore: 82, meetsRequirement: true },
      { skillName: 'Data Structures & Algorithms', requiredScore: 65, studentScore: 61, meetsRequirement: false },
      { skillName: 'React.js', requiredScore: 70, studentScore: 64, meetsRequirement: false },
    ],
    minProjectsRequired: 2,
    suitabilityScore: 93,
    verificationStrength: 'HIGH',
    skillMatchPercentage: 91,
    projectRelevancePercentage: 94,
    postedDate: '2 days ago'
  },
  {
    id: 'job-2',
    title: 'Frontend React Engineer',
    company: 'TechCorp India',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=60',
    location: 'Hyderabad, India',
    type: 'Full-time',
    workplace: 'Remote',
    salary: '₹7.0 - ₹10.0 LPA',
    description: 'Building high-performance client web portals with React, Next.js, and TypeScript. Needs verified React proficiency.',
    requirements: [
      { skillName: 'React.js', requiredScore: 78, studentScore: 64, meetsRequirement: false },
      { skillName: 'Web Development Fundamentals', requiredScore: 80, studentScore: 88, meetsRequirement: true },
      { skillName: 'Data Structures & Algorithms', requiredScore: 65, studentScore: 61, meetsRequirement: false },
    ],
    minProjectsRequired: 3,
    suitabilityScore: 72,
    verificationStrength: 'MEDIUM',
    skillMatchPercentage: 68,
    projectRelevancePercentage: 75,
    postedDate: '1 week ago'
  },
  {
    id: 'job-3',
    title: 'Junior Data Engineer',
    company: 'DataPulse Analytics',
    logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&auto=format&fit=crop&q=60',
    location: 'Pune, India',
    type: 'Full-time',
    workplace: 'On-site',
    salary: '₹9.0 - ₹11.5 LPA',
    description: 'Build ETL pipelines and manage relational database schemas using Python and SQL.',
    requirements: [
      { skillName: 'Python', requiredScore: 80, studentScore: 91, meetsRequirement: true },
      { skillName: 'SQL & Relational DBs', requiredScore: 75, studentScore: 82, meetsRequirement: true },
      { skillName: 'Data Structures & Algorithms', requiredScore: 60, studentScore: 61, meetsRequirement: true }
    ],
    minProjectsRequired: 2,
    suitabilityScore: 89,
    verificationStrength: 'HIGH',
    skillMatchPercentage: 92,
    projectRelevancePercentage: 86,
    postedDate: '3 days ago'
  }
];

export const initialApplications: JobApplication[] = [
  {
    id: 'app-1',
    jobId: 'job-1',
    jobTitle: 'Software Developer (Full Stack)',
    company: 'ABC Technologies',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=60',
    appliedDate: '15 Aug 2026',
    status: 'Not Selected',
    suitabilityAtApplication: 72,
    employerFeedback: {
      technicalScore: 62,
      comments: 'Applicant demonstrated excellent Python knowledge, but technical assessment performance in DSA and React component state optimization fell slightly below our target cutoff.',
      providedDate: '28 Aug 2026'
    },
    platformAnalysis: {
      gapsIdentified: [
        { skillName: 'Data Structures & Algorithms', studentScore: 61, requiredScore: 70 },
        { skillName: 'React.js', studentScore: 64, requiredScore: 70 }
      ],
      recommendedImprovements: [
        'Complete the Advanced DSA interactive assessment module.',
        'Build 1 full-stack React project featuring dynamic state & custom hooks.',
        'Attend the upcoming Institute DSA interview preparation workshop.'
      ],
      currentSuitability: 72,
      potentialSuitability: 88
    }
  },
  {
    id: 'app-2',
    jobId: 'job-3',
    jobTitle: 'Junior Data Engineer',
    company: 'DataPulse Analytics',
    companyLogo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&auto=format&fit=crop&q=60',
    appliedDate: '01 Sep 2026',
    status: 'Interview',
    suitabilityAtApplication: 89
  },
  {
    id: 'app-3',
    jobId: 'job-2',
    jobTitle: 'Frontend React Engineer',
    company: 'TechCorp India',
    companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=60',
    appliedDate: '05 Sep 2026',
    status: 'Under Review',
    suitabilityAtApplication: 72
  }
];

export const initialChallenges: IndustryChallenge[] = [
  {
    id: 'chal-1',
    title: 'Build a Scalable REST API with Authentication',
    company: 'ABC Technologies',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=60',
    skillsTested: ['Python', 'FastAPI', 'SQL', 'Git'],
    deadline: 'In 5 days',
    difficulty: 'Advanced',
    participantsCount: 142,
    userStatus: 'Submitted',
    userScore: 94,
    suitabilityIncreaseBonus: 9
  },
  {
    id: 'chal-2',
    title: 'Optimizing Data Structures for Real-time Streaming',
    company: 'TechCorp India',
    companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=60',
    skillsTested: ['DSA', 'Python', 'Algorithms'],
    deadline: 'In 12 days',
    difficulty: 'Intermediate',
    participantsCount: 88,
    userStatus: 'Not Started',
    suitabilityIncreaseBonus: 12
  }
];

export const initialSessions: PeerSkillSession[] = [
  {
    id: 'sess-1',
    title: 'Python Core & Practical Automation Workshop',
    mentorName: 'Anupama Devi',
    mentorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    mentorRating: 4.8,
    skillName: 'Python',
    mentorScore: 91,
    type: 'Workshop',
    price: 199,
    duration: '90 mins',
    schedule: 'Tomorrow, 5:00 PM',
    enrolledStudentsCount: 12,
    maxStudents: 20,
    description: 'Learn practical script writing, file handling, and API integration. Live hands-on coding with verified Level-4 mentor.',
    isUserMentor: true
  },
  {
    id: 'sess-2',
    title: 'DSA Crack Code: Trees & Graphs 1-on-1',
    mentorName: 'Rahul Verma',
    mentorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    mentorRating: 4.9,
    skillName: 'Data Structures & Algorithms',
    mentorScore: 95,
    type: '1-to-1 Mentoring',
    price: 299,
    duration: '60 mins',
    schedule: 'Saturday, 11:00 AM',
    enrolledStudentsCount: 5,
    maxStudents: 5,
    description: 'Struggling with graph traversals or DP? Get personalized step-by-step guidance from an Amazon-matched peer mentor.',
    isUserMentor: false
  },
  {
    id: 'sess-3',
    title: 'React Custom Hooks & Context API Architecture',
    mentorName: 'Priya Sharma',
    mentorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    mentorRating: 4.7,
    skillName: 'React.js',
    mentorScore: 89,
    type: 'Project Guidance',
    price: 249,
    duration: '75 mins',
    schedule: 'Sunday, 4:00 PM',
    enrolledStudentsCount: 8,
    maxStudents: 15,
    description: 'Build robust scalable frontend state management. Code review and best practices provided.',
    isUserMentor: false
  }
];

export const initialTeachingEligibility: TeachingEligibility[] = [
  {
    skillName: 'Python',
    isEligible: true,
    score: 91,
    projectsCount: 3,
    certificationsCount: 2,
    challengesCompleted: 1,
    verificationStrength: 'HIGH',
    reasons: [
      'Assessment score exceeds 85% threshold (91%)',
      'At least 2 verified projects demonstrated (3 completed)',
      '1 Industry challenge passed with score > 90%'
    ]
  },
  {
    skillName: 'Web Development Fundamentals',
    isEligible: true,
    score: 88,
    projectsCount: 3,
    certificationsCount: 2,
    challengesCompleted: 1,
    verificationStrength: 'HIGH',
    reasons: [
      'Assessment score exceeds 85% threshold (88%)',
      'Level 4 Demonstrated status active'
    ]
  },
  {
    skillName: 'React.js',
    isEligible: false,
    score: 64,
    projectsCount: 1,
    certificationsCount: 1,
    challengesCompleted: 0,
    verificationStrength: 'INSUFFICIENT',
    reasons: [
      'Assessment score (64%) is below minimum 85% teaching eligibility threshold',
      'Requires at least 2 verified projects (currently 1)'
    ]
  }
];

export const initialEarnings: EarningsRecord = {
  totalThisMonth: 4850,
  totalLifetime: 14200,
  sessionsCompleted: 8,
  studentsTaught: 31,
  rating: 4.8,
  recentTransactions: [
    { id: 'tx-1', studentName: 'Karan Patel', sessionTitle: 'Python Core & Practical Automation', amount: 199, date: '08 Sep 2026' },
    { id: 'tx-2', studentName: 'Neha Gupta', sessionTitle: 'Python Core & Practical Automation', amount: 199, date: '07 Sep 2026' },
    { id: 'tx-3', studentName: 'Aditya Singh', sessionTitle: 'Web Dev Fundamentals 1-on-1', amount: 499, date: '04 Sep 2026' },
    { id: 'tx-4', studentName: 'Meera Nair', sessionTitle: 'Python Core & Practical Automation', amount: 199, date: '01 Sep 2026' }
  ]
};

export const initialSkillDemands: IndustrySkillDemand[] = [
  { skillName: 'Python', demandPercentage: 92, trend: 'UP', growthRate: '+18% this quarter', openJobsCount: 420 },
  { skillName: 'SQL & Relational DBs', demandPercentage: 85, trend: 'UP', growthRate: '+12% this quarter', openJobsCount: 380 },
  { skillName: 'React.js', demandPercentage: 78, trend: 'STABLE', growthRate: '+5% this quarter', openJobsCount: 310 },
  { skillName: 'Cloud & DevOps (AWS/Azure)', demandPercentage: 74, trend: 'UP', growthRate: '+24% this quarter', openJobsCount: 290 },
  { skillName: 'AI / ML Fundamentals', demandPercentage: 70, trend: 'UP', growthRate: '+31% this quarter', openJobsCount: 240 },
  { skillName: 'Cybersecurity Analyst', demandPercentage: 62, trend: 'STABLE', growthRate: '+8% this quarter', openJobsCount: 180 }
];

export const initialCurriculumGaps: CurriculumGap[] = [
  {
    id: 'gap-1',
    subject: 'Cloud Computing & Serverless Deployment',
    industryDemandLevel: 'CRITICAL',
    studentProficiency: 'LOW',
    currentCurriculumCoverage: 'LIMITED',
    recommendation: 'Introduce practical Cloud Computing hands-on laboratory training for Semester 5 & 6 Computer Science students.',
    targetBatches: ['CS 2023-2027 Batch (S5)', 'IT 2023-2027 Batch (S5)'],
    status: 'Action Needed'
  },
  {
    id: 'gap-2',
    subject: 'Advanced DSA & Algorithmic Optimization',
    industryDemandLevel: 'HIGH',
    studentProficiency: 'MODERATE',
    currentCurriculumCoverage: 'PARTIAL',
    recommendation: 'Organize 4-week intensive DSA bootcamp with weekly peer-mentored problem solving sessions.',
    targetBatches: ['All Pre-final Year Engineering Batches'],
    status: 'Program Scheduled'
  },
  {
    id: 'gap-3',
    subject: 'Modern React Architecture & Micro-frontends',
    industryDemandLevel: 'HIGH',
    studentProficiency: 'LOW',
    currentCurriculumCoverage: 'LIMITED',
    recommendation: 'Empower student peer mentors to conduct hands-on React workshop modules.',
    targetBatches: ['CS & EC S6 Students'],
    status: 'Action Needed'
  }
];

export const initialCandidates: CandidateProfile[] = [
  {
    id: 'cand-1',
    name: 'Anupama Devi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    email: 'anupama.devi@institute.edu',
    college: 'National Institute of Technology',
    degree: 'B.Tech Computer Science',
    graduationYear: '2027',
    targetRole: 'Software Developer',
    careerReadiness: 87,
    suitabilityForJob: 93,
    verificationStrength: 'HIGH',
    topVerifiedSkills: initialSkills,
    projectsCount: 3,
    challengesCompletedCount: 1,
    certificationsCount: 3
  },
  {
    id: 'cand-2',
    name: 'Rohan Verma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    email: 'rohan.v@institute.edu',
    college: 'Indian Institute of Information Technology',
    degree: 'B.Tech IT',
    graduationYear: '2026',
    targetRole: 'Full Stack Engineer',
    careerReadiness: 94,
    suitabilityForJob: 96,
    verificationStrength: 'HIGH',
    topVerifiedSkills: [
      { id: 'r-1', name: 'Python', category: 'Backend', proficiencyLevel: 'Expert', score: 95, verificationLevel: 4, status: 'Verified', evidence: { lastVerifiedDate: '1 week ago' } },
      { id: 'r-2', name: 'React.js', category: 'Frontend', proficiencyLevel: 'Advanced', score: 92, verificationLevel: 4, status: 'Verified', evidence: { lastVerifiedDate: '3 days ago' } }
    ],
    projectsCount: 5,
    challengesCompletedCount: 3,
    certificationsCount: 4
  },
  {
    id: 'cand-3',
    name: 'Sneha Kapoor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    email: 'sneha.k@institute.edu',
    college: 'BITS Pilani Campus',
    degree: 'B.E. Computer Science',
    graduationYear: '2027',
    targetRole: 'Data Engineer',
    careerReadiness: 91,
    suitabilityForJob: 92,
    verificationStrength: 'HIGH',
    topVerifiedSkills: [
      { id: 's-1', name: 'SQL & Relational DBs', category: 'Database', proficiencyLevel: 'Advanced', score: 94, verificationLevel: 4, status: 'Verified', evidence: { lastVerifiedDate: '5 days ago' } },
      { id: 's-2', name: 'Python', category: 'Data', proficiencyLevel: 'Advanced', score: 89, verificationLevel: 3, status: 'Verified', evidence: { lastVerifiedDate: '2 weeks ago' } }
    ],
    projectsCount: 4,
    challengesCompletedCount: 2,
    certificationsCount: 3
  }
];

export const systemHealthData: SystemHealthStatus[] = [
  { service: 'API Gateway & Routing', status: 'Operational', latency: '24ms', uptime: '99.98%' },
  { service: 'Skill Verification Engine', status: 'Operational', latency: '42ms', uptime: '99.99%' },
  { service: 'Job Suitability Calculator', status: 'Operational', latency: '35ms', uptime: '100.0%' },
  { service: 'Assessment & Quiz Engine', status: 'Operational', latency: '18ms', uptime: '99.95%' },
  { service: 'Peer Skill Payout System', status: 'Operational', latency: '58ms', uptime: '99.90%' },
  { service: 'Database Core Cluster', status: 'Operational', latency: '12ms', uptime: '99.99%' }
];
