"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from 'lucide-react'
import HeroScene from "./three/hero-scene"
import { profile } from "@/content/profile"
import { smoothScrollTo } from "@/lib/scroll"

type HeroProps = {
  heading?: string
  subheading?: string
}

export default function Hero({
  heading = `I'm ${profile.name}`,
  subheading = profile.tagline,
}: HeroProps) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-12 md:py-24">
        <div className="relative z-10">
          <p className="mb-2 text-sm text-muted-foreground">Hello</p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{heading}</h1>
          <p className="mt-2 font-medium">{subheading}</p>
          <p className="mt-4 max-w-prose text-muted-foreground md:text-lg">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button onClick={() => smoothScrollTo("projects")} aria-label="Go to projects">
              See projects
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://drive.google.com/file/d/1IxaYIdukGRFrQTT3LgT0nLeT0Rw8pu64/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                aria-label="Download CV"
              >
                <Download className="mr-2 size-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[320px] md:h-[420px] lg:h-[520px] overflow-visible">
          <HeroScene />
        </div>
      </div>
    </div>
  )
}
