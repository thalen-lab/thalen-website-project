import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Briefcase, MapPin, Clock, Shield, Building2, Calendar, DollarSign, Loader2, Upload, CheckCircle, AlertCircle, Zap } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { Link, useParams, useLocation } from 'wouter';
import { trpc } from '@/lib/trpc';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { Streamdown } from 'streamdown';

export default function JobDetail() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    portfolioUrl: '',
    coverLetter: '',
    referralSource: '',
    workAuthorization: '',
    willingToRelocate: false,
    expectedSalary: '',
    availableStartDate: '',
    additionalNotes: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  // Fetch job details
  const { data: job, isLoading, error } = trpc.jobs.getBySlug.useQuery(
    { slug: params.slug || '' },
    { enabled: !!params.slug }
  );

  const submitApplicationMutation = trpc.jobs.submitApplication.useMutation({
    onSuccess: () => {
      setApplicationSubmitted(true);
      setIsSubmitting(false);
      toast.success('Application submitted successfully!');
    },
    onError: (error) => {
      setIsSubmitting(false);
      toast.error(error.message || 'Failed to submit application. Please try again.');
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast.error('Please upload a PDF or Word document');
        return;
      }
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB');
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!job || !resumeFile) {
      toast.error('Please upload your resume');
      return;
    }

    setIsSubmitting(true);

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = (reader.result as string).split(',')[1];
        
        submitApplicationMutation.mutate({
          jobId: job.id,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone || undefined,
          linkedinUrl: formData.linkedinUrl || undefined,
          portfolioUrl: formData.portfolioUrl || undefined,
          resumeBase64: base64,
          resumeFilename: resumeFile.name,
          resumeMimeType: resumeFile.type,
          coverLetter: formData.coverLetter || undefined,
          referralSource: formData.referralSource || undefined,
          workAuthorization: formData.workAuthorization || undefined,
          willingToRelocate: formData.willingToRelocate,
          expectedSalary: formData.expectedSalary || undefined,
          availableStartDate: formData.availableStartDate || undefined,
          additionalNotes: formData.additionalNotes || undefined,
        });
      };
      reader.onerror = () => {
        setIsSubmitting(false);
        toast.error('Failed to read resume file');
      };
      reader.readAsDataURL(resumeFile);
    } catch (err) {
      setIsSubmitting(false);
      toast.error('An error occurred. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
          <span className="ml-3 text-gray-600">Loading job details...</span>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center py-20">
          <AlertCircle className="w-16 h-16 text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold text-gray-700 mb-2">Job Not Found</h1>
          <p className="text-gray-500 mb-6">This position may no longer be available.</p>
          <Link href="/careers">
            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
              <ArrowLeft className="mr-2 w-4 h-4" /> View All Positions
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 text-white">
        <div className="absolute inset-0 bg-[url('/img/patterns/hero-pattern.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="relative container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[
                { label: 'About', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: job.title }
              ]} 
              variant="light" 
              className="mb-6 md:mb-8"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-white/90">
                <span className="inline-flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  {job.department}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {job.employmentType}
                </span>
                {job.remoteAllowed && (
                  <span className="inline-flex items-center gap-2 text-green-300">
                    <Zap className="w-5 h-5" />
                    Remote Eligible
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Summary */}
                {job.summary && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-lg text-gray-700 leading-relaxed">{job.summary}</p>
                  </motion.div>
                )}

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-xl font-bold mb-4">About the Role</h2>
                  <div className="prose prose-gray max-w-none">
                    <Streamdown>{job.description}</Streamdown>
                  </div>
                </motion.div>

                {/* Requirements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-xl font-bold mb-4">Requirements</h2>
                  <div className="prose prose-gray max-w-none">
                    <Streamdown>{job.requirements}</Streamdown>
                  </div>
                </motion.div>

                {/* Nice to Have */}
                {job.niceToHave && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h2 className="text-xl font-bold mb-4">Nice to Have</h2>
                    <div className="prose prose-gray max-w-none">
                      <Streamdown>{job.niceToHave}</Streamdown>
                    </div>
                  </motion.div>
                )}

                {/* Benefits */}
                {job.benefits && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h2 className="text-xl font-bold mb-4">What We Offer</h2>
                    <div className="prose prose-gray max-w-none">
                      <Streamdown>{job.benefits}</Streamdown>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="sticky top-24"
                >
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-bold text-lg">Job Details</h3>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <Building2 className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-gray-500">Department</p>
                            <p className="font-medium">{job.department}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-gray-500">Location</p>
                            <p className="font-medium">{job.location}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-gray-500">Employment Type</p>
                            <p className="font-medium">{job.employmentType}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Briefcase className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-gray-500">Experience Level</p>
                            <p className="font-medium">{job.experienceLevel}</p>
                          </div>
                        </div>
                        
                        {job.salaryRange && (
                          <div className="flex items-start gap-3">
                            <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
                            <div>
                              <p className="text-gray-500">Salary Range</p>
                              <p className="font-medium">{job.salaryRange}</p>
                            </div>
                          </div>
                        )}
                        
                        {job.clearanceRequired && job.clearanceRequired !== 'None' && (
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-orange-500 mt-0.5" />
                            <div>
                              <p className="text-gray-500">Security Clearance</p>
                              <p className="font-medium text-orange-600">{job.clearanceRequired}</p>
                            </div>
                          </div>
                        )}
                        
                        {job.applicationDeadline && (
                          <div className="flex items-start gap-3">
                            <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                            <div>
                              <p className="text-gray-500">Application Deadline</p>
                              <p className="font-medium">
                                {new Date(job.applicationDeadline).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t">
                        <Button 
                          onClick={() => setShowApplicationForm(true)}
                          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto my-8"
          >
            {applicationSubmitted ? (
              <div className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for applying to the {job.title} position. We'll review your application and get back to you soon.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowApplicationForm(false);
                      setApplicationSubmitted(false);
                    }}
                  >
                    Close
                  </Button>
                  <Link href="/careers">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      View More Positions
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold">Apply for {job.title}</h2>
                      <p className="text-sm text-gray-500">{job.department} • {job.location}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowApplicationForm(false)}
                    >
                      ✕
                    </Button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-semibold mb-4">Personal Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div>
                    <h3 className="font-semibold mb-4">Professional Links</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                        <Input
                          id="linkedinUrl"
                          name="linkedinUrl"
                          type="url"
                          placeholder="https://linkedin.com/in/..."
                          value={formData.linkedinUrl}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                        <Input
                          id="portfolioUrl"
                          name="portfolioUrl"
                          type="url"
                          placeholder="https://..."
                          value={formData.portfolioUrl}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <h3 className="font-semibold mb-4">Resume *</h3>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                        resumeFile ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-orange-500'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      {resumeFile ? (
                        <div className="flex items-center justify-center gap-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          <span>{resumeFile.name}</span>
                        </div>
                      ) : (
                        <div className="text-gray-500">
                          <Upload className="w-8 h-8 mx-auto mb-2" />
                          <p>Click to upload your resume</p>
                          <p className="text-sm">PDF or Word document (max 10MB)</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows={4}
                      placeholder="Tell us why you're interested in this position..."
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="font-semibold mb-4">Additional Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="workAuthorization">Work Authorization</Label>
                        <Select
                          value={formData.workAuthorization}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, workAuthorization: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us_citizen">U.S. Citizen</SelectItem>
                            <SelectItem value="permanent_resident">Permanent Resident</SelectItem>
                            <SelectItem value="visa_holder">Visa Holder</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="referralSource">How did you hear about us?</Label>
                        <Select
                          value={formData.referralSource}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, referralSource: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                            <SelectItem value="indeed">Indeed</SelectItem>
                            <SelectItem value="company_website">Company Website</SelectItem>
                            <SelectItem value="referral">Employee Referral</SelectItem>
                            <SelectItem value="job_fair">Job Fair</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="expectedSalary">Expected Salary</Label>
                        <Input
                          id="expectedSalary"
                          name="expectedSalary"
                          placeholder="e.g., $120,000 - $150,000"
                          value={formData.expectedSalary}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="availableStartDate">Available Start Date</Label>
                        <Input
                          id="availableStartDate"
                          name="availableStartDate"
                          type="date"
                          value={formData.availableStartDate}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Checkbox
                        id="willingToRelocate"
                        checked={formData.willingToRelocate}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, willingToRelocate: checked as boolean }))
                        }
                      />
                      <Label htmlFor="willingToRelocate" className="text-sm font-normal">
                        I am willing to relocate if required
                      </Label>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows={3}
                      placeholder="Any additional information you'd like to share..."
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex gap-4 pt-4 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowApplicationForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !resumeFile}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}
