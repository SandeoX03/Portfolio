export const personalInfo = {
  name: "Sushant Tandukar",
  title: "Cybersecurity Student",
  subtitle: "AWS Cloud & Analytical Skills",
  location: "Kathmandu, Bagmati, Nepal",
  email: "sushanttandukar52@gmail.com",
  linkedin: "https://www.linkedin.com/in/sushant-tandukar-b415513a2/",
  github: "https://github.com/SandeoX03",
  tagline:
    "Computer Science student focused on cybersecurity, AWS cloud, and how systems actually hold up.",
};

export const heroContent = {
  greeting: "Hi, I'm",
  headline: "Sushant Tandukar.",
  description:
    "Computer Science student at Taylor's University. I work on cybersecurity, AWS cloud architecture, and practical problem-solving — from infrastructure labs to security challenges.",
  cta: "View my work",
};

export const aboutContent = {
  intro:
    "I'm a cybersecurity-focused Computer Science student at Taylor's University. I care about how systems are built, how they fail, and how to make them harder to break.",
  story: [
    "I grew up in Kathmandu, where curiosity about how systems work led me into robotics and technology clubs in high school. As Social Media Manager for the V.S. Niketan Robotics Club, I learned to explain technical work clearly — something I still rely on when documenting security findings and cloud setups.",
    "At Taylor's, I've stayed close to the work: Dean's List in the September 2024 and May 2025 semesters, plus hands-on certifications in AWS, AI literacy, and enterprise design thinking.",
    "What I enjoy most is the problem itself — Advent of Cyber challenges, AWS infrastructure, student initiatives. I try to work analytically, methodically, and with security in mind from the start.",
  ],
  highlights: [
    { label: "Dean's List", value: "2× Semesters" },
    { label: "Certifications", value: "5+" },
    { label: "Focus Area", value: "Cybersecurity" },
    { label: "Cloud Platform", value: "AWS" },
  ],
};

export const skills = [
  {
    category: "Security",
    items: ["Cybersecurity Fundamentals", "Threat Analysis", "Network Security", "Advent of Cyber"],
    icon: "shield",
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS Services", "EC2 & S3", "IAM Policies", "Cloud Architecture"],
    icon: "cloud",
  },
  {
    category: "Development",
    items: ["Python", "JavaScript", "HTML/CSS", "Git & GitHub"],
    icon: "code",
  },
  {
    category: "Soft Skills",
    items: ["Analytical Thinking", "Leadership", "Communication", "Problem Solving"],
    icon: "brain",
  },
];

export interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  status: string;
  link: string;
  isCapstone?: boolean;
  teamScope?: string[];
  individualContributions?: string[];
}

export const capstoneProject: ProjectItem = {
  title: "Retinal Diseases Detection Project",
  subtitle: "AI-Powered Medical Diagnostic Web Platform (Capstone Group Project)",
  description:
    "An AI-based diagnostic platform for early retinal disease detection. Developed as a collaborative capstone group project, with my focus dedicated to application security, user authentication, role-based access control, secure file uploads, audit logging, and testing.",
  tags: [
    "AI/ML",
    "Web Development",
    "Authentication",
    "Authorization",
    "Security",
    "Input Validation",
    "File Upload Security",
    "Audit Logging",
    "Testing",
  ],
  status: "Completed",
  link: "#",
  isCapstone: true,
  teamScope: ["AI/ML Retinal Classification", "Diagnostic Workflow UI", "Web Platform Architecture"],
  individualContributions: [
    "Authentication & Authorization (RBAC)",
    "Input Validation & File Upload Security",
    "Audit Logging & Security Controls",
    "Unit & Integration Testing",
  ],
};

export const projects: ProjectItem[] = [
  capstoneProject,
  {
    title: "MedEase",
    description:
      "A secure e-commerce platform designed to modernize Nepal's pharmaceutical sector, featuring medicine discovery, prescription management, and secure digital services.",
    tags: ["MERN", "E-Commerce", "Healthcare", "Cybersecurity"],
    status: "Completed",
    link: "#",
  },
  {
    title: "NepaliVista",
    description:
      "A feature-rich JavaFX desktop application for managing Nepal's tourism ecosystem, including tourists, guides, attractions, bookings, and tourism-related operations.",
    tags: ["Java", "JavaFX", "Desktop Application", "Tourism"],
    status: "Completed",
    link: "https://github.com/SandeoX03/NepalVista",
  },
  {
    title: "Smart Grid Energy Distribution Optimization",
    description:
      "A machine learning and evolutionary computing project focused on optimizing energy distribution to improve efficiency and support smarter grid management.",
    tags: ["Machine Learning", "Evolutionary Computing", "Optimization", "Energy"],
    status: "Completed",
    link: "#",
  },
  {
    title: "Wildfire Prediction and Risk Modelling",
    description:
      "A machine learning and parallel computing project focused on analyzing historical wildfire data to identify patterns and support wildfire prediction and risk assessment.",
    tags: ["Machine Learning", "Parallel Computing", "Risk Modelling", "Data Analysis"],
    status: "Completed",
    link: "#",
  },
];

export const experience = [
  {
    role: "Social Media Manager",
    company: "V.S. Niketan Higher Secondary School — Robotics Club",
    period: "2022 – 2023",
    duration: "1 year",
    points: [
      "Served as Social Media Manager during the 2079 academic year, overseeing club communications and promoting robotics activities.",
      "Actively participated in club meetings and events to gather content for social media and promotional materials.",
      "Managed the club's digital presence and engagement across social platforms to support its initiatives.",
      "Awarded a Certificate of Appreciation for sincere dedication and active participation.",
    ],
  },
];

export const education = [
  {
    institution: "Taylor's University",
    degree: "Bachelor's Degree, Computer Science",
    period: "September 2023 – September 2027",
    details: "Cybersecurity-focused curriculum with Dean's List honors in September 2024 and May 2025 semesters.",
  },
];

export const certificates = [
  {
    name: "Enterprise Design Thinking Practitioner",
    issuer: "IBM / Design Thinking",
    year: "2025",
  },
  {
    name: "AI Literacy for All",
    issuer: "DEC × Taylor's University",
    year: "2025",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    year: "2025",
  },
  {
    name: "Professional Networking for Career Growth",
    issuer: "Professional Development",
    year: "2025",
  },
  {
    name: "Advent of Cyber Certificate",
    issuer: "TryHackMe",
    year: "2025",
    id: "aoc-2025",
  },
];

export const honors = [
  "Google Skills Arcade Dialogue Design Badge — Google (Apr 2026)",
  "Participant: Love at First Breach CTF Challenge — TryHackMe (Feb 2026)",
  "Dean's List — May 2025 Semester",
  "Dean's List — September 2024 Semester",
  "Social Media Manager Appreciation — Robotics Club",
  "Nepal Scouts: Progressive Advancement (BP Peak — Kanchanjunga)",
  "Participant, Future Forward — Putting Mindfulness into Action Workshop",
];

export const volunteering = [
  {
    role: "Volunteer",
    organization: "Nepal Scouts (Kathmandu District Headquarters)",
    category: "Arts and Culture",
    events: [
      {
        title: "Haritalika Teej Service Camp 2019",
        description: "Awarded a Certificate of Appreciation by Nepal Scouts, Kathmandu District Headquarters for active volunteer service during the festival camp.",
      },
      {
        title: "Shravani Monday Service Camp",
        description: "Received a Certificate of Appreciation for active participation and volunteer service during the Shravani Monday Service Camp.",
      },
    ],
  },
];

export const navLinks = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const sectionNavMap: Record<string, string> = {
  home: "home",
  projects: "projects",
  about: "about",
  skills: "skills",
  experience: "projects",
  education: "about",
  certificates: "about",
  contact: "contact",
};
