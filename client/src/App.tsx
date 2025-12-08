import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import GovernmentChat from "./components/GovernmentChat";
import LiveChat from "./components/LiveChat";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import { NotificationBanner } from "./components/NotificationBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ContactPartnerships from "./pages/contact/Partnerships";
import ContactGovernment from "./pages/contact/Government";
import ContactEmergency from "./pages/contact/Emergency";
import ContactAdvisory from "./pages/contact/Advisory";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Insights from "./pages/Insights";
import Methodology from "./pages/Methodology";
import ServiceComparison from "./pages/ServiceComparison";
import PackageBuilder from "./pages/PackageBuilder";
import FederalSolutions from "./pages/FederalSolutions";
import StateLocalSolutions from "./pages/federal-solutions/StateLocal";
import StateROICalculator from "./pages/federal-solutions/StateROICalculator";
import StateComplianceChecklist from "./pages/federal-solutions/StateComplianceChecklist";
import StateProcurementGuide from "./pages/federal-solutions/StateProcurementGuide";
import StateAttorneyGeneralCase from "./pages/case-studies/StateAttorneyGeneral";
import StateEnergyCommissionCase from "./pages/case-studies/StateEnergyCommission";
import CountyHealthDepartmentCase from "./pages/case-studies/CountyHealthDepartment";
import DoDManufacturingCase from "./pages/case-studies/DoDManufacturing";
import VAHealthcareCase from "./pages/case-studies/VAHealthcare";
import CapabilityGenerator from "./pages/CapabilityGenerator";
import GovernmentResources from "./pages/GovernmentResources";
import ContractVehicleComparison from "./pages/ContractVehicleComparison";
import ComplianceRoadmap from "./pages/ComplianceRoadmap";
import MobileContact from "./pages/MobileContact";
import MobileAssessment from "./pages/MobileAssessment";
import ContractVehicles from "./pages/ContractVehicles";

// Service Pages
import AutomationService from "./pages/services/Automation";
import DataAnalyticsService from "./pages/services/DataAnalytics";
import AnalyticsService from "./pages/services/Analytics";
import Cloud from "./pages/services/Cloud";
import CybersecurityService from "./pages/services/Cybersecurity";
import ATOSupportService from "./pages/services/ATOSupport";
import AppDevelopmentService from "./pages/services/AppDevelopment";
import CustomSoftwareService from "./pages/services/CustomSoftware";

// Custom Software Subpages
import EnterpriseSaaS from "./pages/services/custom-software/EnterpriseSaaS";
import StartupMVP from "./pages/services/custom-software/StartupMVP";
import BusinessApps from "./pages/services/custom-software/BusinessApps";
import APIMicroservices from "./pages/services/custom-software/APIMicroservices";
import MobileApps from "./pages/services/custom-software/MobileApps";
import CustomSoftwareLegacyModernization from "./pages/services/custom-software/LegacyModernization";
import DigitalTransformationService from "./pages/services/DigitalTransformation";

// Digital Transformation Subpages
import StrategyDevelopment from "./pages/services/digital-transformation/StrategyDevelopment";
import ChangeManagement from "./pages/services/digital-transformation/ChangeManagement";
import TrainingEnablement from "./pages/services/digital-transformation/TrainingEnablement";
import SuccessMetrics from "./pages/services/digital-transformation/SuccessMetrics";

// Automation Subpages
import RPAService from "./pages/services/automation/RPA";
import ProcessAssessment from "./pages/services/automation/rpa/ProcessAssessment";
import PlatformImplementation from "./pages/services/automation/rpa/PlatformImplementation";
import ATOCompliance from "./pages/services/automation/rpa/ATOCompliance";
import CoESetup from "./pages/services/automation/rpa/CoESetup";
import IntegrationService from "./pages/services/automation/Integration";
import OrchestrationService from "./pages/services/automation/Orchestration";

// Data Analytics Subpages
import DataStrategyService from "./pages/services/data-analytics/Strategy";

// Cloud Service Subpages
import CloudMigration from "./pages/services/CloudMigration";
import CloudOptimization from "./pages/services/CloudOptimization";
import MultiCloud from "./pages/services/MultiCloud";
import CloudSecurity from "./pages/services/CloudSecurity";
import InfrastructureAsCode from "./pages/services/InfrastructureAsCode";
import DisasterRecovery from "./pages/services/DisasterRecovery";

// Cybersecurity Subpages
import SecurityAssessment from "./pages/services/SecurityAssessment";
import PenetrationTesting from "./pages/services/PenetrationTesting";
import IdentityAccessManagement from "./pages/services/IdentityAccessManagement";
import SecurityOperationsCenter from "./pages/services/SecurityOperationsCenter";
import IncidentResponse from "./pages/services/IncidentResponse";
import ZeroTrustArchitecture from "./pages/services/ZeroTrustArchitecture";

// Application Development Subpages
import ApplicationDevelopment from "./pages/services/ApplicationDevelopment";
import CustomApplicationDevelopment from "./pages/services/CustomApplicationDevelopment";
import LowCodeDevelopment from "./pages/services/LowCodeDevelopment";
import LegacyModernization from "./pages/services/LegacyModernization";
import EnterprisePortals from "./pages/services/EnterprisePortals";
import SystemIntegration from "./pages/services/SystemIntegration";
import FedRAMPIntegration from "./pages/services/FedRAMPIntegration";
import LegacyIntegration from "./pages/services/LegacyIntegration";
import HybridCloud from "./pages/services/HybridCloud";
import APISecurity from "./pages/services/APISecurity";
import PlatformSelection from "./pages/services/PlatformSelection";
import LegacyModernizationDT from "./pages/services/LegacyModernizationDT";
import ChangeManagementService from "./pages/services/ChangeManagement";
import TMFSupport from "./pages/services/TMFSupport";
import ApplicationSecurity from "./pages/services/ApplicationSecurity";
import VisualizationService from "./pages/services/data-analytics/Visualization";
import MLAIService from "./pages/services/data-analytics/MLAI";
import DataEngineeringService from "./pages/services/data-analytics/Engineering";
import DataAssessment from "./pages/services/data-analytics/Assessment";

// Industry Pages
import FederalIndustry from "./pages/industries/FederalGovernment";
import HealthcareIndustry from "./pages/industries/Healthcare";
import ManufacturingIndustry from "./pages/industries/Manufacturing";
import FinancialIndustry from "./pages/industries/Financial";

// Case Study Pages
import FederalAutomationCase from "./pages/case-studies/FederalAutomation";
import HealthcareAICase from "./pages/case-studies/HealthcareAI";
import DefenseCloudCase from "./pages/case-studies/DefenseCloud";
import ManufacturingUptimeCase from "./pages/case-studies/ManufacturingUptime";
import EnergyGridCase from "./pages/case-studies/EnergyGrid";
import BankFraudCase from "./pages/case-studies/BankFraud";
import IntelligenceSecurityCase from "./pages/case-studies/IntelligenceSecurity";
import HospitalWaitTimesCase from "./pages/case-studies/HospitalWaitTimes";
import VAPredictiveAnalyticsCase from "./pages/case-studies/VAPredictiveAnalytics";
import DODDataPipelinesCase from "./pages/case-studies/DODDataPipelines";
import HHSPublicHealthCase from "./pages/case-studies/HHSPublicHealth";
import AerospaceDigitalTwinCase from "./pages/case-studies/AerospaceDigitalTwin";
import StateDOTCase from "./pages/case-studies/StateDOT";
import CountyHealthCase from "./pages/case-studies/CountyHealth";
import FederalAgencyAutomation from "./pages/case-studies/FederalAgencyAutomation";
import DoDManufacturingUptime from "./pages/case-studies/DoDManufacturingUptime";
import VALegacyIntegration from "./pages/case-studies/VALegacyIntegration";
import CaseStudies from "./pages/CaseStudies";

// Insights Pages
import ROIMethodologyInsight from "./pages/insights/ROIMethodology";
import ZeroTrustInsight from "./pages/insights/ZeroTrustArchitecture";
import ResponsibleAIInsight from "./pages/insights/ResponsibleAI";
import MultiCloudInsight from "./pages/insights/MultiCloudStrategy";
import ChangeManagementInsight from "./pages/insights/ChangeManagement";
import RealTimeAnalyticsInsight from "./pages/insights/RealTimeAnalytics";
import AuthorProfile from "./pages/AuthorProfile";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminBlogPosts from "./pages/admin/BlogPosts";
import BlogPostForm from "./pages/admin/BlogPostForm";
import AdminCaseStudies from "./pages/admin/CaseStudies";
import CaseStudyForm from "./pages/admin/CaseStudyForm";
import AdminEvents from "./pages/admin/Events";
import EventForm from "./pages/admin/EventForm";
import AdminMediaLibrary from "./pages/admin/MediaLibrary";
import AdminScheduledContent from "./pages/admin/ScheduledContent";
import ProtectedRoute from "./components/ProtectedRoute";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/team"} component={Team} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/m/contact"} component={MobileContact} />
      <Route path={"/m/assessment"} component={MobileAssessment} />
      <Route path={"/contact/partnerships"} component={ContactPartnerships} />
      <Route path={"/contact/government"} component={ContactGovernment} />
      <Route path={"/contact/emergency"} component={ContactEmergency} />
      <Route path={"/contact/advisory"} component={ContactAdvisory} />
      <Route path={"/partners"} component={Partners} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/events"} component={Events} />
      <Route path={"/insights"} component={Insights} />
      <Route path={"/methodology"} component={Methodology} />
      <Route path={"/compare-services"} component={ServiceComparison} />
      <Route path={"/package-builder"} component={PackageBuilder} />
      <Route path={"/federal-solutions"} component={FederalSolutions} />
      <Route path={"/federal-solutions/state-local"} component={StateLocalSolutions} />
      <Route path={"/federal-solutions/state-local/roi-calculator"} component={StateROICalculator} />
      <Route path={"/federal-solutions/state-local/compliance-checklist"} component={StateComplianceChecklist} />
      <Route path={"/federal-solutions/state-local/procurement-guide"} component={StateProcurementGuide} />
      <Route path={"/case-studies/state-attorney-general"} component={StateAttorneyGeneralCase} />
      <Route path={"/case-studies/state-energy-commission"} component={StateEnergyCommissionCase} />
      <Route path={"/case-studies/county-health-department"} component={CountyHealthDepartmentCase} />
      <Route path={"/case-studies/dod-manufacturing"} component={DoDManufacturingCase} />
      <Route path={"/case-studies/va-healthcare"} component={VAHealthcareCase} />
      <Route path={"/capability-generator"} component={CapabilityGenerator} />
      <Route path={"/government-resources"} component={GovernmentResources} />
      <Route path={"/contract-vehicle-comparison"} component={ContractVehicleComparison} />
      <Route path={"/compliance-roadmap"} component={ComplianceRoadmap} />
      <Route path={"/contract-vehicles"} component={ContractVehicles} />

      {/* Service Pages */}
      <Route path={"/services/automation"} component={AutomationService} />
      <Route path={"/services/automation/rpa"} component={RPAService} />
      <Route path={"/services/automation/rpa/process-assessment"} component={ProcessAssessment} />
      <Route path={"/services/automation/rpa/platform-implementation"} component={PlatformImplementation} />
      <Route path={"/services/automation/rpa/ato-compliance"} component={ATOCompliance} />
      <Route path={"/services/automation/rpa/coe-setup"} component={CoESetup} />
      <Route path={"/services/automation/integration"} component={IntegrationService} />
      <Route path={"/services/automation/orchestration"} component={OrchestrationService} />
      <Route path={"/services/data-analytics"} component={DataAnalyticsService} />
      <Route path={"/services/data-analytics/strategy"} component={DataStrategyService} />
      <Route path={"/services/data-analytics/visualization"} component={VisualizationService} />
      <Route path={"/services/data-analytics/ml-ai"} component={MLAIService} />
      <Route path={"/services/data-analytics/engineering"} component={DataEngineeringService} />
      <Route path={"/services/data-analytics/assessment"} component={DataAssessment} />
      <Route path={"/services/analytics"} component={AnalyticsService} />
      <Route path={"/services/cloud"} component={Cloud} />
      <Route path={"/services/cloud-migration"} component={CloudMigration} />
      <Route path={"/services/cloud-optimization"} component={CloudOptimization} />
      <Route path={"/services/multi-cloud"} component={MultiCloud} />
      <Route path={"/services/cloud-security"} component={CloudSecurity} />
      <Route path={"/services/infrastructure-as-code"} component={InfrastructureAsCode} />
      <Route path={"/services/disaster-recovery"} component={DisasterRecovery} />
      <Route path={"/services/cybersecurity"} component={CybersecurityService} />
      <Route path={"/services/ato-support"} component={ATOSupportService} />
      <Route path={"/services/security-assessment"} component={SecurityAssessment} />
      <Route path={"/services/penetration-testing"} component={PenetrationTesting} />
      <Route path={"/services/identity-access-management"} component={IdentityAccessManagement} />
      <Route path={"/services/security-operations-center"} component={SecurityOperationsCenter} />
      <Route path={"/services/incident-response"} component={IncidentResponse} />
      <Route path={"/services/zero-trust-architecture"} component={ZeroTrustArchitecture} />
      <Route path={"/services/application-development"} component={ApplicationDevelopment} />
      <Route path={"/services/custom-application-development"} component={CustomApplicationDevelopment} />
      <Route path={"/services/low-code-development"} component={LowCodeDevelopment} />
      <Route path={"/services/legacy-modernization"} component={LegacyModernization} />
      <Route path={"/services/enterprise-portals"} component={EnterprisePortals} />
      <Route path={"/services/system-integration"} component={SystemIntegration} />
      <Route path={"/services/fedramp-integration"} component={FedRAMPIntegration} />
      <Route path={"/services/legacy-integration"} component={LegacyIntegration} />
      <Route path={"/services/hybrid-cloud"} component={HybridCloud} />
      <Route path={"/services/api-security"} component={APISecurity} />
      <Route path={"/services/application-security"} component={ApplicationSecurity} />
      <Route path={"/services/app-development"} component={AppDevelopmentService} />
      <Route path={"/services/custom-software"} component={CustomSoftwareService} />
      <Route path={"/services/custom-software/enterprise-saas"} component={EnterpriseSaaS} />
      <Route path={"/services/custom-software/startup-mvp"} component={StartupMVP} />
      <Route path={"/services/custom-software/business-apps"} component={BusinessApps} />
      <Route path={"/services/custom-software/api-microservices"} component={APIMicroservices} />
      <Route path={"/services/custom-software/mobile-apps"} component={MobileApps} />
      <Route path={"/services/custom-software/legacy-modernization"} component={CustomSoftwareLegacyModernization} />
      <Route path={"/services/digital-transformation"} component={DigitalTransformationService} />
      <Route path={"/services/platform-selection"} component={PlatformSelection} />
      <Route path={"/services/legacy-modernization-dt"} component={LegacyModernizationDT} />
      <Route path={"/services/change-management"} component={ChangeManagementService} />
      <Route path={"/services/tmf-support"} component={TMFSupport} />
      <Route path={"/services/digital-transformation/strategy-development"} component={StrategyDevelopment} />
      <Route path={"/services/digital-transformation/change-management"} component={ChangeManagement} />
      <Route path={"/services/digital-transformation/training-enablement"} component={TrainingEnablement} />
      <Route path={"/services/digital-transformation/success-metrics"} component={SuccessMetrics} />
      
      {/* Industry Routes */}
      <Route path={"/industries/federal-government"} component={FederalIndustry} />
      <Route path={"/industries/healthcare"} component={HealthcareIndustry} />
      <Route path={"/industries/manufacturing"} component={ManufacturingIndustry} />
      <Route path={"/industries/financial-services"} component={FinancialIndustry} />
      
      {/* Case Study Routes */}
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/case-studies/federal-automation"} component={FederalAutomationCase} />
      <Route path={"/case-studies/healthcare-ai"} component={HealthcareAICase} />
      <Route path={"/case-studies/defense-cloud"} component={DefenseCloudCase} />
      <Route path={"/case-studies/manufacturing-uptime"} component={ManufacturingUptimeCase} />
      <Route path={"/case-studies/energy-grid"} component={EnergyGridCase} />
      <Route path={"/case-studies/bank-fraud"} component={BankFraudCase} />
      <Route path={"/case-studies/intelligence-security"} component={IntelligenceSecurityCase} />
      <Route path={"/case-studies/hospital-wait-times"} component={HospitalWaitTimesCase} />
      <Route path={"/case-studies/aerospace-digital-twin"} component={AerospaceDigitalTwinCase} />
      <Route path={"/case-studies/va-predictive-analytics"} component={VAPredictiveAnalyticsCase} />
      <Route path={"/case-studies/dod-data-pipelines"} component={DODDataPipelinesCase} />
      <Route path={"/case-studies/hhs-public-health"} component={HHSPublicHealthCase} />
      <Route path={"/case-studies/state-dot"} component={StateDOTCase} />
      <Route path={"/case-studies/county-health"} component={CountyHealthCase} />
      <Route path={"/case-studies/federal-agency-automation"} component={FederalAgencyAutomation} />
      <Route path={"/case-studies/dod-manufacturing-uptime"} component={DoDManufacturingUptime} />
      <Route path={"/case-studies/va-legacy-integration"} component={VALegacyIntegration} />
      
      {/* Insights Routes */}
      <Route path={"/insights/roi-methodology"} component={ROIMethodologyInsight} />
      <Route path={"/insights/zero-trust"} component={ZeroTrustInsight} />
      <Route path={"/insights/responsible-ai"} component={ResponsibleAIInsight} />
      <Route path={"/insights/multi-cloud"} component={MultiCloudInsight} />
      <Route path={"/insights/change-management"} component={ChangeManagementInsight} />
      <Route path={"/insights/real-time-analytics"} component={RealTimeAnalyticsInsight} />
      
      {/* Author Profile Routes */}
      <Route path={"/authors/:slug"} component={AuthorProfile} />
      
      {/* Admin Routes */}
      <Route path={"/admin"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <AdminDashboard />
          </ProtectedRoute>
        )}
      </Route>
      <Route path={"/admin/blog-posts"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <AdminBlogPosts />
          </ProtectedRoute>
        )}
      </Route>
      <Route path={"/admin/blog-posts/new"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <BlogPostForm />
          </ProtectedRoute>
        )}
      </Route>
      <Route path={"/admin/blog-posts/:id/edit"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <BlogPostForm />
          </ProtectedRoute>
        )}
      </Route>
      <Route path={"/admin/case-studies"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <AdminCaseStudies />
          </ProtectedRoute>
        )}
      </Route>
      <Route path={"/admin/case-studies/new"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <CaseStudyForm />
          </ProtectedRoute>
        )}
      </Route>
      <Route path={"/admin/case-studies/:id/edit"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <CaseStudyForm />
          </ProtectedRoute>
        )}
      </Route>
      <Route path={"/admin/events"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <AdminEvents />
          </ProtectedRoute>
        )}
      </Route>
      <Route path={"/admin/events/new"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <EventForm />
          </ProtectedRoute>
        )}
      </Route>
      <Route path={"/admin/events/:id/edit"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <EventForm />
          </ProtectedRoute>
        )}
      </Route>
      <Route path={"/admin/media"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <AdminMediaLibrary />
          </ProtectedRoute>
        )}
      </Route>
      <Route path={"/admin/scheduled"}>
        {() => (
          <ProtectedRoute requireAdmin>
            <AdminScheduledContent />
          </ProtectedRoute>
        )}
      </Route>
      
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <GovernmentChat />
          <NotificationBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
