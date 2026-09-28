import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Archive, Check, Fingerprint, Radar, ScanSearch, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "IDENTIA — Connect the Identity. Expose the Shadow." },
    { name: "description", content: "Detect impersonation across your online identity and collect evidence that stands up to scrutiny." },
    { property: "og:title", content: "IDENTIA — Connect the Identity. Expose the Shadow." },
    { property: "og:description", content: "Detect impersonation across your online identity and collect credible evidence." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LandingPage,
});

const steps = [
  ["01", "Connect", "Add the accounts that define your real online identity."],
  ["02", "Map", "See how your profiles, names, and images connect."],
  ["03", "Scan", "Check public profiles for suspicious similarities."],
  ["04", "Verify", "Review signals before deciding what needs action."],
  ["05", "Preserve", "Save timestamped findings in a clear evidence case."],
] as const;

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground"><Fingerprint className="size-5" /></span><span className="font-display text-lg font-bold text-primary">IDENTIA</span></Link>
        <Button asChild><Link to="/dashboard">Open workspace <ArrowRight /></Link></Button>
      </header>
      <main>
        <section className="relative overflow-hidden border-y border-border bg-primary text-primary-foreground">
          <div className="identia-grid absolute inset-0 opacity-[0.08]" />
          <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-3 py-1.5 text-xs font-semibold text-primary-foreground/80"><span className="signal-pulse size-2 rounded-full bg-teal" />Identity intelligence, made personal</div>
              <h1 className="font-display text-5xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">Connect the Identity.<br/><span className="text-amber">Expose the Shadow.</span></h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-primary-foreground/70 sm:text-lg">Your identity is scattered across the internet. IDENTIA brings the real you into focus—then finds the profiles trying to imitate it.</p>
              <div className="mt-9 flex flex-wrap items-center gap-4"><Button asChild size="lg" className="bg-amber text-foreground hover:bg-amber/90"><Link to="/dashboard">Get started <ArrowRight /></Link></Button><div className="flex items-center gap-2 text-xs text-primary-foreground/60"><ShieldCheck className="size-4 text-teal" />No login required for this preview</div></div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="identia-card relative overflow-hidden p-6 text-foreground sm:p-8">
                <div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase text-muted-foreground">Identity signal</p><h2 className="mt-1 text-xl font-bold">Maya Rivera</h2></div><span className="rounded-full bg-teal-soft px-3 py-1 text-xs font-bold text-teal">3 verified</span></div>
                <div className="relative mt-8 h-64 rounded-lg bg-navy-soft identia-grid">
                  <div className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-card bg-primary text-primary-foreground shadow-lg"><Fingerprint className="size-8" /></div>
                  <div className="absolute left-5 top-8 rounded-md bg-card px-3 py-2 text-xs font-bold shadow-md">Instagram <Check className="ml-2 inline size-3 text-teal" /></div>
                  <div className="absolute right-5 top-14 rounded-md bg-card px-3 py-2 text-xs font-bold shadow-md">GitHub <Check className="ml-2 inline size-3 text-teal" /></div>
                  <div className="absolute bottom-8 left-8 rounded-md bg-card px-3 py-2 text-xs font-bold shadow-md">LinkedIn <Check className="ml-2 inline size-3 text-teal" /></div>
                  <div className="absolute bottom-6 right-6 rounded-md border border-plum/20 bg-plum-soft px-3 py-2 text-xs font-bold text-plum shadow-md">Lookalike found</div>
                </div>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground"><span>Last scan · 12 minutes ago</span><span className="font-bold text-plum">1 signal needs review</span></div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase text-teal">The problem</p><h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">A copied profile can move faster than the truth.</h2><p className="mt-5 leading-7 text-muted-foreground">Screenshots disappear. Handles change. Reports get scattered. IDENTIA helps you connect trusted profiles, detect suspicious copies, and preserve a clear record before the trail goes cold.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">{[[Radar,"Early signals","Notice suspicious matches across names, photos, bios, and links."],[ScanSearch,"Clear review","Compare what is real with what looks wrong in one focused view."],[Archive,"Stronger evidence","Keep URLs, screenshots, notes, and timestamps together by case."]].map(([Icon,title,copy]) => <article key={String(title)} className="identia-card p-6"><span className="grid size-11 place-items-center rounded-lg bg-teal-soft text-teal"><Icon className="size-5" /></span><h3 className="mt-5 text-lg font-bold">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{String(copy)}</p></article>)}</div>
        </section>
        <section className="border-y border-border bg-card"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><p className="text-xs font-bold uppercase text-plum">How it works</p><h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">From identity to evidence in five steps.</h2><div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-5">{steps.map(([n,title,copy]) => <article key={n} className="bg-card p-6"><span className="font-display text-3xl font-bold text-amber">{n}</span><h3 className="mt-8 font-bold text-primary">{title}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p></article>)}</div><Button asChild size="lg" className="mt-10"><Link to="/dashboard">Build your identity core <ArrowRight /></Link></Button></div></section>
      </main>
      <footer className="bg-primary px-5 py-8 text-primary-foreground sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between"><span className="font-display font-bold text-primary-foreground">IDENTIA</span><span>Understand what’s yours. Document what isn’t.</span></div></footer>
    </div>
  );
}