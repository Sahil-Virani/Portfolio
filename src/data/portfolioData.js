export const personalInfo = {
  name: 'Sahil Virani',
  title: ['AI Engineer & Full-Stack Builder', 'Stevens Institute of Technology · B.S. Computer Science, Quantitative Finance minor · M.S. Financial Engineering, September 2026 – Fall 2027'],
  tagline:
    'I ship production AI systems end to end: agents, APIs, databases and interfaces, backed by a mathematical foundation in statistics, stochastic calculus and machine learning.',
  location: 'Hoboken, NJ / New York Area',
  email: 'sahil.virani@outlook.com',
  linkedin: 'https://www.linkedin.com/in/sahil-virani9',
  github: 'https://github.com/Sahil-Virani',
  resume: "/Portfolio/Sahil%20Virani's%20Resume.pdf",
}

export const about = {
  paragraphs: [
    'I build AI-native software end to end: agentic workflows, LLM integration at production scale, and the full-stack products around them. I hold a B.S. in Computer Science from Stevens Institute of Technology with a minor in Quantitative Finance, and I am completing an M.S. in Financial Engineering, finishing in Fall 2027.',
    'My background spans applied AI research, full-stack product engineering, and agentic workflow development. I have shipped production AI features including multi-language voice transcription and real-time sentiment analysis, built multi-agent and self-evaluating LLM pipelines, and won 1st place at the Google Developer Groups and Vonage AI Fashion Hackathon, owning technical work end to end across backend, database, and AI layers.',
    'That graduate work gives my engineering a mathematical spine: stochastic calculus, statistics, machine learning and computational methods. I use it to evaluate models honestly, reason about uncertainty, and build systems whose outputs can be measured. I am looking for AI engineering and full-stack roles, in any industry, where that combination creates measurable impact.'
  ],
  certifications: [
    'AWS Certified AI Practitioner',
    'AWS Certified Cloud Practitioner',
    'Claude 101',
    'Claude Code 101',
    'Claude Developer Platform',
    'Anthropic MCP',
    'Bloomberg Market Concepts'
  ],
  awards: [
    'Edwin A. Stevens Scholarship',
    'Charles Suffel Scholarship',
    'Rising Star in IT 2025',
    "Dean's List"
  ]
}

export const projects = [
  {
    title: 'MarketMind AI',
    role: 'Founder',
    description:
      'Architected a full-stack AI equity research platform pairing a synchronous FastAPI path that returns investment memos in under a second with a 9-stage autonomous research agent orchestrating Gemini, yfinance market data, and live news APIs in parallel. Engineered a self-evaluating LLM pipeline where a critic model scores evidence 0–100 against structured rubrics and triggers up to 2 targeted refinement passes, synthesizing across up to 8 companies per run. Built a real-time streaming frontend with SSE-powered live pipeline visualization and animated per-stage confidence scoring.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'Gemini API', 'yfinance', 'REST APIs', 'SSE'],
    github: 'https://github.com/Sahil-Virani/MarketMind-AI',
    live: null,
    highlight: 'Agentic AI Systems'
  },
  {
    title: 'FitCheck AI',
    description:
      'Won 1st place among 15+ teams at the Google Developer Groups and Vonage AI Fashion Hackathon with a real-time multiplayer AI fit-check game. Architected a server-authoritative platform across 16 REST endpoints where revision-stamped Vonage signals carry no game state, so clients re-fetch and discard stale data instead of being trusted. Hardened the Gemini judging path with retry, cross-model fallback, and neutral-score degradation so one API failure cannot stall a live session, with Zod schemas shared as the LLM output contract and on-device MediaPipe pose guidance. Verified by 17 unit and 3 Playwright end-to-end tests covering concurrent submissions, deadline races, and score leakage.',
    tech: ['TypeScript', 'React', 'Node.js', 'Express', 'Zod', 'Gemini API', 'Vonage Video API', 'MediaPipe', 'Playwright'],
    github: 'https://github.com/Sahil-Virani/GDG-Hackathon',
    live: null,
    highlight: '1st Place Hackathon Winner'
  },
  {
    title: 'CenterPlate',
    description:
      'Shipped a cross-platform React Native app for group meetup coordination and real-time restaurant voting, launched to 30+ beta users across 43 REST endpoints. Synced concurrent voting sessions over Socket.IO rooms with Firebase JWT auth on both HTTP and WebSocket connections. Designed a geospatial midpoint algorithm scoring candidates against a 1,000-city hub dataset on an 85/15 weighting of travel fairness to population-weighted hub proximity, then ranking venues via the Foursquare Places API v3 with multi-tier fallback logic.',
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Firebase', 'Foursquare API'],
    github: null,
    live: 'https://youtu.be/Rru1T9ja-ns',
    highlight: 'Full-Stack Mobile'
  },
  {
    title: 'AI-Generated Visual Escape Room',
    description:
      'Built a playable escape room game where a multi-agent LLM pipeline generates a themed, visually consistent room for every session, complete with real puzzles, a hint economy, and a post-game "Room Autopsy" screen. Orchestrated 6 specialist Claude agents (lore, style, puzzle architect, continuity, gatekeeper, narrator) across 2 LangGraph graphs with parallel branching, using tool-calling and JSON schemas so agents exchange typed objects rather than prose. Grounded generation with RAG over 3 Chroma vector collections for lore, style, and per-session solutions.',
    tech: ['Python', 'LangGraph', 'Claude API', 'FastAPI', 'Chroma', 'RAG', 'React', 'TypeScript'],
    github: null,
    live: null,
    highlight: 'Multi-Agent AI'
  },
  {
    title: 'On The Clock',
    description:
      'Built a fantasy football draft and lineup assistant combining a FastAPI analytics engine with a React draft board UI. Evolved the recommendation engine from a VOR baseline and ~10,000-run Monte Carlo simulation of pick availability into plan-based valuation that projects each pick\'s effect on the full remaining draft, fixing a diagnosed one-step-lookahead bias. Built a historical backtesting harness with no-lookahead and no-survivorship-bias discipline, a mock draft simulator with ADP-noise bots, and a reproducible pipeline crosswalking nflverse (2012–2025), FantasyPros, and Sleeper data into DuckDB.',
    tech: ['FastAPI', 'Python', 'React', 'TypeScript', 'DuckDB', 'Polars', 'Monte Carlo Simulation', 'Backtesting'],
    github: 'https://github.com/Sahil-Virani/on-the-clock',
    live: null,
    highlight: 'Data-Driven Decision Tools'
  },
  {
    title: 'Sentari AI Journaling Platform',
    description:
      'Shipped 15+ production REST endpoints powering voice transcription, multilingual NLP, and sentiment analysis for a live journaling platform serving both an iOS app and a web client. Built a runtime model-routing layer selecting GPT-4 or Whisper from live language detection, extending transcription coverage to 170+ languages, and sentiment-driven feature logic correlating user-reported and AI-inferred emotional patterns. Containerized with Docker over PostgreSQL (Supabase).',
    tech: ['Flask', 'PostgreSQL', 'Supabase', 'Docker', 'REST APIs', 'GPT-4', 'Whisper API'],
    github: null,
    live: null,
    highlight: 'AI Product Engineering'
  },
  {
    title: 'Stock Market Prediction Model',
    description:
      'Designed and trained an LSTM neural network on 8 years of Yahoo Finance data to forecast equity price trends. Implemented time-series windowing, normalization, and data preprocessing pipelines to improve predictive accuracy, achieving an RMSE of 2.451. Analyzed model behavior to surface patterns in short-term market movement and volatility.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Matplotlib', 'Yahoo Finance API'],
    github: 'https://github.com/Sahil-Virani/Sahil-Projects/blob/main/MarketPredictionModel.ipynb',
    live: null,
    highlight: 'Time-Series ML'
  },
  {
    title: 'Fake News Detector',
    description:
      'Built a text classification pipeline to distinguish real from fake news using TF-IDF vectorization and a PassiveAggressive classifier. Trained on a labeled dataset of real-world articles with a focus on feature extraction, preprocessing, and model evaluation at scale.',
    tech: ['Python', 'scikit-learn', 'TfidfVectorizer', 'Pandas', 'Jupyter Notebook'],
    github: 'https://github.com/Sahil-Virani/Sahil-Projects/blob/main/FakeNewsDetector.ipynb',
    live: null,
    highlight: 'ML / NLP'
  },
  {
    title: 'AI Human Collaboration Research',
    description:
      'Engineered Python pipelines that processed and behaviorally coded 100+ multi-turn transcripts from OpenAI-powered agent experiments into quantitative decision-making and creativity measures. Co-designed evaluation methodology and success metrics for a controlled study of generative AI\'s effect on group decisions across 60+ participants, and authored a reproducible annotation schema that improved analysis efficiency by 50%.',
    tech: ['Python', 'Excel', 'OpenAI API', 'Data Analysis', 'Experiment Design'],
    github: null,
    live: null,
    highlight: 'AI Research'
  },
  {
    title: 'This Portfolio',
    description:
      'Designed and built this portfolio with Claude Code to present AI and full-stack work as a hand-routed transit map: projects as lines, technologies as stations. Built from reusable React components over a centralized data layer, with a Framer Motion draw-in, deployed to GitHub Pages via a Vite build pipeline.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GitHub Pages', 'Claude Code', 'AI Tools'],
    github: 'https://github.com/Sahil-Virani/Portfolio',
    live: null,
    highlight: 'Full-Stack Web'
  },
  {
    title: 'Custom Unix-Like Mini Shell',
    description:
      'Implemented a Unix shell in C with built-in command execution, process control via fork/exec, signal handling, and I/O management. Demonstrates systems-level fluency and low-level engineering depth.',
    tech: ['C', 'Unix', 'Process Management', 'Signals', 'Systems Programming'],
    github: 'https://github.com/Sahil-Virani/Sahil-Projects/blob/main/minishell.c',
    live: null,
    highlight: 'Systems & Infrastructure'
  },
  {
    title: 'Multiplayer Trivia Game Application',
    description:
      'Built a concurrent multiplayer trivia game in C using socket programming, handling real-time gameplay, multi-client communication, and runtime reliability under concurrent load.',
    tech: ['C', 'Socket Programming', 'Networking', 'Error Handling'],
    github: 'https://github.com/Sahil-Virani/Sahil-Projects/blob/main/trivia.zip',
    live: null,
    highlight: 'Systems & Infrastructure'
  }
]

export const experience = [
  {
    role: 'Software Engineering Intern',
    company: 'Sentari AI',
    period: 'June 2025 – August 2025',
    bullets: [
      'Developed LLM response generation, voice transcription, and sentiment analysis for a live AI journaling app on iOS and web by shipping 15+ production REST endpoints as containerized Docker services over PostgreSQL',
      'Built a model-routing layer that directs each request to GPT-4 or Whisper based on real-time language detection, powering AI voice transcription across 170+ languages',
      'Delivered AI-driven features, including sentiment-adaptive UI, from spec to production overnight while keeping all 15+ endpoints backward compatible by evolving SQL schemas alongside each release'
    ],
    tech: ['Flask', 'PostgreSQL', 'Supabase', 'Docker', 'REST APIs', 'SQL', 'GPT-4', 'Whisper API'],
    line: 'S'
  },
  {
    role: 'Artificial Intelligence Research Assistant',
    company: 'Stevens Institute of Technology — Professor Yan',
    period: 'May 2025 – May 2026',
    bullets: [
      'Co-designed evaluation methodology and success metrics for a controlled study of generative AI\'s effect on group decisions across 60+ participants over multiple sessions',
      'Implemented Python pipelines that processed and coded 100+ transcripts of study participants collaborating with AI agents into quantitative decision-making and creativity measures',
      'Authored a reproducible annotation schema across the full corpus, improving analysis efficiency by 50%'
    ],
    tech: ['Python', 'OpenAI API', 'Experiment Design', 'Data Analysis'],
    line: 'R'
  },
  {
    role: 'Information Technology Assistant',
    company: 'Stevens Institute of Technology',
    period: 'January 2025 – February 2026',
    bullets: [
      'Served as a front-line technical partner to 150+ faculty and students, restoring A/V, conferencing, and network service',
      'Turned recurring support requests into standardized troubleshooting and escalation playbooks, cutting average resolution time by 20%',
      'Recognized as a Rising Star in IT 2025'
    ],
    tech: ['Networking', 'A/V Systems', 'Conferencing Systems', 'Escalation Playbooks']
  }
]

export const leadership = [
  {
    role: 'Vice President of Finance',
    organization: 'Alpha Sigma Phi',
    period: 'May 2025 – May 2026',
    description:
      'Directed chapter budgeting, financial planning, and fiscal operations for a five-figure budget across 30+ members, using structured forecasting and reporting workflows. Oversaw financial accountability across the organization, aligning spending strategy with operational goals.'
  },
  {
    role: 'President & Co-Editor',
    organization: 'The Link — Stevens Yearbook',
    period: 'September 2022 – May 2025',
    description:
      'Led a cross-functional team of 20+ in an agile-inspired production workflow to design, develop, and publish a 400+ page annual yearbook. Owned project planning, team coordination, and editorial quality from concept through final print.'
  }
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++', 'SQL', 'Go', 'R']
  },
  {
    category: 'AI & LLM Engineering',
    items: ['Agentic Pipelines', 'Multi-Agent Orchestration', 'RAG', 'LLM Evaluation & Critic Loops', 'Prompt Engineering', 'Tool Calling', 'Model Context Protocol (MCP)', 'LangChain', 'LangGraph', 'GPT-4', 'Claude', 'Gemini', 'Claude Code', 'Codex', 'Cursor']
  },
  {
    category: 'Mathematics & Quantitative Methods',
    items: ['Stochastic Calculus', 'Statistics', 'Machine Learning', 'Computational Methods', 'Monte Carlo Simulation', 'Time-Series Forecasting', 'Optimization']
  },
  {
    category: 'Machine Learning & Data',
    items: ['TensorFlow', 'Keras', 'scikit-learn', 'LSTM & Time-Series Forecasting', 'NLP', 'Pandas', 'NumPy', 'Polars', 'Matplotlib']
  },
  {
    category: 'Backend & Frontend',
    items: ['FastAPI', 'Node.js', 'Express', 'Flask', 'React', 'Next.js', 'React Native', 'Tailwind CSS', 'REST APIs', 'Server-Sent Events', 'WebSockets']
  },
  {
    category: 'Data & Infrastructure',
    items: ['PostgreSQL', 'MongoDB', 'DuckDB', 'Supabase', 'Chroma', 'Docker', 'AWS', 'Git', 'GitHub Actions', 'CI/CD', 'pytest', 'Vitest', 'Playwright']
  }
]
