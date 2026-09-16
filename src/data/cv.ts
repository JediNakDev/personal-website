export const person = {
  name: "Pitchayut Ariyachansil",
  short: "Pitchayut",
  handle: "JediNakDev",
  role: "Software engineer & quantitative developer",
  location: "Singapore",
  from: "Bangkok, Thailand",
  email: "pitch.jedi@gmail.com",
  phone: "+65 8402 1712",
  github: "https://github.com/JediNakDev",
  linkedin: "https://www.linkedin.com/in/pitchayut-ariyachansil/",
  site: "pitchayut-ariyachansil.web.app",
  seeking:
    "Open to software engineering and quant developer internships at quant firms from May 2027.",
};

/** One-sentence thesis, reused as the meta description everywhere. */
export const thesis =
  "I build trading infrastructure and systems software: Rust market-data services, C systems code, and Python automation.";

export const benchmarkContext = "All benchmarks are done on a local machine, MacBook Air (M2, 2022), RAM: 16 GB.";

export const highlights = [
  {
    name: "CoreStack / Tetrish",
    value: "0.45 ms",
    unit: "p99",
    description: "p99 0.45 ms at 2,540 req/s, with zero dropped requests.",
    context: "254 concurrent TCP clients at 10 req/s each.",
    href: "/projects/corestack/",
  },
  {
    name: "WQ BRAIN",
    value: "#1 Singapore",
    unit: "Genius leaderboard · Q2 2026",
    description:
      "Simulated 228,549 alphas and submitted 304 signals. The best alpha reached 2.21 out-of-sample Sharpe and 2.05 out-of-sample fitness.",
    context: "WorldQuant BRAIN Genius leaderboard, Q2 2026.",
    href: "/work/wq-brain/",
  },
  {
    name: "QD: MADE BY AI",
    value: "709 ns",
    unit: "p99.9 decision latency · -92.7%",
    description:
      "Reduced tick-to-decision p99.9 latency at order-book depth 5 from 9,666 ns to 709 ns.",
    context: "Arbitrage engine, measured after 50,000 warmup iterations.",
    href: "/work/made-by-ai/",
  },
];

export type Role = {
  org: string;
  orgUrl?: string;
  /** Internal detail page. Present only for roles that have one. */
  pageUrl?: string;
  title: string;
  note?: string;
  where: string;
  start: string; // ISO-ish, for the trace lanes
  end: string | "now";
  dates: string;
  current?: boolean;
  lane: "work" | "research" | "lead";
  summary: string;
  bullets: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    org: "CyberSG R&D Programme Office",
    orgUrl: "https://www.ntu.edu.sg/crpo",
    title: "Full Stack Software Engineer Intern",
    where: "Singapore",
    start: "2026-09",
    end: "2026-12",
    dates: "Sept - Dec 2026",
    current: true,
    lane: "work",
    summary:
      "Rebuilding a production threat-modeling app around composable subsystems while maintaining legacy projects.",
    bullets: [],
    stack: ["React", "Django", "MongoDB"],
  },
  {
    org: "WorldQuant BRAIN",
    orgUrl: "https://www.worldquantbrain.com/",
    pageUrl: "/work/wq-brain",
    title: "Quantitative Research Consultant",
    where: "Singapore, remote",
    start: "2025-05",
    end: "now",
    dates: "May 2025 - present",
    current: true,
    lane: "research",
    summary:
      "Built an end-to-end Python pipeline that generates alphas, backtests them through the WorldQuant BRAIN API, optimises variables with a genetic algorithm, and submits the top performers.",
    bullets: [
      "Simulated 228,549 alphas and submitted 304 signals; the best alpha reached 2.21 out-of-sample Sharpe and 2.05 out-of-sample fitness.",
      "Ranked #1 in Singapore on the Genius leaderboard in Q2 2026.",
    ],
    stack: ["Python", "DEAP", "pandas", "NumPy"],
  },
  {
    org: "MADE BY AI Co., Ltd.",
    pageUrl: "/work/made-by-ai",
    title: "Quantitative Developer Intern",
    where: "Thailand, remote",
    start: "2025-09",
    end: "2026-01",
    dates: "Sept 2025 - Jan 2026",
    lane: "work",
    summary:
      "Built a real-time market data service in Rust that ingests L2 order books (depth 20) from 2 crypto exchanges across 11 pairs, publishes the data over ZeroMQ Pub/Sub, and persists it to TimescaleDB; paired with an arbitrage engine that consumes the ZeroMQ feed, makes a decision, and fires an order.",
    bullets: [
      "Timed the fetcher's tick-to-publish path at 74 µs p50 and 99 µs p99, with the p99.9 tail held to 120 µs.",
      "Cut the engine's tick-to-decision p99.9 at depth 5 from 9,666 ns to 709 ns, a 92.7% drop, by taking the hot path from 36 allocations down to zero.",
    ],
    stack: ["Rust", "Tokio", "ZeroMQ", "TimescaleDB"],
  },
  {
    org: "Unixdev Co., Ltd.",
    orgUrl: "https://www.unixdev.co.th/",
    title: "Backend Software Engineer",
    where: "Thailand",
    start: "2024-03",
    end: "2024-08",
    dates: "March - Aug 2024",
    lane: "work",
    summary:
      "Built the DRF API behind the HoYo FEST 2024 store, with HoYoverse as the client, specced to hold 2,000+ concurrent users through the drop.",
    bullets: [],
    stack: ["Django REST Framework", "PostgreSQL", "Celery"],
  },
];

export type Project = {
  name: string;
  /** Internal detail page. Present only for projects that have one. */
  pageUrl?: string;
  year: string;
  tagline: string;
  url?: string;
  urlLabel?: string;
  award?: string;
  publicationUrl?: string;
  bullets: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    "name": "CoreStack / Tetrish",
    "pageUrl": "/projects/corestack",
    "year": "2026",
    "tagline": "Wrote a shared C systems layer (UNIX-datagram logging daemon, HMAC-SHA256 token auth, stream-socket and pipe DB access) used by two separate applications, a multiplayer Tetris server and an e-voting system, and load-tested it at 254 concurrent TCP clients at 10 req/s, sustaining throughput with no deadlocks, leaks, or crashes.",
    "url": "https://github.com/JediNakDev/corestack",
    "urlLabel": "github.com/JediNakDev/corestack",
    "bullets": [
      "Held steady state at 254 concurrent clients pushing 10 req/s each (2,540 req/s) at 0.3 ms p50, 0.45 ms p99, and 0.55 ms p99.9, without dropping a request.",
      "Found the saturation knee near 30k req/s, past which p50 degrades by more than an order of magnitude."
    ],
    "stack": [
      "C",
      "POSIX sockets",
      "pthreads"
    ]
  },
  {
    "name": "Coupled ODE Simulation Engine",
    "year": "2023",
    "tagline": "Wrote a Python simulator that solves coupled ODEs with custom time-stepping and matrix-based state propagation, then turned the resulting trajectories into cost and exergy efficiency comparisons across PCM materials.",
    "url": "https://github.com/JediNakDev/coupled-ode-sim",
    "urlLabel": "github.com/JediNakDev/coupled-ode-sim",
    "publicationUrl": "https://doi.org/10.1088/1742-6596/2653/1/012038",
    "bullets": [],
    "stack": [
      "Python",
      "Numerical simulation"
    ]
  }
];

export const education = {
  school: "Singapore University of Technology and Design",
  degree: "B.Eng. Computer Science and Design",
  dates: "Sept 2024 - May 2028",
  where: "Singapore",
  gpa: "4.86 / 5.00",
  award: "ASEAN Undergraduate Scholarship",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Networks",
    "Database Systems",
    "Software Engineering",
  ],
  exchange: {
    school: "Zhejiang University",
    dates: "Sept - Dec 2025",
    note: "Fall exchange",
    where: "Hangzhou, China",
  },
  upcomingExchange: {
    school: "University of California",
    dates: "Starting Jan 2027",
    note: "Spring exchange",
    where: "California, United States",
    coursework: ["Stochastic Processes", "Time Series Analysis"],
  },
};

export const skills = [
  { group: "Languages", items: ["Python", "Rust", "C++", "C", "SQL", "TypeScript", "Java"] },
  {
    group: "Backend",
    items: [
      "Django",
      "Django REST Framework",
      "Celery",
      "ZeroMQ",
      "PostgreSQL",
      "TimescaleDB",
      "Redis",
    ],
  },
  { group: "Tools", items: ["Linux", "Docker", "Git", "GitHub Actions", "pytest"] },
];

export const contact = [
  { label: "Email", value: person.email, href: `mailto:${person.email}` },
  { label: "GitHub", value: "JediNakDev", href: person.github },
  { label: "LinkedIn", value: "pitchayut-ariyachansil", href: person.linkedin },
  { label: "Phone", value: person.phone, href: "tel:+6584021712" },
];
