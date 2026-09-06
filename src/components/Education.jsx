import { education } from "../content";

export default function Education() {
  return (
    <section id="education" className="section">
      <h3 className="section-heading">Education</h3>
      <div className="timeline">
        {education.map((e) => (
          <article className="timeline-item" key={e.school}>
            <div className="timeline-heading">
              <h4 className="timeline-role">{e.program}</h4>
              <p className="timeline-period">{e.period}</p>
            </div>
            <p className="timeline-org">{e.school}</p>
            {e.detail && <p className="timeline-detail">{e.detail}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
