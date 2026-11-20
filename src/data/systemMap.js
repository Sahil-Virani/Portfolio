// Hand-routed transit map of Sahil's work.
// Every station a line stops at is a technology listed in the `tech` array of that
// line's project or experience entry in portfolioData.js (the Math line uses coursework). A line shows a
// subset of its stack; the full stack is in the project strip below the map.
// Geometry is octilinear (0°/45°/90°) on a 1080 x 700 canvas.

export const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const lines = [
  {
    id: 'M',
    name: 'MarketMind AI',
    project: 'MarketMind AI',
    color: '#e2231a',
    ink: '#ffffff',
    points: [[700, 70], [570, 70], [420, 220], [420, 640]]
  },
  {
    id: 'F',
    name: 'FitCheck AI',
    project: 'FitCheck AI',
    color: '#0039a6',
    ink: '#ffffff',
    points: [[320, 70], [450, 70], [600, 220], [600, 520]]
  },
  {
    id: 'E',
    name: 'Visual Escape Room',
    project: 'AI-Generated Visual Escape Room',
    color: '#ff6319',
    ink: '#111111',
    points: [[100, 190], [240, 190], [380, 330], [640, 330], [780, 190], [900, 190]]
  },
  {
    id: 'O',
    name: 'On The Clock',
    project: 'On The Clock',
    color: '#fccc0a',
    ink: '#111111',
    points: [[100, 486], [240, 486], [380, 346], [640, 346], [780, 486], [940, 486]]
  },
  {
    id: 'C',
    name: 'CenterPlate',
    project: 'CenterPlate',
    color: '#00933c',
    ink: '#ffffff',
    points: [[500, 520], [700, 520], [800, 620], [940, 620]]
  },
  {
    id: 'S',
    name: 'Sentari AI',
    project: 'Sentari AI Journaling Platform',
    experience: 'Software Engineering Intern',
    color: '#996633',
    ink: '#ffffff',
    points: [[100, 640], [660, 640]]
  },
  {
    id: 'R',
    name: 'AI Research',
    project: null,
    experience: 'Artificial Intelligence Research Assistant',
    color: '#00add0',
    ink: '#111111',
    points: [[320, 470], [540, 470]]
  },
  {
    id: 'Σ',
    name: 'Math line',
    project: null,
    color: '#b933ad',
    ink: '#ffffff',
    points: [[860, 230], [860, 580]]
  }
]

// kind: 'stop' | 'interchange' | 'capsule' (parallel-track interchange)
// label: [dx, dy, text-anchor]
export const stations = [
  { id: 'nextjs', label: 'Next.js', x: 700, y: 70, lines: ['M'], kind: 'stop', at: [16, 5, 'start'] },
  { id: 'gemini', label: 'Gemini API', x: 510, y: 130, lines: ['M', 'F'], kind: 'interchange', at: [-20, 5, 'end'] },
  { id: 'fastapi', label: 'FastAPI', x: 420, y: 338, lines: ['M', 'E', 'O'], kind: 'capsule', at: [22, 46, 'start'] },
  { id: 'python', label: 'Python', x: 420, y: 470, lines: ['M', 'R'], kind: 'interchange', at: [-16, -16, 'end'] },
  { id: 'expdesign', label: 'Experiment Design', x: 320, y: 470, lines: ['R'], kind: 'stop', at: [0, 30, 'middle'] },
  { id: 'openai', label: 'OpenAI API', x: 540, y: 470, lines: ['R'], kind: 'stop', at: [0, 30, 'middle'] },
  { id: 'rest', label: 'REST APIs', x: 420, y: 640, lines: ['M', 'S'], kind: 'interchange', at: [0, 40, 'middle'] },

  { id: 'playwright', label: 'Playwright', x: 320, y: 70, lines: ['F'], kind: 'stop', at: [-16, 5, 'end'] },
  { id: 'typescript', label: 'TypeScript', x: 600, y: 338, lines: ['F', 'E', 'O'], kind: 'capsule', at: [-22, -32, 'end'] },
  { id: 'react', label: 'React', x: 600, y: 420, lines: ['F'], kind: 'stop', at: [16, 5, 'start'] },
  { id: 'node', label: 'Node.js', x: 600, y: 520, lines: ['F', 'C'], kind: 'interchange', at: [0, 36, 'middle'] },

  { id: 'langgraph', label: 'LangGraph', x: 100, y: 190, lines: ['E'], kind: 'stop', at: [0, -20, 'start'] },
  { id: 'claude', label: 'Claude API', x: 172, y: 190, lines: ['E'], kind: 'stop', at: [0, 32, 'middle'] },
  { id: 'rag', label: 'Chroma / RAG', x: 900, y: 190, lines: ['E'], kind: 'stop', at: [16, 5, 'start'] },

  { id: 'duckdb', label: 'DuckDB', x: 100, y: 486, lines: ['O'], kind: 'stop', at: [0, 30, 'start'] },
  { id: 'polars', label: 'Polars', x: 200, y: 486, lines: ['O'], kind: 'stop', at: [0, 30, 'middle'] },
  { id: 'montecarlo', label: 'Monte Carlo', x: 860, y: 486, lines: ['O', 'Σ'], kind: 'interchange', at: [18, -18, 'start'] },
  { id: 'backtesting', label: 'Backtesting', x: 940, y: 486, lines: ['O'], kind: 'stop', at: [0, 30, 'middle'] },

  { id: 'mongodb', label: 'MongoDB', x: 500, y: 520, lines: ['C'], kind: 'stop', at: [0, 30, 'middle'] },
  { id: 'socketio', label: 'Socket.IO', x: 700, y: 520, lines: ['C'], kind: 'stop', at: [0, -18, 'middle'] },
  { id: 'reactnative', label: 'React Native', x: 940, y: 620, lines: ['C'], kind: 'stop', at: [0, 30, 'middle'] },

  { id: 'flask', label: 'Flask', x: 100, y: 640, lines: ['S'], kind: 'stop', at: [0, 30, 'start'] },
  { id: 'postgres', label: 'PostgreSQL', x: 220, y: 640, lines: ['S'], kind: 'stop', at: [0, 30, 'middle'] },
  { id: 'docker', label: 'Docker', x: 320, y: 640, lines: ['S'], kind: 'stop', at: [0, -18, 'middle'] },
  { id: 'gpt4', label: 'GPT-4 / Whisper', x: 660, y: 640, lines: ['S'], kind: 'stop', at: [0, 30, 'middle'] },

  { id: 'statistics', label: 'Statistics', x: 860, y: 230, lines: ['Σ'], kind: 'stop', at: [16, 5, 'start'] },
  { id: 'stochastic', label: 'Stochastic Calculus', x: 860, y: 320, lines: ['Σ'], kind: 'stop', at: [16, 5, 'start'] },
  { id: 'ml', label: 'Machine Learning', x: 860, y: 400, lines: ['Σ'], kind: 'stop', at: [16, 5, 'start'] },
  { id: 'compmethods', label: 'Computational Methods', x: 860, y: 580, lines: ['Σ'], kind: 'stop', at: [16, 5, 'start'] }
]

export const lineById = Object.fromEntries(lines.map((l) => [l.id, l]))
export const lineByProject = Object.fromEntries(
  lines.filter((l) => l.project).map((l) => [l.project, l])
)
export const lineByExperience = Object.fromEntries(
  lines.filter((l) => l.experience).map((l) => [l.experience, l])
)

// Display name for a line: its project, else its role, else the Math line.
export const lineLabel = (l) => l.project ?? (l.experience ? l.name : 'Math line')
