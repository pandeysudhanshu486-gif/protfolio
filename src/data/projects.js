export const projectCategories = [
  "All",
  "AI",
  "Web",
  "Full Stack",
  "Healthcare",
  "Environmental",
  "Automation"
];

export const projectsData = [
  {
    id: "ai-interview-agent",
    name: "AI Technical Interview Agent",
    tagline: "Autonomous AI agent that conducts realistic technical coding interviews and provides actionable feedback.",
    category: "AI",
    featured: true,
    image: "/assets/images/projects/ai-interview.png",
    problem: "Engineering candidates struggle to get realistic, objective, and instant mock interview practice with structured technical feedback before real placement drives.",
    motivation: "I wanted to create an accessible tool that simulates real technical interviewers, asking follow-up DSA & system design questions while evaluating code clarity and efficiency.",
    solution: "Built a responsive web application powered by LLM API pipelines that evaluates code submissions, asks dynamic clarifying questions, and generates structured scorecard feedback.",
    architecture: "Frontend (React, Web Speech API) <-> State Management & API Layer <-> LLM API Gateway <-> Real-time Code Execution & Feedback Engine.",
    keyFeatures: [
      "Dynamic technical question generation based on candidate skill level",
      "Real-time code evaluation with time & space complexity analysis",
      "Interactive voice/text interview conversation flow",
      "Comprehensive performance breakdown report with actionable tips"
    ],
    techStack: ["React.js", "Node.js", "Express", "OpenAI API", "Web Speech API", "CSS3"],
    challenges: [
      {
        issue: "Managing conversation context without hitting token limits during long interview sessions.",
        resolution: "Implemented a sliding memory buffer and payload summarizer before dispatching API prompts."
      },
      {
        issue: "Ensuring low latency response during live mock interview audio/text stream.",
        resolution: "Optimized prompt engineering and integrated chunked streaming HTTP responses."
      }
    ],
    personalContribution: "Designed the full stack architecture, authored prompt templates for structured JSON outputs, and built the responsive candidate interface.",
    github: "https://github.com/pandeysudhanshu486-gif/AI-Interview-Agent",
    liveDemo: "https://github.com/pandeysudhanshu486-gif/AI-Interview-Agent",
    futureImprovements: [
      "Add live video analysis for candidate body language & posture feedback",
      "Support multi-language code compilers (C++, Python, Java)"
    ]
  },
  {
    id: "vayufusion-ai",
    name: "VAYUFUSION AI",
    tagline: "Air Quality Intelligence & Environmental Predictive Analytics Platform for Delhi NCR.",
    category: "AI",
    featured: true,
    image: "/assets/images/projects/vayufusion.png",
    problem: "Environmental data is often fragmented across multiple sensors, making it hard for citizens and urban planners to forecast AQI spikes effectively.",
    motivation: "Air pollution directly impacts public health in NCR. VAYUFUSION AI bridges sensor data with predictive analytics to offer actionable health warnings.",
    solution: "A unified dashboard providing real-time air quality indexing, predictive pollutant forecasting, and personalized health recommendations.",
    architecture: "Public Weather API / Sensor Stream -> Data Preprocessing & Aggregation -> Analytics Engine -> React Dashboard UI.",
    keyFeatures: [
      "Real-time AQI tracking across multiple cities and geographic coordinates",
      "Pollutant distribution breakdown (PM2.5, PM10, CO, NO2, O3)",
      "Smart health advice based on AQI severity and user vulnerability",
      "Interactive data visualization charts for historical trend analysis"
    ],
    techStack: ["React.js", "Python", "OpenWeatherMap API", "Recharts", "CSS Variables"],
    challenges: [
      {
        issue: "Handling missing historical sensor data points from third-party APIs.",
        resolution: "Created an automated data fallback pipeline with interpolation logic."
      }
    ],
    personalContribution: "Built the front-end visualization layout, connected real-time API polling, and designed dark-theme analytical cards.",
    github: "https://github.com/pandeysudhanshu486-gif/VayuFusion-AI",
    liveDemo: "https://github.com/pandeysudhanshu486-gif/VayuFusion-AI",
    futureImprovements: [
      "Integrate IoT physical sensor telemetry via MQTT",
      "Push notification alerts for critical AQI threshold breaches"
    ]
  },
  {
    id: "healthcare-ai",
    name: "Healthcare AI Assistant",
    tagline: "Intelligent clinical symptom guidance & medical preliminary triage platform.",
    category: "Healthcare",
    featured: true,
    image: "/assets/images/projects/healthcare.png",
    problem: "Patients frequently panic over minor symptoms or delay urgent care due to lack of immediate, trustworthy preliminary medical guidance.",
    motivation: "Engineered during academic exploration to evaluate how structured AI prompt pipelines can assist preliminary medical triage without substituting professional doctors.",
    solution: "An intuitive medical guidance assistant that gathers symptoms, assesses urgency risk, and suggests relevant medical specialist consultations.",
    architecture: "User Form Input -> Knowledge Base Retrieval (RAG) -> LLM Triage Guardrails -> Structured Health Insights Report.",
    keyFeatures: [
      "Interactive step-by-step symptom collector questionnaire",
      "Urgency level risk indicator (Low, Moderate, Urgent Emergency)",
      "Specialist recommendation engine (e.g., Neurologist, Cardiologist)",
      "Strict disclaimers and immediate emergency helpline quick actions"
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "Python", "RAG Pipeline", "CSS3"],
    challenges: [
      {
        issue: "Preventing AI hallucinations in critical health advisory scenarios.",
        resolution: "Enforced strict medical prompt guardrails and system constraints to disallow diagnostic claims."
      }
    ],
    personalContribution: "Implemented the front-end user experience, medical disclaimer popups, and structured recommendation cards.",
    github: "https://github.com/pandeysudhanshu486-gif",
    liveDemo: "https://github.com/pandeysudhanshu486-gif",
    futureImprovements: [
      "Multilingual support for rural healthcare accessibility",
      "Integration with local hospital bed availability APIs"
    ]
  },
  {
    id: "ai-resume-analyzer",
    name: "AI Resume Analyzer & ATS Matcher",
    tagline: "Automated candidate resume parsing, ATS scoring, and skill gap identification platform.",
    category: "Full Stack",
    featured: true,
    image: "/assets/images/projects/resume-analyzer.png",
    problem: "Students and job seekers struggle to know if their resume passes Applicant Tracking Systems (ATS) for specific software engineering roles.",
    motivation: "Created to help fellow Computer Science students optimize their resumes with data-backed keyword analysis and missing skill indicators.",
    solution: "A web app that parses uploaded PDF resumes, extracts skills, compares them against target job descriptions, and calculates an ATS match score.",
    architecture: "PDF Parser Utility -> Keyword & Entity Extractor -> Match Scoring Algorithm -> React Dashboard.",
    keyFeatures: [
      "PDF resume text extraction & keyword parsing",
      "Instant ATS match percentage calculation",
      "Missing critical skills & keywords highlights",
      "Actionable section-by-section improvement recommendations"
    ],
    techStack: ["React.js", "Node.js", "pdf-parse", "OpenAI API", "CSS Modules"],
    challenges: [
      {
        issue: "Parsing non-standard multi-column resume layouts accurately.",
        resolution: "Developed robust text extraction normalization rules to preserve section headers."
      }
    ],
    personalContribution: "Developed the full React front-end, drag-and-drop file upload zone, and scoring visualization gauge.",
    github: "https://github.com/pandeysudhanshu486-gif",
    liveDemo: "https://github.com/pandeysudhanshu486-gif",
    futureImprovements: [
      "AI PDF Resume rewrite suggestion generator",
      "Exportable formatted resume template builder"
    ]
  }
];
