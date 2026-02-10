import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SkipToContent } from '../shared/components/SkipToContent'
import { SvgFilters } from '../shared/components/SvgFilters'
import './hub.css'

/* -----------------------------------------
   Page data — the five landing page designs
   ----------------------------------------- */
interface PageDesign {
  slug: string
  name: string
  style: string
  colors: string[]
  path: string
}

const pages: PageDesign[] = [
  {
    slug: 'straight-shooter',
    name: 'Straight Shooter',
    style: 'Industrial Brutalist',
    colors: ['#0a0a0a', '#f5f2eb', '#00f0d4'],
    path: '/straight-shooter',
  },
  {
    slug: 'storyteller',
    name: 'Storyteller',
    style: 'Editorial Luxury',
    colors: ['#1a1a1a', '#faf6f1', '#c9a84c', '#c4654a'],
    path: '/storyteller',
  },
  {
    slug: 'consultant',
    name: 'Consultant',
    style: 'Strategic Modern',
    colors: ['#0c1a2e', '#f9f7f4', '#0077b6', '#e09f3e'],
    path: '/consultant',
  },
  {
    slug: 'authority',
    name: 'Authority',
    style: 'Swiss Precision',
    colors: ['#f8f7f5', '#1a1a1a', '#1a3a5c', '#8899aa'],
    path: '/authority',
  },
  {
    slug: 'business-case',
    name: 'Business Case',
    style: 'Executive Data Viz',
    colors: ['#fafafa', '#1c1c1e', '#1a7a4c', '#8b2252'],
    path: '/business-case',
  },
]

/* -----------------------------------------
   Animation variants
   ----------------------------------------- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

/* -----------------------------------------
   Arrow icon component
   ----------------------------------------- */
function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 13L13 1M13 1H4M13 1v9" />
    </svg>
  )
}

/* -----------------------------------------
   Hub Page component
   ----------------------------------------- */
export default function HubPage() {
  return (
    <div data-page="hub">
      <SkipToContent />
      <SvgFilters />

      <motion.header
        className="hub-header"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        <motion.p className="hub-brand" variants={headerVariants} aria-hidden="true">
          hyper
        </motion.p>

        <motion.h1 className="hub-title" variants={headerVariants}>
          Five ways to <strong>land</strong>
        </motion.h1>

        <motion.p className="hub-subtitle" variants={headerVariants}>
          One product story, told through five distinct visual identities.
          Each page is a fully realized landing experience.
        </motion.p>

        <motion.span className="hub-page-count" variants={headerVariants}>
          {pages.length} designs
        </motion.span>
      </motion.header>

      <motion.main
        id="main-content"
        className="hub-grid"
        role="list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {pages.map((page, index) => (
          <motion.div key={page.slug} variants={cardVariants} role="listitem">
            <Link
              to={page.path}
              className="hub-card"
              aria-label={`${page.name} — ${page.style} design`}
            >
              {/* Color banner */}
              <div className="hub-card__banner" aria-hidden="true">
                {page.colors.map((color, i) => (
                  <div
                    key={color}
                    className={`hub-card__swatch${i === page.colors.length - 1 ? ' hub-card__swatch--accent' : ''}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Arrow */}
              <span className="hub-card__arrow" aria-hidden="true">
                <ArrowIcon />
              </span>

              {/* Body */}
              <div className="hub-card__body">
                <span className="hub-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="hub-card__name">{page.name}</h2>
                <p className="hub-card__style">{page.style}</p>

                {/* Palette dots */}
                <div className="hub-card__palette">
                  {page.colors.map((color) => (
                    <span
                      key={color}
                      className="hub-card__dot"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                  <span className="hub-card__palette-label">
                    {page.colors.length} colors
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.main>

      <footer className="hub-footer">
        <div className="hub-footer__line" aria-hidden="true" />
        <p className="hub-footer__text">
          hyper &mdash; data infrastructure for growing businesses
        </p>
      </footer>
    </div>
  )
}
