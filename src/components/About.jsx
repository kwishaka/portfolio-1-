import { profile, cv } from "../content";

export default function About() {
  return (
    <section id="about" className="section about">
      <p className="section-eyebrow">About me</p>
      <h2 className="section-title">Who Am I</h2>
      <p className="about-text">{profile.intro}</p>
      <a className="cv-link" href={cv.url} target="_blank" rel="noreferrer">
  {cv.label}
      </a>
    </section>
  );
}