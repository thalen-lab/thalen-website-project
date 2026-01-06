import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface AssessmentFormProps {
  title?: string;
  description?: string;
  serviceType?: string;
}

const STORAGE_KEY = "thalen_assessment_form";

export default function AssessmentForm({ 
  title = "Request Free Assessment",
  description = "Get a complimentary consultation with our experts. We'll analyze your requirements and provide tailored recommendations.",
  serviceType = "Application Development"
}: AssessmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agency: "",
    phone: "",
    clearanceLevel: "",
    projectType: "",
    timeline: "",
    description: ""
  });

  // Load saved form data from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedData = JSON.parse(saved);
        setFormData(parsedData);
        console.log("Loaded saved form data from localStorage");
      }
    } catch (error) {
      console.error("Error loading form data from localStorage:", error);
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch (error) {
      console.error("Error saving form data to localStorage:", error);
    }
  }, [formData]);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Assessment request submitted:", { ...formData, serviceType });
    
    // Clear saved form data from localStorage on successful submission
    try {
      localStorage.removeItem(STORAGE_KEY);
      console.log("Cleared saved form data from localStorage");
    } catch (error) {
      console.error("Error clearing form data from localStorage:", error);
    }
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Assessment request submitted successfully! We'll contact you within 24 hours.");
  };

  if (isSubmitted) {
    return (
      <Card className="border-2 border-accent">
        <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
            <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-foreground" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Thank You!</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6">
            Your assessment request has been received. Our team will review your requirements and contact you within 24 hours to schedule a consultation.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Check your email for confirmation and next steps.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-accent/20">
      <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6">{description}</p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="name" className="text-sm sm:text-base">Full Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="John Doe"
                className="h-11 sm:h-10 text-base sm:text-sm"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john.doe@agency.gov"
                className="h-11 sm:h-10 text-base sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="agency" className="text-sm sm:text-base">Agency/Organization *</Label>
              <Input
                id="agency"
                required
                value={formData.agency}
                onChange={(e) => handleChange("agency", e.target.value)}
                placeholder="Department of Defense"
                className="h-11 sm:h-10 text-base sm:text-sm"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="(555) 123-4567"
                className="h-11 sm:h-10 text-base sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="clearanceLevel" className="text-sm sm:text-base">Required Clearance Level</Label>
              <Select value={formData.clearanceLevel} onValueChange={(value) => handleChange("clearanceLevel", value)}>
                <SelectTrigger id="clearanceLevel" className="h-11 sm:h-10 text-base sm:text-sm">
                  <SelectValue placeholder="Select clearance level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none" className="text-sm sm:text-base py-2.5 sm:py-2">No clearance required</SelectItem>
                  <SelectItem value="public-trust" className="text-sm sm:text-base py-2.5 sm:py-2">Public Trust</SelectItem>
                  <SelectItem value="secret" className="text-sm sm:text-base py-2.5 sm:py-2">Secret</SelectItem>
                  <SelectItem value="top-secret" className="text-sm sm:text-base py-2.5 sm:py-2">Top Secret</SelectItem>
                  <SelectItem value="ts-sci" className="text-sm sm:text-base py-2.5 sm:py-2">TS/SCI</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="projectType" className="text-sm sm:text-base">Project Type</Label>
              <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                <SelectTrigger id="projectType" className="h-11 sm:h-10 text-base sm:text-sm">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom-dev" className="text-sm sm:text-base py-2.5 sm:py-2">Custom Application Development</SelectItem>
                  <SelectItem value="low-code" className="text-sm sm:text-base py-2.5 sm:py-2">Low-Code/Rapid Development</SelectItem>
                  <SelectItem value="modernization" className="text-sm sm:text-base py-2.5 sm:py-2">Legacy Modernization</SelectItem>
                  <SelectItem value="portal" className="text-sm sm:text-base py-2.5 sm:py-2">Enterprise Portal</SelectItem>
                  <SelectItem value="integration" className="text-sm sm:text-base py-2.5 sm:py-2">System Integration & APIs</SelectItem>
                  <SelectItem value="security" className="text-sm sm:text-base py-2.5 sm:py-2">Application Security</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="timeline" className="text-sm sm:text-base">Desired Timeline</Label>
            <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
              <SelectTrigger id="timeline" className="h-11 sm:h-10 text-base sm:text-sm">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate" className="text-sm sm:text-base py-2.5 sm:py-2">Immediate (1-3 months)</SelectItem>
                <SelectItem value="short" className="text-sm sm:text-base py-2.5 sm:py-2">Short-term (3-6 months)</SelectItem>
                <SelectItem value="medium" className="text-sm sm:text-base py-2.5 sm:py-2">Medium-term (6-12 months)</SelectItem>
                <SelectItem value="long" className="text-sm sm:text-base py-2.5 sm:py-2">Long-term (12+ months)</SelectItem>
                <SelectItem value="planning" className="text-sm sm:text-base py-2.5 sm:py-2">Planning phase</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="description" className="text-sm sm:text-base">Project Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Briefly describe your project requirements, challenges, and objectives..."
              rows={4}
              className="text-base sm:text-sm min-h-[100px] sm:min-h-[120px]"
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-orange-gradient hover:opacity-90 h-12 sm:h-11 text-base sm:text-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Request Free Assessment"
            )}
          </Button>

          <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy. We'll never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
