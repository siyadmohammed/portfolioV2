import { profile } from "@/content";

const NAV = [
  { href: "#experience", index: "01", label: "Experience" },
  { href: "#work", index: "02", label: "Work" },
  { href: "#contact", index: "03", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-sm font-medium tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Sections">
          <ul className="flex items-center gap-5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="group flex items-baseline gap-1.5">
                  <span className="hidden font-mono text-[11px] text-accent sm:inline">
                    {item.index}
                  </span>
                  <span className="link-draw">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
