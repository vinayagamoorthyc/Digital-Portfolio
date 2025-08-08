import SectionHeader from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Github, Mail, Phone, FolderGit2, Download } from 'lucide-react'
import Image from "next/image"
import { profile } from "@/content/profile"

export default function AboutSection() {
return (
<div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
<div>
<SectionHeader title="About Me" subtitle="Who I am and what I focus on." />
<div className="mt-6 flex items-start gap-6">
<div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border transform origin-center scale-[1.2]">
  <Image
    src="/images/profile.png"
    alt="Portrait of Vinayaga Moorthy C"
    fill
    className="object-cover"
    sizes="128px"
    priority
  />
</div>
<div className="space-y-3">
  <h3 className="text-xl font-semibold">{profile.role}</h3>
  <p className="text-muted-foreground">{profile.about}</p>
  <div className="flex flex-wrap items-center gap-3 pt-2">
    {profile.phone && (
      <a
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:underline"
        href="tel:9360810429"
      >
        <Phone className="size-4 text-emerald-600" />
        {"9360810429"}
      </a>
    )}
    {profile.email && (
      <a
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:underline"
        href="mailto:sanjaiiti2709@gmail.com"
      >
        <Mail className="size-4 text-emerald-600" />
        {"sanjaiiti2709@gmail.com"}
      </a>
    )}
  </div>
  <div className="flex flex-wrap gap-2">
    {profile.socials.map((s) => {
      const href =
        s.label === "GitHub"
          ? "https://github.com/vinayagamoorthyc"
          : s.label === "LinkedIn"
          ? "https://www.linkedin.com/in/vinayaga-moorthy-c-bb8284276/"
          : s.href
      return (
        <Button key={s.label} variant="secondary" size="sm" asChild>
          <a href={href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        </Button>
      )
    })}
    {profile.githubReposUrl && (
      <Button size="sm" variant="outline" asChild>
        <a
          href="https://github.com/vinayagamoorthyc?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <FolderGit2 className="mr-2 size-4" />
          Git Repositories
        </a>
      </Button>
    )}
    <Button size="sm" asChild>
      <a
        href="https://drive.google.com/file/d/1IxaYIdukGRFrQTT3LgT0nLeT0Rw8pu64/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <Download className="mr-2 size-4" />
        Download CV
      </a>
    </Button>
  </div>
</div>
</div>
</div>

<Card>
<CardHeader>
<CardTitle>Snapshot</CardTitle>
</CardHeader>
<CardContent className="space-y-4 text-sm">
<div className="flex items-start gap-3">
  <Briefcase className="mt-0.5 size-4 text-emerald-600" />
  <div>
    <div className="font-medium">Current</div>
    <div className="text-muted-foreground">Software Trainee at Infiniti Software Solutions</div>
  </div>
</div>
<div className="flex items-start gap-3">
  <MapPin className="mt-0.5 size-4 text-emerald-600" />
  <div>
    <div className="font-medium">Location</div>
    <div className="text-muted-foreground">Chennai, Tamil Nadu, India</div>
  </div>
</div>
<div className="flex items-start gap-3">
  <Download className="mt-0.5 size-4 text-emerald-600" />
  <div>
    <div className="font-medium">Education</div>
    <div className="text-muted-foreground">B. Tech IT Graduate</div>
  </div>
</div>
</CardContent>
</Card>
</div>
)
}
