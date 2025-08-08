export type SocialLink = { label: string; href: string }
export type Profile = {
  name: string
  role: string
  tagline: string
  summary: string
  about: string
  phone?: string
  email?: string
  resumeUrl?: string
  socials: SocialLink[]
  githubReposUrl?: string
}

export const profile: Profile = {
  name: "Vinayaga Moorthy C",
  role: "Software Trainee",
  tagline: "Software Trainee at Infiniti Software Solutions",
  summary:
    "B.Tech IT graduate focused on building reliable, maintainable software. Interested in backend services, API design, and practical problem‑solving across the stack.",
  about:
    "I’m a Software Trainee at Infiniti Software Solutions. I focus on delivering clean, pragmatic solutions, collaborating with teams, and continually improving systems and developer experience. My interests span backend services, data, automation, and the occasional 3D/interactive work when it fits the product.",
  phone: "9360180429",
  email: "sarjuli12709@gmail.com",
  // This is a local file shipped with the site so 'Download CV' works out of the box.
  resumeUrl: "/files/resume.pdf",
  socials: [
    // Replace these with your exact profiles when ready
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  githubReposUrl: "https://github.com/",
}
