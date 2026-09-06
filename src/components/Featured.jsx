import { featured } from "../content";

export default function Featured() {
  return (
    <article className="featured">
      <p className="featured-label">{featured.label}</p>
      <h3 className="featured-name">{featured.name}</h3>
      <p className="featured-tagline">{featured.tagline}</p>
      <p className="featured-description">{featured.description}</p>

      <ul className="stack-list">
        {featured.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <ul className="highlights">
        {featured.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <ul className="featured-links">
        {featured.links.map((link) => (
          <li key={link.url}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

