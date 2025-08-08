'use client'

import React from 'react'
import SectionHeader from '@/components/section-header'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { projects } from '@/content/projects'
import { Github, ExternalLink, Hammer, Bot, BookOpen, Wrench, Puzzle } from 'lucide-react'
import { cn } from '@/lib/utils'

function getIconFor(title: string) {
  const t = title.toLowerCase()
  if (t.includes('power') || t.includes('tool')) return <Wrench className="size-5 text-muted-foreground" />
  if (t.includes('chat')) return <Bot className="size-5 text-muted-foreground" />
  if (t.includes('book') || t.includes('lib')) return <BookOpen className="size-5 text-muted-foreground" />
  if (t.includes('smart') || t.includes('mirror')) return <Puzzle className="size-5 text-muted-foreground" />
  return <Hammer className="size-5 text-muted-foreground" />
}

function repoLinkFor(title: string, fallback?: string) {
  const t = title.toLowerCase()
  if (t.includes('power') || t.includes('powertools')) return 'https://github.com/vinayagamoorthyc/PowerToolsRental'
  if (t.includes('chatbot')) return 'https://github.com/vinayagamoorthyc/Personal-ChatBot'
  if (t.includes('libook') || t.includes('ebook')) return 'https://github.com/vinayagamoorthyc/LiBook_ebook'
  return fallback ?? '#'
}

function liveLinkFor(title: string, fallback?: string) {
  const t = title.toLowerCase()
  if (t.includes('powertools') || t.includes('powerlend') || t.includes('power')) return 'https://powertoolsrental.vercel.app/'
  if (t.includes('libook') || t.includes('ebook')) return 'https://libook-library.vercel.app'
  if (t.includes('chatbot')) return 'https://personalised-chatbot.vercel.app'
  return fallback
}

/**
 * A neutral, modern card with:
 * - subtle gradient ring on hover
 * - soft elevation and lift
 * - grayscale icons and neutral chips
 * - no colored backgrounds
 */
export default function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 md:py-28">
      <SectionHeader title="My Projects" subtitle="Selected work with repositories and live links." />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((p) => {
          const repo = repoLinkFor(p.title, p.repoUrl)
          const live = liveLinkFor(p.title, p.liveUrl || p.demoUrl)
          const hasLive = Boolean(live)

          return (
            <Card
              key={p.title}
              className={cn(
                'group relative overflow-hidden rounded-2xl border bg-background/60 backdrop-blur-sm transition-all',
                'hover:-translate-y-1 hover:shadow-lg'
              )}
            >
              {/* Subtle top gradient accent (neutral) */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-neutral-200/80 to-transparent dark:via-neutral-800/80" />

              {/* Radial hover glow (very soft, neutral) */}
              <div className="pointer-events-none absolute -inset-x-10 -top-24 h-48 rounded-full bg-[radial-gradient(closest-side,_rgba(120,120,120,0.10),_transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border bg-muted/40 ring-1 ring-border">
                    {getIconFor(p.title)}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold leading-tight tracking-tight">
                      {p.title}
                    </h3>

                    {/* Optional neutral tags if provided in content */}
                    {Array.isArray((p as any).tags) && (p as any).tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {(p as any).tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="rounded-full border px-2 py-0.5 text-[11px] text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <p className="mt-4 line-clamp-4 text-sm text-muted-foreground">
                  {p.blurb}
                </p>
              </CardContent>

              <CardFooter className="flex flex-wrap items-center gap-2 px-6 pb-6 pt-0">
                {repo && repo !== '#' && (
                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <a href={repo} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} repository`}>
                      <Github className="size-4" />
                      Repository
                    </a>
                  </Button>
                )}

                {hasLive && (
                  <Button asChild size="sm" variant="ghost" className="gap-2">
                    <a href={live!} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} live site`}>
                      <ExternalLink className="size-4" />
                      Live
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
