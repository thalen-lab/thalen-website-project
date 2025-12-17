import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Download, FileText, Cloud } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function ResourceDownloadCloudMigration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const createLead = trpc.leads.create.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Thank you! Your download is ready.");
      // Trigger PDF download
      window.open("/resources/cloud-migration-playbook.pdf", "_blank");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to process your request. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    createLead.mutate({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      jobTitle: formData.jobTitle,
      phone: formData.phone,
      resource: "cloud-migration-playbook",
      source: "website-download-page",
      notes: formData.notes,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="container py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Download Started!</h1>
            <p className="text-xl text-slate-600 mb-8">
              Your Cloud Migration Playbook should download automatically. If it doesn't, click the button below.
            </p>
            <Button
              size="lg"
              onClick={() => window.open("/resources/cloud-migration-playbook.pdf", "_blank")}
              className="mb-8"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-lg mb-3">What's Next?</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Check your email for additional cloud migration resources and best practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Schedule a complimentary cloud readiness assessment with our architects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Explore our other federal cloud resources (FedRAMP, CMMC)</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 flex gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="/contact">Schedule Assessment</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/federal-solutions/cloud-migration">Learn More About Cloud Migration</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Resource Info */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
                  <Cloud className="w-8 h-8 text-blue-600" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Cloud Migration Playbook</h1>
                <p className="text-xl text-slate-600">
                  A strategic guide to secure, compliant cloud transformation for federal agencies
                </p>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">What You'll Learn:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Complete 4-phase migration framework from assessment to optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Migration strategy selection guide (rehost, replatform, refactor, repurchase)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Federal compliance requirements (FedRAMP, FISMA, agency-specific)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Cost optimization strategies achieving 30-40% infrastructure savings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Real federal agency case studies (VA, DoD, USDA migrations)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-100 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-6 h-6 text-slate-600" />
                  <div>
                    <div className="font-semibold">52-Page PDF Guide</div>
                    <div className="text-sm text-slate-600">Instant download • No credit card required</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Lead Capture Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Download Your Free Guide</CardTitle>
                  <CardDescription>
                    Fill out the form below to receive instant access to the Cloud Migration Playbook
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john.smith@agency.gov"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Agency/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Department of Example"
                      />
                    </div>

                    <div>
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Cloud Architect"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(202) 555-0100"
                      />
                    </div>

                    <div>
                      <Label htmlFor="notes">What's your cloud migration timeline? (Optional)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Tell us about your cloud migration plans..."
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={createLead.isPending}
                    >
                      {createLead.isPending ? (
                        "Processing..."
                      ) : (
                        <>
                          <Download className="mr-2 h-5 w-5" />
                          Download Free Guide
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      By downloading, you agree to receive occasional emails about cloud solutions. 
                      Unsubscribe anytime.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
