export const PRODUCTS = {
  reserva: { name: "Reserva", url: "https://reserva.aldavix.com" },
  husaya: { name: "Husaya", url: "https://husaya.vercel.app/" },
};

export const profile = {
  title: "Senior Software Engineer",
  tagline: "AI-augmented full-stack engineering",
  summary:
    "Senior engineer across mobile (Android and iOS), web and serverless cloud. Has led mobile teams, and now works full-stack and applies AI engineering in production.",
};

export const experience: {
  role: string;
  points: string[];
}[] = [
  {
    role: "Senior Software Engineer",
    points: [
      "Full-stack delivery of web, mobile and serverless cloud platforms: React and TypeScript front ends, event-driven backends and native Android.",
      "Built public APIs, notifications, search and reporting features for production systems.",
      "Built automated end-to-end testing and CI/CD pipelines, and brought AI tooling into daily engineering workflows.",
    ],
  },
  {
    role: "Senior Mobile Engineer / Android Tech Lead",
    points: [
      "Developed native mobile apps across Android (Java and Kotlin) and iOS (Objective-C and Swift).",
      "Led Android in a mobile team: technical sizing, releases to Google Play and enterprise customers.",
      "Ran Android training and onboarding for new engineers.",
    ],
  },
  {
    role: "Associate Technical Specialist",
    points: [
      "Started in web development, then helped build a cross-platform mobile framework.",
      "Lead developer on cross-platform mobile projects.",
    ],
  },
];

export const aiWork: { title: string; text: string }[] = [
  {
    title: "AI-assisted testing",
    text: "Generating and repairing automated tests from code changes, with fixes reviewed by a human before they land.",
  },
  {
    title: "Retrieval-augmented agents",
    text: "Policy-aware assistants backed by a managed knowledge base.",
  },
  {
    title: "AI coding workflows",
    text: "Shared context, custom skills and specialized agents for planning, code review and QA.",
  },
  {
    title: "LLM evaluation",
    text: "Reproducible, scored experiments that decide what to build and what to reject.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "Kotlin", "Java", "Swift", "Python", "SQL", "GraphQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Redux Toolkit", "MUI", "Tailwind CSS", "Vite"] },
  { group: "Mobile", items: ["Android", "Jetpack Compose", "Hilt", "Room", "iOS"] },
  { group: "Cloud and backend", items: ["AWS CDK", "Lambda", "AppSync", "DynamoDB", "SQS and SNS", "Cognito", "OpenSearch", "PostgreSQL", "Prisma", "Firebase"] },
  { group: "AI", items: ["Claude Code", "MCP", "RAG", "AWS Bedrock", "Agentic workflows", "LLM evaluation"] },
  { group: "Testing and DevOps", items: ["Playwright", "Jest", "Vitest", "GitHub Actions", "OIDC", "Feature flags"] },
];

export const education = {
  degree: "Bachelor's Degree, Information Technology",
};

export const projects: {
  name: string;
  kind: string;
  text: string;
  stack: string[];
  url?: string;
  status?: string;
}[] = [
  {
    name: PRODUCTS.reserva.name,
    kind: "SaaS product",
    text: "Multi-tenant online booking for appointment businesses. Per-business booking pages, calendar management and a chat-style search on the landing page.",
    stack: ["Next.js", "PostgreSQL", "Tailwind", "Playwright"],
    url: PRODUCTS.reserva.url,
    status: "Live",
  },
  {
    name: PRODUCTS.husaya.name,
    kind: "Platform",
    text: "A skills learning platform that issues certificates employers can verify.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    url: PRODUCTS.husaya.url,
    status: "Live",
  },
  {
    name: "Chili & Chewy",
    kind: "Client project",
    text: "Booking and management app for an event planning and styling business. Clients send inquiries, get a booking link, pay and track their booking online. Admins manage packages, rentals and a per-event workspace.",
    stack: ["Next.js", "Firebase", "Tailwind", "Cloudinary"],
    url: "https://chili-and-chewy.vercel.app/",
    status: "Live",
  },
  {
    name: "Chili & Chewy Team Payroll",
    kind: "Client project · Web and Android app",
    text: "Attendance and payroll app for the Chili & Chewy team. Staff clock in and out and file reimbursements; admins approve entries and run payroll. The web app has a companion Android app.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Kotlin"],
  },
  {
    name: "Michivo",
    kind: "Platform",
    text: "An educational game platform where kids build real-world skills through mini-games. Parents manage child profiles, consent and progress from a dashboard.",
    stack: ["Next.js", "Firebase", "Tailwind"],
    url: "https://michivo.vercel.app/",
    status: "Live",
  },
  {
    name: "Aldavix Leads",
    kind: "Internal tool",
    text: "Inquiry inbox that receives website form submissions through an intake API, with statuses and manual entry.",
    stack: ["Next.js", "PostgreSQL", "Vitest"],
  },
];

export const person = {
  name: "Jomark Aldave",
  photo: "/founder.jpg",
  // Fill these in before deploying. Empty values are hidden.
  email: "",
  linkedinUrl: "https://www.linkedin.com/in/jomark-aldave-439ba7a2",
  githubUrl: "https://github.com/jaldave",
  studio: { name: "Aldavix", url: "https://aldavix.com" },
};
