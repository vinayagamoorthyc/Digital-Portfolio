type SectionHeaderProps = {
  title?: string
  subtitle?: string
  align?: "left" | "center"
}

export default function SectionHeader({
  title = "Section Title",
  subtitle = "Optional subtitle explaining the section.",
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="text-muted-foreground mt-2">{subtitle}</p> : null}
    </div>
  )
}
