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
    name: "CoreStack - Tetrish",
    value: "0.45 ms",
    unit: "p99",
    description: "p99 0.45 ms at 2,540 req/s, with zero dropped requests.",
    context: "254 concurrent TCP clients at 10 req/s each.",
    href: "https://github.com/JediNakDev/corestack",
  },
  {
    name: "WQ BRAIN",
    value: "#1 Singapore",
    unit: "Genius leaderboard · Q2 2026",
    description:
      "Simulated 228,549 alphas and submitted 304 signals. The best alpha reached 2.21 out-of-sample Sharpe and 2.05 out-of-sample fitness.",
    context: "WorldQuant BRAIN Genius leaderboard, Q2 2026.",
    href: "#experience",
  },
  {
    name: "QD - MADE BY AI",
    value: "792 ns",
    unit: "p99.9 decision latency · -74%",
    description:
      "Reduced tick-to-decision p99.9 latency at order-book depth 5 from 3,000 ns to 792 ns.",
    context: "Arbitrage engine, measured after 50,000 warmup iterations.",
    href: "#experience",
  },
];

export type Role = {
  org: string;
  orgUrl?: string;
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
    note: "LLM & simulation tooling",
    where: "Singapore",
    start: "2026-09",
    end: "2026-12",
    dates: "Sept - Dec 2026",
    current: true,
    lane: "work",
    summary:
      "Rebuilding a production threat-modeling app around composable subsystems, without breaking the projects already in it.",
    bullets: [
      "Refactoring a production web application: new frontend workflows and reusable UI components for a subsystem-based threat-modeling architecture.",
      "Redesigning the database schema so a project can hold several composable subsystems, while legacy projects and their users keep working.",
    ],
    stack: ["TypeScript", "PostgreSQL", "LLM tooling"],
  },
  {
    org: "WorldQuant BRAIN",
    orgUrl: "https://www.worldquantbrain.com/",
    title: "Quantitative Research Consultant",
    where: "Singapore, remote",
    start: "2025-05",
    end: "now",
    dates: "May 2025 - present",
    current: true,
    lane: "research",
    summary:
      "I built an end-to-end Python pipeline that generates alphas, backtests them through the WorldQuant BRAIN API, optimises variables with a genetic algorithm, and submits the top performers.",
    bullets: [
      "Simulated 228,549 alphas and submitted 304 signals; the best alpha reached 2.21 out-of-sample Sharpe and 2.05 out-of-sample fitness.",
      "Ranked #1 in Singapore on the Genius leaderboard in Q2 2026.",
    ],
    stack: ["Python", "DEAP", "pandas", "NumPy"],
  },
  {
    org: "MADE BY AI Co., Ltd.",
    title: "Quantitative Developer Intern",
    where: "Thailand, remote",
    start: "2025-09",
    end: "2026-01",
    dates: "Sept 2025 - Jan 2026",
    lane: "work",
    summary: "I first built a POC for cryptocurrency arbitrage using Python to verify that the concept was real and could be profitable.",
    bullets: [
      "I then built a module, a real-time market data service in Rust, to ingest L2 order books (top 20; API limit) from 2 crypto exchanges across 11 pairs of interest. The data was then published to ZeroMQ Pub/Sub (to the trading engine) and persisted through TimescaleDB.",
      "Finally, I migrated the arbitrage POC I built at first to Rust and optimised for lower latency."
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
      "A merch drop is a concurrency problem wearing a storefront. Limited stock, everyone arriving at once.",
    bullets: [
      "Built the DRF API for the HoYo FEST 2024 store with HoYoverse as the client, specified to handle 2,000+ concurrent users.",
      "Used row-level locks inside atomic transactions to stop oversell races on limited-stock drops.",
    ],
    stack: ["Django REST Framework", "PostgreSQL", "Celery"],
  },
  {
    org: "Association of Thai Students in Singapore",
    orgUrl: "https://www.atsis.org/",
    title: "Head of Information Technology",
    note: "promoted from full-stack developer",
    where: "Singapore, remote",
    start: "2024-09",
    end: "2026-08",
    dates: "Sept 2024 - Aug 2026",
    lane: "lead",
    summary:
      "Two years leading the volunteer engineering team behind the membership portal and newsletter.",
    bullets: [
      "Led 10+ developers across the membership portal and the newsletter system.",
      "Migrated the legacy API to tRPC for end-to-end type safety, which killed a recurring class of client/server contract bugs.",
    ],
    stack: ["TypeScript", "tRPC", "Next.js"],
  },
];

export type Project = {
  name: string;
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
    "name": "CoreStack - Tetrish",
    "year": "2026",
    "tagline": "Tetrish is a multiplayer terminal-based Tetris game we built from scratch in a group of three.",
    "url": "https://github.com/JediNakDev/corestack",
    "urlLabel": "github.com/JediNakDev/corestack",
    "bullets": [
      "We also needed to build another app where we shared core libraries to demonstrate software architecture skills.",
      "I owned a custom shell, UNIX-datagram logging daemon, HMAC-SHA256 token auth, stream-socket and pipe DB access.",
      "I also wrote a load test, held 254 TCP clients at 10 req/s, and made sure the program ran without deadlock, leak, or crash."
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
    "tagline": "Developed a Python numerical simulator solving coupled ODEs via custom time-stepping and matrix-based state propagation; produced trajectory analytics for cost/exergy efficiency across PCM materials.",
    "url": "https://github.com/JediNakDev/coupled-ode-sim",
    "urlLabel": "github.com/JediNakDev/coupled-ode-sim",
    "publicationUrl": "https://doi.org/10.1088/1742-6596/2653/1/012038",
    "bullets": [
      "Published in Journal of Physics: Conference Series (2023); DOI: 10.1088/1742-6596/2653/1/012038.",
      "Published while in high school."
    ],
    "stack": [
      "Python",
      "Numerical simulation"
    ]
  }
];

export const education = {
  school: "Singapore University of Technology and Design",
  degree: "B.Eng. Computer Science and Design",
  dates: "2024 - May 2028",
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
