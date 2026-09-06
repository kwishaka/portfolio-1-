import { profile, nav } from "../content";

export default function TopNav() {
  return (
    <header className="topnav">
      <a href="#top" className="brand">
        {profile.name}
        <span className="brand-dot">.</span>
      </a>
      <nav aria-label="Section navigation">
        <ul className="topnav-list">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}