"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { profile } from "@/content/profile"
import { smoothScrollTo } from "@/lib/scroll"
import { useCallback } from "react"

type NavProps = {
  name?: string
}

export default function Nav({ name = profile.name }: NavProps) {
  const items = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ]

  const onNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    smoothScrollTo(id)
    history.replaceState(null, "", `#${id}`)
  }, [])

  return (
    <nav className="container mx-auto flex h-14 items-center justify-between px-4">
      <a href="#home" onClick={(e) => onNavClick(e, "home")} className={cn("font-semibold tracking-tight")}>
        {name}
      </a>
      <div className="hidden gap-1 sm:flex">
        {items.map((it) => (
          <Button key={it.href} asChild variant="ghost" size="sm">
            <a href={it.href} onClick={(e) => onNavClick(e, it.id)}>{it.label}</a>
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button asChild size="sm">
          <a
            href="https://drive.google.com/file/d/1IxaYIdukGRFrQTT3LgT0nLeT0Rw8pu64/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </Button>
      </div>
    </nav>
  )
}
