import { profile } from "../content";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h3 className="section-heading"> Contact:0793329512</h3>
      <p className="contact-line">
        Reach out about internships, roles, or collaboration —{" "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      <ul className="contact-list">
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub: https://github.com/kwishaka
          </a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn: www.linkedin.com/in/sandrine-ukwishaka-367120324
          </a>
        </li>

      </ul>
    </section>
  );
}
