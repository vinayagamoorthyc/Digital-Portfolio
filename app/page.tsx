import Nav from "@/components/nav"
import Hero from "@/components/hero"
import AboutSection from "@/components/sections/about"
import ProjectsSection from "@/components/sections/projects"
import { Button } from "@/components/ui/button"
import { Github, Mail } from 'lucide-react'
import { profile } from "@/content/profile"

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background scroll-smooth">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <Nav />
      </header>

      <main className="flex-1">
        <section id="home" className="relative scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="container mx-auto px-4 py-20 md:py-28 scroll-mt-24">
          <AboutSection />
        </section>

        <ProjectsSection />

        <section id="contact" className="container mx-auto px-4 py-16 md:py-24 scroll-mt-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact</h2>
            <p className="text-muted-foreground mt-2">
              Have a project in mind or just want to say hi? Let’s talk.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href={profile.email ? `mailto:${profile.email}` : "#"} aria-label="Email me">
                  <Mail className="mr-2 size-4" />
                  Email me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/vinayagamoorthyc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="mr-2 size-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-muted-foreground">
          <p>{"© "}{new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
