import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Briefcase, Users, Heart, Zap, Shield, GraduationCap, MapPin, Clock, Loader2, Search, Filter, Building2 } from 'lucide-react';
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
                { label: 'Careers' }
              ]} 
              variant="light" 
              className="mb-6 md:mb-8"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 text-center leading-tight text-white">
                Join Our Team
              </h1>
              
              <p className="text-base md:text-lg text-white/90 text-center max-w-3xl mx-auto">
                Build your career at Thalen Technologies, where your expertise directly contributes to modernizing government services and protecting critical infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Why Join Thalen?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job—we offer a career with purpose, growth, and exceptional benefits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 md:p-8">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities to join our growing team.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8">
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
                      <CardContent className="p-6">
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A2540] to-[#12344D] text-white">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don't See the Right Fit?
            </h2>
            <p className="text-white/80 mb-8">
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
