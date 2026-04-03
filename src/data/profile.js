export const profile = {
  name: "Aarti Kumari",
  tagline: "Ex-PayPal Software Engineer 2 · MS CS @ UMass Amherst · Incoming AI Intern @ Dell",
  location: "Amherst, MA · USA",
  summary:
    "I am a Master's student in Computer Science at UMass Amherst (GPA 3.95, expected Dec 2026) with 7+ years of experience as a software developer at PayPal, Altimetrik, and Dell EMC. I build reliable backend and data systems and am now focused on applying machine learning, LLMs, and responsible AI to real-world products.",
  links: {
    email: "aarti16995@gmail.com",
    phone: "+1 (551) 358 4431",
    github: "https://github.com/swanky-rt",
    linkedin: "https://www.linkedin.com/in/aarti-kumari-rt95",
    website: "https://aartikumari.netlify.app",
    resume: "/Aarti_Kumari_Resume.pdf"
  },
  education: [
    {
      school: "University of Massachusetts Amherst",
      degree: "M.S. in Computer Science",
      period: "Expected Dec 2026",
      gpa: "3.95",
      details:
        "Coursework: Machine Learning, Reinforcement Learning, Artificial Intelligence, Trustworthy & Responsible AI, Applied Statistics, Algorithms for Data Science, Database Implementation & Design, Computing for Digital Biomarkers in Healthcare."
    },
    {
      school: "West Bengal College of Engineering and Technology, India",
      degree: "B.Tech in Electronics & Communications Engineering",
      period: "Aug 2012 - May 2016",
      gpa: "8.7/10.0",
      details:
        "Coursework: OOPS, DBMS, Java, C, Data Structures, Design Patterns, Satellite Communication."
    }
  ],
  skills: [
    {
      category: "Programming & Scripting",
      icon: "code",
      items: [
        "Java", "Python", "R", "Shell Scripting", "OOP",
        "Data Structures & Algorithms", "Design Patterns", "Ansible"
      ]
    },
    {
      category: "ML & AI",
      icon: "brain",
      items: [
        "Machine Learning", "Temporal GNNs", "GraphSAGE",
        "Deep Learning", "Neural Networks", "Reinforcement Learning",
        "GenAI", "NLP", "RAG", "SLM", "LLM"
      ]
    },
    {
      category: "Frameworks & Tools",
      icon: "tools",
      items: [
        "Microservices", "PyTorch", "TensorFlow",
        "Scikit-learn", "FastAPI", "Flask", "Apache Spark",
        "Elasticsearch", "Lucene", "Solr", "REST API", "GraphQL",
        "Spring Boot", "Docker", "Jenkins", "Git", "Splunk", "Datadog",
        "Distributed Systems", "CI/CD"
      ]
    },
    {
      category: "Databases",
      icon: "database",
      items: [
        "MySQL", "PostgreSQL", "Hive", "Snowflake", "MongoDB",
        "Query Optimization", "Data Pipelines", "Block Nested Loop", "Buffer Manager"
      ]
    }
  ],
  experience: [
    {
      company: "Dell Technologies",
      role: "Graduate AI Intern (Incoming)",
      location: "Hopkinton, MA",
      period: "Summer 2026",
      highlights: [
        "Applying expertise in AI, ML, LLMs and Distributed Systems to drive next generation AI-powered product initiatives and research within Dell's AI & Data organization."
      ]
    },
    {
      company: "PayPal",
      role: "Software Engineer 2",
      location: "Bengaluru, India",
      period: "Sep 2022 - Aug 2024",
      highlights: [
        "Re-engineered post-payment pipelines using multi-threaded concurrency, reduced latency from 10X to 3X with improved throughput and fault tolerance for 436M+ active accounts; boosted integration test coverage to 95%.",
        "Led NFC payment backend for the wallet domain via REST APIs & Spring Boot; enabled secure offline transactions and reinforced payment security, driving 12% revenue gains across Europe.",
        "Built Top Contacts Recommendation system using Learning-to-Rank (LTR) models, improving prediction accuracy by 86%.",
        "Received formal recognition from PayPal Director for Send-Money core services optimization; enhanced 27% system efficiency.",
        "Inducted, mentored and trained 4 juniors on Send-Money end to end flows to strengthen PayPal's live support team."
      ]
    },
    {
      company: "Altimetrik",
      role: "Senior Software Engineer",
      location: "Bengaluru, India",
      period: "Jun 2021 - Aug 2022",
      highlights: [
        "Implemented six post-payment modules with improved fault tolerance, throughput and performance by 60%.",
        "Delivered Collections and Risk APIs and integrated ML models, including a Delinquency Prediction Model using Spring Boot and REST APIs to flag high-risk accounts with 96% accuracy."
      ]
    },
    {
      company: "Dell EMC",
      role: "Software Developer",
      location: "Bengaluru, India",
      period: "May 2017 - Jun 2021",
      highlights: [
        "Engineered Voyager platform provisioning using Python, Ansible, and iDRAC APIs with a 92% reduction in configuration time; earned the 2020 Spot Award for delivering the Voyager fast-configuration backend.",
        "Validated SRM solution packs (MS-SQL, Oracle-SQL, MySQL, Hypervisor) via Dockerized Jenkins CI/CD pipelines cutting manual QA effort by 75% and enabling continuous nightly builds."
      ]
    }
  ],
  projects: [
    {
      name: "UAI Dream AI Hackathon - Finalist",
      link: "https://github.com/Yuhwa-L/UAI-U_And_I",
      period: "Cambridge, June 2025",
      tech: ["Java", "Spring Boot", "React", "Flask", "NLP", "CNN", "OCR"],
      summary:
        "Led design of AI-powered matchmaking platform with OCR (Tesseract) for KYC, CNN embeddings (90% accuracy) for face validation, and Transformer NLP + Jaccard similarity for compatibility scoring. Reinforced security with GPS validation, Maps API, and Twilio real-time alerts; awarded Top 10 Finalist among 100+ teams."
    },
    {
      name: "Temporal Graphs for Relational Data",
      link: "https://github.com/swanky-rt/Research-paper--Temporal-graph",
      tech: ["Python", "PyTorch", "Temporal GNNs", "RelBench"],
      summary:
        "Built Relational DB-to-Temporal Graph pipelines on Rel-Bench (Rel-Amazon 24M+ rows) with efficient sampling for time-stamped graph conversion. Developed dynamic graph updates, memory-efficient GNN training; benchmarked GraphSAGE vs TGNNs achieving 15-17% accuracy gain."
    },
    {
      name: "Relational Database Engine (BNL + B+ Trees)",
      link: "https://github.com/swanky-rt/main",
      tech: ["Java", "Databases", "Query Engine"],
      summary:
        "Built a mini relational database engine with Block Nested Loop joins and B+ Tree indexing, supporting optimized selection, projection, and join operators along with buffer management and query planning."
    },
    {
      name: "EduPilot - Responsible Job Interview Tutor",
      link: "https://github.com/your-edupilot-link",
      tech: ["Python", "LLMs", "Privacy", "Federated Learning"],
      summary:
        "Led multiple submodules of an industry-sponsored project for responsible, privacy-preserving job interview preparation: synthetic dataset generation, membership inference attacks, DP-SGD vs baseline comparisons, federated learning, and misalignment/backdoor analyses."
    }
  ],
  research: [
    {
      title: "Temporal Graph Neural Networks & Relational-to-Graph Pipelines",
      role: "Research Assistant - UMass Amherst (Prof. Marco Serafini)",
      period: "June 2025 - Present",
      link: "https://github.com/swanky-rt/Research-paper--Temporal-graph",
      description:
        "Built Relational DB-to-Temporal Graph pipelines on Rel-Bench (Rel-Amazon 24M+ rows) with efficient sampling for time-stamped graph conversion and faster predictions. Developed dynamic graph updates, memory-efficient GNN training; benchmarked GraphSAGE vs TGNNs achieving 15-17% accuracy gain.",
      topics: [
        "Temporal GNNs",
        "Graph Sampling",
        "Relational Data Modeling",
        "Evaluation Pipelines"
      ]
    },
    {
      title: "Open-Ended DPR Generation in the Wild",
      role: "AI Research Extern - IBM, 698DS UMass Industry Mentorship Program",
      period: "January 2026 - Present",
      link: null,
      description:
        "Designed multi-stage pipeline: clustering-based table discovery, LLM-driven DPR synthesis, SQL grounding with execution feedback, and metric-based evaluation (coverage, diversity, complexity, surprisal) over large heterogeneous data lakes. Strengthened SQL reliability via execution-aware self-correction and hallucination mitigation across 500+ table scale experiments.",
      topics: [
        "LLM-driven Synthesis",
        "SQL Grounding",
        "Data Product Requests",
        "Hallucination Mitigation"
      ]
    }
  ]
};
