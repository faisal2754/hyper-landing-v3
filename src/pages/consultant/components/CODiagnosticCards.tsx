import { ScrollReveal } from '../../../shared/components/ScrollReveal'

interface DiagnosticQuestion {
  number: string
  question: string
  options: string[]
  selectedIndex: number | null
}

const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    number: 'Question 1',
    question: 'How many data sources does your company use?',
    options: ['1-3 tools', '4-8 tools', '9-15 tools', '15+ tools'],
    selectedIndex: 2,
  },
  {
    number: 'Question 2',
    question: 'How long does it take to generate a monthly report?',
    options: [
      'Minutes — it is automated',
      'A few hours of manual work',
      '1-2 full days',
      'Multiple days across teams',
    ],
    selectedIndex: null, // active card, no selection yet
  },
  {
    number: 'Question 3',
    question: 'Where does your team spend most of their data time?',
    options: [
      'Building analyses and models',
      'Creating dashboards and reports',
      'Cleaning and reconciling data',
      'Finding and accessing data',
    ],
    selectedIndex: null,
  },
  {
    number: 'Question 4',
    question: 'How confident are you in the accuracy of your key reports?',
    options: [
      'Very confident — single source of truth',
      'Mostly confident — occasional discrepancies',
      'Somewhat confident — we double-check manually',
      'Not confident — numbers rarely match',
    ],
    selectedIndex: null,
  },
]

function DiagnosticCard({
  q,
  state,
}: {
  q: DiagnosticQuestion
  state: 'completed' | 'active' | 'upcoming'
}) {
  const cardClass = `co-diagnostic__card${
    state === 'active'
      ? ' co-diagnostic__card--active'
      : state === 'completed'
        ? ' co-diagnostic__card--completed'
        : ''
  }`

  return (
    <div className={cardClass} aria-label={`${q.number}: ${q.question}`}>
      <div className="co-diagnostic__card-number">{q.number}</div>
      <div className="co-diagnostic__card-question">{q.question}</div>
      <div className="co-diagnostic__options" role="radiogroup" aria-label={q.question}>
        {q.options.map((option, i) => {
          const selected = q.selectedIndex === i
          return (
            <div
              key={i}
              className={`co-diagnostic__option${selected ? ' co-diagnostic__option--selected' : ''}`}
              role="radio"
              aria-checked={selected}
            >
              <div className="co-diagnostic__option-radio">
                <div className="co-diagnostic__option-radio-dot" />
              </div>
              <span>{option}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function CODiagnosticCards() {
  return (
    <section
      className="co-diagnostic co-dotgrid"
      aria-label="Data Maturity Diagnostic — static illustration"
    >
      <div className="co-container">
        <ScrollReveal>
          <div className="co-diagnostic__header">
            <p className="co-diagnostic__label">Interactive Assessment</p>
            <h2 className="co-diagnostic__title">Data Maturity Diagnostic</h2>
            <p className="co-diagnostic__subtitle">
              Discover where your organization stands on the data maturity curve
              and get actionable recommendations tailored to your stage.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="co-diagnostic__progress">
            <span className="co-diagnostic__progress-text">
              Question 2 of 5
            </span>
            <div className="co-diagnostic__progress-bar" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
              <div className="co-diagnostic__progress-fill" />
            </div>
          </div>
        </ScrollReveal>

        <div className="co-diagnostic__cards">
          {diagnosticQuestions.map((q, i) => {
            const state: 'completed' | 'active' | 'upcoming' =
              i === 0 ? 'completed' : i === 1 ? 'active' : 'upcoming'
            return (
              <ScrollReveal key={q.number} delay={0.1 + i * 0.08}>
                <DiagnosticCard q={q} state={state} />
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
