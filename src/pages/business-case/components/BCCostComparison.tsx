import { comparison } from '../../../data/content'
import { ScrollReveal } from '../../../shared/components/ScrollReveal'

export function BCCostComparison() {
  return (
    <section className="bc-cost" aria-label="Cost comparison">
      <div className="bc-container">
        <ScrollReveal>
          <div className="bc-cost__header">
            <p className="bc-cost__label">Cost Breakdown</p>
            <h2 className="bc-cost__title">{comparison.headline}</h2>
            <p className="bc-cost__subtitle">{comparison.subheadline}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bc-cost__table-wrap">
            <table className="bc-cost__table">
              <caption>
                Detailed comparison of Hyper, Enterprise tools, and DIY solutions
                across key capabilities
              </caption>
              <thead>
                <tr>
                  <th scope="col">Capability</th>
                  <th scope="col" className="bc-cost__hyper-col">
                    Hyper
                  </th>
                  <th scope="col">Enterprise</th>
                  <th scope="col">DIY</th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.capability}>
                    <td>{row.capability}</td>
                    <td className="bc-cost__hyper-col">{row.hyper}</td>
                    <td className="bc-cost__burgundy-col">{row.enterprise}</td>
                    <td className="bc-cost__gray-col">{row.diy}</td>
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
