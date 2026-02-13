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
    { label: 'Solutions', href: '#solutions' },
    { label: 'Results', href: '#results' },
    { label: 'Process', href: '#process' },
    { label: 'Security', href: '#security' },
  ],
  cta: { label: 'BOOK A CALL', href: '#contact' },
}

// -----------------------------------------
// Hero
// -----------------------------------------

export interface HeroCta {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'tertiary'
}

export interface HeroContent {
  eyebrow: string
  headline: string
  subheadline: string
  ctas: HeroCta[]
}

export const hero: HeroContent = {
  eyebrow: 'Managed analytics infrastructure for mid-market companies',
  headline: 'From scattered data\nto clear answers.',
  subheadline:
    'We connect your tools, build your data warehouse, and deliver the dashboards your team needs to make decisions — fully managed, live in weeks.',
  ctas: [
    { label: 'Book a Discovery Call', href: '#contact', variant: 'primary' },
    { label: 'Take the Data Diagnostic', href: '#diagnostic', variant: 'secondary' },
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
// Problem Section
// -----------------------------------------

export interface PainPoint {
  headline: string
  body: string
}

export interface ProblemSection {
  headline: string
  painPoints: PainPoint[]
  transition: string
}

export const problem: ProblemSection = {
  headline: 'Sound familiar?',
  painPoints: [
    {
      headline: 'Your data lives in 15 tools. Your answers live in none of them.',
      body: "Sales in one CRM. Marketing in another. Finance in spreadsheets. When leadership asks a simple question, someone spends half a day pulling numbers from six tabs. That's not analytics — it's archaeology.",
    },
    {
      headline: 'You tried Databricks or Snowflake. Then you saw what it actually takes.',
      body: "Self-service platforms promise flexibility. What they deliver is a six-figure bill, a three-month implementation, and the realisation you need a data team just to keep the lights on.",
    },
    {
      headline: "You hired a data analyst. The infrastructure didn't magically appear.",
      body: "Data analysts build reports. Data engineers build the infrastructure those reports need. One analyst can't do both, and a single engineer can't build and maintain a production system alone. Months and budget go by with nothing to show.",
    },
  ],
  transition:
    "You don't need another tool or another hire. You need a team that builds and runs your entire analytics infrastructure — so your people can focus on using the data.",
}

// -----------------------------------------
// Solution Section
// -----------------------------------------

export interface Product {
  name: string
  tagline: string
  description: string
}

export interface SolutionSection {
  headline: string
  subheadline: string
  products: Product[]
}

export const solution: SolutionSection = {
  headline: 'From raw data to live dashboards',
  subheadline:
    'Hyper connects your tools, warehouses your data, and delivers analytics-ready infrastructure — so your team gets dashboards and reports, not data engineering problems.',
  products: [
    {
      name: 'HyperFlow',
      tagline: 'Connect & Sync',
      description:
        'Connects to your CRMs, ERPs, spreadsheets, and databases. Keeps everything syncing automatically — no engineering required.',
    },
    {
      name: 'HyperStore',
      tagline: 'Store & Analyse',
      description:
        'A managed data warehouse built for analytics. Clean, governed, queryable data that powers your dashboards and AI tools.',
    },
  ],
}

// -----------------------------------------
// How It Works / Process
// -----------------------------------------

export interface Stage {
  phase: string
  headline: string
  description: string
}

export interface ProcessSection {
  headline: string
  subheadline: string
  stages: Stage[]
}

export const process: ProcessSection = {
  headline: 'A proven path to analytics that work',
  subheadline: 'From first conversation to live dashboards — with full visibility at every step.',
  stages: [
    {
      phase: 'Discover',
      headline: 'A complete diagnostic of your data landscape',
      description:
        'We map every data source, interview key stakeholders, and deliver a detailed blueprint — along with a clear roadmap. This diagnostic is valuable on its own, whether or not you move forward with us.',
    },
    {
      phase: 'Build',
      headline: 'Your infrastructure, built in weeks',
      description:
        'Our engineers build your pipelines, design your warehouse, and connect your first dashboards. Weekly progress updates, no surprises. Most clients go live within 5 weeks.',
    },
    {
      phase: 'Validate',
      headline: 'Your team tests, verifies, and signs off',
      description:
        "Your team runs queries, checks reports, and verifies the numbers match reality. We don't go live until you're confident the data is right.",
    },
    {
      phase: 'Operate',
      headline: 'Managed infrastructure that grows with you',
      description:
        "We monitor 24/7, handle issues before you notice them, and evolve your infrastructure as your business grows. This isn't a project — it's a long-term partnership.",
    },
  ],
}

// -----------------------------------------
// Comparison Matrix
// -----------------------------------------

export interface ComparisonRow {
  capability: string
  hyper: string
  databricks: string
  diy: string
}

export interface ComparisonSection {
  headline: string
  subheadline: string
  rows: ComparisonRow[]
}

export const comparison: ComparisonSection = {
  headline: 'Why mid-market companies choose Hyper',
  subheadline: "You have options. Here's why most don't work for companies your size.",
  rows: [
    { capability: 'Fully managed — no engineers needed', hyper: '✓', databricks: '✗', diy: '✗' },
    { capability: 'Live dashboards in under 6 weeks', hyper: '✓', databricks: '✗', diy: '✗' },
    { capability: 'Fixed, predictable monthly pricing', hyper: '✓', databricks: '✗', diy: '~' },
    { capability: 'No implementation team required', hyper: '✓', databricks: '✗', diy: '✗' },
    { capability: 'Ongoing platform evolution included', hyper: '✓', databricks: '✗', diy: '✗' },
    { capability: 'Dedicated support team', hyper: '✓', databricks: '~', diy: '✗' },
    { capability: 'Typical monthly cost', hyper: '$$', databricks: '$$$$', diy: '$$$$' },
  ],
}

// -----------------------------------------
// Results & Testimonials
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
  headline: string
  stats: Stat[]
  testimonials: Testimonial[]
}

export const results: ResultsSection = {
  headline: 'Real results from real clients',
  stats: [
    { value: '5 weeks', label: 'Average time from kickoff to live dashboards' },
    { value: '20+ hours', label: 'Saved weekly on manual reporting' },
    { value: '200+', label: 'Pre-built data connectors' },
    { value: '95%+', label: 'Client retention rate year-over-year' },
  ],
  testimonials: [
    {
      quote:
        "Before Hyper, our marketing team spent two days every week pulling data from six platforms into spreadsheets. Now we have live dashboards that update automatically. We've reallocated that time to actually optimising campaigns.",
      author: 'Ricky M.',
      title: 'CMO',
      company: '3Way Marketing',
      result: 'Marketing team reclaimed 16+ hours per week',
    },
    {
      quote:
        "We evaluated Snowflake and Databricks, but the costs were unpredictable and we'd have needed engineers just to manage the platform. Hyper gave us the same analytical capability at a fraction of the cost — and we were live in four weeks.",
      author: 'Sarah K.',
      title: 'Head of Operations',
      company: 'FinServe Co',
      result: 'Live dashboards in 4 weeks, 60% lower cost',
    },
    {
      quote:
        "What started as a dashboard project has grown into a complete analytics platform. Hyper's team evolves our infrastructure as we grow — it's like having a data department without the headcount.",
      author: 'Michael T.',
      title: 'CTO',
      company: 'TechStart',
      result: 'From 2 dashboards to company-wide analytics in 12 months',
    },
  ],
}

// -----------------------------------------
// Security
// -----------------------------------------

export interface SecurityFeature {
  name: string
  description: string
}

export interface SecuritySection {
  headline: string
  subheadline: string
  features: SecurityFeature[]
}

export const security: SecuritySection = {
  headline: 'Your data security is non-negotiable',
  subheadline:
    'Every layer of our infrastructure is built to protect your most sensitive data. No shortcuts.',
  features: [
    {
      name: 'SOC 2 Type II',
      description: 'Annual third-party audits of our security controls',
    },
    {
      name: 'GDPR Compliant',
      description: 'Data residency and privacy controls for EU requirements',
    },
    {
      name: 'HIPAA Ready',
      description: 'Healthcare-grade security for protected health information',
    },
    {
      name: 'AES-256 Encryption',
      description: 'Data encrypted in transit and at rest, always',
    },
    {
      name: 'Role-Based Access',
      description: 'Granular permissions and complete audit logging',
    },
    {
      name: 'Data Residency',
      description: 'Your data stays in your chosen geographic region',
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
  badge: 'START HERE',
  headline: 'See what your analytics could look like',
  subheadline:
    "Book a free discovery call. We'll map your data landscape and show you exactly what we'd build — no obligation, no sales deck.",
  ctas: [
    {
      label: 'Book a Free Discovery Call',
      href: '#contact',
      variant: 'primary',
    },
    {
      label: 'Watch a 3-Minute Demo',
      href: '#demo',
      variant: 'secondary',
    },
  ],
  trustBadges: ['Free data diagnostic included', 'No obligation', 'Live in under 5 weeks'],
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
      "Analytics infrastructure for growing businesses. Managed, so you don't have to be.",
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
  title: 'hyper — Managed Analytics Infrastructure for Growing Businesses',
  description:
    'Go from scattered data to live dashboards in weeks. Hyper builds and manages your data warehouse, pipelines, and analytics infrastructure — so you never need to hire a data team.',
}
