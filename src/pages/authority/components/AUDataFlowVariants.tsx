import { motion } from 'framer-motion'
import { SiSalesforce, SiHubspot, SiSap, SiQuickbooks, SiGooglesheets } from 'react-icons/si'
import { TbChartBar, TbBrain, TbFileAnalytics } from 'react-icons/tb'
import { solution } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

const DATA_SOURCES = [
  { icon: SiSalesforce, color: '#00A1E0', name: 'Salesforce' },
  { icon: SiHubspot, color: '#FF7A59', name: 'HubSpot' },
  { icon: SiSap, color: '#0FAAFF', name: 'SAP' },
  { icon: SiQuickbooks, color: '#2CA01C', name: 'QuickBooks' },
  { icon: SiGooglesheets, color: '#34A853', name: 'Google Sheets' },
]

const OUTPUTS = [
  { icon: TbChartBar, color: '#1a3a5c', name: 'Dashboards' },
  { icon: TbBrain, color: '#1a3a5c', name: 'AI & ML' },
  { icon: TbFileAnalytics, color: '#1a3a5c', name: 'Reports' },
]

const BLUEPRINT_CSS = `
  @keyframes bp-march{from{stroke-dashoffset:0}to{stroke-dashoffset:-16}}

  .bp-wrap {
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 64px 48px;
    background: #edf4f8;
    background-image:
      repeating-linear-gradient(0deg, rgba(26,58,92,.07) 0px, rgba(26,58,92,.07) 1px, transparent 1px, transparent 24px),
      repeating-linear-gradient(90deg, rgba(26,58,92,.07) 0px, rgba(26,58,92,.07) 1px, transparent 1px, transparent 24px);
    border: 2.5px solid #1a3a5c;
    font-family: 'IBM Plex Mono', monospace;
  }

  .bp-stamp {
    position: absolute;
    bottom: 16px;
    right: 16px;
    border: 2.5px solid #1a3a5c;
    background: #edf4f8;
    padding: 6px 14px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .8px;
    text-transform: uppercase;
    color: #1a3a5c;
  }

  .bp-grid {
    position: relative;
    display: grid;
    grid-template-columns: 220px 1fr 220px;
    gap: 48px;
    align-items: center;
    min-height: 420px;
  }

  .bp-col {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    z-index: 2;
  }

  .bp-col-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: rgba(26,58,92,.5);
    margin-bottom: 4px;
  }

  .bp-node {
    position: relative;
    background: #edf4f8;
    border: 2px dashed #1a3a5c;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    transition: all .2s;
    cursor: default;
  }
  .bp-node::before, .bp-node::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid #1a3a5c;
    background: #edf4f8;
  }
  .bp-node::before { top: -2px; left: -2px; }
  .bp-node::after { bottom: -2px; right: -2px; }
  .bp-node:hover {
    background: rgba(26,58,92,.05);
    transform: translateY(-2px);
  }

  .bp-node-icon {
    color: #1a3a5c;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bp-node-name {
    font-size: 14px;
    font-weight: 600;
    color: #1a3a5c;
    letter-spacing: .3px;
  }

  .bp-platform {
    position: relative;
    background: #edf4f8;
    border: 4px double #1a3a5c;
    padding: 40px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    z-index: 2;
    background-image:
      repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(26,58,92,.02) 12px, rgba(26,58,92,.02) 13px),
      repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(26,58,92,.02) 12px, rgba(26,58,92,.02) 13px);
  }
  .bp-platform::before, .bp-platform::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 4px solid #1a3a5c;
    background: #edf4f8;
  }
  .bp-platform::before { top: -4px; left: -4px; }
  .bp-platform::after { bottom: -4px; right: -4px; }

  .bp-plat-sec { text-align: center; }

  .bp-plat-lbl {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    color: rgba(26,58,92,.55);
    margin-bottom: 6px;
  }

  .bp-plat-name {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 24px;
    font-weight: 800;
    color: #1a3a5c;
    letter-spacing: -.5px;
  }

  .bp-plat-div {
    width: 80%;
    height: 2px;
    background: rgba(26,58,92,.18);
  }

  .bp-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .bp-conn {
    fill: none;
    stroke: #1a3a5c;
    stroke-width: 1.5;
    stroke-dasharray: 10 6;
    stroke-dashoffset: 0;
    animation: bp-march 1.2s linear infinite;
  }

  .bp-ann {
    position: absolute;
    font-size: 10px;
    font-weight: 600;
    color: #1a3a5c;
    text-transform: uppercase;
    letter-spacing: .8px;
    background: #edf4f8;
    padding: 3px 8px;
    border: 1.5px solid rgba(26,58,92,.25);
    white-space: nowrap;
    z-index: 3;
    opacity: .65;
  }

  @media (max-width: 768px) {
    .bp-wrap { padding: 40px 24px; }
    .bp-grid {
      grid-template-columns: 1fr;
      gap: 32px;
      min-height: auto;
    }
    .bp-svg, .bp-ann { display: none; }
    .bp-node-name { font-size: 13px; }
    .bp-plat-name { font-size: 20px; }
  }
`

function Blueprint() {
  return (
    <>
      <style>{BLUEPRINT_CSS}</style>
      <div className="bp-wrap">
        <div className="bp-stamp">HYPER SYSTEMS — DATA ARCHITECTURE — REV 3.2</div>
        <div className="bp-grid">
          <div className="bp-col">
            <div className="bp-col-label">Data Sources</div>
            {DATA_SOURCES.map((s, i) => (
              <motion.div
                key={s.name}
                className="bp-node"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * .09, duration: .4 }}
              >
                <div className="bp-node-icon"><s.icon size={22} /></div>
                <span className="bp-node-name">{s.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bp-platform"
            initial={{ opacity: 0, scale: .92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: .3, duration: .5 }}
          >
            <div className="bp-plat-sec">
              <div className="bp-plat-lbl">Data Ingestion Layer</div>
              <div className="bp-plat-name">HyperFlow</div>
            </div>
            <div className="bp-plat-div" />
            <div className="bp-plat-sec">
              <div className="bp-plat-lbl">Storage & Query Engine</div>
              <div className="bp-plat-name">HyperStore</div>
            </div>
          </motion.div>

          <div className="bp-col">
            <div className="bp-col-label">Outputs</div>
            {OUTPUTS.map((o, i) => (
              <motion.div
                key={o.name}
                className="bp-node"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: .45 + i * .09, duration: .4 }}
              >
                <div className="bp-node-icon"><o.icon size={22} /></div>
                <span className="bp-node-name">{o.name}</span>
              </motion.div>
            ))}
          </div>

          <svg className="bp-svg" viewBox="0 0 1004 420" preserveAspectRatio="none">
            {[84, 154, 224, 294, 364].map((y, i) => (
              <polyline key={`l${i}`} className="bp-conn" points={`220,${y} 244,${y} 244,210 268,210`} />
            ))}
            {[154, 224, 294].map((y, i) => (
              <polyline key={`r${i}`} className="bp-conn" points={`736,210 760,210 760,${y} 784,${y}`} />
            ))}
          </svg>

          <div className="bp-ann" style={{ top: '14%', left: '22%' }}>DATA SYNC</div>
          <div className="bp-ann" style={{ bottom: '12%', left: '22%' }}>ETL PIPELINE</div>
          <div className="bp-ann" style={{ top: '30%', right: '20%' }}>QUERY LAYER</div>
        </div>
      </div>
    </>
  )
}

export function AUDataFlowVariants() {
  return (
    <section className="au-dataflow" id="solutions" aria-label="How your data flows">
      <div className="au-container">
        <ScrollReveal>
          <div className="au-dataflow__header">
            <p className="au-section-label">The solution</p>
            <h2 className="au-dataflow__title">{solution.headline}</h2>
            <p className="au-dataflow__subtitle">{solution.subheadline}</p>
          </div>
        </ScrollReveal>

        <Blueprint />

        <ScrollReveal delay={0.15}>
          <div className="au-dataflow__products">
            {solution.products.map((product) => (
              <div key={product.name} className="au-dataflow__product">
                <h3 className="au-dataflow__product-name">{product.name}</h3>
                <p className="au-dataflow__product-tagline">{product.tagline}</p>
                <p className="au-dataflow__product-desc">{product.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
