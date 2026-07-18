export type Language = "en" | "te" | "hi";

const en = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    certifications: "Certifications",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    tagline: "The Engineer Behind the Mask",
    role: "Senior Software Engineer",
    subtitle: "Event-Driven & Serverless Systems on AWS",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    scrollToAbout: "Scroll to about section",
  },
  about: {
    eyebrow: "The Origin Story",
    title: "The Engineer Behind the",
    titleHighlight: "Mask",
    rootedIn: "Rooted in",
    headline:
      "I turn ambitious product ideas into production-grade systems — built to scale, built to last.",
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
  },
  skills: {
    title: "The",
    titleHighlight: "Utility Belt",
    subtitle: "Drag the wheels to explore my arsenal",
    dragToScroll: "Drag to scroll",
    categories: {
      Languages: "Languages",
      Frameworks: "Frameworks",
      Databases: "Databases",
      "Cloud & Tools": "Cloud & Tools",
    },
  },
  experience: {
    title: "Mission",
    titleHighlight: "Case Files",
    subtitle: "Professional journey and achievements",
    roles: {
      1: "Senior Software Engineer",
      2: "Software Developer",
      3: "Software Engineer",
      4: "Programmer Analyst Trainee",
    },
    locations: {
      1: "Hyderabad",
      2: "Bengaluru",
      3: "Bengaluru",
      4: "Chennai",
    },
    periods: {
      1: "Jun 2024 - Present",
      2: "Jul 2023 - May 2024",
      3: "Jul 2021 - Jun 2023",
      4: "Nov 2020 - Jun 2021",
    },
    achievements: {
      1: [
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
      2: [
        "Built a Content Utilization Engine (Node.js, Socket.IO, MongoDB) capturing daily activity for 50K+ users, including e-book/video engagement, time-per-resource, and behavioral trends, powering analytics, personalized recommendations, and billing/license calculations",
        "Delivered a Digital Library for Bihar's Department of Education enabling e-learning for thousands of students statewide, built to strong cybersecurity standards",
        "Developed a Content Management and Analytics System (React, TypeScript, Node.js) where publishers upload content (e-books, audio, video) that is verified, encrypted, and stored in Azure to stream across Mintbook Digital Libraries, with downloadable usage reports",
        "Integrated the Digital Library with Banana Pi devices via Electron.js to deliver offline-first e-learning in remote, low-connectivity regions of Bihar",
        "Built an Assessment Module tracking student performance, generating e-progress records, and surfacing individual strengths and weak areas for targeted improvement",
      ],
      3: [
        "Cut order-processing time by 80% by building a microservice (AWS Lambda, REST APIs) that automated bulk order processing",
        "Reduced product-page load time by roughly 80% in the KART microservice by implementing Redis caching",
        "Led end-to-end development of Aakash Classroom, Digital, and BYJU'S Exam Prep modules, designing database schemas and building scalable scholarship and voucher systems while onboarding multiple courses",
        "Scaled the Pricing Engine powering 200+ Aakash Institute centers across India (24+ scholarship discount types, near-instant synchronization), and built a self-serve React/TypeScript utility letting business leadership independently seed and manage PostgreSQL pricing data",
        "Integrated Razorpay and Bajaj payment gateways for EMI and non-EMI transactions, plus a server-side-rendered customer verification page (Next.js)",
        "Designed rule engines for vouchers and sales programs in the Catalogue project (Java, Spring Boot), migrated Node.js modules to Java, and implemented observability with Datadog and Coralogix to detect and reprocess erroneous orders",
      ],
      4: [
        "Built scalable REST APIs and PySpark data-processing scripts for BNY Mellon to automate large-scale data cleansing and transformation",
        "Optimized a React.js/MUI front-end for performance and cross-device responsiveness",
      ],
    },
  },
  projects: {
    title: "Gadgets &",
    titleHighlight: "Builds",
    subtitle: "Projects and applications I've crafted",
    all: "All",
    items: {
      1: {
        title: "Pocket Library",
        description:
          "Open-source e-book platform with secure auth, RBAC, and a dynamic content management system",
      },
      2: {
        title: "Ad-free YouTube Viewer",
        description: "Clean YouTube viewing experience without advertisements",
      },
      3: {
        title: "MovieList App",
        description: "IMDB-style movie database with search and filtering",
      },
      4: {
        title: "Two-factor Authentication App",
        description: "Secure authentication system with JWT and OTP verification",
      },
      5: {
        title: "Expense Splitter",
        description: "Split expenses among groups with automatic calculations",
      },
      6: {
        title: "Grameena Health Care Portal",
        description:
          "College major project — rural healthcare portal with scheme info, real-time doctor availability, video-enabled attendance, and inventory tracking",
      },
      7: {
        title: "MERN URL Shortener",
        description:
          "Production-ready URL shortener with custom codes, LRU-based auto-expiry, rank, and click tracking",
      },
      8: {
        title: "Chrome Website Walkthrough Extension",
        description:
          "MV3 extension that authors and replays interactive walkthroughs via a Shadow DOM overlay, with JWT auth, RBAC, Zod-validated APIs, and resilient element targeting (anchor path/XPath/fingerprinting)",
      },
    },
  },
  certifications: {
    title: "Professional",
    titleHighlight: "Certifications",
    subtitle: "Verified credentials from Udemy and Coursera",
    view: "View",
    dragHint: "Drag or use arrows to explore certifications",
    scrollLeft: "Scroll certifications left",
    scrollRight: "Scroll certifications right",
    verified: "Verified credential",
    openCertificate: "Open certificate",
    loadingPreview: "Loading preview…",
    previewUnavailable: "Preview unavailable",
  },
  education: {
    title: "Academic",
    titleHighlight: "Training",
    subtitle: "Educational background and achievements",
    keySubjects: "Key Subjects:",
    leadership: "Leadership Activities:",
    items: [
      {
        degree: "B.Tech in Computer Science Engineering",
        institution:
          "Rajeev Gandhi Memorial College of Engineering and Technology (Autonomous)",
        year: "2020",
        gpa: "8.0 GPA",
        subjects: [
          "Computer Networks",
          "Data Structures and Algorithms",
          "Operating Systems",
          "Android Programming",
          "Software Engineering",
          "DBMS",
          "Object Oriented Analysis and Design",
          "Computer Graphics",
          "Compiler Design",
          "Cloud Infrastructure",
        ],
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
    ],
  },
  contact: {
    title: "Commission the Next",
    titleHighlight: "Mission",
    subtitle: "Let's build something extraordinary together",
    getInTouch: "Get in Touch",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    medium: "Medium",
    instagram: "Instagram",
    connectWithMe: "Connect with me",
    viewMyCode: "View my code",
    readArticles: "Read my articles",
    followMe: "Follow me",
    name: "Name",
    yourName: "Your name",
    yourEmail: "your.email@example.com",
    message: "Message",
    tellMeAbout: "Tell me about your project...",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully! I'll get back to you soon.",
    error: "Failed to send message. Please try again.",
  },
  footer: {
    recognition: "Recognition",
    builtWith: "Built with",
    using: "using Next.js, TypeScript, Tailwind CSS & Framer Motion",
    allRights: "All rights reserved.",
    awards: [
      "6× Star of the Sprint — Carrier (2025-2026)",
      "Impactful Award — Carrier 2026",
      "Problem Solver — Mintbook",
      "Performer of the Quarter — BYJU'S",
      "Impactful Award 2025 — Carrier",
      "Best-in-Class Award 2026 — Carrier",
      "Bryant Award 2026 — Carrier",
    ],
  },
  common: {
    location: "Hyderabad, India",
    originLocation: "Kurnool, Andhra Pradesh",
  },
} as const;

type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepStringify<U>[]
    : T extends object
      ? { [K in keyof T]: DeepStringify<T[K]> }
      : T;

export type Translations = DeepStringify<typeof en>;

const te = {
  nav: {
    home: "హోమ్",
    about: "గురించి",
    skills: "నైపుణ్యాలు",
    experience: "అనుభవం",
    projects: "ప్రాజెక్టులు",
    certifications: "సర్టిఫికేషన్లు",
    education: "విద్య",
    contact: "సంప్రదించండి",
  },
  hero: {
    tagline: "ముసుగు వెనుక ఉన్న ఇంజనీర్",
    role: "సీనియర్ సాఫ్ట్‌వేర్ ఇంజనీర్",
    subtitle: "AWSపై ఈవెంట్-డ్రివెన్ & సర్వర్లెస్ సిస్టమ్స్",
    viewProjects: "ప్రాజెక్టులు చూడండి",
    contactMe: "నన్ను సంప్రదించండి",
    scrollToAbout: "అబౌట్ సెక్షన్‌కు స్క్రోల్ చేయండి",
  },
  about: {
    eyebrow: "మూల కథ",
    title: "ముసుగు వెనుక ఉన్న",
    titleHighlight: "ఇంజనీర్",
    rootedIn: "మూలాలు",
    headline:
      "నేను ఆశావహ ఉత్పత్తి ఆలోచనలను ప్రొడక్షన్-గ్రేడ్ సిస్టమ్స్‌గా మారుస్తాను — స్కేల్ చేసేలా, నిలకడగా నిర్మించబడినవి.",
    subheadline:
      "IoT, EdTech మరియు ఎంటర్‌ప్రైజ్ అంతటా క్లౌడ్-నేటివ్, ఫుల్-స్టాక్ అనుభవాలను రూపొందించే సీనియర్ సాఫ్ట్‌వేర్ ఇంజనీర్.",
    paragraphs: [
      "నేను ఇజాజ్ — వాస్తవ ప్రపంచంలో పని చేయాల్సిన సాఫ్ట్‌వేర్‌ను నిర్మించడంలో దాదాపు ఆరు సంవత్సరాల అనుభవం ఉన్న ఇంజనీర్: అధిక ట్రాఫిక్ ప్లాట్‌ఫారమ్‌లు, కనెక్టెడ్-డివైస్ ఎకోసిస్టమ్‌లు, మరియు పనితీరు, విశ్వసనీయత, స్పష్టత మొదటి రోజు నుండే ముఖ్యమైన ఉత్పత్తులు.",
      "నా పని ఆధునిక వెబ్ డెవలప్‌మెంట్ మరియు AWS సర్వర్లెస్ ఆర్కిటెక్చర్ ఖండనలో ఉంది. పైన React మరియు TypeScript. కింద Node.js, ఈవెంట్-డ్రివెన్ పైప్‌లైన్‌లు మరియు డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్. రెండింటినీ కలిపే క్లీన్ APIలు మరియు సున్నితమైన డిజైన్ ప్యాటర్న్‌లు.",
      "నా విధానాన్ని ప్రత్యేకంగా చేసేది యాజమాన్యం — సిస్టమ్ ఆర్కిటెక్చర్ మరియు డేటా మోడల్‌లను రూపొందించడం నుండి యూజర్ అనుభవాన్ని మెరుగుపరచడం వరకు, ప్రొడక్షన్ సిస్టమ్స్ గమనించదగినవి, నిర్వహించదగినవి మరియు తదుపరి ఫీచర్‌కు సిద్ధంగా ఉండేలా చూడటం.",
    ],
    pillars: [
      {
        title: "క్లౌడ్-నేటివ్ బిల్డర్",
        description:
          "AWSపై సర్వర్లెస్, మైక్రోసర్వీసెస్ మరియు ఈవెంట్-డ్రివెన్ డిజైన్ — స్థిరత్వం, స్కేలబిలిటీ మరియు దీర్ఘకాల నిర్వహణ కోసం రూపొందించబడింది.",
      },
      {
        title: "ఫుల్-స్టాక్ యాజమాన్యం",
        description:
          "TypeScript, React, Node.js మరియు GraphQLతో స్టాక్ అంతటా ఎండ్-టు-ఎండ్ డెలివరీ — సమగ్ర, టైప్-సేఫ్ ఉత్పత్తుల కోసం.",
      },
      {
        title: "ప్రభావ-ఆధారిత ఇంజనీరింగ్",
        description:
          "పనితీరు, అవలోకనం మరియు ఖర్చు సమర్థత మొదటి నుండే నిర్మించబడతాయి — టీమ్‌లు వేగంగా షిప్ చేస్తాయి, సిస్టమ్స్ ప్రొడక్షన్‌లో ఆరోగ్యంగా ఉంటాయి.",
      },
    ],
    highlights: [
      "6+ సంవత్సరాల అనుభవం",
      "AWS సర్వర్లెస్",
      "ఫుల్-స్టాక్ TypeScript",
      "డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్",
    ],
  },
  skills: {
    title: "ది",
    titleHighlight: "యుటిలిటీ బెల్ట్",
    subtitle: "నా ఆయుధశాలను అన్వేషించడానికి చక్రాలను లాగండి",
    dragToScroll: "స్క్రోల్ చేయడానికి లాగండి",
    categories: {
      Languages: "భాషలు",
      Frameworks: "ఫ్రేమ్‌వర్క్‌లు",
      Databases: "డేటాబేస్‌లు",
      "Cloud & Tools": "క్లౌడ్ & టూల్స్",
    },
  },
  experience: {
    title: "మిషన్",
    titleHighlight: "కేస్ ఫైల్స్",
    subtitle: "వృత్తిపరమైన ప్రయాణం మరియు విజయాలు",
    roles: {
      1: "సీనియర్ సాఫ్ట్‌వేర్ ఇంజనీర్",
      2: "సాఫ్ట్‌వేర్ డెవలపర్",
      3: "సాఫ్ట్‌వేర్ ఇంజనీర్",
      4: "ప్రోగ్రామర్ అనలిస్ట్ ట్రైనీ",
    },
    locations: {
      1: "హైదరాబాద్",
      2: "బెంగళూరు",
      3: "బెంగళూరు",
      4: "చెన్నై",
    },
    periods: {
      1: "జూన్ 2024 - ప్రస్తుతం",
      2: "జూలై 2023 - మే 2024",
      3: "జూలై 2021 - జూన్ 2023",
      4: "నవం 2020 - జూన్ 2021",
    },
    achievements: {
      1: [
        "OpenTelemetry ఉపయోగించి AWS CloudWatch నుండి New Relicకు అవలోకనాన్ని మార్చడం మరియు లాగ్ సాంప్లింగ్ వ్యూహాలు అమలు చేయడం ద్వారా మొత్తం క్లౌడ్ ఖర్చులను 45% తగ్గించాను",
        "Redis కాష్ లేయర్ పరిచయం చేసి GraphQL క్వెరీలను ఆప్టిమైజ్ చేయడం ద్వారా సెర్చ్ మరియు డ్యాష్‌బోర్డ్ లోడ్ సమయాలను 50% మెరుగుపరిచాను",
        "Integration Adapterను రూపొందించి నిర్మించాను (Node.js, TypeScript, AWS Lambda, SQS, EventBridge, IoT Core) — 1,000+ Toshiba Carrier చిల్లర్‌ల నుండి ప్రతి 3 నిమిషాలకు 256 KB టెలిమెట్రీ (~480K సందేశాలు / రోజుకు 120 GB)ని 20+ TB Amazon Timestream స్టోర్‌లోకి ఇంజెస్ట్ చేస్తూ, ఫాల్ట్-టాలరెంట్ at-least-once డెలివరీ (SQS + DLQ రీట్రైలు) మరియు 125 ms p95 ఇంజెస్ట్ లేటెన్సీతో",
        "JWT-అధికారం కలిగిన ఫెడరేటెడ్ GraphQL గేట్‌వే (Apollo Federation) వెనుక సబ్‌గ్రాఫ్‌లను అభివృద్ధి చేసి నిర్వహించాను, HVAC మైక్రోసర్వీసెస్ అంతటా సురక్షిత డేటా యాక్సెస్‌ను ఏకీకృతం చేశాను",
        "Carrier ABOUND HVAC ప్లాట్‌ఫారమ్ కోసం జీరో-డౌన్‌టైమ్ Gateway Replacement ఫీచర్‌ను నిర్మించాను (React, TypeScript, Node.js, AWS Lambda, IoT Core, SQS, SNS, DynamoDB) — 20K+ కనెక్టెడ్-డివైస్ ఫ్లీట్‌లో డేటా నష్టం లేకుండా ఫీల్డ్ హార్డ్‌వేర్ మార్పులు, ఆటోమేటెడ్ ఆడిట్ లాగింగ్/నోటిఫికేషన్లు మరియు OTA అప్‌గ్రేడ్‌లు",
        "సర్వర్లెస్ రిపోర్టింగ్ మైక్రోసర్వీస్‌ను ఆర్కిటెక్ట్ చేశాను (AWS Lambda, Step Functions) — S3 టెలిమెట్రీని AWS Glue (Python) ద్వారా ETL చేసి డేటా గ్యాప్‌లను లీనియర్ ఇంటర్‌పోలేషన్‌తో పరిష్కరించే వర్క్‌ఫ్లోలు; రోజువారీ వందలాది ఆన్-డిమాండ్ PDF/Excel రిపోర్ట్‌లు మరియు షెడ్యూల్డ్ నెలవారీ బ్యాచ్ రిపోర్ట్‌లు S3 లింక్‌ల ద్వారా SharePoint మరియు డ్యాష్‌బోర్డ్‌కు",
        "UI మరియు బ్యాకెండ్-జెనరేటెడ్ కంటెంట్ (ఇమెయిల్స్ మరియు రిపోర్ట్‌లు) అంతటా జాపనీస్ లోకలైజేషన్ (i18n)ను ప్రారంభించాను, జపనీస్ మార్కెట్‌లోకి విస్తరణకు మార్గం సుగమం చేశాను",
        "Jestతో TDD మరియు కఠినమైన కోడ్ రివ్యూలను అవలంబించి ప్రొడక్షన్ బగ్‌లు మరియు టెక్నికల్ డెట్‌ను తగ్గించాను, 90% టెస్ట్ కవరేజ్ నిర్వహించాను; డెలివరీని వేగవంతం చేయడానికి AI టూల్స్ (Cursor, Cody, Claude Code, Amazon Q)ను ఉపయోగించాను",
        "4 జూనియర్ ఇంజనీర్లకు క్లీన్-కోడ్ ప్రాక్టీసెస్, Node.js/JavaScript, Git/GitHub వర్క్‌ఫ్లోలు మరియు AI-సహాయక అభివృద్ధిపై మెంటార్‌షిప్ ఇచ్చాను; Agile Scrum టీమ్‌లో TRDలు మరియు క్రాస్-టీమ్ నాలెడ్జ్ ట్రాన్స్‌ఫర్‌ను నిర్వహించాను",
        "అవార్డులు: 6× Star of the Sprint, Impactful Award 2025, Best-in-Class Award 2026, Bryant Award 2026",
      ],
      2: [
        "50K+ వినియోగదారుల రోజువారీ కార్యకలాపాన్ని క్యాప్చర్ చేసే Content Utilization Engineను నిర్మించాను (Node.js, Socket.IO, MongoDB) — ఇ-బుక్/వీడియో ఎంగేజ్‌మెంట్, టైమ్-పర్-రిసోర్స్ మరియు బిహేవియరల్ ట్రెండ్‌లు; అనలిటిక్స్, పర్సనలైజ్డ్ రికమెండేషన్లు మరియు బిల్లింగ్/లైసెన్స్ లెక్కలకు శక్తినిచ్చింది",
        "బీహార్ విద్యా శాఖ కోసం రాష్ట్రవ్యాప్తంగా వేలాది విద్యార్థులకు ఇ-లెర్నింగ్ అందించే Digital Libraryను బలమైన సైబర్ సెక్యూరిటీ ప్రమాణాలతో అందించాను",
        "పబ్లిషర్లు కంటెంట్ (ఇ-బుక్‌లు, ఆడియో, వీడియో) అప్‌లోడ్ చేసి వెరిఫై, ఎన్‌క్రిప్ట్ చేసి Azureలో స్టోర్ చేసి Mintbook Digital Librariesలో స్ట్రీమ్ చేసే CMS + అనలిటిక్స్ సిస్టమ్‌ను అభివృద్ధి చేశాను (React, TypeScript, Node.js), డౌన్‌లోడ్ చేయదగిన యూజేజ్ రిపోర్ట్‌లతో",
        "బీహార్‌లోని రిమోట్, తక్కువ-కనెక్టివిటీ ప్రాంతాలలో ఆఫ్‌లైన్-ఫస్ట్ ఇ-లెర్నింగ్ కోసం Electron.js ద్వారా Banana Pi డివైస్‌లతో Digital Libraryను ఇంటిగ్రేట్ చేశాను",
        "విద్యార్థి పనితీరును ట్రాక్ చేసే Assessment Moduleను నిర్మించాను — ఇ-ప్రోగ్రెస్ రికార్డ్‌లు మరియు లక్ష్యిత మెరుగుదల కోసం వ్యక్తిగత బలాలు/బలహీనతలను చూపించడం",
      ],
      3: [
        "బల్క్ ఆర్డర్ ప్రాసెసింగ్‌ను ఆటోమేట్ చేసే మైక్రోసర్వీస్ (AWS Lambda, REST APIs) నిర్మించి ఆర్డర్-ప్రాసెసింగ్ సమయాన్ని 80% తగ్గించాను",
        "KART మైక్రోసర్వీస్‌లో Redis కాషింగ్ అమలు చేసి ప్రొడక్ట్-పేజీ లోడ్ సమయాన్ని సుమారు 80% తగ్గించాను",
        "Aakash Classroom, Digital మరియు BYJU'S Exam Prep మాడ్యూల్‌ల ఎండ్-టు-ఎండ్ అభివృద్ధిని నడిపించాను — డేటాబేస్ స్కీమాలు, స్కేలబుల్ స్కాలర్‌షిప్/వోచర్ సిస్టమ్స్ మరియు బహుళ కోర్స్‌ల ఆన్‌బోర్డింగ్",
        "భారతదేశంలో 200+ Aakash Institute సెంటర్‌లను నడిపించే Pricing Engineను స్కేల్ చేశాను (24+ స్కాలర్‌షిప్ డిస్కౌంట్ రకాలు, తక్షణ సింక్) మరియు బిజినెస్ లీడర్‌షిప్ స్వయంగా PostgreSQL ప్రైసింగ్ డేటాను సీడ్/నిర్వహించే React/TypeScript యుటిలిటీని నిర్మించాను",
        "EMI మరియు నాన్-EMI లావాదేవీల కోసం Razorpay & Bajaj పేమెంట్ గేట్‌వేలను ఇంటిగ్రేట్ చేశాను, అలాగే Next.jsతో సర్వర్-సైడ్-రెండర్డ్ కస్టమర్ వెరిఫికేషన్ పేజీని నిర్మించాను",
        "Catalogue ప్రాజెక్ట్‌లో వోచర్/సేల్స్ ప్రోగ్రామ్ రూల్ ఇంజిన్‌లను డిజైన్ చేశాను (Java, Spring Boot), Node.js మాడ్యూల్‌లను Javaకు మైగ్రేట్ చేశాను, మరియు తప్పు ఆర్డర్‌లను గుర్తించి రీప్రాసెస్ చేయడానికి Datadog + Coralogix అవలోకనాన్ని అమలు చేశాను",
      ],
      4: [
        "BNY Mellon కోసం పెద్ద ఎత్తున డేటా క్లీన్సింగ్ మరియు ట్రాన్స్‌ఫర్మేషన్‌ను ఆటోమేట్ చేసే స్కేలబుల్ REST APIలు మరియు PySpark డేటా-ప్రాసెసింగ్ స్క్రిప్ట్‌లను నిర్మించాను",
        "పనితీరు మరియు క్రాస్-డివైస్ రెస్పాన్సివ్‌నెస్ కోసం React.js/MUI ఫ్రంట్-ఎండ్‌ను ఆప్టిమైజ్ చేశాను",
      ],
    },
  },
  projects: {
    title: "గాడ్జెట్స్ &",
    titleHighlight: "బిల్డ్స్",
    subtitle: "నేను రూపొందించిన ప్రాజెక్టులు మరియు అప్లికేషన్లు",
    all: "అన్నీ",
    items: {
      1: {
        title: "పాకెట్ లైబ్రరీ",
        description:
          "సురక్షిత ఆథ్, RBAC మరియు డైనమిక్ కంటెంట్ మేనేజ్‌మెంట్ సిస్టమ్‌తో ఓపెన్-సోర్స్ ఇ-బుక్ ప్లాట్‌ఫారమ్",
      },
      2: {
        title: "యాడ్-ఫ్రీ YouTube వ్యూయర్",
        description: "ప్రకటనలు లేకుండా క్లీన్ YouTube వీక్షణ అనుభవం",
      },
      3: {
        title: "మూవీలిస్ట్ యాప్",
        description: "సెర్చ్ మరియు ఫిల్టరింగ్‌తో IMDB-స్టైల్ మూవీ డేటాబేస్",
      },
      4: {
        title: "టూ-ఫ్యాక్టర్ అథెంటికేషన్ యాప్",
        description: "JWT మరియు OTP వెరిఫికేషన్‌తో సురక్షిత అథెంటికేషన్ సిస్టమ్",
      },
      5: {
        title: "ఎక్స్‌పెన్స్ స్ప్లిట్టర్",
        description: "ఆటోమేటిక్ లెక్కలతో గ్రూప్‌ల మధ్య ఖర్చులను పంచుకోవడం",
      },
      6: {
        title: "గ్రామీణ హెల్త్ కేర్ పోర్టల్",
        description:
          "కళాశాల మేజర్ ప్రాజెక్ట్ — స్కీమ్ సమాచారం, రియల్-టైమ్ డాక్టర్ అందుబాటు, వీడియో అటెండెన్స్ మరియు ఇన్వెంటరీ ట్రాకింగ్‌తో గ్రామీణ ఆరోగ్య పోర్టల్",
      },
      7: {
        title: "MERN URL షార్టనర్",
        description:
          "కస్టమ్ కోడ్‌లు, LRU-ఆధారిత ఆటో-ఎక్స్‌పైరీ, ర్యాంక్ మరియు క్లిక్ ట్రాకింగ్‌తో ప్రొడక్షన్-రెడీ URL షార్టనర్",
      },
      8: {
        title: "క్రోమ్ వెబ్‌సైట్ వాక్‌త్రూ ఎక్స్‌టెన్షన్",
        description:
          "Shadow DOM ఓవర్‌లే ద్వారా ఇంటరాక్టివ్ వాక్‌త్రూలను రచించి/ప్లే చేసే MV3 ఎక్స్‌టెన్షన్ — JWT ఆథ్, RBAC, Zod-వాలిడేటెడ్ APIలు మరియు స్థిరమైన ఎలిమెంట్ టార్గెటింగ్",
      },
    },
  },
  certifications: {
    title: "వృత్తిపరమైన",
    titleHighlight: "సర్టిఫికేషన్లు",
    subtitle: "Udemy మరియు Coursera నుండి ధృవీకరించబడిన క్రెడెన్షియల్స్",
    view: "చూడండి",
    dragHint: "సర్టిఫికేషన్లను అన్వేషించడానికి డ్రాగ్ చేయండి లేదా బాణాలను ఉపయోగించండి",
    scrollLeft: "సర్టిఫికేషన్లను ఎడమకు స్క్రోల్ చేయండి",
    scrollRight: "సర్టిఫికేషన్లను కుడికి స్క్రోల్ చేయండి",
    verified: "ధృవీకరించబడిన క్రెడెన్షియల్",
    openCertificate: "సర్టిఫికేట్ తెరవండి",
    loadingPreview: "ప్రివ్యూ లోడ్ అవుతోంది…",
    previewUnavailable: "ప్రివ్యూ అందుబాటులో లేదు",
  },
  education: {
    title: "అకడమిక్",
    titleHighlight: "శిక్షణ",
    subtitle: "విద్యా నేపథ్యం మరియు విజయాలు",
    keySubjects: "ముఖ్య విషయాలు:",
    leadership: "నాయకత్వ కార్యకలాపాలు:",
    items: [
      {
        degree: "కంప్యూటర్ సైన్స్ ఇంజనీరింగ్‌లో బి.టెక్",
        institution:
          "రాజీవ్ గాంధీ మెమోరియల్ కాలేజ్ ఆఫ్ ఇంజనీరింగ్ అండ్ టెక్నాలజీ (అటానమస్)",
        year: "2020",
        gpa: "8.0 GPA",
        subjects: [
          "కంప్యూటర్ నెట్‌వర్క్‌లు",
          "డేటా స్ట్రక్చర్స్ అండ్ అల్గారిథమ్స్",
          "ఆపరేటింగ్ సిస్టమ్స్",
          "ఆండ్రాయిడ్ ప్రోగ్రామింగ్",
          "సాఫ్ట్‌వేర్ ఇంజనీరింగ్",
          "DBMS",
          "ఆబ్జెక్ట్ ఓరియెంటెడ్ అనాలిసిస్ అండ్ డిజైన్",
          "కంప్యూటర్ గ్రాఫిక్స్",
          "కంపైలర్ డిజైన్",
          "క్లౌడ్ ఇన్‌ఫ్రాస్ట్రక్చర్",
        ],
        leadership: [
          "RGMCET టెక్నికల్ కమిటీ సభ్యుడు (2019-2020)",
          "పర్యావరణ అవగాహన బృందం సభ్యుడు - NSS",
          "టెక్నికల్ కోఆర్డినేటర్ - అంతర్జాతీయ సమావేశం 2019-2020, RGMCET",
        ],
      },
      {
        degree: "ఇంటర్‌మీడియట్ MPC",
        institution: "శ్రీమతి తెరెస్సా జూనియర్ కాలేజ్",
        year: "2016",
        gpa: "9.5 GPA",
        subjects: ["గణితం", "భౌతిక శాస్త్రం", "రసాయన శాస్త్రం"],
      },
      {
        degree: "సెకండరీ స్కూల్ సర్టిఫికేట్ (SSC)",
        institution: "డి పాల్ హై స్కూల్",
        year: "క్లాస్ I-X",
        gpa: "9.3 GPA",
      },
    ],
  },
  contact: {
    title: "తదుపరి",
    titleHighlight: "మిషన్‌ను కమిషన్ చేయండి",
    subtitle: "అసాధారణమైన దాన్ని కలిసి నిర్మిద్దాం",
    getInTouch: "సంప్రదించండి",
    email: "ఇమెయిల్",
    linkedin: "లింక్డ్‌ఇన్",
    github: "గిట్‌హబ్",
    medium: "మీడియం",
    instagram: "ఇన్‌స్టాగ్రామ్",
    connectWithMe: "నాతో కనెక్ట్ అవ్వండి",
    viewMyCode: "నా కోడ్ చూడండి",
    readArticles: "నా వ్యాసాలు చదవండి",
    followMe: "నన్ను ఫాలో అవ్వండి",
    name: "పేరు",
    yourName: "మీ పేరు",
    yourEmail: "మీ.ఇమెయిల్@example.com",
    message: "సందేశం",
    tellMeAbout: "మీ ప్రాజెక్ట్ గురించి చెప్పండి...",
    send: "సందేశం పంపండి",
    sending: "పంపుతోంది...",
    success: "సందేశం విజయవంతంగా పంపబడింది! నేను త్వరలో మీకు తిరిగి వస్తాను.",
    error: "సందేశం పంపడం విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.",
  },
  footer: {
    recognition: "గుర్తింపు",
    builtWith: "తో నిర్మించబడింది",
    using: "Next.js, TypeScript, Tailwind CSS & Framer Motion ఉపయోగించి",
    allRights: "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
    awards: [
      "6× Star of the Sprint — Carrier (2025-2026)",
      "Impactful Award — Carrier 2026",
      "Best In Class Award (2025 & 2026) — Carrier",
      "Problem Solver — Mintbook",
      "Performer of the Quarter — BYJU'S",
      "Impactful Award 2025 — Carrier",
      "Best-in-Class Award 2026 — Carrier",
      "Bryant Award 2026 — Carrier",
    ],
  },
  common: {
    location: "హైదరాబాద్, భారతదేశం",
    originLocation: "కర్నూలు, ఆంధ్రప్రదేశ్",
  },
};

const hi = {
  nav: {
    home: "होम",
    about: "के बारे में",
    skills: "कौशल",
    experience: "अनुभव",
    projects: "प्रोजेक्ट्स",
    certifications: "प्रमाणपत्र",
    education: "शिक्षा",
    contact: "संपर्क करें",
  },
  hero: {
    tagline: "मास्क के पीछे का इंजीनियर",
    role: "सीनियर सॉफ्टवेयर इंजीनियर",
    subtitle: "AWS पर इवेंट-ड्रिवन और सर्वरलेस सिस्टम",
    viewProjects: "प्रोजेक्ट्स देखें",
    contactMe: "मुझसे संपर्क करें",
    scrollToAbout: "अबाउट सेक्शन पर स्क्रॉल करें",
  },
  about: {
    eyebrow: "मूल कथा",
    title: "मास्क के पीछे का",
    titleHighlight: "इंजीनियर",
    rootedIn: "जड़ें",
    headline:
      "मैं महत्वाकांक्षी उत्पाद विचारों को प्रोडक्शन-ग्रेड सिस्टम में बदलता हूँ — स्केल के लिए बने, लंबे समय तक टिकने वाले।",
    subheadline:
      "IoT, EdTech और एंटरप्राइज़ में क्लाउड-नेटिव, फुल-स्टैक अनुभव बनाने वाले सीनियर सॉफ्टवेयर इंजीनियर।",
    paragraphs: [
      "मैं इजाज हूँ — लगभग छह वर्षों के अनुभव वाला इंजीनियर, जो वास्तविक दुनिया में काम करने वाला सॉफ्टवेयर बनाता है: हाई-ट्रैफिक प्लेटफ़ॉर्म, कनेक्टेड-डिवाइस इकोसिस्टम, और ऐसे उत्पाद जहाँ प्रदर्शन, विश्वसनीयता और स्पष्टता पहले दिन से मायने रखती है।",
      "मेरा काम आधुनिक वेब डेवलपमेंट और AWS सर्वरलेस आर्किटेक्चर के संगम पर है। ऊपर React और TypeScript। नीचे Node.js, इवेंट-ड्रिवन पाइपलाइन और डिस्ट्रिब्यूटेड सिस्टम। दोनों को जोड़ने वाले क्लीन API और सोच-समझकर बनाए गए डिज़ाइन पैटर्न।",
      "मेरे दृष्टिकोण को खास बनाता है ओनरशिप — सिस्टम आर्किटेक्चर और डेटा मॉडल आकार देने से लेकर यूज़र अनुभव निखारने तक, और यह सुनिश्चित करना कि प्रोडक्शन सिस्टम अवलोकनीय, मेंटेन करने योग्य और अगली फ़ीचर के लिए तैयार रहें।",
    ],
    pillars: [
      {
        title: "क्लाउड-नेटिव बिल्डर",
        description:
          "AWS पर सर्वरलेस, माइक्रोसर्विसेज़ और इवेंट-ड्रिवन डिज़ाइन — लचीलापन, स्केलेबिलिटी और लंबी अवधि की मेंटेनेबिलिटी के लिए।",
      },
      {
        title: "फुल-स्टैक ओनरशिप",
        description:
          "TypeScript, React, Node.js और GraphQL के साथ स्टैक भर में एंड-टू-एंड डिलीवरी — सुसंगत, टाइप-सेफ़ उत्पादों के लिए।",
      },
      {
        title: "इम्पैक्ट-ड्रिवन इंजीनियरिंग",
        description:
          "प्रदर्शन, ऑब्ज़र्वेबिलिटी और लागत-दक्षता शुरुआत से ही — ताकि टीमें तेज़ी से शिप करें और सिस्टम प्रोडक्शन में स्वस्थ रहें।",
      },
    ],
    highlights: [
      "6+ वर्षों का अनुभव",
      "AWS सर्वरलेस",
      "फुल-स्टैक TypeScript",
      "डिस्ट्रिब्यूटेड सिस्टम",
    ],
  },
  skills: {
    title: "द",
    titleHighlight: "यूटिलिटी बेल्ट",
    subtitle: "मेरे शस्त्रागार का पता लगाने के लिए पहियों को खींचें",
    dragToScroll: "स्क्रॉल करने के लिए खींचें",
    categories: {
      Languages: "भाषाएँ",
      Frameworks: "फ़्रेमवर्क",
      Databases: "डेटाबेस",
      "Cloud & Tools": "क्लाउड और टूल्स",
    },
  },
  experience: {
    title: "मिशन",
    titleHighlight: "केस फ़ाइल्स",
    subtitle: "पेशेवर यात्रा और उपलब्धियाँ",
    roles: {
      1: "सीनियर सॉफ्टवेयर इंजीनियर",
      2: "सॉफ्टवेयर डेवलपर",
      3: "सॉफ्टवेयर इंजीनियर",
      4: "प्रोग्रामर एनालिस्ट ट्रेनी",
    },
    locations: {
      1: "हैदराबाद",
      2: "बेंगलुरु",
      3: "बेंगलुरु",
      4: "चेन्नई",
    },
    periods: {
      1: "जून 2024 - वर्तमान",
      2: "जुलाई 2023 - मई 2024",
      3: "जुलाई 2021 - जून 2023",
      4: "नवंबर 2020 - जून 2021",
    },
    achievements: {
      1: [
        "OpenTelemetry के साथ AWS CloudWatch से New Relic पर ऑब्ज़र्वेबिलिटी माइग्रेट करके और लॉग सैंपलिंग रणनीतियाँ लागू करके कुल क्लाउड लागत में 45% की कमी की",
        "Redis कैश लेयर जोड़कर और GraphQL क्वेरीज़ ऑप्टिमाइज़ करके सर्च और डैशबोर्ड लोड समय में 50% सुधार किया",
        "Integration Adapter डिज़ाइन और बिल्ड किया (Node.js, TypeScript, AWS Lambda, SQS, EventBridge, IoT Core) — 1,000+ Toshiba Carrier चिलर से हर 3 मिनट में 256 KB टेलीमेट्री (~480K संदेश / दिन में 120 GB) को 20+ TB Amazon Timestream स्टोर में इनजेस्ट किया, फॉल्ट-टॉलरेंट at-least-once डिलीवरी (SQS + DLQ रिट्राई) और 125 ms p95 इनजेशन लेटेंसी के साथ",
        "JWT-अधिकृत फ़ेडरेटेड GraphQL गेटवे (Apollo Federation) के पीछे सबग्राफ़ विकसित और मेंटेन किए, HVAC माइक्रोसर्विसेज़ में सुरक्षित डेटा एक्सेस को एकीकृत किया",
        "Carrier ABOUND HVAC प्लेटफ़ॉर्म के लिए ज़ीरो-डाउनटाइम Gateway Replacement फ़ीचर बनाया (React, TypeScript, Node.js, AWS Lambda, IoT Core, SQS, SNS, DynamoDB) — 20K+ कनेक्टेड-डिवाइस फ़्लीट पर बिना डेटा हानि के फ़ील्ड हार्डवेयर स्वैप, ऑटोमेटेड ऑडिट लॉगिंग/नोटिफ़िकेशन और OTA अपग्रेड",
        "सर्वरलेस रिपोर्टिंग माइक्रोसर्विस आर्किटेक्ट की (AWS Lambda, Step Functions) — S3 टेलीमेट्री को AWS Glue (Python) से ETL और लीनियर इंटरपोलेशन से डेटा गैप हल; रोज़ सैकड़ों ऑन-डिमांड PDF/Excel रिपोर्ट्स और शेड्यूल्ड मासिक बैच रिपोर्ट्स S3 लिंक से SharePoint और डैशबोर्ड पर",
        "UI और बैकएंड-जनरेटेड कंटेंट (ईमेल और रिपोर्ट्स) में जापानी लोकलाइज़ेशन (i18n) लॉन्च किया, जापानी बाज़ार में विस्तार सक्षम किया",
        "Jest के साथ TDD और कठोर कोड रिव्यू अपनाकर प्रोडक्शन बग और तकनीकी ऋण घटाया, 90% टेस्ट कवरेज बनाए रखा; डिलीवरी तेज़ करने के लिए AI टूल्स (Cursor, Cody, Claude Code, Amazon Q) का उपयोग किया",
        "4 जूनियर इंजीनियरों को क्लीन-कोड प्रैक्टिस, Node.js/JavaScript, Git/GitHub वर्कफ़्लो और AI-सहायता प्राप्त डेवलपमेंट पर मेंटर किया; Agile Scrum टीम में TRD और क्रॉस-टीम नॉलेज ट्रांसफ़र का स्वामित्व लिया",
        "पुरस्कार: 6× Star of the Sprint, Impactful Award 2025, Best-in-Class Award 2026, Bryant Award 2026",
      ],
      2: [
        "50K+ उपयोगकर्ताओं की दैनिक गतिविधि कैप्चर करने वाला Content Utilization Engine बनाया (Node.js, Socket.IO, MongoDB) — ई-बुक/वीडियो एंगेजमेंट, टाइम-पर-रिसोर्स और बिहेवियरल ट्रेंड; एनालिटिक्स, पर्सनलाइज़्ड रेकमेंडेशन और बिलिंग/लाइसेंस गणना को शक्ति दी",
        "बिहार शिक्षा विभाग के लिए राज्यव्यापी हज़ारों छात्रों को ई-लर्निंग देने वाला Digital Library मज़बूत साइबर सुरक्षा मानकों के साथ डिलीवर किया",
        "प्रकाशक कंटेंट (ई-बुक, ऑडियो, वीडियो) अपलोड कर वेरिफ़ाई, एन्क्रिप्ट और Azure में स्टोर कर Mintbook Digital Libraries पर स्ट्रीम करने वाला CMS + एनालिटिक्स सिस्टम विकसित किया (React, TypeScript, Node.js), डाउनलोड करने योग्य उपयोग रिपोर्ट्स के साथ",
        "बिहार के रिमोट, कम-कनेक्टिविटी क्षेत्रों में ऑफ़लाइन-फ़र्स्ट ई-लर्निंग के लिए Electron.js के ज़रिए Banana Pi डिवाइसों से Digital Library को इंटीग्रेट किया",
        "छात्र प्रदर्शन ट्रैक करने वाला Assessment Module बनाया — ई-प्रोग्रेस रिकॉर्ड और लक्षित सुधार के लिए व्यक्तिगत ताकत/कमज़ोरियाँ दिखाना",
      ],
      3: [
        "बल्क ऑर्डर प्रोसेसिंग ऑटोमेट करने वाला माइक्रोसर्विस (AWS Lambda, REST APIs) बनाकर ऑर्डर-प्रोसेसिंग समय 80% घटाया",
        "KART माइक्रोसर्विस में Redis कैशिंग लागू कर प्रोडक्ट-पेज लोड समय लगभग 80% घटाया",
        "Aakash Classroom, Digital और BYJU'S Exam Prep मॉड्यूल का एंड-टू-एंड डेवलपमेंट लीड किया — डेटाबेस स्कीमा, स्केलेबल स्कॉलरशिप/वाउचर सिस्टम और कई कोर्स ऑनबोर्डिंग",
        "भारत में 200+ Aakash Institute सेंटरों को पावर करने वाले Pricing Engine को स्केल किया (24+ स्कॉलरशिप डिस्काउंट प्रकार, तुरंत सिंक) और बिज़नेस लीडरशिप के लिए PostgreSQL प्राइसिंग डेटा सीड/मैनेज करने वाला React/TypeScript यूटिलिटी बनाया",
        "EMI और नॉन-EMI लेनदेन के लिए Razorpay और Bajaj पेमेंट गेटवे इंटीग्रेट किए, साथ ही Next.js से सर्वर-साइड-रेंडर्ड कस्टमर वेरिफ़िकेशन पेज बनाया",
        "Catalogue प्रोजेक्ट में वाउचर/सेल्स प्रोग्राम रूल इंजन डिज़ाइन किए (Java, Spring Boot), Node.js मॉड्यूल Java में माइग्रेट किए, और गलत ऑर्डर पकड़कर रीप्रोसेस करने के लिए Datadog + Coralogix ऑब्ज़र्वेबिलिटी लागू की",
      ],
      4: [
        "BNY Mellon के लिए बड़े पैमाने पर डेटा क्लीन्ज़िंग और ट्रांसफ़ॉर्मेशन ऑटोमेट करने वाले स्केलेबल REST API और PySpark डेटा-प्रोसेसिंग स्क्रिप्ट बनाए",
        "प्रदर्शन और क्रॉस-डिवाइस रिस्पॉन्सिवनेस के लिए React.js/MUI फ्रंट-एंड को ऑप्टिमाइज़ किया",
      ],
    },
  },
  projects: {
    title: "गैजेट्स और",
    titleHighlight: "बिल्ड्स",
    subtitle: "मेरे द्वारा तैयार किए गए प्रोजेक्ट्स और एप्लिकेशन",
    all: "सभी",
    items: {
      1: {
        title: "पॉकेट लाइब्रेरी",
        description:
          "सुरक्षित ऑथ, RBAC और डायनामिक कंटेंट मैनेजमेंट सिस्टम वाला ओपन-सोर्स ई-बुक प्लेटफ़ॉर्म",
      },
      2: {
        title: "ऐड-फ़्री YouTube व्यूअर",
        description: "विज्ञापनों के बिना साफ़ YouTube देखने का अनुभव",
      },
      3: {
        title: "मूवीलिस्ट ऐप",
        description: "सर्च और फ़िल्टरिंग वाला IMDB-स्टाइल मूवी डेटाबेस",
      },
      4: {
        title: "टू-फ़ैक्टर ऑथेंटिकेशन ऐप",
        description: "JWT और OTP वेरिफ़िकेशन वाला सुरक्षित ऑथेंटिकेशन सिस्टम",
      },
      5: {
        title: "एक्सपेंस स्प्लिटर",
        description: "स्वचालित गणना के साथ समूहों में खर्च बाँटना",
      },
      6: {
        title: "ग्रामीण हेल्थ केयर पोर्टल",
        description:
          "कॉलेज मेजर प्रोजेक्ट — योजना जानकारी, रियल-टाइम डॉक्टर उपलब्धता, वीडियो अटेंडेंस और इन्वेंटरी ट्रैकिंग वाला ग्रामीण स्वास्थ्य पोर्टल",
      },
      7: {
        title: "MERN URL शॉर्टनर",
        description:
          "कस्टम कोड, LRU-आधारित ऑटो-एक्सपायरी, रैंक और क्लिक ट्रैकिंग वाला प्रोडक्शन-रेडी URL शॉर्टनर",
      },
      8: {
        title: "क्रोम वेबसाइट वॉकथ्रू एक्सटेंशन",
        description:
          "Shadow DOM ओवरले से इंटरैक्टिव वॉकथ्रू लिखने/चलाने वाला MV3 एक्सटेंशन — JWT ऑथ, RBAC, Zod-वैलिडेटेड API और मज़बूत एलिमेंट टारगेटिंग",
      },
    },
  },
  certifications: {
    title: "पेशेवर",
    titleHighlight: "प्रमाणपत्र",
    subtitle: "Udemy और Coursera से सत्यापित क्रेडेंशियल्स",
    view: "देखें",
    dragHint: "प्रमाणपत्र देखने के लिए खींचें या तीरों का उपयोग करें",
    scrollLeft: "प्रमाणपत्र बाएँ स्क्रॉल करें",
    scrollRight: "प्रमाणपत्र दाएँ स्क्रॉल करें",
    verified: "सत्यापित क्रेडेंशियल",
    openCertificate: "प्रमाणपत्र खोलें",
    loadingPreview: "पूर्वावलोकन लोड हो रहा है…",
    previewUnavailable: "पूर्वावलोकन उपलब्ध नहीं",
  },
  education: {
    title: "अकादमिक",
    titleHighlight: "प्रशिक्षण",
    subtitle: "शैक्षिक पृष्ठभूमि और उपलब्धियाँ",
    keySubjects: "मुख्य विषय:",
    leadership: "नेतृत्व गतिविधियाँ:",
    items: [
      {
        degree: "कंप्यूटर साइंस इंजीनियरिंग में बी.टेक",
        institution:
          "राजीव गांधी मेमोरियल कॉलेज ऑफ इंजीनियरिंग एंड टेक्नोलॉजी (स्वायत्त)",
        year: "2020",
        gpa: "8.0 GPA",
        subjects: [
          "कंप्यूटर नेटवर्क",
          "डेटा स्ट्रक्चर और एल्गोरिदम",
          "ऑपरेटिंग सिस्टम",
          "एंड्रॉइड प्रोग्रामिंग",
          "सॉफ्टवेयर इंजीनियरिंग",
          "DBMS",
          "ऑब्जेक्ट ओरिएंटेड एनालिसिस एंड डिज़ाइन",
          "कंप्यूटर ग्राफ़िक्स",
          "कंपाइलर डिज़ाइन",
          "क्लाउड इन्फ़्रास्ट्रक्चर",
        ],
        leadership: [
          "RGMCET तकनीकी समिति के सदस्य (2019-2020)",
          "पर्यावरण जागरूकता टीम के सदस्य - NSS",
          "तकनीकी समन्वयक - अंतरराष्ट्रीय सम्मेलन 2019-2020, RGMCET",
        ],
      },
      {
        degree: "इंटरमीडिएट MPC",
        institution: "श्रीमती टेरेसा जूनियर कॉलेज",
        year: "2016",
        gpa: "9.5 GPA",
        subjects: ["गणित", "भौतिकी", "रसायन विज्ञान"],
      },
      {
        degree: "सेकेंडरी स्कूल सर्टिफ़िकेट (SSC)",
        institution: "डी पॉल हाई स्कूल",
        year: "कक्षा I-X",
        gpa: "9.3 GPA",
      },
    ],
  },
  contact: {
    title: "अगले",
    titleHighlight: "मिशन को कमीशन करें",
    subtitle: "आइए साथ मिलकर कुछ असाधारण बनाएँ",
    getInTouch: "संपर्क में रहें",
    email: "ईमेल",
    linkedin: "लिंक्डइन",
    github: "गिटहब",
    medium: "मीडियम",
    instagram: "इंस्टाग्राम",
    connectWithMe: "मुझसे जुड़ें",
    viewMyCode: "मेरा कोड देखें",
    readArticles: "मेरे लेख पढ़ें",
    followMe: "मुझे फ़ॉलो करें",
    name: "नाम",
    yourName: "आपका नाम",
    yourEmail: "आपका.ईमेल@example.com",
    message: "संदेश",
    tellMeAbout: "अपने प्रोजेक्ट के बारे में बताएँ...",
    send: "संदेश भेजें",
    sending: "भेजा जा रहा है...",
    success: "संदेश सफलतापूर्वक भेजा गया! मैं जल्द ही आपसे संपर्क करूँगा।",
    error: "संदेश भेजने में विफल। कृपया फिर से प्रयास करें।",
  },
  footer: {
    recognition: "मान्यता",
    builtWith: "के साथ बनाया गया",
    using: "Next.js, TypeScript, Tailwind CSS और Framer Motion का उपयोग करके",
    allRights: "सर्वाधिकार सुरक्षित।",
    awards: [
      "6× Star of the Sprint — Carrier (2025-2026)",
      "Impactful Award — Carrier 2026",
      "Best In Class Award (2025 & 2026) — Carrier",
      "Problem Solver — Mintbook",
      "Performer of the Quarter — BYJU'S",
      "Impactful Award 2025 — Carrier",
      "Best-in-Class Award 2026 — Carrier",
      "Bryant Award 2026 — Carrier",
    ],
  },
  common: {
    location: "हैदराबाद, भारत",
    originLocation: "कर्नूल, आंध्र प्रदेश",
  },
};

export const translations: Record<Language, Translations> = {
  en: en as unknown as Translations,
  te: te as unknown as Translations,
  hi: hi as unknown as Translations,
};
