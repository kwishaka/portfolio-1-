import { projects } from "../content";

export default function Projects() {
  return (
    <div className="projects">
      {projects.map((p) => (
        <article className="project" key={p.name}>
          <h4 className="project-name">{p.name}</h4>
          <p className="project-description">{p.description}</p>
          <ul className="stack-list stack-list--compact">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
