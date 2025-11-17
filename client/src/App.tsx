import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Insights from "./pages/Insights";
import Methodology from "./pages/Methodology";

// Service Pages
import AutomationService from "./pages/services/Automation";
import DataAnalyticsService from "./pages/services/DataAnalytics";
import AnalyticsService from "./pages/services/Analytics";
import CloudService from "./pages/services/Cloud";
import CybersecurityService from "./pages/services/Cybersecurity";
import AppDevelopmentService from "./pages/services/AppDevelopment";
import CustomSoftwareService from "./pages/services/CustomSoftware";
import DigitalTransformationService from "./pages/services/DigitalTransformation";

// Automation Subpages
import RPAService from "./pages/services/automation/RPA";
import IntegrationService from "./pages/services/automation/Integration";
import OrchestrationService from "./pages/services/automation/Orchestration";

// Data Analytics Subpages
import DataStrategyService from "./pages/services/data-analytics/Strategy";
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
import ProtectedRoute from "./components/ProtectedRoute";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/partners"} component={Partners} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/events"} component={Events} />
      <Route path={"/insights"} component={Insights} />
      <Route path={"/methodology"} component={Methodology} />
      
      {/* Service Routes */}
      <Route path={"/services/automation"} component={AutomationService} />
      <Route path={"/services/automation/rpa"} component={RPAService} />
      <Route path={"/services/automation/integration"} component={IntegrationService} />
      <Route path={"/services/automation/orchestration"} component={OrchestrationService} />
      <Route path={"/services/data-analytics"} component={DataAnalyticsService} />
      <Route path={"/services/data-analytics/strategy"} component={DataStrategyService} />
      <Route path={"/services/data-analytics/visualization"} component={VisualizationService} />
      <Route path={"/services/data-analytics/ml-ai"} component={MLAIService} />
      <Route path={"/services/data-analytics/engineering"} component={DataEngineeringService} />
      <Route path={"/services/data-analytics/assessment"} component={DataAssessment} />
      <Route path={"/services/analytics"} component={AnalyticsService} />
      <Route path={"/services/cloud"} component={CloudService} />
      <Route path={"/services/cybersecurity"} component={CybersecurityService} />
      <Route path={"/services/app-development"} component={AppDevelopmentService} />
      <Route path={"/services/custom-software"} component={CustomSoftwareService} />
      <Route path={"/services/digital-transformation"} component={DigitalTransformationService} />
      
      {/* Industry Routes */}
      <Route path={"/industries/federal"} component={FederalIndustry} />
      <Route path={"/industries/healthcare"} component={HealthcareIndustry} />
      <Route path={"/industries/manufacturing"} component={ManufacturingIndustry} />
      <Route path={"/industries/financial"} component={FinancialIndustry} />
      
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
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
