import { motion } from 'framer-motion';

// Client logos - using SVG representations for government agencies and enterprise clients
const clients = [
  {
    name: 'Department of Defense',
    abbreviation: 'DoD',
    color: '#0A2540'
  },
  {
    name: 'Department of Homeland Security',
    abbreviation: 'DHS',
    color: '#003366'
  },
  {
    name: 'Department of Veterans Affairs',
    abbreviation: 'VA',
    color: '#112E51'
  },
  {
    name: 'Department of Health & Human Services',
    abbreviation: 'HHS',
    color: '#205493'
  },
  {
    name: 'Department of Energy',
    abbreviation: 'DOE',
    color: '#046B99'
  },
  {
    name: 'General Services Administration',
    abbreviation: 'GSA',
    color: '#0071BC'
  },
  {
    name: 'Department of Treasury',
    abbreviation: 'Treasury',
    color: '#112E51'
  },
  {
    name: 'Department of Justice',
    abbreviation: 'DOJ',
    color: '#003366'
  },
  {
    name: 'National Institutes of Health',
    abbreviation: 'NIH',
    color: '#205493'
  },
  {
    name: 'Centers for Medicare & Medicaid',
    abbreviation: 'CMS',
    color: '#0071BC'
  },
  {
    name: 'Social Security Administration',
    abbreviation: 'SSA',
    color: '#046B99'
  },
  {
    name: 'Federal Aviation Administration',
    abbreviation: 'FAA',
    color: '#003366'
  }
];

// Duplicate for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

export default function TrustedByClients() {
  return (
    <section className="relative py-10 sm:py-12 md:py-14 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,37,64,0.02)_0%,transparent_70%)]"></div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-10 h-[2px] bg-[#E07020]"></div>
            <span className="text-[#E07020] font-semibold text-xs uppercase tracking-[0.2em]">Trusted By</span>
            <div className="w-10 h-[2px] bg-[#E07020]"></div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">
            Serving America's Most Critical Missions
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Trusted by federal agencies, defense organizations, and enterprise clients to deliver mission-critical solutions.
          </p>
        </motion.div>

        {/* Infinite Scrolling Logo Carousel */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8"
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
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.abbreviation}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-32 h-20 md:w-40 md:h-24 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-[#E07020]/30 transition-all duration-300 flex items-center justify-center p-4 cursor-default">
                    {/* Logo placeholder with abbreviation */}
                    <div className="flex flex-col items-center gap-1">
                      <div 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-white font-bold text-xs md:text-sm transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: client.color }}
                      >
                        {client.abbreviation.slice(0, 3)}
                      </div>
                      <span className="text-[10px] md:text-xs text-slate-500 font-medium text-center leading-tight group-hover:text-[#0A2540] transition-colors">
                        {client.abbreviation}
                      </span>
                    </div>
                    
                    {/* Tooltip on hover */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
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

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
            <div className="text-2xl md:text-3xl font-bold text-[#0A2540]">500+</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Agency Partners</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
            <div className="text-2xl md:text-3xl font-bold text-[#0A2540]">25+</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
            <div className="text-2xl md:text-3xl font-bold text-[#0A2540]">$2.3B+</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Client ROI</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
            <div className="text-2xl md:text-3xl font-bold text-[#0A2540]">100%</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Mission Success</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
