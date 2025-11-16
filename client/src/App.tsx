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
import Methodology from "./pages/Methodology";

// Service Pages
import AutomationService from "./pages/services/Automation";
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
import AerospaceDigitalTwinCase from "./pages/case-studies/AerospaceDigitalTwin";

// Insights Pages
import ROIMethodologyInsight from "./pages/insights/ROIMethodology";
import ZeroTrustInsight from "./pages/insights/ZeroTrustArchitecture";
import ResponsibleAIInsight from "./pages/insights/ResponsibleAI";
import MultiCloudInsight from "./pages/insights/MultiCloudStrategy";
import ChangeManagementInsight from "./pages/insights/ChangeManagement";
import RealTimeAnalyticsInsight from "./pages/insights/RealTimeAnalytics";

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
      <Route path={"/methodology"} component={Methodology} />
      
      {/* Service Routes */}
      <Route path={"/services/automation"} component={AutomationService} />
      <Route path={"/services/automation/rpa"} component={RPAService} />
      <Route path={"/services/automation/integration"} component={IntegrationService} />
      <Route path={"/services/automation/orchestration"} component={OrchestrationService} />
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
      <Route path={"/case-studies/federal-automation"} component={FederalAutomationCase} />
      <Route path={"/case-studies/healthcare-ai"} component={HealthcareAICase} />
      <Route path={"/case-studies/defense-cloud"} component={DefenseCloudCase} />
      <Route path={"/case-studies/manufacturing-uptime"} component={ManufacturingUptimeCase} />
      <Route path={"/case-studies/energy-grid"} component={EnergyGridCase} />
      <Route path={"/case-studies/bank-fraud"} component={BankFraudCase} />
      <Route path={"/case-studies/intelligence-security"} component={IntelligenceSecurityCase} />
      <Route path={"/case-studies/hospital-wait-times"} component={HospitalWaitTimesCase} />
      <Route path={"/case-studies/aerospace-digital-twin"} component={AerospaceDigitalTwinCase} />
      
      {/* Insights Routes */}
      <Route path={"/insights/roi-methodology"} component={ROIMethodologyInsight} />
      <Route path={"/insights/zero-trust"} component={ZeroTrustInsight} />
      <Route path={"/insights/responsible-ai"} component={ResponsibleAIInsight} />
      <Route path={"/insights/multi-cloud"} component={MultiCloudInsight} />
      <Route path={"/insights/change-management"} component={ChangeManagementInsight} />
      <Route path={"/insights/real-time-analytics"} component={RealTimeAnalyticsInsight} />
      
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
