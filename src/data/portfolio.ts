export const personalInfo = {
  name: "Sushant Tandukar",
  title: "Cybersecurity Student",
  subtitle: "AWS Cloud & Analytical Skills",
  location: "Kathmandu, Bagmati, Nepal",
  email: "sushanttandukar52@gmail.com",
  linkedin: "https://linkedin.com/in/sushant-tandukar",
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

export const projects = [
  {
    title: "AWS Cloud Infrastructure Lab",
    description:
      "Hands-on cloud project deploying scalable web infrastructure on AWS using EC2, S3, and IAM. Implemented security best practices including least-privilege access and encrypted storage.",
    tags: ["AWS", "EC2", "S3", "IAM"],
    status: "Completed",
    link: "#",
  },
  {
    title: "Advent of Cyber Challenges",
    description:
      "Completed the Advent of Cyber 2025 security challenge series, solving real-world scenarios spanning web exploitation, cryptography, forensics, and network analysis.",
    tags: ["Cybersecurity", "CTF", "Forensics", "Cryptography"],
    status: "Completed",
    link: "#",
  },
  {
    title: "Robotics Club Digital Presence",
    description:
      "Designed and managed the social media strategy for V.S. Niketan Robotics Club — creating engaging content, growing student participation, and documenting club events across platforms.",
    tags: ["Social Media", "Content Strategy", "Robotics", "Leadership"],
    status: "Completed",
    link: "#",
  },
  {
    title: "Security Fundamentals Toolkit",
    description:
      "A collection of scripts and utilities for network scanning, log analysis, and vulnerability assessment — built while studying cybersecurity fundamentals at university.",
    tags: ["Python", "Security", "Automation", "Networking"],
    status: "In Progress",
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
  "Dean's List — May 2025 Semester",
  "Dean's List — September 2024 Semester",
  "Social Media Manager Appreciation — Robotics Club",
  "Nepal Scouts: Progressive Advancement (BP Peak — Kanchanjunga)",
  "Participant, Future Forward — Putting Mindfulness into Action Workshop",
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
