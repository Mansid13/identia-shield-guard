export const accounts = [
  { platform: "Instagram", handle: "@mayarivera", profileUrl: "instagram.com/mayarivera", audience: "18.4K followers", verified: "Jun 12, 2026", color: "plum" },
  { platform: "GitHub", handle: "maya-rivera", profileUrl: "github.com/maya-rivera", audience: "42 repositories", verified: "Jun 12, 2026", color: "foreground" },
  { platform: "LinkedIn", handle: "maya-rivera", profileUrl: "linkedin.com/in/maya-rivera", audience: "2.8K connections", verified: "Jun 14, 2026", color: "teal" },
] as const;

export const cases = [
  { id: "ID-2841", title: "Instagram lookalike account", platform: "Instagram", handle: "@maya.rivera_official", date: "Sep 26, 2026", evidence: 8, risk: "High", status: "Ready to report" },
  { id: "ID-2817", title: "Reused profile photo", platform: "X", handle: "@mayariv_", date: "Sep 21, 2026", evidence: 5, risk: "Medium", status: "Monitoring" },
  { id: "ID-2779", title: "False recruiter profile", platform: "LinkedIn", handle: "Maya Rivera Careers", date: "Sep 08, 2026", evidence: 11, risk: "High", status: "Submitted" },
  { id: "ID-2692", title: "Copied portfolio page", platform: "Website", handle: "mayarivera-design.co", date: "Aug 24, 2026", evidence: 4, risk: "Low", status: "Archived" },
] as const;

export type CaseItem = (typeof cases)[number];