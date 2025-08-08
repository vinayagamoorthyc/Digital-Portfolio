export type SkillItem = {
  name: string
  level: number // 0-100
}

export type SkillCategory = {
  name: string
  items: SkillItem[]
}

export const skillsCategories: SkillCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "PHP", level: 70 },
      { name: "Python", level: 75 },
      { name: "Go", level: 55 },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Three.js (R3F)", level: 70 },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 60 },
      { name: "WebSockets", level: 70 },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "Vercel", level: 90 },
      { name: "Docker", level: 70 },
      { name: "GitHub Actions", level: 70 },
      { name: "CI/CD", level: 75 },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", level: 75 },
      { name: "Redis", level: 65 },
      { name: "MongoDB", level: 65 },
      { name: "Prisma (ORM)", level: 75 },
    ],
  },
  {
    name: "Testing & Quality",
    items: [
      { name: "Jest", level: 70 },
      { name: "Playwright", level: 60 },
      { name: "ESLint", level: 85 },
      { name: "Prettier", level: 85 },
    ],
  },
]
