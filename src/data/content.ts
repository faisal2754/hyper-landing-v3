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
  eyebrow: 'Fully managed analytics for mid-market companies',
  headline: 'Scattered data\nto live analytics.',
  subheadline:
    'Our specialist team delivers dashboards, analytics, and the data infrastructure behind them — tailored to your business, with a working demo in days and live analytics in production within weeks.',
  ctas: [
    { label: 'Book a Free Discovery Call', href: '#contact', variant: 'primary' },
    { label: 'Get Your Free Data Diagnostic', href: '#diagnostic', variant: 'secondary' },
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
  label: 'Powering dashboards and analytics for growing companies',
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
      headline: 'Your data lives in 15 tools. Your decisions live in the dark.',
      body: "Sales in one CRM. Marketing in another. Finance in spreadsheets. When leadership asks a simple question, someone spends half a day pulling numbers from six tabs. You don't have a data problem — you have a visibility problem. And every day without clear dashboards and analytics costs your team better decisions.",
    },
    {
      headline: 'You tried Databricks or a DIY platform. Then reality hit.',
      body: "Platforms like Databricks, Snowflake, and dbt promise you can build it yourself. What they deliver is a six-figure bill, a six-month implementation, and the realisation you need a dedicated engineering team just to keep the lights on. DIY platforms are built for companies with 50-person data teams — not mid-market companies that need dashboards and answers now.",
    },
    {
      headline: "You hired a data person. You still don't have dashboards.",
      body: "A data analyst builds reports — but can't build the infrastructure those reports need. A single data engineer can't realistically deliver and maintain a production analytics platform alone. Even a small internal team can't match the depth of specialists who've done this dozens of times — and they'll cost you more.",
    },
  ],
  transition:
    "You don't need another platform, another tool, or another hire. You need a specialist team that delivers the dashboards and analytics your leadership needs — and fully manages the infrastructure behind them, so your people can focus on making better decisions.",
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
  headline: 'Live dashboards and analytics — built and fully managed',
  subheadline:
    "Our specialist team delivers the dashboards, reports, and analytics layer your leadership needs to make faster, better decisions — powered by production-grade data infrastructure we design, build, and manage end-to-end. We've done this dozens of times, so your team gets proven results without managing any of it.",
  products: [
    {
      name: 'HyperFlow',
      tagline: 'Connect & Sync',
      description:
        'Every data source — CRMs, ERPs, spreadsheets, databases — connected and syncing automatically. Your data arrives clean, on time, and ready for dashboards. No engineering required.',
    },
    {
      name: 'HyperStore',
      tagline: 'Store & Analyse',
      description:
        'A fully managed data warehouse with clean, governed, queryable data. Purpose-built for dashboards, business intelligence, and AI — without your team managing any infrastructure.',
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
  headline: 'Live dashboards in weeks, not months',
  subheadline: 'A proven process refined across dozens of engagements. Your first tailored demo ships in days. Most clients have live dashboards in production within five weeks.',
  stages: [
    {
      phase: 'Discover',
      headline: 'A diagnostic worth having — even if you stop here',
      description:
        'We map every data source, interview stakeholders, and deliver a prioritised roadmap with quick wins — a standalone deliverable your team can act on, whether or not you move forward with Hyper.',
    },
    {
      phase: 'Build',
      headline: 'Your first tailored demo in days, live dashboards in weeks',
      description:
        'A working demo tailored to your data within the first week. Weekly walkthroughs, full transparency, no surprises. Most clients are in production within five weeks.',
    },
    {
      phase: 'Validate',
      headline: 'Your team tests, verifies, and signs off',
      description:
        "Your team checks dashboards, runs queries, and verifies the numbers match reality. We don't go live until you're confident the data is right.",
    },
    {
      phase: 'Operate',
      headline: 'A long-term partnership that grows with you',
      description:
        'We monitor 24/7, resolve issues before they reach you, and evolve your platform as you grow. New data sources, new dashboards, new integrations — your managed data department.',
    },
  ],
}

// -----------------------------------------
// Comparison Matrix
// -----------------------------------------

export interface ComparisonMetric {
  label: string
  value: string
}

export interface ComparisonApproach {
  name: string
  tagline: string
  highlighted?: boolean
  metrics: ComparisonMetric[]
  bestFor: string
}

export interface ComparisonSection {
  headline: string
  subheadline: string
  approaches: ComparisonApproach[]
}

export const comparison: ComparisonSection = {
  headline: 'Three paths to analytics. One doesn\u2019t require a data team.',
  subheadline:
    'Every approach has trade-offs. Here\u2019s what each one actually costs, how long it takes, and what it demands from your team.',
  approaches: [
    {
      name: 'Hyper',
      tagline: 'Managed analytics partner',
      highlighted: true,
      metrics: [
        { label: 'Deployment', value: '3\u20135 weeks' },
        { label: 'Team size', value: '0 engineers' },
        { label: 'Monthly cost', value: '$5k\u2013$15k' },
        { label: 'Maintenance', value: 'Fully managed' },
      ],
      bestFor: 'Teams that need analytics now',
    },
    {
      name: 'DIY Platforms',
      tagline: 'Databricks, Snowflake, dbt',
      metrics: [
        { label: 'Deployment', value: '3\u20136 months' },
        { label: 'Team size', value: '2\u20135 engineers' },
        { label: 'Monthly cost', value: '$20k\u2013$50k+' },
        { label: 'Maintenance', value: 'Self-managed' },
      ],
      bestFor: 'Enterprises with existing data teams',
    },
    {
      name: 'In-House Team',
      tagline: 'Build your own data department',
      metrics: [
        { label: 'Deployment', value: '4\u20139 months' },
        { label: 'Team size', value: '3\u20136 hires' },
        { label: 'Monthly cost', value: '$30k\u2013$60k+' },
        { label: 'Maintenance', value: 'Self-managed' },
      ],
      bestFor: 'Long-term internal data capability',
    },
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
    { value: '20+ hours', label: 'Saved weekly on manual reporting per client' },
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
      result: 'Marketing team reclaimed 16+ hours per week for campaign optimisation',
    },
    {
      quote:
        "We evaluated Databricks and other DIY platforms, but the costs were unpredictable and we'd have needed engineers just to manage them. Hyper gave us live dashboards at a fraction of the cost — fully managed and live in four weeks.",
      author: 'Sarah K.',
      title: 'Head of Operations',
      company: 'FinServe Co',
      result: 'Live dashboards in 4 weeks at 60% lower cost than DIY platform alternatives',
    },
    {
      quote:
        "What started as a dashboard project has grown into a company-wide analytics platform. Hyper's team evolves our infrastructure as we grow — it's like having an entire data department without the headcount.",
      author: 'Michael T.',
      title: 'CTO',
      company: 'TechStart',
      result: 'From a single dashboard to company-wide analytics platform in 12 months — and still scaling',
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
  headline: 'See what your analytics could look like in five weeks',
  subheadline:
    "Start with a free discovery call. We'll map your data landscape, identify quick wins, and show you a tailored preview of the dashboards and analytics we'd build — a valuable diagnostic whether or not you move forward.",
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
  trustBadges: ['Free data diagnostic included', 'Zero obligation', 'Live dashboards in under 5 weeks'],
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
      "Dashboards, analytics, and data infrastructure — built and managed by specialists, so you never have to hire your own.",
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
  title: 'hyper — Dashboards & Analytics, Fully Managed for Mid-Market Companies',
  description:
    "Go from scattered data to live dashboards in weeks. Hyper's specialist team builds and fully manages your analytics, data warehouse, and pipelines — so you get the visibility to make better decisions without hiring a data team.",
}
