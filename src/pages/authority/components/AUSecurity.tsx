import { security } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'
import {
  ShieldCheck,
  Globe,
  HeartPulse,
  Lock,
  KeyRound,
  MapPin,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Map security feature names to appropriate icons.
 */
const ICON_MAP: Record<string, LucideIcon> = {
  'SOC 2 Type II': ShieldCheck,
  'GDPR Compliant': Globe,
  'HIPAA Ready': HeartPulse,
  Encryption: Lock,
  'Access Controls': KeyRound,
  'Data Residency': MapPin,
}

export function AUSecurity() {
  return (
    <section className="au-security" aria-label="Security features">
      <div className="au-container">
        <ScrollReveal>
          <div className="au-security__header">
            <p className="au-security__label">
              Section {security.sectionNumber}
            </p>
            <h2 className="au-security__title">{security.headline}</h2>
            <p className="au-security__subtitle">{security.subheadline}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="au-security__grid">
            {security.features.map((feature, i) => {
              const Icon = ICON_MAP[feature.name] || ShieldCheck
              return (
                <div key={i} className="au-security__card">
                  <Icon
                    className="au-security__card-icon"
                    aria-hidden="true"
                  />
                  <h3 className="au-security__card-name">{feature.name}</h3>
                  <p className="au-security__card-desc">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
