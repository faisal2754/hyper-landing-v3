/* =========================================
   Content Data — extracted from copy.md
   Each section is a named export with proper
   TypeScript interfaces.
   ========================================= */

// -----------------------------------------
// Navigation
// -----------------------------------------

export interface NavItem {
  label: string
  href: string
}

export interface Navigation {
  items: NavItem[]
  cta: { label: string; href: string }
}

export const navigation: Navigation = {
  items: [
    { label: 'Products', href: '#products' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ],
  cta: { label: 'TALK TO US', href: '#contact' },
}

// -----------------------------------------
// Hero
// -----------------------------------------

export interface HeroBullet {
  text: string
}

export interface HeroCta {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'tertiary'
}

export interface HeroContent {
  eyebrow: string
  headline: string
  subheadline: string
  bullets: HeroBullet[]
  ctas: HeroCta[]
}

export const hero: HeroContent = {
  eyebrow: 'For mid-market companies ready to scale',
  headline:
    'Your data. Finally handled.',
  subheadline:
    'We connect your scattered data sources, build your warehouse, and keep everything running — so you can focus on growing your business, not managing pipelines.',
  bullets: [
    { text: 'Connect Salesforce, HubSpot, QuickBooks, and 200+ other tools' },
    { text: 'Go from chaos to dashboards in 4-6 weeks' },
    { text: 'Fixed monthly cost — know exactly what you\'ll pay' },
  ],
  ctas: [
    { label: 'See How It Works', href: '#how-it-works', variant: 'primary' },
    {
      label: 'Book a Free Discovery Call',
      href: '#contact',
      variant: 'secondary',
    },
    {
      label: 'Download: The Mid-Market Data Playbook',
      href: '#playbook',
      variant: 'tertiary',
    },
  ],
}

// -----------------------------------------
// Trust Bar
// -----------------------------------------

export interface TrustBar {
  label: string
  clients: string[]
  microStat: string
}

export const trustBar: TrustBar = {
  label: 'Powering analytics for growing companies',
  clients: ['SayHi', 'Busy Kid', '3Way Marketing', 'Sourcefin', 'DataFirst'],
  microStat: '50M+ rows synced daily across 12 industries',
}

// -----------------------------------------
// Problem Section (01)
// -----------------------------------------

export interface PainPoint {
  headline: string
  body: string
}

export interface ProblemSection {
  sectionNumber: string
  headline: string
  painPoints: PainPoint[]
  transition: string
}

export const problem: ProblemSection = {
  sectionNumber: '01',
  headline: 'Sound familiar?',
  painPoints: [
    {
      headline: 'Your data is everywhere except where you need it',
      body: 'Sales in Salesforce. Marketing in HubSpot. Finance in spreadsheets. Operations in custom tools. Getting a single view of your business means hours of manual work every week.',
    },
    {
      headline: "AI vendors keep asking for 'clean data' you don't have",
      body: "You've heard the promise: AI will transform your business. But every vendor wants clean, unified data you don't have. Your AI projects stall before they start.",
    },
    {
      headline: 'Enterprise tools want enterprise budgets',
      body: "You got the Snowflake + Fivetran quote. R50K/month before you've moved a single row. These tools are built for companies with data teams — not companies that need one.",
    },
  ],
  transition:
    "You're not alone. Most mid-market companies hit this wall. You need real data infrastructure — without hiring a data team to run it.",
}

// -----------------------------------------
// Solution Section (02)
// -----------------------------------------

export interface ProductCapability {
  text: string
}

export interface Product {
  name: string
  tagline: string
  description: string
  capabilities: ProductCapability[]
  bestFor: string
}

export interface SolutionSection {
  sectionNumber: string
  headline: string
  subheadline: string
  products: Product[]
  flow: string
  combinedNote: string
}

export const solution: SolutionSection = {
  sectionNumber: '02',
  headline: 'Two products. One data foundation.',
  subheadline:
    'HyperFlow and HyperStore work together to consolidate your data, make it analytics-ready, and power the dashboards and AI tools that drive growth.',
  products: [
    {
      name: 'HyperFlow',
      tagline: 'Your data, always in sync',
      description:
        'HyperFlow connects to your existing tools — CRMs, ERPs, spreadsheets, databases, APIs — and keeps everything syncing reliably. No more manual exports. No more broken pipelines.',
      capabilities: [
        {
          text: '200+ pre-built connectors — Salesforce, HubSpot, QuickBooks, Google Sheets, and more',
        },
        { text: 'Real-time & scheduled syncs — Data arrives when you need it' },
        {
          text: 'Automatic error handling — Pipelines self-heal; you get alerts, not emergencies',
        },
        {
          text: 'Custom transformations — Clean, deduplicate, and reshape data automatically',
        },
      ],
      bestFor:
        'Companies with existing databases or tools who need reliable automated data movement',
    },
    {
      name: 'HyperStore',
      tagline: "A data warehouse that's actually ready to use",
      description:
        'HyperStore is a fully managed data warehouse designed for analytics, not transactions. We handle the architecture, hosting, backups, and optimization — you get fast queries and reliable reporting.',
      capabilities: [
        {
          text: 'Professional data architecture — Star schemas designed for your business',
        },
        {
          text: 'Petabyte scale — Grows with you, no migration required',
        },
        {
          text: 'Query optimization — Fast dashboards, not spinning wheels',
        },
        {
          text: 'Zero maintenance — We handle backups, security, and updates',
        },
      ],
      bestFor:
        'Companies building dashboards, reports, or AI capabilities who need a proper data foundation',
    },
  ],
  flow: 'Sources → HyperFlow → HyperStore → Outputs',
  combinedNote:
    "Here's the truth: most companies need both. HyperFlow moves the data; HyperStore makes it queryable. Together, they're the foundation for dashboards, reports, and AI.",
}

// -----------------------------------------
// Add-Ons (03)
// -----------------------------------------

export interface AddOn {
  name: string
  tagline: string
  description: string
  capabilities?: string[]
  cta: { label: string; href: string }
}

export interface AddOnsSection {
  sectionNumber: string
  headline: string
  subheadline: string
  addOns: AddOn[]
}

export const addOns: AddOnsSection = {
  sectionNumber: '03',
  headline: 'Ready for more? Add analytics and AI.',
  subheadline:
    'Once your data foundation is in place, unlock powerful insights with our add-on products.',
  addOns: [
    {
      name: 'HyperLens',
      tagline: 'See Your Data Clearly',
      description:
        'Dashboards your team will actually use. We build them in your preferred tool — Power BI, Tableau, or Looker — and train your team to get value from day one.',
      cta: { label: 'Learn about HyperLens', href: '#hyperlens' },
    },
    {
      name: 'HyperMind',
      tagline: 'AI That Knows Your Business',
      description:
        'Ask questions in plain English. Get anomaly alerts before problems become crises. HyperMind is like having a data analyst who never takes vacation — and knows every number in your business.',
      capabilities: [
        'What drove the revenue spike last Tuesday?',
        'Alert me when customer churn exceeds 5%',
        'Compare Q3 performance across all regions',
      ],
      cta: { label: 'See HyperMind in action', href: '#hypermind' },
    },
  ],
}

// -----------------------------------------
// How It Works (04)
// -----------------------------------------

export interface Stage {
  phase: string
  timeline: string
  headline: string
  description: string
  deliverable: string
}

export interface HowItWorksSection {
  sectionNumber: string
  headline: string
  subheadline: string
  stages: Stage[]
}

export const howItWorks: HowItWorksSection = {
  sectionNumber: '04',
  headline: 'A clear path from kickoff to go-live',
  subheadline: 'No surprises. No scope creep. Just results.',
  stages: [
    {
      phase: 'Discovery',
      timeline: 'Week 1',
      headline: 'Map your data landscape',
      description:
        "We dig into your systems, interview your team, and map every data source. By the end of week one, you'll have a complete blueprint — and a fixed price.",
      deliverable: 'Solution architecture diagram and project plan',
    },
    {
      phase: 'Build',
      timeline: 'Weeks 2-4',
      headline: 'Build your infrastructure',
      description:
        "Our engineers get to work. We build your pipelines, design your warehouse, and set up monitoring. You'll get weekly updates — not requests for more budget.",
      deliverable: 'Working data infrastructure in your environment',
    },
    {
      phase: 'Validate',
      timeline: 'Week 5',
      headline: 'Test everything together',
      description:
        "Your team tests everything. Run queries. Build a report. If the numbers don't match, we fix it. We don't go live until you're confident.",
      deliverable: 'Fully tested, production-ready system',
    },
    {
      phase: 'Operate',
      timeline: 'Ongoing',
      headline: 'Go live with confidence',
      description:
        "We monitor everything 24/7. When something breaks, we fix it — usually before you notice. Need a new data source? We'll add it. That's what managed means.",
      deliverable: 'Managed service with engineering support',
    },
  ],
}

// -----------------------------------------
// Industries (05)
// -----------------------------------------

export interface IndustryResult {
  text: string
}

export interface Industry {
  name: string
  tagline: string
  challenge: string
  solution: string
  results: IndustryResult[]
}

export interface IndustriesSection {
  sectionNumber: string
  headline: string
  subheadline: string
  industries: Industry[]
}

export const industries: IndustriesSection = {
  sectionNumber: '05',
  headline: 'See how companies like yours use Hyper',
  subheadline:
    "We've helped companies across industries unlock the value in their data. Here's how teams like yours use HyperFlow and HyperStore.",
  industries: [
    {
      name: 'Retail & E-commerce',
      tagline: 'Finally see all your sales in one place',
      challenge:
        'You receive sales data in 12 different formats from distributors, marketplaces, and POS systems. Reconciling inventory takes days. Demand forecasting is guesswork.',
      solution:
        'HyperFlow automatically ingests data from all channels — Shopify, Amazon, EDI feeds, distributor portals. HyperStore unifies it into a single view for inventory optimization and sales analytics.',
      results: [
        { text: '80% reduction in manual data reconciliation' },
        { text: 'Real-time inventory visibility across all channels' },
        { text: 'Accurate demand forecasting with 3-week lookahead' },
      ],
    },
    {
      name: 'Financial Services',
      tagline: 'Pass your next audit without the panic',
      challenge:
        "Regulators want to know where your numbers come from. Your current systems can't trace data from source to report. Audit season is a nightmare.",
      solution:
        'HyperFlow maintains complete audit trails for every data movement. HyperStore provides the governance layer financial services require — with SOC 2 compliance and role-based access controls.',
      results: [
        { text: 'Audit preparation reduced from weeks to days' },
        { text: 'Complete data lineage for regulatory reporting' },
        { text: 'Secure, compliant data infrastructure' },
      ],
    },
    {
      name: 'Healthcare & Life Sciences',
      tagline:
        'Connect clinical and operations without compromising security',
      challenge:
        'Research data lives in silos. Operational metrics are in spreadsheets. Getting insights means manual work that delays critical decisions.',
      solution:
        'HyperFlow connects clinical systems, research databases, and operational tools while maintaining strict security controls. HyperStore provides HIPAA-compliant storage optimized for analytical queries.',
      results: [
        { text: 'Unified view of clinical and operational data' },
        { text: 'HIPAA-compliant data infrastructure' },
        { text: 'Research insights delivered in hours, not weeks' },
      ],
    },
    {
      name: 'AI & Analytics Enablement',
      tagline: 'Stop your AI projects from stalling',
      challenge:
        'Your AI vendor says you need "clean, unified data." Your data scientists spend 80% of their time finding and preparing data. Models never make it to production.',
      solution:
        'HyperFlow and HyperStore create the data foundation that makes AI possible. Clean, deduplicated, properly structured data — ready for machine learning, predictive models, and LLM applications.',
      results: [
        { text: 'Data scientist time on prep reduced by 70%' },
        { text: 'First ML model to production in 6 weeks' },
        {
          text: 'Foundation for chatbots, predictions, and recommendations',
        },
      ],
    },
    {
      name: 'Professional Services',
      tagline: 'Unify client data across engagements',
      challenge:
        'Client data is scattered across project tools, CRMs, and billing systems. Generating cross-client insights or accurate utilization reports requires days of manual consolidation.',
      solution:
        'HyperFlow connects your project management, CRM, and financial systems into HyperStore, giving you a unified view of utilization, profitability, and client health across all engagements.',
      results: [
        { text: 'Consolidated reporting across all client engagements' },
        { text: 'Real-time utilization and profitability dashboards' },
        { text: 'Data-driven resource allocation decisions' },
      ],
    },
  ],
}

// -----------------------------------------
// Comparison Matrix (06)
// -----------------------------------------

export interface ComparisonRow {
  capability: string
  hyper: string
  enterprise: string
  diy: string
}

export interface ComparisonSection {
  sectionNumber: string
  headline: string
  subheadline: string
  rows: ComparisonRow[]
  summary: string
  detailParagraph: string
  cta: { label: string; href: string }
}

export const comparison: ComparisonSection = {
  sectionNumber: '06',
  headline: 'Why companies choose Hyper',
  subheadline: 'You have options. Here\'s why mid-market companies choose us.',
  rows: [
    {
      capability: 'Setup time',
      hyper: '4-6 weeks',
      enterprise: '3-6 months',
      diy: '6-12 months',
    },
    {
      capability: 'Monthly cost (typical)',
      hyper: 'R15K-R35K fixed',
      enterprise: 'R50K-R150K+ variable',
      diy: 'R80K+ (salaries)',
    },
    {
      capability: 'Pricing model',
      hyper: 'Fixed monthly',
      enterprise: 'Usage-based (unpredictable)',
      diy: 'Headcount',
    },
    {
      capability: 'Data engineering required',
      hyper: 'None',
      enterprise: 'Yes',
      diy: 'Full team',
    },
    {
      capability: 'Ongoing maintenance',
      hyper: 'Included',
      enterprise: 'Your responsibility',
      diy: 'Your responsibility',
    },
    {
      capability: 'Support',
      hyper: 'Dedicated team',
      enterprise: 'Ticket queue',
      diy: 'Internal only',
    },
    {
      capability: 'Customization',
      hyper: 'Configured for you',
      enterprise: 'Self-service',
      diy: 'Full control',
    },
    {
      capability: 'Best for',
      hyper: 'Mid-market companies',
      enterprise: 'Enterprise with data teams',
      diy: 'Tech companies with resources',
    },
  ],
  summary: "Here's what it comes down to",
  detailParagraph:
    "Fivetran and Snowflake are great — if you have a data team to run them. Most mid-market companies don't. That's not a weakness; it's just a different stage of growth. We built Hyper for companies who need enterprise results without enterprise overhead.\n\nHyper gives you the same capabilities, delivered as a fully managed service with fixed monthly pricing. You get enterprise-grade infrastructure without hiring a data team.",
  cta: { label: 'See detailed comparison guide', href: '#comparison-guide' },
}

// -----------------------------------------
// Pricing (07)
// -----------------------------------------

export interface PricingFeature {
  text: string
}

export interface PricingTier {
  name: string
  tagline: string
  implementation: string
  monthly: string
  features: PricingFeature[]
  cta: { label: string; href: string }
  popular?: boolean
}

export interface RoiPoint {
  text: string
}

export interface PricingSection {
  sectionNumber: string
  headline: string
  subheadline: string
  tiers: PricingTier[]
  note: string
  roi: {
    headline: string
    subheadline: string
    points: RoiPoint[]
    cta: { label: string; href: string }
  }
}

export const pricing: PricingSection = {
  sectionNumber: '07',
  headline: 'Pricing that makes sense for growing companies',
  subheadline: 'Fixed monthly pricing. No surprises. No per-row charges.',
  tiers: [
    {
      name: 'Starter',
      tagline: 'For teams connecting their first data sources',
      implementation: 'R75,000 - R150,000',
      monthly: 'R8,000 - R15,000',
      features: [
        { text: '2-3 data sources' },
        { text: 'Basic transformations' },
        { text: 'Standard data warehouse' },
        { text: 'Monitoring dashboard' },
        { text: 'Email support' },
      ],
      cta: { label: 'Get a quote', href: '#contact' },
    },
    {
      name: 'Professional',
      tagline: 'For companies serious about data-driven decisions',
      implementation: 'R150,000 - R350,000',
      monthly: 'R15,000 - R35,000',
      features: [
        { text: '5-10 data sources' },
        { text: 'Complex transformations' },
        { text: 'Optimized data warehouse' },
        { text: 'Custom dashboards' },
        { text: 'Priority support with SLA' },
      ],
      cta: { label: 'Get a quote', href: '#contact' },
      popular: true,
    },
    {
      name: 'Enterprise',
      tagline: 'For organizations with complex, multi-team data needs',
      implementation: 'Custom',
      monthly: 'R35,000+',
      features: [
        { text: 'Unlimited data sources' },
        { text: 'Advanced architecture' },
        { text: 'Multi-domain data warehouse' },
        { text: 'HyperLens & HyperMind add-ons' },
        { text: 'Dedicated support team' },
      ],
      cta: { label: 'Contact us', href: '#contact' },
    },
  ],
  note: 'Final pricing depends on data volume, complexity, and specific requirements. Every project starts with a free discovery session where we map your needs and provide a fixed quote.',
  roi: {
    headline: 'Typical ROI',
    subheadline: 'Most clients see payback in under 6 months',
    points: [
      { text: 'Time savings — 20+ hours/week reclaimed from manual data work' },
      {
        text: 'Faster decisions — Reports that took days now take minutes',
      },
      {
        text: 'New capabilities — AI and analytics projects that were previously impossible',
      },
    ],
    cta: { label: 'See what you could save', href: '#roi-calculator' },
  },
}

// -----------------------------------------
// Results & Testimonials (08)
// -----------------------------------------

export interface Stat {
  value: string
  label: string
}

export interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
  result?: string
}

export interface ResultsSection {
  sectionNumber: string
  headline: string
  stats: Stat[]
  testimonials: Testimonial[]
}

export const results: ResultsSection = {
  sectionNumber: '08',
  headline: 'Real results from real clients',
  stats: [
    { value: '5 weeks', label: 'Average implementation time' },
    { value: '20+ hours/week', label: 'Manual reporting time saved' },
    { value: '60-70%', label: 'Typical cost savings vs. enterprise tools' },
    { value: '95%+', label: 'Client retention rate' },
  ],
  testimonials: [
    {
      quote:
        "Before Hyper, our marketing team spent two days every week pulling data from six different platforms into spreadsheets. Now it's automated. We've reallocated that time to actually analyzing the data and optimizing campaigns. The ROI was obvious within the first month.",
      author: 'Ricky M.',
      title: 'CMO',
      company: '3Way Marketing',
      result: 'Marketing team reclaimed 16+ hours per week',
    },
    {
      quote:
        "We evaluated Snowflake and Fivetran, but the costs were unpredictable and we didn't have data engineers to manage it. Hyper gave us the same capabilities at a third of the cost with none of the overhead.",
      author: 'Sarah K.',
      title: 'Head of Operations',
      company: 'FinServe Co',
    },
    {
      quote:
        "Our AI chatbot project was stalled for six months because we couldn't get clean data. Hyper had us up and running in four weeks. The chatbot is now handling 40% of our customer inquiries.",
      author: 'Michael T.',
      title: 'CTO',
      company: 'TechStart',
    },
  ],
}

// -----------------------------------------
// Security (09)
// -----------------------------------------

export interface SecurityFeature {
  name: string
  description: string
}

export interface SecuritySection {
  sectionNumber: string
  headline: string
  subheadline: string
  features: SecurityFeature[]
  cta: { label: string; href: string }
}

export const security: SecuritySection = {
  sectionNumber: '09',
  headline: 'Your data is safe with us',
  subheadline:
    'We take security as seriously as you do. SOC 2 certified, GDPR compliant, and HIPAA ready.',
  features: [
    {
      name: 'SOC 2 Type II',
      description: 'Annual third-party audits of our security controls',
    },
    {
      name: 'GDPR Compliant',
      description:
        'Data residency and privacy controls for EU requirements',
    },
    {
      name: 'HIPAA Ready',
      description:
        'Healthcare-grade security for protected health information',
    },
    {
      name: 'Encryption',
      description: 'Data encrypted in transit and at rest (AES-256)',
    },
    {
      name: 'Access Controls',
      description: 'Role-based permissions and audit logging',
    },
    {
      name: 'Data Residency',
      description: 'Your data stays in your chosen region',
    },
  ],
  cta: { label: 'Download our security whitepaper', href: '#security-whitepaper' },
}

// -----------------------------------------
// FAQ (10)
// -----------------------------------------

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqSection {
  sectionNumber: string
  headline: string
  items: FaqItem[]
}

export const faq: FaqSection = {
  sectionNumber: '10',
  headline: 'Frequently asked questions',
  items: [
    {
      question: 'How long does implementation take?',
      answer:
        "4-6 weeks for most projects. Complex setups might take 8-12 weeks. We'll give you a fixed timeline — and stick to it.",
    },
    {
      question: 'Do we need a data engineer on our team?',
      answer:
        "No. That's the whole point. We handle the pipelines, the warehouse, the monitoring — all of it. You focus on using the data.",
    },
    {
      question: 'What if we already have some data infrastructure?',
      answer:
        "Great — we work with what you have. If you're already using a cloud database or have some pipelines in place, we can integrate with your existing setup rather than replacing everything.",
    },
    {
      question: 'How does pricing work? Are there hidden costs?',
      answer:
        "Our pricing is fixed monthly. No usage-based surprises. We quote a specific monthly fee during discovery, and that's what you pay. The only thing that changes your price is adding new data sources or capabilities — and we'll quote those upfront too.",
    },
    {
      question: 'What happens if something breaks?',
      answer:
        'Our monitoring catches most issues before you notice them. When something does need attention, you have direct access to our engineering team — not a ticket queue. Response times are defined in your SLA, typically under 4 hours for critical issues.',
    },
    {
      question: 'Can we add AI capabilities later?',
      answer:
        'Absolutely. HyperFlow and HyperStore create the data foundation that makes AI possible. When you\'re ready for natural language queries, predictive models, or chatbots, HyperMind plugs directly into your existing infrastructure.',
    },
    {
      question: 'What data sources do you support?',
      answer:
        "We have 200+ pre-built connectors covering most common business tools — CRMs, ERPs, marketing platforms, databases, spreadsheets, and APIs. If you have a niche system we haven't connected before, we can build a custom connector.",
    },
    {
      question: 'Is our data secure?',
      answer:
        "Yes. We're SOC 2 Type II certified, GDPR compliant, and HIPAA ready. Your data is encrypted in transit and at rest, access is controlled and logged, and you choose where your data is stored geographically.",
    },
  ],
}

// -----------------------------------------
// Final CTA
// -----------------------------------------

export interface FinalCtaSection {
  badge: string
  headline: string
  subheadline: string
  ctas: HeroCta[]
  trustBadges: string[]
}

export const finalCta: FinalCtaSection = {
  badge: 'GET STARTED',
  headline: 'Ready to turn your data into a competitive advantage?',
  subheadline:
    "30 minutes. No slides. We'll look at your actual data situation and show you exactly what we'd build.",
  ctas: [
    {
      label: 'Book Your Free Discovery Call',
      href: '#contact',
      variant: 'primary',
    },
    {
      label: 'Watch the Product Demo',
      href: '#demo',
      variant: 'secondary',
    },
    {
      label: 'Get the Mid-Market Data Playbook',
      href: '#playbook',
      variant: 'tertiary',
    },
  ],
  trustBadges: ['No obligation', 'No pressure', 'Just conversation'],
}

// -----------------------------------------
// Footer
// -----------------------------------------

export interface FooterLinkGroup {
  title: string
  links: { label: string; href: string }[]
}

export interface FooterContent {
  ctaBar: {
    text: string
    email: string
    phone: string
  }
  brand: {
    name: string
    tagline: string
  }
  linkGroups: FooterLinkGroup[]
  bottomBar: {
    copyright: string
    status: string
  }
}

export const footer: FooterContent = {
  ctaBar: {
    text: 'Questions? Talk to us',
    email: 'hello@hyper.co.za',
    phone: '+27 (0) 00 000 0000',
  },
  brand: {
    name: 'hyper',
    tagline:
      "Data infrastructure for growing businesses. Managed, so you don't have to be.",
  },
  linkGroups: [
    {
      title: 'Products',
      links: [
        { label: 'HyperFlow', href: '#hyperflow' },
        { label: 'HyperStore', href: '#hyperstore' },
        { label: 'HyperLens', href: '#hyperlens' },
        { label: 'HyperMind', href: '#hypermind' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { label: 'Retail & E-commerce', href: '#retail' },
        { label: 'Financial Services', href: '#financial' },
        { label: 'Healthcare', href: '#healthcare' },
        { label: 'AI Enablement', href: '#ai' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Documentation', href: '#docs' },
        { label: 'Blog', href: '#blog' },
        { label: 'Security', href: '#security' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy Policy', href: '#privacy' },
      ],
    },
  ],
  bottomBar: {
    copyright: '\u00A9 2025 hyper. All rights reserved.',
    status: 'All systems operational',
  },
}

// -----------------------------------------
// Site Metadata
// -----------------------------------------

export interface SiteMetadata {
  title: string
  description: string
}

export const siteMetadata: SiteMetadata = {
  title: 'hyper - Data Infrastructure for Growing Businesses',
  description:
    'Turn scattered data into business intelligence without the enterprise price tag. HyperFlow and HyperStore give mid-market companies enterprise-grade data infrastructure as a managed service.',
}
