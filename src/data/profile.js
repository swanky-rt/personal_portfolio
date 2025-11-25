export const profile = {
  name: "Aarti Kumari",
  tagline: "Ex-PayPal Software Engineer 2 · MS CS (Data Science) @ UMass Amherst",
  location: "Amherst, MA · USA",
  summary:
    "I am a Master’s student in Computer Science at UMass Amherst (GPA 3.9, expected Dec 2026) with a Data Science concentration and 7+ years of experience as a software developer at PayPal, Altimetrik, and Dell EMC. I love building reliable backend and data systems and am now focused on applying machine learning and responsible AI to real-world products.",
  links: {
    email: "akumari@umass.edu",
    github: "https://github.com/swanky-rt",
    linkedin: "https://www.linkedin.com/in/aarti-kumari-rt95",
    website: "https://aartikumari.netlify.app",
    resume: "/Aarti_Kumari_Resume.pdf"
  },
  education: [
    {
      school: "University of Massachusetts Amherst",
      degree: "M.S. in Computer Science (Data Science concentration)",
      period: "Expected Dec 2026",
      details:
        "GPA: 3.9. Coursework: 589 – Machine Learning; 687 – Reinforcement Learning; 690F – Responsible & Trustworthy AI; 645 – Database Design and Implementation; 514 – Algorithms for Data Science; 501 – Applied Methods in Statistics."
    },
    {
      school: "West Bengal College of Engineering and Technology, India",
      degree: "B.Tech. in Electronics & Communications",
      period: "Aug 2012 – May 2016",
      details:
        "GPA: 8.7/10.0. Relevant coursework: OOPS, DBMS, Core Java, C, Data Structures, Design Patterns, Satellite Communication."
    }
  ],
  skills: [
    {
      category: "Programming & Scripting",
      items:
        "Java, Python, R, Shell scripting (Linux/UNIX); strong foundation in Data Structures & Algorithms, Object-Oriented Programming, Design Patterns, and Ansible."
    },
    {
      category: "ML & AI",
      items:
        "Machine Learning, Deep Learning, Neural Networks, Reinforcement Learning, Temporal Graph Neural Networks, GraphSAGE, NLP, LLMs, RAG, GenAI, Small Language Models (SLMs), and Responsible/Trustworthy AI."
    },
    {
      category: "Frameworks, Tools & Systems",
      items:
        "PyTorch, TensorFlow, scikit-learn, FastAPI/Flask, REST APIs, GraphQL, Spring Boot, Docker, Jenkins, Git, Splunk, Datadog, multithreading, concurrency, distributed systems, CI/CD, microservices."
    },
    {
      category: "Databases & Data Systems",
      items:
        "MySQL, PostgreSQL, Snowflake, MongoDB; query optimization, ETL/data pipelines, Block Nested Loop joins, buffer management, and relational-to-graph transformations."
    }
  ],
  experience: [
    {
      company: "PayPal",
      role: "Software Engineer 2 – Post-Payment & Wallet",
      location: "Bengaluru, India",
      period: "Sep 2022 – Aug 2024",
      highlights: [
        "Re-engineered post-payment pipelines with multi-threaded concurrency, cutting latency from 10× to 3× and improving throughput and fault tolerance for 436M+ active accounts.",
        "Increased end-to-end integration test coverage to ~95%, improving confidence in critical wallet and post-payment deployments.",
        "Led and implemented the NFC payment backend for the wallet domain using Spring Boot and REST APIs, enabling secure offline transactions and contributing to measurable revenue gains across the Europe region.",
        "Built a Top Contacts recommendation feature using Learning-to-Rank models, improving prediction quality by roughly 86%.",
        "Received formal recognition from a PayPal Director for optimizing Send Money core services and mentored juniors on end-to-end P2P flows, observability, and best practices."
      ]
    },
    {
      company: "Altimetrik",
      role: "Senior Software Engineer – Payments & Risk",
      location: "Bengaluru, India",
      period: "Jun 2021 – Aug 2022",
      highlights: [
        "Implemented six post-payment modules with improved fault tolerance, throughput, and performance, achieving up to 60% gains in some flows.",
        "Delivered collections and risk APIs and integrated ML models—including a delinquency prediction model using Spring Boot and REST APIs—to flag high-risk accounts with around 96% accuracy.",
        "Enhanced monitoring and alerting so that risk and collections systems were easier to debug, safer to iterate on, and more transparent for stakeholders."
      ]
    },
    {
      company: "Dell EMC",
      role: "Software Developer – Storage & Automation",
      location: "Bengaluru, India",
      period: "May 2017 – Jun 2021",
      highlights: [
        "Engineered Voyager platform provisioning with Python, Ansible, and iDRAC APIs, achieving about a 92% reduction in configuration time and earning a 2020 Spot Award for the fast-configuration backend.",
        "Developed VPLEX UI integrations with REST v2 handlers using Java and AngularJS, enriching management UI functionality for enterprise storage customers.",
        "Validated SRM solution packs (MS-SQL, Oracle-SQL, MySQL, Hypervisor) via Dockerized Jenkins CI/CD pipelines, cutting manual QA effort by roughly 75% and enabling reliable nightly builds."
      ]
    }
  ],
  projects: [
    {
      name: "UAI Dream AI Hackathon — Finalist",
      link: "https://github.com/Yuhwa-L/UAI-U_And_I",
      tech: ["Java", "Python", "Spring Boot", "React", "Flask", "NLP", "CV"],
      summary:
        "Co-designed an AI-powered matchmaking platform using Spring Boot REST APIs, React, and Flask microservices. Implemented OCR (Tesseract) for KYC, CNN-based face validation (~92% accuracy), and Transformer-based NLP with Jaccard similarity for compatibility scoring. Strengthened platform security with GPS validation, Maps APIs, and Twilio-based alerts; selected as a Top 10 finalist among 100+ teams."
    },
    {
      name: "Temporal Graphs for Relational Data",
      link: "https://github.com/swanky-rt/Research-paper--Temporal-graph",
      tech: ["Python", "PyTorch", "Temporal GNNs", "RelBench"],
      summary:
        "Implemented relational-to-temporal-graph pipelines on RelBench datasets (e.g., Rel-Amazon with 24M+ rows) and evaluated GraphSAGE versus Temporal GNNs, achieving 15–17% accuracy gains while designing efficient sampling and training strategies for large dynamic graphs."
    },
    {
      name: "Relational Database Engine (BNL + B+ Trees)",
      link: "https://github.com/swanky-rt/main",
      tech: ["Java", "Databases", "Query Engine"],
      summary:
        "Built a mini relational database engine with Block Nested Loop joins and B+ Tree indexing, supporting optimized selection, projection, and join operators along with buffer management and query planning concepts from database implementation coursework."
    },
    {
      name: "EduPilot – Responsible Job Interview Tutor (Course/Capstone)",
      link: "https://github.com/your-edupilot-link",
      tech: ["Python", "LLMs", "Privacy", "Federated Learning", "Evaluation"],
      summary:
        "Led multiple submodules of an industry-sponsored project for responsible, privacy-preserving job interview preparation: synthetic dataset generation, membership inference attacks, DP-SGD vs baseline comparisons, federated learning (FedAvg/FedMedian/FedSGD), and misalignment/backdoor analyses with filtering defenses and detailed evaluation on privacy, utility, and latency."
    }
  ],
  research: [
    {
      title: "Temporal Graph Neural Networks & Relational-to-Graph Pipelines",
      role: "Research Assistant – UMass Amherst (Prof. Marco Serafini)",
      description:
        "Explores efficient pipelines to transform large relational datasets into temporal graphs and apply Temporal GNN models. Focuses on sampling strategies, dynamic graph updates, and memory-efficient training while benchmarking GraphSAGE vs Temporal GNNs on RelBench-style tasks.",
      topics: [
        "Temporal GNNs",
        "Graph sampling",
        "Relational data modeling",
        "Evaluation pipelines"
      ]
    },
    {
      title: "Responsible & Trustworthy AI Coursework Projects",
      role: "Graduate Coursework – UMass Amherst (690F)",
      description:
        "Hands-on projects around DP-SGD, membership inference, federated learning (FedAvg/FedMedian/FedSGD), and misalignment attacks/defenses on code-generation LLMs, including backdoor fine-tuning and filtering defenses with detailed evaluation on privacy, utility, safety, and token-level behavior.",
      topics: [
        "Differential Privacy",
        "Federated Learning",
        "LLM Safety",
        "Misalignment & Defenses"
      ]
    }
  ]
};
