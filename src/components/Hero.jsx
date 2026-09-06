import { profile } from "../content";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="hero-text">
        <p className="hero-eyebrow">Hello, my name is</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-tagline">
          <span className="hero-dash" aria-hidden="true" />
          {profile.tagline}
        </p>
        <a className="hero-cta" href="#about">
          Know more
        </a>
      </div>
      <div className="hero-photo-wrap">
        <img className="hero-photo" src={profile.photo} alt={profile.name} />
      </div>
    </section>
  );
}