import { comparison } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function AUComparisonMatrix() {
  return (
    <section className="au-comparison" aria-label="Comparison matrix">
      <div className="au-container">
        <ScrollReveal>
          <div className="au-comparison__header">
            <p className="au-comparison__label">
              Section {comparison.sectionNumber}
            </p>
            <h2 className="au-comparison__title">{comparison.headline}</h2>
            <p className="au-comparison__subtitle">{comparison.subheadline}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="au-comparison__table-wrap">
            <table className="au-comparison__table">
              <caption>
                Comparison of Hyper vs Enterprise tools vs DIY approach
              </caption>
              <thead>
                <tr>
                  <th scope="col">Capability</th>
                  <th scope="col" className="au-comparison__hyper-col">
                    Hyper
                  </th>
                  <th scope="col">Enterprise</th>
                  <th scope="col">DIY</th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.capability}</td>
                    <td className="au-comparison__hyper-col">{row.hyper}</td>
                    <td className="au-comparison__other-col">
                      {row.enterprise}
                    </td>
                    <td className="au-comparison__other-col">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
