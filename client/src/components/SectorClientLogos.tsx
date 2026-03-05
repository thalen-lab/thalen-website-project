import { motion } from 'framer-motion';

// Federal Government Agencies
export const federalAgencyLogos = [
  { name: 'Department of Defense', abbr: 'DoD', color: '#0A2540' },
  { name: 'Department of Veterans Affairs', abbr: 'VA', color: '#112E51' },
  { name: 'Department of Health & Human Services', abbr: 'HHS', color: '#205493' },
  { name: 'Department of Homeland Security', abbr: 'DHS', color: '#003366' },
  { name: 'Department of Energy', abbr: 'DOE', color: '#046B99' },
  { name: 'General Services Administration', abbr: 'GSA', color: '#0071BC' },
  { name: 'Department of Treasury', abbr: 'Treasury', color: '#112E51' },
  { name: 'Department of Justice', abbr: 'DOJ', color: '#003366' },
  { name: 'National Institutes of Health', abbr: 'NIH', color: '#205493' },
  { name: 'Centers for Medicare & Medicaid', abbr: 'CMS', color: '#0071BC' },
  { name: 'Federal Bureau of Investigation', abbr: 'FBI', color: '#0A2540' },
  { name: 'Pension Benefit Guaranty Corp', abbr: 'PBGC', color: '#046B99' },
];

// State & Local Government Entities
export const stateLocalLogos = [
  { name: 'California State Government', abbr: 'CA', color: '#003262' },
  { name: 'Texas State Government', abbr: 'TX', color: '#BF5700' },
  { name: 'New York State Government', abbr: 'NY', color: '#002D72' },
  { name: 'Florida State Government', abbr: 'FL', color: '#FF6600' },
  { name: 'Virginia State Government', abbr: 'VA', color: '#003366' },
  { name: 'Maryland State Government', abbr: 'MD', color: '#E03C31' },
  { name: 'City of Los Angeles', abbr: 'LA', color: '#003087' },
  { name: 'City of New York', abbr: 'NYC', color: '#002D72' },
  { name: 'City of Chicago', abbr: 'CHI', color: '#41B6E6' },
  { name: 'City of Houston', abbr: 'HOU', color: '#003366' },
  { name: 'Maricopa County', abbr: 'AZ', color: '#8B0000' },
  { name: 'Cook County', abbr: 'IL', color: '#003366' },
];

// Regulated Industries (Healthcare, Financial, Energy)
export const regulatedIndustryLogos = [
  { name: 'Major Health System', abbr: 'HCS', color: '#0071CE' },
  { name: 'Regional Medical Center', abbr: 'RMC', color: '#00843D' },
  { name: 'National Bank Corp', abbr: 'NBC', color: '#003087' },
  { name: 'Investment Services Group', abbr: 'ISG', color: '#0A2540' },
  { name: 'Energy Utility Provider', abbr: 'EUP', color: '#FF6600' },
  { name: 'Power Grid Operator', abbr: 'PGO', color: '#003366' },
  { name: 'Insurance Holdings', abbr: 'IHC', color: '#0071BC' },
  { name: 'Pharmaceutical Corp', abbr: 'PHC', color: '#00843D' },
  { name: 'Biotech Research', abbr: 'BTR', color: '#6B2D5B' },
  { name: 'Credit Union Network', abbr: 'CUN', color: '#003087' },
  { name: 'Nuclear Energy Corp', abbr: 'NEC', color: '#0A2540' },
  { name: 'Healthcare Analytics', abbr: 'HCA', color: '#0071CE' },
];

// Federal Contractors & Defense Industry
export const federalContractorLogos = [
  { name: 'Defense Systems Corp', abbr: 'DSC', color: '#0A2540' },
  { name: 'Aerospace Technologies', abbr: 'AET', color: '#003366' },
  { name: 'Cyber Defense Solutions', abbr: 'CDS', color: '#112E51' },
  { name: 'Mission Systems Inc', abbr: 'MSI', color: '#046B99' },
  { name: 'Intelligence Analytics', abbr: 'IAC', color: '#0A2540' },
  { name: 'Secure Communications', abbr: 'SCC', color: '#003087' },
  { name: 'Defense Logistics', abbr: 'DLG', color: '#003366' },
  { name: 'Advanced Weapons Systems', abbr: 'AWS', color: '#112E51' },
  { name: 'Naval Engineering Corp', abbr: 'NEC', color: '#0071BC' },
  { name: 'Space Technologies', abbr: 'STC', color: '#0A2540' },
  { name: 'Tactical Solutions', abbr: 'TSI', color: '#003366' },
  { name: 'Integrated Defense', abbr: 'IDC', color: '#046B99' },
];

interface SectorClientLogosProps {
  sector: 'federal' | 'state-local' | 'regulated' | 'contractors';
  title?: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
}

export default function SectorClientLogos({ 
  sector, 
  title = 'Trusted By Leading Organizations',
  subtitle = 'Building lasting partnerships with organizations that demand excellence.',
  variant = 'light'
}: SectorClientLogosProps) {
  const logos = {
    'federal': federalAgencyLogos,
    'state-local': stateLocalLogos,
    'regulated': regulatedIndustryLogos,
    'contractors': federalContractorLogos,
  }[sector];

  const bgClass = variant === 'dark' 
    ? 'bg-[oklch(0.22_0.06_250)]' 
    : 'bg-[oklch(0.97_0.01_250)]';
  
  const textClass = variant === 'dark' ? 'text-white' : 'text-[oklch(0.20_0.05_250)]';
  const subtextClass = variant === 'dark' ? 'text-white/70' : 'text-slate-600';
  const cardBgClass = variant === 'dark' 
    ? 'bg-white/10 border-white/20 hover:border-[oklch(0.70_0.18_55)]' 
    : 'bg-white border-slate-200 hover:border-[oklch(0.70_0.18_55)]';

  return (
    <section className={`py-10 sm:py-12 md:py-16 lg:py-20 ${bgClass} overflow-hidden`}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12"
        >
          <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">Our Clients</p>
          <h2 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold ${textClass} mb-4`}>
            {title}
          </h2>
          <p className={`text-lg ${subtextClass} max-w-2xl mx-auto`}>
            {subtitle}
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.abbr + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className={`relative h-24 md:h-28 rounded-lg border-2 ${cardBgClass} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-3 cursor-default`}>
                {/* Logo Icon */}
                <div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base mb-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: logo.color }}
                >
                  {logo.abbr.slice(0, 3)}
                </div>
                
                {/* Abbreviation */}
                <span className={`text-xs font-medium ${variant === 'dark' ? 'text-white/80' : 'text-slate-600'} text-center leading-tight group-hover:text-[oklch(0.65_0.18_55)] transition-colors`}>
                  {logo.abbr}
                </span>

                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                  <div className="bg-[oklch(0.22_0.06_250)] text-white text-[10px] px-2 py-1 rounded whitespace-nowrap shadow-lg">
                    {logo.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          <div className="text-center">
            <div className={`text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold ${variant === 'dark' ? 'text-[oklch(0.70_0.18_55)]' : 'text-[oklch(0.65_0.18_55)]'}`}>100%</div>
            <div className={`text-xs ${subtextClass} uppercase tracking-wider mt-1`}>Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className={`text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold ${variant === 'dark' ? 'text-[oklch(0.70_0.18_55)]' : 'text-[oklch(0.65_0.18_55)]'}`}>50+</div>
            <div className={`text-xs ${subtextClass} uppercase tracking-wider mt-1`}>Agency Partners</div>
          </div>
          <div className="text-center">
            <div className={`text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold ${variant === 'dark' ? 'text-[oklch(0.70_0.18_55)]' : 'text-[oklch(0.65_0.18_55)]'}`}>25+</div>
            <div className={`text-xs ${subtextClass} uppercase tracking-wider mt-1`}>Years Experience</div>
          </div>
          <div className="text-center">
            <div className={`text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold ${variant === 'dark' ? 'text-[oklch(0.70_0.18_55)]' : 'text-[oklch(0.65_0.18_55)]'}`}>7+</div>
            <div className={`text-xs ${subtextClass} uppercase tracking-wider mt-1`}>Security Certifications</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
