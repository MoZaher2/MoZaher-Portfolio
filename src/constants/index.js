import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  zustand,
  reactquery,
  shadcn,
  framer,
  express,
  mysql,
  postgresql,
  nextauth,
  jwt,
  jest,
  rtl,
  eslint,
  prettier,
  docker,
  githubactions,
  vercel,
  github,
  postman,
  npm,
  fci,
  iti,
  depi,
  clock,
  weather,
  xo,
  english_platform,
  todo,
  KasperTemplete,
  studio,
  varnda,
  gymgenius,
  crypto_radar,
  ai_resume_analyzer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Overview",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    describe:
      "Creating fast, responsive, and modern web interfaces using React.js, Next.js, JavaScript, HTML, and CSS.",
    icon: web,
  },
  {
    title: "Full Stack Development",
    describe:
      "Building scalable full-stack web applications using the MERN stack with clean architecture and REST APIs.",
    icon: backend,
  },
  {
    title: "UI/UX Implementation",
    describe:
      "Transforming Figma and modern UI designs into interactive, user-friendly, and fully responsive websites.",
    icon: mobile,
  },
  {
    title: "API & Backend Integration",
    describe:
      "Integrating frontend applications with REST APIs, authentication systems, databases, and third-party services.",
    icon: creator,
  },
];

const techSections = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: html },
      { name: "CSS3", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "React.js", icon: reactjs },
      { name: "Next.js", icon: nextjs },
    ],
  },
  {
    title: "UI & Styling",
    items: [
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "shadcn/ui",
        icon: shadcn,
      },
      {
        name: "Framer Motion",
        icon: framer,
      },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: express },
      { name: "MongoDB", icon: mongodb },
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
    ],
  },
  {
    title: "State Management",
    items: [
      { name: "Redux Toolkit", icon: redux },
      { name: "Zustand", icon: zustand },
      { name: "TanStack Query", icon: reactquery },
    ],
  },
  {
    title: "DevOps & Deployment",
    items: [
      { name: "Docker", icon: docker },
      { name: "GitHub Actions", icon: githubactions },
      { name: "Vercel", icon: vercel },
      { name: "GitHub", icon: github },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "Jest", icon: jest },
      { name: "React Testing", icon: rtl },
      { name: "ESLint", icon: eslint },
      { name: "Prettier", icon: prettier },
    ],
  },
  {
    title: "Auth & Security",
    items: [
      { name: "NextAuth.js", icon: nextauth },
      { name: "JWT", icon: jwt },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Postman", icon: postman },
      { name: "Figma", icon: figma },
      { name: "npm", icon: npm },
      { name: "Git", icon: git },
    ],
  },
];

const experiences = [
  {
    title: "Bachelor of Computer Science",
    company_name: "Minya University",
    icon: fci,
    date: "Oct 2020 – Jul 2024",
    points: [
      "Graduated with a GPA of 3.19 (Very Good).",
      "Studied core computer science subjects including Data Structures, Algorithms, Databases, and Software Engineering.",
      "Built multiple academic projects using modern web technologies.",
    ],
  },
  {
    title: "React Web Developer",
    company_name: "DEPI",
    icon: depi,
    date: "May 2024 – Nov 2024",
    points: [
      "Learned advanced React.js concepts and modern frontend development practices.",
      "Developed responsive web applications using React and JavaScript.",
      "Worked with APIs and state management techniques.",
    ],
  },
  {
    title: "MEARN Stack",
    company_name: "ITI Minya",
    icon: iti,
    date: "Jul 2023 – Sep 2023",
    points: [
      "Learned full-stack development using MongoDB, Express.js, React, and Node.js.",
      "Built full-stack web applications with REST APIs.",
      "Worked on authentication, database integration, and deployment basics.",
    ],
  },
  {
    title: "Web Fundamentals",
    company_name: "ITI Minya",
    icon: iti,
    date: "Jul 2021 – Aug 2021",
    points: [
      "Learned the fundamentals of web development.",
      "Studied HTML, CSS, and JavaScript basics.",
      "Built static websites and practiced responsive layouts.",
    ],
  },
];

const projects = [
  {
    name: "AI Resume Analyzer",
    description:
      "AI-powered Resume Analyzer & Resume Improver built with Next.js and Google Gemini AI. Analyze resumes, improve CVs, generate interview questions, and export professional PDFs.",
    tags: [
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini-API",
        color: "orange-text-gradient",
      },
      {
        name: "Shadcn",
        color: "text-gray-200"
      },
      {
        name: "Tailwind-CSS",
        color: "green-text-gradient"
      },
      {
        name: "Framer-Motion",
        color: "blue-text-gradient"
      }
    ],
    image: ai_resume_analyzer,
    source_code_link: "https://github.com/MoZaher2/ai-resume-analyzer",
    live_demo_link: "https://ai-resume-analyzer-beryl-theta.vercel.app/",
  },
  {
    name: "Crypto Radar",
    description:
      "A responsive crypto tracking app built with React, Vite, and TypeScript. It fetches real-time data from the CoinGecko API with pagination, search functionality, and a clean user interface for smooth browsing.",
    tags: [
      {
        name: "react-vite",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name:"Native-CSS",
        color:"text-gray-200"
      }
    ],
    image: crypto_radar,
    source_code_link: "https://github.com/MoZaher2/crypto-coins",
    live_demo_link: "https://crypto-coins-three.vercel.app/",
  },
  {
    name: "Varnda Real Estate",
    description:
      "The project was created using the react and bootstrap frameworks and contains pages to publish your property, browse other real estate ads, articles about real estate, and a dashboard to manage the entire site.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "text-yellow-200",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
    ],
    image: varnda,
    source_code_link: "https://github.com/MoZaher2/Varnda-Website",
    live_demo_link: "https://varnda.net",
  },
  {
    name: "GymGenius",
    description:
      "A comprehensive gym management website featuring a dynamic home page, a registration page for training plans, and a robust admin dashboard to monitor subscribers' progress and manage their training schedules. The platform is enhanced with a chatbot for instant assistance.",
    tags: [
      {
        name: "Next js",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "text-yellow-200",
      },
    ],
    image: gymgenius,
    source_code_link: "https://github.com/MoZaher2/GymGenius",
    live_demo_link: "https://gym-genius-fci.vercel.app/",
  },
  {
    name: "Teacher portfolio",
    description:
      "This online profile is designed with a responsive user interface, utilizing Framer Motion and tailwind for smooth animations and an enhanced user experience.",
    tags: [
      {
        name: "react-vite",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: english_platform,
    source_code_link: "https://github.com/MoZaher2/english-platform",
    live_demo_link: "https://english-platform-zeta.vercel.app/",
  },
  {
    name: "ToDo",
    description:
      "Todo built with Bootstrap and Material UI. It enables users to manage daily tasks with features such as adding, editing, and deleting tasks. The app utilizes LocalStorage to ensure data persistence.",
    tags: [
      {
        name: "react-vite",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "MUI-material",
        color: "text-yellow-200",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/MoZaher2/ToDo-with-React",
    live_demo_link: "https://todo-mz.vercel.app/",
  },
  {
    name: "Weather",
    description:
      "This web app provides real-time weather for your location or a selected city, showing temperature, conditions, icons, and min/max values. It supports language switching and has a responsive, user-friendly design.",
    tags: [
      {
        name: "react-vite",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "i18next",
        color: "text-yellow-200",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/MoZaher2/Weather",
    live_demo_link: "https://weather-pi-eight-44.vercel.app/",
  },
  {
    name: "XO-Game",
    description:
      "This web-based XO (Tic-Tac-Toe) game allows two players to compete in a simple, interactive interface. It uses localStorage to save game progress and lets players restart the game at any time.",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "text-yellow-200",
      },
    ],
    image: xo,
    source_code_link: "https://github.com/MoZaher2/XO-Game",
    live_demo_link: "https://mozaher2.github.io/XO-Game/",
  },
  {
    name: "ProfileTemplete",
    description:
      "Mo Zaher Studio is a modern and clean one‑page website template showcasing design and digital services, with sections for services, portfolio, about, and contact.",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: studio,
    source_code_link: "https://github.com/MoZaher2/mozaher-studio-t1",
    live_demo_link: "https://mozaher2.github.io/mozaher-studio-t1",
  },
  {
    name: "Kasper Templete",
    description:
      "Kasper Template is a clean, responsive one-page HTML/CSS template for portfolios or small businesses, featuring sections for services, gallery, testimonials, and contact",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: KasperTemplete,
    source_code_link: "https://github.com/MoZaher2/KasperTemplete",
    live_demo_link: "https://mozaher2.github.io/KasperTemplete",
  },
  {
    name: "Clock",
    description:
      "Web-based clock showing real-time time, serving as a visual display and a practical example of DOM manipulation and client-side updates.",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "text-yellow-200",
      },
    ],
    image: clock,
    source_code_link: "https://github.com/MoZaher2/Clock",
    live_demo_link: "https://mozaher2.github.io/Clock/",
  },
];

export { services, experiences, projects,techSections };
