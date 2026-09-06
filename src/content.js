// Edit this file to update the site's content — no need to touch the components.

export const profile = {
  name: "Ukwishaka",
   photo: "profile.jpeg",
  role: "Full-stack developer",
  location: "Kigali, Rwanda",
  email: "sandrineukwishaka6@gmail.com",
  phone: "0793329512",
  github: "https://github.com/kwishaka",
  intro:
    "I build full-stack systems end to end — schema to API to interface. Currently finishing a degree in Information Management Systems at AUCA, and spending most of my time in Spring Boot, React, and SQL.",
};


export const cv = {
  url: "Ukwishaka_Resume.pdf",
  label: "Download CV",
};

export const education = [
  {
    school: "Adventist University of Central Africa (AUCA)",
    program: "BSc, Information Management Systems",
    period: "2023 – 2027 (final year)",
    detail: "GPA 13.16",
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    org: "Umwarimu SACCO",
    period: "Internship",
    detail:
      "Built the Employee Management System end to end — Spring Boot API, React frontend, and deployment — used by HR to manage job applications.",
  },
];

export const featured = {
  label: "Featured work",
  name: "Employee Management System",
  tagline: "Applicant tracking and HR admin platform, built during an internship at Umwarimu SACCO",
  description:
    "A full-stack system for managing job applications end to end: applicants submit and track their status, HR admins review documents and update outcomes. I built and shipped both the Spring Boot API and the React frontend, then took it through deployment and hardening.",
  stack: ["Java", "Spring Boot", "React", "Vite", "PostgreSQL", "JWT auth", "Railway"],
  highlights: [
    "Designed the auth flow with JWT tokens and moved review-status writes to the server-side auth context, closing a gap where clients could self-approve applications.",
    "Diagnosed and fixed a persistence bug where uploaded document URLs were never reaching the database, plus a Hibernate enum-mapping error breaking application status updates.",
    "Took the deployment from broken to stable on Railway — rebuilt a missing pom.xml, resolved environment-specific config, and set up dual local/production compatibility.",
    "Generated live API documentation with Fern and wired up CORS so collaborators could test endpoints directly from the docs.",
  ],
  links: [
    { label: "Live app", url: "https://employeemanagementsystem-production-4ff0.up.railway.app" },
    { label: "API docs", url: "https://employee-management-system-api.docs.buildwithfern.com" },
    { label: "Backend repo", url: "https://github.com/kwishaka/employee_management_system" },
    { label: "Frontend repo", url: "https://github.com/kwishaka/employee_management_frontend" },
  ],
};

export const projects = [
  {
    name: "Uber Fares Data Analysis",
    description:
      "Exploratory analysis of Uber fare data to surface pricing and demand patterns, cleaned and modeled in Pandas and visualized as an interactive Power BI dashboard.",
    stack: ["Python", "Pandas", "Power BI"],
    links: [],
  },
  {
    name: "Student Database Management System",
    description:
      "A relational system for managing student records, built to practice schema design and stored-procedure logic across two database engines.",
    stack: ["Oracle", "postgres", "PL/SQL"],
    links: [],
  },
];

export const skillGroups = [
  { label: "Languages", items: ["Java", "JavaScript", "Python", "SQL", "PL/SQL"] },
  { label: "Backend", items: ["Spring Boot", "REST APIs", "JWT auth", "Hibernate"] },
  { label: "Frontend", items: ["React", "Vite"] },
  { label: "Data & tools", items: ["PostgreSQL", "MySQL", "Oracle", "Pandas", "Power BI", "Git", "Railway"] },
];

export const nav = [
  { id: "work", number: "01", label: "Work" },
  { id: "experience", number: "02", label: "Experience" },
  { id: "education", number: "03", label: "Education" },
  { id: "skills", number: "04", label: "Skills" },
  { id: "contact", number: "05", label: "Contact" },
];
