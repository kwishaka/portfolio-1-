import { experience } from "../content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h3 className="section-heading">Experience</h3>
      <div className="timeline">
        {experience.map((e) => (
          <article className="timeline-item" key={e.role + e.org}>
            <div className="timeline-heading">
              <h4 className="timeline-role">{e.role}</h4>
              <p className="timeline-period">{e.period}</p>
            </div>
            <p className="timeline-org">{e.org}</p>
            <p className="timeline-detail">{e.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
