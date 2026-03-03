import { motion } from 'framer-motion';

// Case study clients with actual logos and results
const caseStudyClients = [
  {
    id: 'snhd',
    headline: 'Reduce time-to-hire by more than 50%',
    caseStudy: 'Case Study: 130 days → 61 days',
    agency: 'Southern Nevada Health District',
    logo: '/logos/snhd-logo.png',
    logoAlt: 'Southern Nevada Health District Logo'
  },
  {
    id: 'manatee',
    headline: 'Reduce manual HR work by 2100+ hours',
    caseStudy: 'Case Study:',
    agency: "Manatee County Sheriff's Office",
    logo: '/logos/manatee-county-sheriff-logo.png',
    logoAlt: "Manatee County Sheriff's Office Logo"
  },
  {
    id: 'shra',
    headline: 'Cut payroll processing time from 48-72 hrs to 30 mins',
    caseStudy: 'Case Study:',
    agency: 'Sacramento Housing and Redevelopment Agency',
    logo: '/logos/shra-logo.png',
    logoAlt: 'SHRA Logo'
  },
  {
    id: 'eastlampeter',
    headline: 'Reduce time spent on scheduling by 25%',
    caseStudy: 'Case Study: 10+ hours per week',
    agency: 'East Lampeter Police',
    logo: '/logos/east-lampeter-police-logo.png',
    logoAlt: 'East Lampeter Police Logo'
  }
];

// Federal agency clients for the scrolling carousel
const federalClients = [
  { name: 'Department of Defense', abbreviation: 'DoD', color: '#0A2540', logo: '/images/federal-logos/dod-logo.png' },
  { name: 'Department of Homeland Security', abbreviation: 'DHS', color: '#003366', logo: '/images/federal-logos/dhs-logo.png' },
  { name: 'Department of Veterans Affairs', abbreviation: 'VA', color: '#112E51', logo: '/images/federal-logos/va-logo.png' },
  { name: 'Department of Health & Human Services', abbreviation: 'HHS', color: '#205493', logo: '/images/federal-logos/hhs-logo.png' },
  { name: 'Department of Energy', abbreviation: 'DOE', color: '#046B99', logo: '/images/federal-logos/doe-logo.png' },
  { name: 'General Services Administration', abbreviation: 'GSA', color: '#0071BC', logo: '/images/federal-logos/gsa-logo.png' },
  { name: 'Department of Treasury', abbreviation: 'Treasury', color: '#112E51', logo: '/images/federal-logos/treasury-logo.png' },
  { name: 'Department of Justice', abbreviation: 'DOJ', color: '#003366', logo: '/images/federal-logos/doj-logo.png' },
  { name: 'National Institutes of Health', abbreviation: 'NIH', color: '#205493', logo: '/images/federal-logos/nih-logo.png' },
  { name: 'Centers for Medicare & Medicaid', abbreviation: 'CMS', color: '#0071BC', logo: null },
  { name: 'Social Security Administration', abbreviation: 'SSA', color: '#046B99', logo: null },
  { name: 'Federal Aviation Administration', abbreviation: 'FAA', color: '#003366', logo: null }
];

// Duplicate for seamless infinite scroll
const duplicatedFederalClients = [...federalClients, ...federalClients];

export default function TrustedByClients() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,37,64,0.02)_0%,transparent_70%)]"></div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <div className="w-8 sm:w-10 h-[2px] bg-[#FF6B35]"></div>
            <span className="text-[#FF6B35] font-semibold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">Trusted By</span>
            <div className="w-8 sm:w-10 h-[2px] bg-[#FF6B35]"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-1.5 sm:mb-2 leading-[1.1] tracking-tight">
            Serving America's Most Critical Missions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4 sm:px-0">
            Trusted by federal agencies, defense organizations, and enterprise clients to deliver mission-critical solutions.
          </p>
        </motion.div>

        {/* Case Study Results Grid - NEOGOV Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8 sm:mb-10 md:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
        >
          {caseStudyClients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center text-center group"
            >
              {/* Headline */}
              <h3 className="text-[#0A2540] font-semibold text-xs sm:text-sm md:text-base leading-snug mb-2 sm:mb-4 min-h-[36px] sm:min-h-[48px] flex items-center px-1">
                {client.headline}
              </h3>
              
              {/* Logo - Standing without card */}
              <div className="relative w-full h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center mb-2 sm:mb-4">
                <img
                  src={client.logo}
                  alt={client.logoAlt}
                  className="max-h-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Case Study Info */}
              <div className="text-slate-600 text-[10px] sm:text-xs md:text-sm">
                <span className="hidden xs:inline">{client.caseStudy}</span>
                <br className="hidden xs:block" />
                <span className="text-[#FF6B35] hover:text-[#c45f1a] transition-colors cursor-pointer font-medium line-clamp-2">
                  {client.agency}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Scrolling Logo Carousel for Federal Agencies */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-3 sm:gap-4 md:gap-3 sm:gap-4 md:gap-6 lg:gap-8"
              animate={{
                x: ['0%', '-50%']
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear'
                }
              }}
            >
              {duplicatedFederalClients.map((client, index) => (
                <div
                  key={`${client.abbreviation}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-24 h-16 xs:w-28 xs:h-18 sm:w-32 sm:h-20 md:w-40 md:h-24 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-[#FF6B35]/30 transition-all duration-300 flex items-center justify-center p-2 sm:p-3 cursor-default">
                    {/* Show actual logo if available, otherwise show abbreviation */}
                    {client.logo ? (
                      <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                        <img
                          src={client.logo}
                          alt={`${client.name} Logo`}
                          className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-medium text-center leading-tight group-hover:text-[#0A2540] transition-colors">
                          {client.abbreviation}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                        <div 
                          className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-white font-bold text-[10px] xs:text-xs sm:text-sm transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: client.color }}
                        >
                          {client.abbreviation.slice(0, 3)}
                        </div>
                        <span className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-medium text-center leading-tight group-hover:text-[#0A2540] transition-colors">
                          {client.abbreviation}
                        </span>
                      </div>
                    )}
                    
                    {/* Tooltip on hover - hidden on mobile */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 hidden sm:block">
                      <div className="bg-[#0A2540] text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                        {client.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}
