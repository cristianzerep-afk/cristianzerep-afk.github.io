/*
 * Editable portfolio facts. Keep unknown or unapproved personal details out of
 * public sections until verified. Project technologies below describe explored
 * tools where exact project implementation has not yet been confirmed.
 */
window.portfolioData = Object.freeze({
  identity: {
    professionalTitle: "Aspiring Full-Stack Developer",
    location: "Bohol, Philippines",
    expectedGraduation: "2027",
    github: "https://github.com/cristianzerep-afk",
    linkedin: "",
    email: "",
    resumePath: ""
  },
  education: {
    university: "Bohol Island State University – Calape Campus",
    degree: "Bachelor of Science in Computer Science"
  },
  internship: {
    company: "Bukolabs Software Development and Services",
    location: "Bohol, Philippines",
    dates: "",
    descriptiveRole: "Full-Stack Developer Intern & Project Team Lead",
    companyOwnedProject: true
  },
  projects: [
    { name: "Integrated POS & Inventory Management System", status: "Completed", ownership: "Company-owned internship project", technologiesConfirmed: false, repository: "", demo: "" },
    { name: "VaccSync", team: "Two-person development team", technologiesExplored: ["Flutter", "NestJS", "Node.js", "PostgreSQL", "REST APIs", "Git", "GitHub"], technologiesConfirmed: false, repository: "", demo: "" },
    { name: "ThreadLab", subject: "Parallel and Distributed Computing", technologiesConfirmed: false, repository: "", demo: "" },
    { name: "Developer Portfolio", technologies: ["HTML", "CSS", "JavaScript"] }
  ]
});
