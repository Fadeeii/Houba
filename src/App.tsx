import React from 'react';
import { EcosystemProvider, useEcosystem } from './context/EcosystemContext';
import { Navbar } from './components/common/Navbar';
import { Sidebar } from './components/common/Sidebar';
import { EvidenceModal } from './components/common/EvidenceModal';

// Landing Page
import { LandingPage } from './components/landing/LandingPage';

// Student Components
import { StudentDashboard } from './components/student/StudentDashboard';
import { MySkills } from './components/student/MySkills';
import { SkillVerification } from './components/student/SkillVerification';
import { AssessmentRunner } from './components/student/AssessmentRunner';
import { SkillGapAnalysis } from './components/student/SkillGapAnalysis';
import { JobSuitabilityPage } from './components/student/JobSuitabilityPage';
import { CareerRoadmap } from './components/student/CareerRoadmap';
import { JobsMarketplace } from './components/student/JobsMarketplace';
import { IndustryChallengesStudent } from './components/student/IndustryChallengesStudent';
import { ApplicationInsightsPage } from './components/student/ApplicationInsightsPage';
import { ClosedFeedbackLoopVisual } from './components/student/ClosedFeedbackLoopVisual';
import { SkillSharingEarn } from './components/student/SkillSharingEarn';
import { MyEarnings } from './components/student/MyEarnings';

// Institute Components
import { InstituteDashboard } from './components/institute/InstituteDashboard';
import { IndustryDemandDashboard } from './components/institute/IndustryDemandDashboard';
import { CurriculumGapAnalyzer } from './components/institute/CurriculumGapAnalyzer';
import { StudentMentorDiscovery } from './components/institute/StudentMentorDiscovery';
import { InstitutionFeedbackLoopVisual } from './components/institute/InstitutionFeedbackLoopVisual';
import { PlacementAnalytics } from './components/institute/PlacementAnalytics';

// Industry Components
import { IndustryDashboard } from './components/industry/IndustryDashboard';
import { PostJob } from './components/industry/PostJob';
import { TalentDiscovery } from './components/industry/TalentDiscovery';
import { PostChallengeIndustry } from './components/industry/PostChallengeIndustry';
import { EmployerFeedbackEngine } from './components/industry/EmployerFeedbackEngine';

// Admin Components
import { AdminOverview } from './components/admin/AdminOverview';
import { VerificationQueueMgmt } from './components/admin/VerificationQueueMgmt';
import { SystemHealthMonitoring } from './components/admin/SystemHealthMonitoring';
import { MasterFeedbackLoopVisualization } from './components/admin/MasterFeedbackLoopVisualization';

const MainContent: React.FC = () => {
  const { currentRole, activeTab } = useEcosystem();

  if (currentRole === 'landing') {
    return <LandingPage />;
  }

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto overflow-x-hidden">
      
      {/* Student Portal Navigation Views */}
      {currentRole === 'student' && (
        <>
          {activeTab === 'dashboard' && <StudentDashboard />}
          {activeTab === 'my-skills' && <MySkills />}
          {activeTab === 'verification' && <SkillVerification />}
          {activeTab === 'assessments' && <AssessmentRunner />}
          {activeTab === 'skill-gap' && <SkillGapAnalysis />}
          {activeTab === 'job-suitability' && <JobSuitabilityPage />}
          {activeTab === 'roadmap' && <CareerRoadmap />}
          {activeTab === 'jobs' && <JobsMarketplace />}
          {activeTab === 'challenges' && <IndustryChallengesStudent />}
          {(activeTab === 'applications' || activeTab === 'insights') && <ApplicationInsightsPage />}
          {activeTab === 'feedback-loop' && <ClosedFeedbackLoopVisual />}
          {activeTab === 'skill-sharing' && <SkillSharingEarn />}
          {activeTab === 'earnings' && <MyEarnings />}
        </>
      )}

      {/* Institute Portal Navigation Views */}
      {currentRole === 'institute' && (
        <>
          {(activeTab === 'dashboard' || activeTab === 'student-analytics') && <InstituteDashboard />}
          {activeTab === 'industry-demand' && <IndustryDemandDashboard />}
          {(activeTab === 'curriculum-gap' || activeTab === 'training') && <CurriculumGapAnalyzer />}
          {activeTab === 'mentor-discovery' && <StudentMentorDiscovery />}
          {activeTab === 'inst-feedback-loop' && <InstitutionFeedbackLoopVisual />}
          {activeTab === 'placement-analytics' && <PlacementAnalytics />}
        </>
      )}

      {/* Industry Portal Navigation Views */}
      {currentRole === 'industry' && (
        <>
          {activeTab === 'dashboard' && <IndustryDashboard />}
          {activeTab === 'post-job' && <PostJob />}
          {activeTab === 'talent-discovery' && <TalentDiscovery />}
          {activeTab === 'post-challenge' && <PostChallengeIndustry />}
          {activeTab === 'employer-feedback' && <EmployerFeedbackEngine />}
        </>
      )}

      {/* Admin Portal Navigation Views */}
      {currentRole === 'admin' && (
        <>
          {(activeTab === 'dashboard' || activeTab === 'ecosystem-insights') && <AdminOverview />}
          {activeTab === 'verification-mgmt' && <VerificationQueueMgmt />}
          {activeTab === 'system-health' && <SystemHealthMonitoring />}
          {activeTab === 'master-feedback-loop' && <MasterFeedbackLoopVisualization />}
        </>
      )}

    </div>
  );
};

export function App() {
  return (
    <EcosystemProvider>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
            <MainContent />
          </main>
        </div>
        <EvidenceModal />
      </div>
    </EcosystemProvider>
  );
}

export default App;
