export const portfolioData = {
  // Personal Info
  name: "Hariom Lapshetwar",
  tagline: "Full Stack Developer & AI Architect",
  headline: "Hariom Lapshetwar",
  subheadline: "Full-Stack Developer building scalable systems that matter. I focus on modern web architecture, backend systems, and AI-integrated applications. Strong believer in clean code, system design, and understanding the product deeply. I thrive in environments where technical depth meets real impact.",

  // Links
  links: {
    github: "https://github.com/Hariom210799",
    linkedin: "https://linkedin.com/in/hariom-lapshetwar-764005114",
    email: "hariomlapshetwar@gmail.com",
    phone: "+1 3475530253",
    resumeUrl: "https://example.com/resume.pdf",
  },

  // Solution Flow - How I work
  solutionFlow: [
    {
      title: "Understand",
      description: "Deep dive into requirements and user needs",
      iconName: "Brain",
    },
    {
      title: "Design",
      description: "Create scalable architecture and intuitive interfaces",
      iconName: "Palette",
    },
    {
      title: "Develop",
      description: "Build robust solutions with clean, maintainable code",
      iconName: "Code2",
    },
    {
      title: "Deploy",
      description: "Ship production-ready applications with confidence",
      iconName: "Rocket",
    },
  ],

  // Projects
  projects: [
    {
      title: "Cafe Caffea — Full-Stack Cafe Management Platform",
      oneLiner: "Production-ready restaurant management system handling order processing, menu curation, and role-based admin operations with real-time status tracking.",
      whatIBuilt: [
        "React frontend with admin dashboard for menu/order management and customer interface for browsing and ordering",
        "Node.js/Express REST API layer with JWT authentication, session persistence, and role-based middleware",
        "MongoDB schema design for menu items, orders, user profiles with efficient indexing for query performance",
        "Real-time order status updates with client-side polling and server-side state synchronization",
      ],
      techStackText: "React · Node.js · Express · MongoDB · JWT · REST APIs · Tailwind CSS",
      challenges: [
        "Real-time order updates → Implemented polling-based refresh with optimistic UI updates to reduce API calls",
        "Data consistency across admin/customer views → Used MongoDB transactions and API-level state validation",
      ],
      links: {
        repoUrl: "https://github.com/Hariom210799/Cafe_Caffea",
        liveUrl: "https://cafe-caffea.vercel.app/",
      },
      imageUrl: "https://res.cloudinary.com/dziah8jmx/image/upload/0427d197-8fb2-4bf1-95ae-e4e269a14d52_f1nmrw",
    },
    {
      title: "FoodyGuru — AI-Assisted Recipe Generation Web App",
      oneLiner: "Web application that generates personalized recipes based on available ingredients using AI, with user authentication and saved recipe history.",
      whatIBuilt: [
        "React frontend with ingredient input form, recipe search/filtering interface, and recipe detail views with nutritional info",
        "Node.js/Express REST API layer with user authentication, recipe generation endpoint, and MongoDB for profile/recipe persistence",
        "AI recipe generation integration accepting ingredient lists and returning structured recipe data with instructions",
        "User profile system with saved recipes, favorites, and recipe history tracking",
        "Input validation and error handling for ingredient parsing and API response transformation",
      ],
      techStackText: "React · Node.js · Express · MongoDB · REST APIs · Authentication · AI Integration",
      challenges: [
        "Ingredient variation handling → Built fuzzy matching and normalization layer to handle ingredient synonyms and spelling variations",
        "Recipe data consistency → Implemented caching layer and API-level validation to ensure consistent recipe structure across requests",
      ],
      links: {
        repoUrl: "https://github.com/Hariom210799/FoodyGuru",
        liveUrl: "https://foody-guru.vercel.app/login",
      },
      imageUrl: "https://res.cloudinary.com/dziah8jmx/image/upload/eafb1a39-05fa-431d-8c5e-f64eebc96e1a_cdpjdq",
    },
    {
      title: "GestureGrade — Real-Time Gesture & Emotion Feedback System",
      oneLiner: "Real-time gesture recognition system that processes live camera feeds to classify hand poses and provide instant visual feedback for training and assessment applications.",
      whatIBuilt: [
        "Live camera pipeline using WebRTC with optimized frame capture and preprocessing for continuous pose detection",
        "Client-side ML model inference integration with latency optimization and confidence thresholding for stable predictions",
        "React canvas visualization rendering pose landmarks in real-time with overlay graphics and performance metrics display",
        "Gesture classification logic mapping pose sequences to recognized gesture categories with temporal smoothing",
        "Performance monitoring and feedback loop tracking prediction accuracy, frame rate, and latency metrics",
      ],
      techStackText: "React · Computer Vision · Machine Learning · Camera APIs · Canvas API · Real-time Processing · JavaScript",
      challenges: [
        "Sub-100ms latency requirement → Optimized frame processing pipeline with Web Workers to offload inference from main thread",
        "False positive gesture predictions → Implemented confidence thresholding and temporal filtering to reduce spurious classifications",
      ],
      links: {
        repoUrl: "https://github.com/Hariom210799/GestureGrade",
        liveUrl: "https://gesture-grade.vercel.app/",
      },
      imageUrl: "https://res.cloudinary.com/dziah8jmx/image/upload/21bc3c16-4df2-4b32-b643-465953e76e70_osrva3",
    },
    {
      title: "Khamang — Mobile-First Food Ordering App",
      oneLiner: "Cross-platform mobile food ordering application built with React Native, enabling users to browse restaurants, manage cart, place orders, and track delivery status.",
      whatIBuilt: [
        "React Native UI with tab-based navigation stack and reusable component library for consistent styling across iOS and Android",
        "Authentication flow with JWT token handling, secure storage, and session persistence across app lifecycle",
        "Restaurant browsing and menu search interface with filtering and sorting capabilities",
        "Shopping cart management with real-time quantity updates and order summary calculation",
        "REST API integration for restaurant listings, menu retrieval, order placement, and delivery tracking",
      ],
      techStackText: "React Native · JavaScript · Mobile UI · REST APIs · Authentication · Navigation Stack",
      challenges: [
        "Cross-platform layout consistency → Built responsive UI component library with platform-specific overrides for iOS/Android design patterns",
        "Navigation state management → Implemented proper navigation stack handling to prevent memory leaks and maintain proper history on back button",
      ],
      links: {
        repoUrl: "https://github.com/Hariom210799/Khamang",
        liveUrl: null,
      },
      imageUrl: "https://res.cloudinary.com/dziah8jmx/image/upload/khamang_showcase_collage_dribbble_ozjmdr",
    },
  ],

  // Skills
  skills: {
    Frontend: [
      { name: "React", iconName: "Code" },
      { name: "Next.js", iconName: "Code" },
      { name: "TypeScript", iconName: "Code" },
      { name: "Tailwind CSS", iconName: "Palette" },
      { name: "Framer Motion", iconName: "Zap" },
      { name: "Redux", iconName: "Database" },
    ],
    Backend: [
      { name: "Node.js", iconName: "Server" },
      { name: "Express", iconName: "Server" },
      { name: "Python", iconName: "Code" },
      { name: "FastAPI", iconName: "Zap" },
      { name: "GraphQL", iconName: "Network" },
      { name: "REST APIs", iconName: "Send" },
    ],
    Databases: [
      { name: "PostgreSQL", iconName: "Database" },
      { name: "MongoDB", iconName: "Database" },
      { name: "Firebase", iconName: "Flame" },
      { name: "Redis", iconName: "Zap" },
      { name: "Elasticsearch", iconName: "Search" },
    ],
    "AI/ML": [
      { name: "OpenAI APIs", iconName: "Brain" },
      { name: "TensorFlow", iconName: "BarChart3" },
      { name: "PyTorch", iconName: "BarChart3" },
      { name: "Langchain", iconName: "Link" },
      { name: "Vector Databases", iconName: "Database" },
    ],
    Tools: [
      { name: "Git", iconName: "GitBranch" },
      { name: "Docker", iconName: "Box" },
      { name: "AWS", iconName: "Cloud" },
      { name: "GitHub", iconName: "GitBranch" },
      { name: "VS Code", iconName: "Code" },
      { name: "Vercel", iconName: "Zap" },
    ],
  },

  // Experience
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "TechFlow AI",
      dates: "Jan 2023 - Present",
      bullets: [
        "Led development of AI-powered SaaS platform serving 50k+ users with Next.js and OpenAI integration",
        "Architected microservices using Node.js and Docker, reducing API response time by 40%",
        "Implemented real-time features using WebSockets, improving user engagement by 35%",
        "Mentored 3 junior developers and established coding standards and best practices",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Inc.",
      dates: "Jun 2021 - Dec 2022",
      bullets: [
        "Developed 5+ production web applications using React and Node.js for enterprise clients",
        "Designed and implemented PostgreSQL databases with optimized queries reducing load time by 50%",
        "Deployed applications on AWS using EC2, RDS, and S3, ensuring 99.9% uptime",
        "Collaborated with UX team to implement responsive designs and improve user satisfaction",
      ],
    },
    {
      role: "Junior Developer",
      company: "StartupHub",
      dates: "Jan 2020 - May 2021",
      bullets: [
        "Built responsive web interfaces using React and Tailwind CSS",
        "Fixed 200+ bugs and implemented feature requests in production applications",
        "Participated in code reviews and contributed to team knowledge sharing",
        "Assisted with DevOps tasks including CI/CD pipeline setup with GitHub Actions",
      ],
    },
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Indian Institute of Technology",
      dates: "2016 - 2020",
      bullets: [
        "CGPA: 8.2/10",
        "Relevant Coursework: Data Structures, Algorithms, Databases, Web Development",
        "President of Coding Club - Organized 10+ hackathons",
      ],
    },
    {
      degree: "Advanced Specialization in AI & Machine Learning",
      school: "Coursera / Andrew Ng",
      dates: "2022 - 2023",
      bullets: [
        "Completed 5-course specialization on Deep Learning and LLMs",
        "Built and deployed 3 ML models in production environments",
        "GPA: 4.0/4.0",
      ],
    },
    {
      degree: "Full Stack Development Bootcamp",
      school: "Zero to Full Stack",
      dates: "2019",
      bullets: [
        "Intensive 12-week program covering MERN stack",
        "Capstone project: Built e-commerce platform with 1000+ users",
      ],
    },
  ],
};
