import { profile, nav, cv } from "../content";

export default function Sidebar() {
  return (
    
    <header className="sidebar">
      <div className="sidebar-top">
  <img className="sidebar-photo" src={profile.photo} alt={profile.name} />
  <h1 className="sidebar-name">{profile.name}</h1>
  <p className="sidebar-role">{profile.role}</p>
</div>
      <nav className="sidebar-nav" aria-label="Section navigation">
        <ul>
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>
                <span className="nav-number">{item.number}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>


      <div className="sidebar-bottom">
        <p className="status-line">
          <span className="status-dot" aria-hidden="true" />
          {profile.status}
        </p>
        <p className="sidebar-location">{profile.location}</p>
      </div>
    </header>
  );
}
