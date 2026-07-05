export const personalInfo = {
  name: "Ijaz Ahammad Shaik",
  role: "Senior Software Engineer",
  tagline: "Event-Driven & Serverless Systems on AWS",
  location: "Hyderabad, India",
  originLocation: "Kurnool, Andhra Pradesh",
  email: "ijazahamed.cse@gmail.com",
  linkedin: "https://in.linkedin.com/in/ijazhamed108?trk=public_profile_browsemap",
  github: "https://github.com/ijazahamed108",
  medium: "https://medium.com/@ijazahamed108",
  instagram: "https://www.instagram.com/ijaz__ahamed/",
};

export const summary = [
  "Senior Software Engineer with nearly 6 years building event-driven, serverless systems and full-stack applications on AWS. Reduced cloud costs by 45% and improved search/dashboard latency by 50% on a production HVAC IoT platform, and cut order-processing time by 80% in high-scale EdTech systems.",
  "Strong in Node.js/TypeScript, React, distributed systems, and performance optimization across HVAC IoT, EdTech, and enterprise domains.",
  "Engineer with strong AWS serverless, React/TS, Node.js expertise, specializing in observability, performance optimization, and internationalization.",
  "Proven track record in real-time data ingestion, ETL/reporting orchestration, caching + GraphQL optimizations, and cost reduction via telemetry modernization.",
];

export const aboutPitch = {
  headline: "I turn ambitious product ideas into production-grade systems — built to scale, built to last.",
  subheadline:
    "Senior Software Engineer crafting cloud-native, full-stack experiences across IoT, EdTech, and enterprise.",
  paragraphs: [
    "I'm Ijaz — an engineer with nearly six years of experience building software that has to work in the real world: high-traffic platforms, connected-device ecosystems, and products where performance, reliability, and clarity matter from day one.",
    "My work lives at the intersection of modern web development and AWS serverless architecture. React and TypeScript on the surface. Node.js, event-driven pipelines, and distributed systems underneath. Clean APIs and thoughtful design patterns connecting the two.",
    "What sets my approach apart is ownership — from shaping system architecture and data models to polishing the user experience and making sure production systems are observable, maintainable, and ready for the next feature.",
  ],
  pillars: [
    {
      title: "Cloud-Native Builder",
      description:
        "Serverless, microservices, and event-driven design on AWS — engineered for resilience, scalability, and long-term maintainability.",
    },
    {
      title: "Full-Stack Ownership",
      description:
        "End-to-end delivery across the stack, with TypeScript, React, Node.js, and GraphQL as core tools for cohesive, type-safe products.",
    },
    {
      title: "Impact-Driven Engineering",
      description:
        "Performance, observability, and cost-efficiency built in from the start — so teams ship faster and systems stay healthy in production.",
    },
  ],
  highlights: [
    "6+ Years Experience",
    "AWS Serverless",
    "Full-Stack TypeScript",
    "Distributed Systems",
  ],
};

export const experience = [
  {
    id: 1,
    company: "Carrier Technologies Limited",
    logo: "/companyLogos/carrier-logo.svg",
    website: "https://www.carrier.com/commercial/en/in/about/about-carrier-india/",
    role: "Senior Software Engineer",
    location: "Hyderabad",
    period: "Jun 2024 - Present",
    achievements: [
      "Reduced overall cloud costs by 45% by migrating observability from AWS CloudWatch to New Relic using OpenTelemetry and implementing log sampling strategies",
      "Improved search and dashboard load times by 50% by introducing a Redis cache layer and optimizing GraphQL queries",
      "Designed and built an Integration Adapter (Node.js, TypeScript, AWS Lambda, SQS, EventBridge, IoT Core) ingesting 256 KB telemetry from 1,000+ Toshiba Carrier chillers every 3 minutes (~480K messages / 120 GB per day) into a 20+ TB Amazon Timestream store, with fault-tolerant at-least-once delivery (SQS + DLQ retries) and 125 ms p95 ingestion latency",
      "Developed and maintained subgraphs behind a JWT-authorized federated GraphQL gateway (Apollo Federation), unifying secure data access across HVAC microservices",
      "Built a zero-downtime Gateway Replacement feature for the Carrier ABOUND HVAC platform (React, TypeScript, Node.js, AWS Lambda, IoT Core, SQS, SNS, DynamoDB), enabling field hardware swaps across a 20K+ connected-device fleet with no data loss, plus automated audit logging/notifications and OTA upgrades",
      "Architected a serverless reporting microservice (AWS Lambda, Step Functions) orchestrating ETL workflows that process S3 telemetry via AWS Glue (Python) and apply linear interpolation to resolve data gaps; serves hundreds of on-demand PDF/Excel reports daily plus scheduled monthly batch reports distributed via S3 links to SharePoint and the dashboard",
      "Launched Japanese localization (i18n) across the UI and backend-generated content (emails and reports), enabling expansion into the Japanese market",
      "Adopted TDD with Jest and rigorous code reviews to cut production bugs and technical debt, maintaining 90% test coverage; leveraged AI tools (Cursor, Cody, Claude Code, Amazon Q) to accelerate delivery",
      "Mentored 4 junior engineers on clean-code practices, Node.js/JavaScript, Git/GitHub workflows, and AI-assisted development; owned TRDs and cross-team knowledge transfer within an Agile Scrum team",
      "Awards: 6× Star of the Sprint, Impactful Award 2025, Best-in-Class Award 2026, Bryant Award 2026",
    ],
    tech: ["Node.js", "TypeScript", "React", "AWS Lambda", "SQS", "SNS", "EventBridge", "IoT Core", "DynamoDB", "Step Functions", "S3", "Glue", "Amazon Timestream", "Redis", "GraphQL", "Apollo Federation", "OpenTelemetry", "New Relic", "Puppeteer", "ExcelJS", "Jest"],
  },
  {
    id: 2,
    company: "Mintbook (K-Nomics Techno Solutions Private Limited)",
    logo: "/companyLogos/mintbook-logo.webp",
    website: "https://mintbook.com/",
    role: "Software Developer",
    location: "Bengaluru",
    period: "Jul 2023 - May 2024",
    achievements: [
      "Built a Content Utilization Engine (Node.js, Socket.IO, MongoDB) capturing daily activity for 50K+ users, including e-book/video engagement, time-per-resource, and behavioral trends, powering analytics, personalized recommendations, and billing/license calculations",
      "Delivered a Digital Library for Bihar's Department of Education enabling e-learning for thousands of students statewide, built to strong cybersecurity standards",
      "Developed a Content Management and Analytics System (React, TypeScript, Node.js) where publishers upload content (e-books, audio, video) that is verified, encrypted, and stored in Azure to stream across Mintbook Digital Libraries, with downloadable usage reports",
      "Integrated the Digital Library with Banana Pi devices via Electron.js to deliver offline-first e-learning in remote, low-connectivity regions of Bihar",
      "Built an Assessment Module tracking student performance, generating e-progress records, and surfacing individual strengths and weak areas for targeted improvement",
    ],
    tech: ["React", "TypeScript", "Node.js", "Socket.IO", "MongoDB", "Electron.js", "Azure"],
  },
  {
    id: 3,
    company: "BYJU'S (Think and Learn Private Limited)",
    logo: "/companyLogos/Byju's_logo.svg.png",
    website: "https://byjus.com/",
    role: "Software Engineer",
    location: "Bengaluru",
    period: "Jul 2021 - Jun 2023",
    achievements: [
      "Cut order-processing time by 80% by building a microservice (AWS Lambda, REST APIs) that automated bulk order processing",
      "Reduced product-page load time by roughly 80% in the KART microservice by implementing Redis caching",
      "Led end-to-end development of Aakash Classroom, Digital, and BYJU'S Exam Prep modules, designing database schemas and building scalable scholarship and voucher systems while onboarding multiple courses",
      "Scaled the Pricing Engine powering 200+ Aakash Institute centers across India (24+ scholarship discount types, near-instant synchronization), and built a self-serve React/TypeScript utility letting business leadership independently seed and manage PostgreSQL pricing data",
      "Integrated Razorpay and Bajaj payment gateways for EMI and non-EMI transactions, plus a server-side-rendered customer verification page (Next.js)",
      "Designed rule engines for vouchers and sales programs in the Catalogue project (Java, Spring Boot), migrated Node.js modules to Java, and implemented observability with Datadog and Coralogix to detect and reprocess erroneous orders",
    ],
    tech: ["React", "TypeScript", "Next.js", "Node.js", "Java", "Spring Boot", "Redis", "PostgreSQL", "AWS Lambda", "Razorpay", "Datadog", "Coralogix"],
  },
  {
    id: 4,
    company: "Cognizant Technology Solutions",
    logo: "/companyLogos/cognizant_logo.png",
    website: "https://www.cognizant.com/in/en",
    role: "Programmer Analyst Trainee",
    location: "Chennai",
    period: "Nov 2020 - Jun 2021",
    achievements: [
      "Built scalable REST APIs and PySpark data-processing scripts for BNY Mellon to automate large-scale data cleansing and transformation",
      "Optimized a React.js/MUI front-end for performance and cross-device responsiveness",
    ],
    tech: ["Python", "PySpark", "React", "MUI", "REST APIs"],
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML5", "CSS3"],
  Frameworks: ["React", "Redux", "Node.js", "Express", "Jest", "Bootstrap", "Material UI"],
  Databases: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
  "Cloud & Tools": ["AWS Lambda", "S3", "EC2", "SQS", "SNS", "API Gateway", "Docker", "Git"],
};

export const projects = [
  {
    id: 1,
    title: "Pocket Library",
    description: "Open-source e-book platform with secure auth, RBAC, and a dynamic content management system",
    tech: ["React", "Node.js", "MongoDB"],
    category: ["React", "Node.js"],
  },
  {
    id: 2,
    title: "Ad-free YouTube Viewer",
    description: "Clean YouTube viewing experience without advertisements",
    tech: ["React", "Node.js"],
    category: ["React", "Node.js"],
  },
  {
    id: 3,
    title: "MovieList App",
    description: "IMDB-style movie database with search and filtering",
    tech: ["React", "Bootstrap"],
    category: ["React"],
  },
  {
    id: 4,
    title: "Two-factor Authentication App",
    description: "Secure authentication system with JWT and OTP verification",
    tech: ["JWT", "OTP", "Node.js"],
    category: ["Node.js"],
  },
  {
    id: 5,
    title: "Expense Splitter",
    description: "Split expenses among groups with automatic calculations",
    tech: ["Express", "MongoDB"],
    category: ["Node.js"],
  },
  {
    id: 6,
    title: "Grameena Health Care Portal",
    description: "College major project — rural healthcare portal with scheme info, real-time doctor availability, video-enabled attendance, and inventory tracking",
    tech: ["PHP", "JavaScript"],
    category: ["React"],
  },
  {
    id: 7,
    title: "MERN URL Shortener",
    description: "Production-ready URL shortener with custom codes, LRU-based auto-expiry, rank, and click tracking",
    tech: ["React", "Express 5", "MongoDB", "TypeScript"],
    category: ["React", "Node.js"],
  },
  {
    id: 8,
    title: "Chrome Website Walkthrough Extension",
    description: "MV3 extension that authors and replays interactive walkthroughs via a Shadow DOM overlay, with JWT auth, RBAC, Zod-validated APIs, and resilient element targeting (anchor path/XPath/fingerprinting)",
    tech: ["React", "MV3", "Express", "MongoDB", "Zod"],
    category: ["React", "Node.js"],
  },
];

export const awards = [
 "6× Star of the Sprint — Carrier(2025-2026)",
  "Impactful Award-Carrier-2026",
  "Best In Class Award (2025 & 2026)-Carrier",
  "Problem Solver-Mintbook",
  "Performer of the Quarter-BYJU'S",
  "Impactful Award 2025 — Carrier",
  "Best-in-Class Award 2026 — Carrier",
  "Bryant Award 2026 — Carrier",
];

export const certifications = [
  {
    title: "The Complete 2021 Web Development Bootcamp",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-593e6348-b78c-43fc-8206-696a02ea86d5/",
  },
  {
    title: "Web Design for Beginners: Real World Coding in HTML and CSS",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-29d78af9-7565-48ef-8cbc-ff14bdf3143f/",
  },
  {
    title: "JavaScript Basics for Beginners",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-b5929f74-5484-473c-95f3-d1b57903bd5f/",
  },
  {
    title: "AWS Amazon S3 Mastery BootCamp",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-49662fb9-c6da-4e10-a426-bba291ed9a63/",
  },
  {
    title: "Apache Spark 3 - Spark Programming in Python for Beginners",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-36059c04-e3c8-4047-be7a-b7d6f7b9a3f3/",
  },
  {
    title: "AWS Lambda and the Serverless Framework - Hands on Learning",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-657e904f-f0e6-490c-a2fd-8d793cc254bb/",
  },
  {
    title: "SQL Basics For Beginners",
    platform: "Udemy",
    url: "https://www.udemy.com/certificate/UC-e5040773-9253-414e-ad8d-88a528520579/",
  },
  {
    title: "Introduction to Git and GitHub",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/792ADQRBA9NW",
  },
  {
    title: "Technical Support Fundamentals",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/LBRRGGG24VXL",
  },
  {
    title: "Introduction to Virtual Reality",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/G7S88ZYKYVQP",
  },
  {
    title: "AWS Fundamentals Going Cloud Native",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/FMEG37UY9M8D",
  },
  {
    title: "Python Data Structures",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/Q4FR8HV9WW9B",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Rajeev Gandhi Memorial College of Engineering and Technology (Autonomous)",
    year: "2020",
    gpa: "8.0 GPA",
    subjects: ["Computer Networks", "Data Structures and Algorithms", "Operating Systems", "Android Programming", "Software Engineering", "DBMS", "Object Oriented Analysis and Design", "Computer Graphics", "Compiler Design", "Cloud Infrastructure"],
    leadership: [
      "Member of Technical Committee, RGMCET (2019-2020)",
      "Member of Environment Awareness Team - NSS",
      "Technical Coordinator - International Conference 2019-2020, RGMCET",
    ],
  },
  {
    degree: "Intermediate MPC",
    institution: "Smt. Theressa Junior College",
    year: "2016",
    gpa: "9.5 GPA",
    subjects: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "De Paul High School",
    year: "Class I-X",
    gpa: "9.3 GPA",
  },
];
