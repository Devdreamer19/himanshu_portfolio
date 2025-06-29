import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  dbms,
  dsa,
  figma,
  ml,
  oops,
  os,
  python,
  sql,
  tailwind,
  javascript,
  linix,
  githb,
  Goldman_Sachs,
  genai,
  jpmc,
  Cisco,
  cartoonise,
  house,
  movie,
  port,
  textspeech,
  traffic,
  iiit_h,
  mih,
  gsoc,
  smismr,
  letscode,
  Turing_Cup_Finalist,
  postmanapi_ai,
  app_dev_intern_Bangalore,
  strtupedia_24,
  vnrvjiet_logo,
  reactnative_dev_Bangalore,
  gamma_club,
  algo_u,
  sql_basic_certificate_hackerrank,
  sql_intermediate_certificate_hackerrank,
  sql_advanced_certificate_hackerrank,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Machine Learning",
    icon: ml,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Data Structures & Algorithms",
    icon: dsa,
  },
  {
    name: "Database Management Systems",
    icon: dbms,
  },
  {
    name: "Object-Oriented Programming",
    icon: oops,
  },
  {
    name: "Operating Systems",
    icon: os,
  },
  {
    name: "Github",
    icon: githb,
  },
  {
    name: "Linux",
    icon: linix,
  },
];

const experiences = [
  {
    title: "Software Development Extern",
    company_name: "AlgoUniversity (backed by Y-Combinator)",
    icon: algo_u,
    iconBg: "#383E56",
    date: "Mar 2025 – Present",
    points: [
      "Led design and development of a scalable Online Judge using the MERN stack, containerized with Docker and deployed on AWS EC2.",
      "Built secure code submission and real-time execution engine, ensuring sandboxed, fault-tolerant code evaluation.",
      "Engineered backend APIs with Node.js & Express, integrated JWT auth, and handled concurrency at scale.",
      "Enhanced reliability via monitoring, autoscaling, and real-time fault-tolerant workflows.",
      "Mentored by senior engineers from Google London, Apple, Bytedance, and Alphagrep Singapore, gaining system design insights.",
    ],
  },
  {
    title: "AI Developer Intern",
    company_name: "IIIT Hyderabad,Viswam AI ",
    icon: iiit_h,
    iconBg: "#383E56",
    date: "May 2025 - Aug 2025",
    points: [
      "Developed an automated system to extract bank cheque data from scanned PDFs using advanced OCR techniques, improving data extraction accuracy and efficiency.",
      "Used Python, Pytesseract, and OpenCV for image preprocessing and text recognition, and integrated it with a user-friendly front-end built with HTML/CSS and JavaScript.",
      "Streamlined the cheque processing workflow, significantly reducing manual data entry and speeding up document digitization for banking operations.",
    ],
  },
  {
    title: "Microsoft Innovation Hub Lead",
    company_name: "Lead - VnrVjiet (Technical Student Chapter)",
    icon: mih, // You can add a custom icon if needed
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Present",
    points: [
      "Lead the Microsoft Innovation Hub, the premier technical chapter at VNRVJIET, driving Microsoft-focused innovation and learning.",
      "Organized flagship events including DECODE: Your Guide to Google Summer of Code (GSoC) featuring GSoC'24 contributors, empowering students to explore open-source contributions and global opportunities.",
      "Handled end-to-end event management: scheduling, coordination, promotions, on-ground monitoring, and real-time execution.",
      "Facilitated hands-on workshops, hackathons, and collaborative peer-learning sessions to foster a thriving, tech-driven community.",
    ],
  },
  {
    title: "GSOC Event Coordinator – DECODE: GSoC Awareness Session",
    company_name: "Microsoft Innovation Hub – VNRVJIET",
    icon: gsoc,
    iconBg: "#E6DEDD",
    date: "Mar 2025",
    points: [
      "Led the successful execution of DECODE: Your Guide to Google Summer of Code (GSoC), featuring GSoC'24 contributors.",
      "Managed logistics, speaker coordination, promotions, participant onboarding, and real-time monitoring of the event.",
      "Empowered 100+ students to explore open-source development and global programs like GSoC and ML4SCI.",
    ],
  },

  {
    title: "Founder & Chairman – Gamma Research Club",
    company_name: "VNRVJIET",
    icon: gamma_club,
    iconBg: "#E6DEDD",
    date: "Oct 2024 – Present",
    points: [
      "Founded the Gamma Club – the official Research Club of VNRVJIET, fostering innovation, research-driven thinking, and startup incubation among students.",
      "Promoted from Vice Chairman to Chairman, leading a cross-functional executive team with roles including Tech Head, Creative Head, Documentation Head, PR Head, and more.",
      "Organized research seminars, interdisciplinary hackathons, idea competitions, and startup support sessions.",
      "Facilitated research internships with professors from NITs, IITs, and industry, enabling students to publish papers and file patents.",
      "Promoted a collaborative, cross-domain research culture connecting aspiring researchers with academia and industry.",
    ],
  },
  {
    title: "Convergence Hackathon Coordinator & Mentor",
    company_name: "VNRVJIET's - National Level Annual Technical Symposium",
    icon: vnrvjiet_logo,
    iconBg: "#E6DEDD",
    date: "Feb 2025",
    points: [
      "Coordinated VNRVJIET’s flagship 24-hour Convergence Hackathon, leading end-to-end planning, problem setting, and execution.",
      "Served as a mentor for all participating teams during the hackathon, providing technical guidance and real-time problem-solving support.",
      "Part of the core jury panel for solution evaluations and final project assessments.",
    ],
  },
  {
    title: "React Native Intern",
    company_name:
      "Sri Madhusudan Sai Institute of Medical Sciences and Research",
    icon: smismr,
    iconBg: "#E6DEDD",
    date: "May 2024 – Jun 2024",
    points: [
      "Selected for a highly selective, mission-driven internship contributing to a global humanitarian initiative providing free healthcare, nutrition, and education in 60+ countries.",
      "Built a secure Visitor Management App using React Native, Zoho APIs, and Firebase to streamline guest access for the ashram community.",
      "Built QR/OTP multi-level guest approvals & auto-invites; cut check-in time by 50% & guest delays by 40%.",
      "Collaborated with industry leaders including the ex-HP Director of Operations to align workflows; contributed to the mission’s vision of 'One World, One Family'.",
    ],
  },
];

const certificates = [
  {
    name: "Letscode Excellence Certificate round 2",
    image: letscode,
    link: "https://drive.google.com/file/d/1glAZdxP2HIiDSNkvh7P1MSIUOj2WNyyS/view?usp=sharing",
  },
  {
    name: "Google Gen AI Study Jams - GDGC VNRVJIET",
    image: genai,
    link: "https://drive.google.com/file/d/1gEmSJFnelZFky7rM-ldxnvme27_Ofnb6/view?usp=sharing",
  },
  {
    name: "Turing Cup - Finalist",
    image: Turing_Cup_Finalist,
    link: "https://drive.google.com/file/d/1g3yetFM9Ltp8FCMXUrH-deWMSv0udOWi/view?usp=sharing",
  },
  {
    name: "Cisco - Software Engineering Job Simulation",
    image: Cisco,
    link: "https://drive.google.com/file/d/1bgyczjYyvDu7ZxxNUZqoH05T11vD4Ylo/view?usp=sharing",
  },
  {
    name: "Goldman Sachs - Software Engineering Job Simulation",
    image: Goldman_Sachs,
    link: "https://drive.google.com/file/d/1cNiPXfB_AYK-CB9vTa6nM-2pqhng7GHL/view?usp=sharing",
  },
  {
    name: "JP Morgan Chase - Software Engineering Job Simulation",
    image: jpmc,
    link: "https://drive.google.com/file/d/1cNiPXfB_AYK-CB9vTa6nM-2pqhng7GHL/view?usp=sharing",
  },
  {
    name: "Postman API - Project Based Learning Certified",
    image: postmanapi_ai,
    link: "https://drive.google.com/file/d/1zhj5ZN0VC2qdOWZwel2VFOyLuw1TCOmt/view?usp=sharing",
  },
  {
    name: "App Development Internship- Muddenahalli, Bangalore",
    image: reactnative_dev_Bangalore,
    link: "https://drive.google.com/file/d/1441RJCIQEUWaaP3Wl9Az4KtGVy0IssHV/view?usp=sharing",
  },
  {
    name: "HackerRank SQL (Basic) Certificate4",
    image: sql_basic_certificate_hackerrank,
    link: "https://drive.google.com/file/d/1zxxrG5P_MDPjiTINMOxFCY0Chn1q2XUi/view?usp=sharing",
  },
  {
    name: "HackerRank SQL (Intermediate) Certificate",
    image: sql_intermediate_certificate_hackerrank,
    link: "https://drive.google.com/file/d/1zxxrG5P_MDPjiTINMOxFCY0Chn1q2XUi/view?usp=sharing",
  },
  {
    name: "HackerRank SQL (Advanced) Certificate",
    image: sql_advanced_certificate_hackerrank,
    link: "https://drive.google.com/file/d/1zxxrG5P_MDPjiTINMOxFCY0Chn1q2XUi/view?usp=sharing",
  },
  {
    name: "National Level Startup Summit Final Round Selectee- Startupedia'24",
    image: strtupedia_24,
    link: "https://drive.google.com/file/d/1zxxrG5P_MDPjiTINMOxFCY0Chn1q2XUi/view?usp=sharing",
  },
];

const projects = [
  {
    name: "Portfolio",
    description: "You are watching it right now 😉.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "Vite", color: "pink-text-gradient" },
    ],
    image: port,
    source_code_link: "https://github.com/HimanshuB-19/Portfolio.git",
  },
  {
    name: "Smart Traffic Management System",
    description:
      "Built an intelligent traffic signal control system in Python using Pygame that simulates real-time traffic and dynamically adjusts signal timings.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pygame", color: "green-text-gradient" },
      { name: "OOP", color: "pink-text-gradient" },
    ],
    image: traffic, // Replace with traffic project image
    source_code_link:
      "https://github.com/Devdreamer19/Smart_Traffic_management",
  },
  {
    name: "Analysis-on-Movie-Reviews",
    description:
      "Sentiment analysis model on IMDB reviews using classification techniques with proper preprocessing and evaluation.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "Classification", color: "pink-text-gradient" },
    ],
    image: movie, // Replace with a relevant image
    source_code_link:
      "https://github.com/Devdreamer19/Analysis-on-Movie-Reviews.git",
  },
  {
    name: "Cartooniser",
    description:
      "Used OpenCV to cartoonize images via bilateral filtering and adaptive thresholding for smooth, edge-highlighted effects.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "Image Processing", color: "pink-text-gradient" },
    ],
    image: cartoonise, // Replace with cartooniser image
    source_code_link: "https://github.com/Devdreamer19/Cartooniser.git",
  },
  {
    name: "House-Price-Prediction",
    description:
      "Built a price prediction model on Boston Housing dataset using linear regression with visualization and evaluation.",
    tags: [
      { name: "Linear Regression", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "NumPy", color: "pink-text-gradient" },
    ],
    image: house, // Replace with price prediction image
    source_code_link:
      "https://github.com/Devdreamer19/House-Price-Prediction.git",
  },
  {
    name: "Text-To-Speech",
    description:
      "Text-to-Speech app using pyttsx3 with customizable voice, speed, and MP3 export via simple UI.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Tkinter", color: "green-text-gradient" },
      { name: "pyttsx3", color: "pink-text-gradient" },
    ],
    image: textspeech, // Replace with TTS image
    source_code_link: "https://github.com/Devdreamer19/Text-To-Speech.git",
  },
];

export { services, technologies, experiences, certificates, projects };
