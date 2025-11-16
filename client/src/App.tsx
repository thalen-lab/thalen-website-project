import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";

// Service Pages
import Automation from "./pages/services/Automation";
import Analytics from "./pages/services/Analytics";
import Cloud from "./pages/services/Cloud";
import Cybersecurity from "./pages/services/Cybersecurity";
import AppDevelopment from "./pages/services/AppDevelopment";
import CustomSoftware from "./pages/services/CustomSoftware";
import DigitalTransformation from "./pages/services/DigitalTransformation";

// Industry Pages
import FederalGovernment from "./pages/industries/FederalGovernment";
import Healthcare from "./pages/industries/Healthcare";
import Manufacturing from "./pages/industries/Manufacturing";
import Financial from "./pages/industries/Financial";

function Router() {
  return (
    <Switch>
      {/* Main Pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/insights" component={Insights} />

      {/* Service Pages */}
      <Route path="/services/automation" component={Automation} />
      <Route path="/services/analytics" component={Analytics} />
      <Route path="/services/cloud" component={Cloud} />
      <Route path="/services/cybersecurity" component={Cybersecurity} />
      <Route path="/services/app-development" component={AppDevelopment} />
      <Route path="/services/custom-software" component={CustomSoftware} />
      <Route path="/services/digital-transformation" component={DigitalTransformation} />

      {/* Industry Pages */}
      <Route path="/industries/federal-government" component={FederalGovernment} />
      <Route path="/industries/healthcare" component={Healthcare} />
      <Route path="/industries/manufacturing" component={Manufacturing} />
      <Route path="/industries/financial" component={Financial} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
