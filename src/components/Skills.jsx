import { skillGroups } from "../content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h3 className="section-heading">Skills</h3>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.label}>
            <p className="skill-group-label">{group.label}</p>
            <p className="skill-group-items">{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
