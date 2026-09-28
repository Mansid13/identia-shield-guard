import { Link, useRouterState } from "@tanstack/react-router";
import { Archive, Bell, Fingerprint, LayoutDashboard, Menu, ScanSearch, Share2, ShieldCheck, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Identity Core", to: "/identity-core", icon: Fingerprint },
  { label: "Identity Graph", to: "/identity-graph", icon: Share2 },
  { label: "Shadow Check", to: "/shadow-check", icon: ScanSearch },
  { label: "Evidence Locker", to: "/evidence-locker", icon: Archive },
] as const;

export function IdentiaMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="IDENTIA home">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground shadow-sm">
        <Fingerprint className="size-5" />
      </span>
      {!compact && <span className="font-display text-[17px] font-bold text-sidebar-foreground">IDENTIA</span>}
    </Link>
  );
}

export function AppShell({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[248px_1fr]">
      {mobileOpen && <div className="fixed inset-0 z-40 bg-primary/35 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />}
      <aside className={cn("fixed inset-y-0 left-0 z-50 flex w-[248px] flex-col bg-sidebar px-4 py-5 transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0", mobileOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex items-center justify-between px-2">
          <IdentiaMark />
          <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X /></Button>
        </div>
        <div className="mt-10 px-3 text-[10px] font-bold uppercase text-sidebar-foreground/50">Workspace</div>
        <nav className="mt-3 space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className={cn("flex h-11 items-center gap-3 rounded-md px-3 text-sm font-semibold transition-colors", active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/68 hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground")}>
                <item.icon className={cn("size-[18px]", active && "text-sidebar-primary")} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto rounded-lg border border-sidebar-border bg-sidebar-accent/50 p-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-sidebar-foreground"><ShieldCheck className="size-4 text-sidebar-primary" />Identity protected</div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sidebar-border"><div className="h-full w-[78%] rounded-full bg-sidebar-primary" /></div>
          <p className="mt-2 text-[11px] text-sidebar-foreground/55">Protection score 78%</p>
        </div>
        <div className="mt-4 flex items-center gap-3 border-t border-sidebar-border px-2 pt-4">
          <div className="grid size-9 place-items-center rounded-full bg-plum text-xs font-bold text-primary-foreground">MR</div>
          <div className="min-w-0"><p className="truncate text-xs font-semibold text-sidebar-foreground">Maya Rivera</p><p className="text-[10px] text-sidebar-foreground/50">Personal workspace</p></div>
        </div>
      </aside>
      <main className="min-w-0">
        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-border bg-background/90 px-5 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu /></Button>
            <div><p className="text-[10px] font-bold uppercase text-teal">{eyebrow}</p><h1 className="font-display text-xl font-bold text-foreground sm:text-2xl">{title}</h1></div>
          </div>
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative"><Bell /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-plum" /></Button>
        </header>
        <div className="mx-auto max-w-[1440px] p-5 sm:p-8 lg:p-10">{children}</div>
      </main>
    </div>
  );
}