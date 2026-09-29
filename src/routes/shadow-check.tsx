import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Instagram,
  Linkedin,
  LoaderCircle,
  Radar,
  ScanSearch,
  ShieldAlert,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/identia-app-shell";
import { Button } from "@/components/ui/button";
import { accounts, scanResults } from "@/lib/identia-data";

export const Route = createFileRoute("/shadow-check")({
  head: () => ({
    meta: [
      { title: "AI Shadow Scan — IDENTIA" },
      { name: "description", content: "Scan public internet profiles for identity matches using your verified accounts." },
      { property: "og:title", content: "AI Shadow Scan — IDENTIA" },
      { property: "og:description", content: "Discover profiles that resemble your trusted identity across the public web." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShadowCheck,
});

const scanSteps = [
  { label: "Reading identity signals", detail: "Name, handles, profile links, and public bios" },
  { label: "Searching public profiles", detail: "Social platforms, portfolios, and open web pages" },
  { label: "Comparing visual patterns", detail: "Photos, names, language, and profile structure" },
  { label: "Ranking likely matches", detail: "Prioritizing profiles that need your review" },
] as const;

const platformIcons = { Instagram, LinkedIn, Website: Globe2 };

function ShadowCheck() {
  const [state, setState] = useState<"idle" | "scanning" | "done">("idle");
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (state !== "scanning") return;
    const interval = window.setInterval(() => setStep((current) => Math.min(current + 1, scanSteps.length - 1)), 780);
    const finish = window.setTimeout(() => setState("done"), 3300);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(finish);
    };
  }, [state]);

  const runScan = () => {
    setStep(0);
    setState("scanning");
  };

  return (
    <AppShell eyebrow="AI-assisted discovery" title="Shadow Scan">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <section className="identia-card overflow-hidden">
          <div className="identia-grid border-b border-border p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="flex gap-4">
                <span className="signal-pulse grid size-12 shrink-0 place-items-center rounded-lg bg-plum-soft text-plum">
                  <Radar className="size-6" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-bold">Find identity matches automatically</h2>
                    <span className="rounded-full bg-teal-soft px-2 py-1 text-[10px] font-bold text-teal">AI discovery</span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                    IDENTIA uses your trusted profiles as the reference point, then surfaces public accounts and pages that look like you.
                  </p>
                </div>
              </div>
              {state !== "scanning" && (
                <Button onClick={runScan} size="lg">
                  {state === "done" ? <ScanSearch /> : <Sparkles />}
                  {state === "done" ? "Scan again" : "Run AI internet scan"}
                </Button>
              )}
            </div>
          </div>

          {state === "idle" && <IdleState />}
          {state === "scanning" && <ScanningState step={step} />}
          {state === "done" && <ResultsState onScanAgain={runScan} />}
        </section>

        <div className="flex items-start gap-3 rounded-lg border border-border bg-surface-raised p-4">
          <ShieldAlert className="mt-0.5 size-4 shrink-0 text-amber" />
          <p className="text-xs leading-5 text-muted-foreground">
            Review every match before reporting it. Similarity is a signal, not proof of impersonation.
          </p>
        </div>
      </div>
    </AppShell>
  );
}

function IdleState() {
  return (
    <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_.8fr]">
      <div>
        <p className="text-xs font-bold uppercase text-muted-foreground">Scanning from your identity core</p>
        <div className="mt-4 space-y-3">
          {accounts.map((account) => (
            <div key={account.platform} className="flex items-center gap-3 rounded-md border border-border p-3">
              <span className="grid size-9 place-items-center rounded-md bg-navy-soft text-primary"><UserRound className="size-4" /></span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold">{account.platform} <span className="font-normal text-muted-foreground">· {account.handle}</span></p>
                <p className="mt-1 truncate text-[10px] text-muted-foreground">{account.profileUrl}</p>
              </div>
              <CheckCircle2 className="size-4 text-teal" />
            </div>
          ))}
        </div>
        <Link to="/identity-core" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-teal hover:underline">
          Manage trusted profiles <ArrowRight className="size-3" />
        </Link>
      </div>
      <div className="rounded-lg bg-primary p-5 text-primary-foreground">
        <Sparkles className="size-5 text-amber" />
        <h3 className="mt-5 font-bold">One scan. Every public signal.</h3>
        <p className="mt-2 text-xs leading-5 text-primary-foreground/65">Search by the identity you have already verified instead of entering suspicious handles one at a time.</p>
        <div className="mt-5 border-t border-primary-foreground/15 pt-4 text-[10px] text-primary-foreground/55">Sample discovery preview · live web search will connect here</div>
      </div>
    </div>
  );
}

function ScanningState({ step }: { step: number }) {
  const progress = ((step + 1) / scanSteps.length) * 100;
  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <LoaderCircle className="size-5 animate-spin text-teal" />
        <div>
          <p className="text-sm font-bold">{scanSteps[step].label}</p>
          <p className="mt-1 text-xs text-muted-foreground">{scanSteps[step].detail}</p>
        </div>
        <span className="ml-auto font-display text-xl font-bold text-teal">{Math.round(progress)}%</span>
      </div>
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-teal transition-all duration-700" style={{ width: `${progress}%` }} /></div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {scanSteps.map((item, index) => <div key={item.label} className={`flex items-center gap-3 rounded-md border p-3 ${index <= step ? "border-teal/30 bg-teal-soft/50" : "border-border"}`}><span className={`grid size-7 place-items-center rounded-full text-[10px] font-bold ${index < step ? "bg-teal text-primary-foreground" : index === step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{index < step ? "✓" : index + 1}</span><span className="text-xs font-semibold">{item.label}</span></div>)}
      </div>
    </div>
  );
}

function ResultsState({ onScanAgain }: { onScanAgain: () => void }) {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase text-teal">Scan complete</p>
          <h2 className="mt-1 text-xl font-bold">3 profiles need your review</h2>
          <p className="mt-2 text-sm text-muted-foreground">The strongest match was found on Instagram with a 94% similarity score.</p>
        </div>
        <Button variant="outline" onClick={onScanAgain}><ScanSearch />Run again</Button>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {scanResults.map((result) => {
          const Icon = platformIcons[result.platform as keyof typeof platformIcons] ?? Globe2;
          return <article key={result.id} className="rounded-lg border border-border bg-surface-raised p-5">
            <div className="flex items-start justify-between gap-3"><span className="grid size-10 place-items-center rounded-md bg-plum-soft text-plum"><Icon className="size-5" /></span><span className={`rounded px-2 py-1 text-[10px] font-bold ${result.risk === "High" ? "bg-plum-soft text-plum" : "bg-amber-soft text-foreground"}`}>{result.risk} risk</span></div>
            <p className="mt-5 text-xs font-semibold text-muted-foreground">{result.platform}</p><h3 className="mt-1 truncate text-sm font-bold">{result.handle}</h3><p className="mt-1 truncate text-[10px] text-muted-foreground">{result.url}</p>
            <div className="mt-5 flex items-end justify-between border-t border-border pt-4"><div><p className="text-[10px] uppercase text-muted-foreground">Similarity</p><p className="mt-1 font-display text-2xl font-bold text-plum">{result.similarity}%</p></div><span className="text-[10px] font-semibold text-muted-foreground">{result.id}</span></div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">{result.detail}</p>
            <div className="mt-4 flex flex-wrap gap-1">{result.signals.map((signal) => <span key={signal} className="rounded bg-muted px-2 py-1 text-[9px] font-semibold text-muted-foreground">{signal}</span>)}</div>
            <Button variant="ghost" size="sm" className="mt-4 w-full" asChild><Link to="/evidence-locker">Review evidence <ArrowRight /></Link></Button>
          </article>;
        })}
      </div>
    </div>
  );
}