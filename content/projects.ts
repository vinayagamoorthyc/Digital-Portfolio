export type ProjectItem = {
  title: string
  blurb: string
  image: string
  repoUrl?: string
  liveUrl?: string
  demoUrl?: string
}

export const projects: ProjectItem[] = [
  {
    title: "PowerLend App",
    blurb: "Browse, reserve, and schedule tool rentals with a streamlined UI.",
    image: "/powerlend-app-ui.png",
    repoUrl: "https://github.com/",
    liveUrl: "https://example.com",
  },
  {
    title: "Personalized ChatBot",
    blurb: "AI assistant that adapts using GitHub context for personalized answers.",
    image: "/personalized-chatbot-ui.png",
    repoUrl: "https://github.com/",
    liveUrl: "https://example.com",
  },
  {
    title: "Smart Mirror",
    blurb: "A mirror enhanced with modular digital features and integrations.",
    image: "/smart-mirror-electronics.png",
    repoUrl: "https://github.com/",
    demoUrl: "https://example.com",
  },
  {
    title: "LiBook App",
    blurb: "A simple e‑library to explore categories and read content easily.",
    image: "/elib-app-screenshot.png",
    repoUrl: "https://github.com/",
    liveUrl: "https://example.com",
  },
]
