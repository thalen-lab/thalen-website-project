import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Briefcase, Users, Heart, Zap, Shield, GraduationCap, MapPin, Clock, Loader2, Search, Building2, CheckCircle2, Gift, DollarSign, Calendar, Coffee, Award } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { trpc } from '@/lib/trpc';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FloatingPrintButton } from '@/components/PrintButton';

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  // Fetch jobs from the database
  const { data: jobsData, isLoading, error } = trpc.jobs.list.useQuery();

  // Get unique departments, locations, and types for filters
  const filterOptions = useMemo(() => {
    if (!jobsData) return { departments: [], locations: [], types: [] };
    
    const departments = Array.from(new Set(jobsData.map(job => job.department))).filter(Boolean);
    const locations = Array.from(new Set(jobsData.map(job => job.location))).filter(Boolean);
    const types = Array.from(new Set(jobsData.map(job => job.employmentType))).filter(Boolean);
    
    return { departments, locations, types };
  }, [jobsData]);

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    if (!jobsData) return [];
    
    return jobsData.filter(job => {
      const matchesSearch = searchQuery === '' || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.summary?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDepartment = departmentFilter === 'all' || job.department === departmentFilter;
      const matchesLocation = locationFilter === 'all' || job.location === locationFilter;
      const matchesType = typeFilter === 'all' || job.employmentType === typeFilter;
      
      return matchesSearch && matchesDepartment && matchesLocation && matchesType;
    });
  }, [jobsData, searchQuery, departmentFilter, locationFilter, typeFilter]);

  const benefits = [
    {
      icon: Heart,
      title: 'Comprehensive Benefits',
      description: 'Medical, dental, vision, and life insurance with generous employer contributions.'
    },
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Certification support, training budgets, and conference attendance opportunities.'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible schedules, remote work options, and generous PTO policies.'
    },
    {
      icon: Shield,
      title: 'Retirement Planning',
      description: '401(k) with company match and financial planning resources.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work alongside industry experts in a supportive, team-oriented environment.'
    },
    {
      icon: Zap,
      title: 'Impactful Work',
      description: 'Contribute to projects that directly improve government services for citizens.'
    }
  ];

  const perksHighlights = [
    { icon: DollarSign, text: 'Competitive salaries with performance bonuses' },
    { icon: Calendar, text: 'Generous paid holidays and time off' },
    { icon: Gift, text: '401(k) with matching and immediate vesting' },
    { icon: GraduationCap, text: 'Tuition assistance and professional development funds' },
    { icon: Coffee, text: 'Modern offices with collaborative spaces' },
    { icon: Award, text: 'Recognition programs and team celebrations' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[oklch(0.20_0.05_250)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-10 sm:py-12 md:py-16 lg:py-20 text-white">
        <div className="absolute inset-0 bg-[url('/img/patterns/hero-pattern.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 via-[#0A2540]/90 to-[#12344D]/85"></div>
        
        <div className="relative container">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb 
              items={[
                { label: 'About', href: '/about' },
                { label: 'Careers' }
              ]} 
              variant="light" 
              className="mb-6 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-2xl xs:text-3xl sm:text-xl xs:text-2xl sm:text-2xl xs:text-3xl sm:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 text-center leading-tight text-white">
                Join Our Team
              </h1>
              
              <p className="text-base md:text-lg text-white/90 text-center max-w-3xl mx-auto">
                Build your career at NexDyne Technology, where your expertise directly contributes to modernizing government services and protecting critical infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Come Join Our Team Section - Procon Inspired */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#0A2540]">
                Come Join Our Team
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                NexDyne is always looking to meet both newcomers and experienced professionals. We seek bright and dynamic candidates with a can-do attitude and a desire to be challenged. Our team thrives on solving complex problems and delivering innovative solutions that make a real difference in government technology.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#0A2540]">
                What's in it for you?
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                With our innovative roots still fresh in our corporate memory, we strive to keep NexDyne a place where we all look forward to going to work each day. But we know that won't pay the mortgage. In addition to all the usual—competitively generous salaries, paid holidays and time off, and medical/dental/life/disability insurance—we also offer:
              </p>

              {/* Perks List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {perksHighlights.map((perk, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <perk.icon className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{perk.text}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                With new opportunities arising on a weekly basis, we'd love to hear from you. Apply to one of the posted jobs or just send us your resume using the contact form below. You never know what might come up.
              </p>

              <Link href="/contact">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  Send Your Resume <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/careers/team-culture.jpg" 
                  alt="NexDyne team collaborating in modern office" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/20 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#0A2540]/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Why Join NexDyne?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job—we offer a career with purpose, growth, and exceptional benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-3 sm:p-4 md:p-6 md:p-8">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
          >
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities to join our growing team.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="w-[160px]">
                    <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {filterOptions.departments.map(dept => (
                      <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-[160px]">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {filterOptions.locations.map(loc => (
                      <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-[140px]">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {filterOptions.types.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="max-w-4xl mx-auto space-y-4">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
                <span className="ml-3 text-gray-600">Loading positions...</span>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Unable to load positions. Please try again later.</p>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {jobsData && jobsData.length > 0 ? 'No matching positions' : 'No open positions'}
                </h3>
                <p className="text-gray-500">
                  {jobsData && jobsData.length > 0 
                    ? 'Try adjusting your search or filters.' 
                    : 'Check back soon for new opportunities.'}
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-4">
                  Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'}
                </p>
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                      <CardContent className="p-3 sm:p-4 md:p-6">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                              <span className="inline-flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                {job.department}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.employmentType}
                              </span>
                              {job.remoteAllowed && (
                                <span className="inline-flex items-center gap-1 text-green-600">
                                  <Zap className="w-4 h-4" />
                                  Remote Eligible
                                </span>
                              )}
                            </div>
                            {job.summary && (
                              <p className="text-gray-600 text-sm line-clamp-2">{job.summary}</p>
                            )}
                            {job.salaryRange && (
                              <p className="text-sm text-gray-500 mt-2">
                                <span className="font-medium">Salary:</span> {job.salaryRange}
                              </p>
                            )}
                            {job.clearanceRequired && job.clearanceRequired !== 'None' && (
                              <p className="text-sm text-orange-600 mt-1">
                                <Shield className="w-3 h-3 inline mr-1" />
                                {job.clearanceRequired} clearance required
                              </p>
                            )}
                          </div>
                          <Link href={`/careers/${job.slug}`}>
                            <Button variant="outline" className="shrink-0 border-orange-500 text-orange-600 hover:bg-orange-50">
                              View Details <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-[#0A2540] to-[#12344D] text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              We're Hiring
            </div>
            <h2 className="text-lg xs:text-xl sm:text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Don't See the Right Fit?
            </h2>
            <p className="text-white/80 mb-4 sm:mb-6 md:mb-4 sm:mb-6 md:mb-8">
              We're always looking for talented individuals who share our passion for government technology modernization. Send us your resume and let's start a conversation.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <FloatingPrintButton position="bottom-right" />
      <Footer />
    </div>
  );
}
