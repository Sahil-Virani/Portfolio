export const personalInfo = {
  name: 'Sahil Virani',
  title: ['AI-Native Full-Stack & AI Systems Engineer', 'Stevens Institute of Technology | B.S. in CS, QF Minor — M.S. Finance (Expected May 2027)'],
  tagline:
    'Building production AI systems at the intersection of intelligent automation and financial decision-making.',
  location: 'Hoboken, NJ / New York Area',
  email: 'sahil.virani@outlook.com',
  linkedin: 'https://www.linkedin.com/in/sahil-virani9',
  github: 'https://github.com/Sahil-Virani',
  resume: '/Portfolio/Sahil_Virani_Resume_2026.pdf',
}

export const about = {
  paragraphs: [
    'I engineer AI-native systems that bridge full-stack engineering with intelligent automation. My work focuses on agentic workflows, LLM integration at production scale, and decision-support tools for financial technology. I hold a B.S. in Computer Science from Stevens Institute of Technology with a minor in Quantitative Finance, and am completing an Accelerated M.S. in Finance, providing deep technical and domain fluency across both disciplines.',
    'My background spans applied AI research, full-stack product engineering, and agentic workflow development. I have designed and shipped production AI features including multi-language voice transcription, real-time sentiment analysis, and human-AI collaboration pipelines, owning technical work end to end across backend, database, and AI layers.',
    'I target roles at the intersection of AI, technology, and finance in big tech, fintech, or quantitative research, building intelligent automation, risk-aware analytics, and financial decision-support systems that create measurable impact.'
  ]
}

export const projects = [
    {
    title: 'MarketMind AI',
    description:
      'Architected a full-stack AI equity research platform with a dual-mode pipeline: instant ticker-based memo generation and a 9-stage autonomous research agent that orchestrates Gemini API calls, yfinance financial data, and live news APIs to produce institutional-grade investment analysis. Engineered a confidence-loop LLM pipeline with dynamic hypothesis planning, multi-source evidence synthesis across up to 8 companies, and critic-loop scoring that iteratively refines outputs until quality thresholds are met. Built a real-time streaming frontend with SSE-powered live pipeline visualization and animated confidence scoring.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'Gemini API', 'yfinance', 'REST APIs', 'SSE'],
    github: 'https://github.com/Sahil-Virani/MarketMind-AI',
    live: null,
    highlight: 'Agentic AI Systems'
  },
  {
    title: 'CenterPlate',
    description:
      'Built a full-stack cross-platform mobile app for group meetup coordination and real-time restaurant voting. Engineered a custom smart midpoint algorithm scoring geospatial grid candidates via a weighted fairness function, and integrated the Foursquare Places API v3 with multi-tier fallback logic and real-time session sync via Socket.IO rooms with Firebase JWT authentication.',
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Firebase', 'Foursquare API'],
    github: null,
    live: 'https://youtu.be/Rru1T9ja-ns',
    highlight: 'Full-Stack Mobile'
  },
  {
    title: 'Sentari AI Journaling Platform',
    description:
      'Engineered end-to-end AI features for a production journaling platform: integrated GPT-4 for language-aware response generation, Whisper API for voice-to-text transcription across 170+ languages, and built sentiment-driven feature logic correlating user-reported and AI-inferred emotional patterns. Deployed via Docker with Supabase backend and 15+ REST APIs.',
    tech: ['Flask', 'Supabase', 'Docker', 'REST APIs', 'GPT-4', 'Whisper API', 'SQL'],
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
    highlight: 'Quant Finance'
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
      'Designed and implemented Python-based analysis pipelines to process conversational data from OpenAI-powered agent experiments, extracting patterns in human-AI decision-making and creativity across structured team interactions. Contributed to experimental design and evaluation methodology for ongoing research.',
    tech: ['Python', 'Excel', 'OpenAI API', 'Data Analysis', 'Experiment Design'],
    github: null,
    live: null,
    highlight: 'AI Research'
  },
  {
    title: 'This Portfolio',
    description:
      'Designed and built a responsive personal portfolio from scratch with Claude Code to present AI and finance-focused work with a clean, modern interface. Architected with reusable React components, a centralized data layer, and Framer Motion animations, deployed to GitHub Pages via a streamlined Vite build pipeline.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GitHub Pages', 'Claude Code', 'AI Tools'],
    github: 'https://github.com/Sahil-Virani/Portfolio',
    live: null,
    highlight: 'Full-Stack Web'
  },
  {
    title: 'Custom Unix-Like Mini Shell',
    description:
      'Implemented a Unix shell in C with built-in command execution, process control, signal handling, and I/O management. Demonstrates systems-level fluency and low-level engineering depth.',
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
    role: 'Artificial Intelligence Research Assistant',
    company: 'Stevens Institute of Technology',
    period: 'May 2025 – May 2026',
    description:
      'Analyzed conversational data from OpenAI-powered agent experiments to evaluate human-AI collaboration patterns across structured team interactions. Built Python-based pipelines to process and code experimental interaction data, identifying decision-making and creativity patterns across agent teams. Co-designed experiment evaluation methodology, improving analysis efficiency by 50%.'
  },
  {
    role: 'AI Software Engineering Intern',
    company: 'Sentari AI',
    period: 'August 2025 – September 2025',
    description:
      'Engineered production AI features for a live journaling platform: built GPT-4 language-aware response generation, Whisper voice transcription across 170+ languages, and sentiment-driven UI logic adapting to user emotional patterns. Designed and modified Supabase SQL schemas for new product features and deployed containerized services via Docker.'
  },
  {
    role: 'Information Technology Assistant',
    company: 'Stevens Institute of Technology',
    period: 'January 2025 – February 2026',
    description:
      'Administered cross-campus technology operations, delivering technical solutions across classroom and institutional systems. Streamlined operational workflows and reduced request resolution time by 20% through systematic troubleshooting and process improvements.'
  }
]

export const leadership = [
  {
    role: 'Vice President of Finance',
    organization: 'Alpha Sigma Phi',
    period: 'May 2025 – May 2026',
    description:
      'Directed chapter budgeting, financial planning, and fiscal operations using structured forecasting and reporting workflows. Oversaw financial accountability across the organization, aligning spending strategy with operational goals.'
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
    category: 'AI & Machine Learning',
    items: ['Agentic AI Systems', 'LLM Integration (GPT-4, Claude)', 'RAG Pipelines', 'Prompt Engineering', 'NLP Pipelines', 'TensorFlow', 'Keras', 'scikit-learn']
  },
  {
    category: 'Backend & Infrastructure',
    items: ['Node.js', 'Flask', 'REST APIs', 'C', 'C++', 'Docker', 'Supabase', 'SQL', 'MongoDB']
  },
  {
    category: 'Frontend',
    items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Expo']
  },
  {
    category: 'Developer Tools',
    items: ['Claude Code', 'VS Code', 'Codex', 'Cursor', 'Git', 'GitHub Actions', 'Android Studio', 'Expo Go']
  },
  {
    category: 'Data & Analytics',
    items: ['Python', 'Pandas', 'Microsoft Excel', 'NumPy', 'Matplotlib', 'Experimental Analysis']
  },
  {
    category: 'Finance Focus',
    items: ['Quantitative Finance', 'Financial Risk Management', 'Market Analysis', 'Forecasting', 'Decision Support']
  }
]