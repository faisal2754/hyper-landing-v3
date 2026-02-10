import { useState, useRef, useEffect, useCallback } from 'react'
import { faq } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'
import { Plus } from 'lucide-react'

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  const panelId = `au-accordion-panel-${index}`
  const triggerId = `au-accordion-trigger-${index}`

  return (
    <div className="au-accordion__item">
      <button
        className="au-accordion__trigger"
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{item.question}</span>
        <Plus
          className={`au-accordion__icon${isOpen ? ' au-accordion__icon--open' : ''}`}
          size={20}
          aria-hidden="true"
        />
      </button>
      <div
        className={`au-accordion__content${isOpen ? ' au-accordion__content--open' : ''}`}
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        ref={contentRef}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <div className="au-accordion__answer">{item.answer}</div>
      </div>
    </div>
  )
}

export function AUAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  return (
    <section className="au-accordion-section" aria-label="Frequently asked questions">
      <div className="au-container">
        <ScrollReveal>
          <div className="au-accordion-section__header">
            <p className="au-accordion-section__label">FAQ</p>
            <h2 className="au-accordion-section__title">{faq.headline}</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="au-accordion">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
