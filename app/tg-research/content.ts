export type TgPanelItem = {
  slug: string;
  title: string;
  description: string;
  body: string[];
  sourceUrl?: string;
};

export type TgPanel = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  items: TgPanelItem[];
};

function makeItems(panelLabel: string): TgPanelItem[] {
  return [
    {
      slug: "research-brief",
      title: `${panelLabel} Research Brief`,
      description: `Scope, context, and objective framing for ${panelLabel.toLowerCase()} tracks.`,
      body: [
        "Define the main hypothesis and the operational scope before execution starts.",
        "Map constraints, assumptions, and expected outcomes for the first iteration.",
        "Use this brief as the source of truth across implementation and review cycles.",
      ],
    },
    {
      slug: "implementation-notes",
      title: `${panelLabel} Implementation Notes`,
      description: `Execution patterns, architecture choices, and practical rollout notes.`,
      body: [
        "Document design decisions and tradeoffs in a way future contributors can follow.",
        "Capture interface contracts, edge cases, and fallback behavior.",
        "Track what changed between iterations and why those changes improved outcomes.",
      ],
    },
    {
      slug: "review-and-next-steps",
      title: `${panelLabel} Review and Next Steps`,
      description: `Retrospective insights, quality checks, and roadmap priorities.`,
      body: [
        "Evaluate output quality using clear criteria tied to the original objectives.",
        "List unresolved risks and define mitigation actions for the next cycle.",
        "Prioritize follow-up work based on user impact and implementation effort.",
      ],
    },
    {
      slug: "risk-log",
      title: `${panelLabel} Risk Log`,
      description: "Known constraints, blockers, and mitigation planning.",
      body: [
        "Track technical, operational, and timeline risks in one shared log.",
        "Assign ownership and next actions for each active risk item.",
        "Re-score risk severity after each milestone review.",
      ],
    },
    {
      slug: "metrics-dashboard",
      title: `${panelLabel} Metrics Dashboard`,
      description: "Baseline KPIs and tracking signals for progress measurement.",
      body: [
        "Define measurable indicators tied directly to the panel objective.",
        "Compare baseline and current snapshots to reveal trend movement.",
        "Use metric changes to prioritize what to improve next.",
      ],
    },
    {
      slug: "experiment-plans",
      title: `${panelLabel} Experiment Plans`,
      description: "Structured experiment designs with test assumptions and outcomes.",
      body: [
        "Write each experiment with hypothesis, setup, and success criteria.",
        "Keep run logs and observed outcomes to support final conclusions.",
        "Retire weak experiments quickly and iterate on stronger leads.",
      ],
    },
    {
      slug: "tooling-stack",
      title: `${panelLabel} Tooling Stack`,
      description: "Recommended tools, workflows, and automation patterns.",
      body: [
        "Document the active stack and why each tool is included.",
        "Capture setup steps for repeatability across collaborators.",
        "Record pain points to guide future tooling simplification.",
      ],
    },
    {
      slug: "stakeholder-notes",
      title: `${panelLabel} Stakeholder Notes`,
      description: "Meeting outcomes, key feedback, and alignment decisions.",
      body: [
        "Summarize stakeholder constraints and non-negotiable priorities.",
        "Translate feedback into actionable tasks and acceptance criteria.",
        "Close the loop by reporting what changed after each review.",
      ],
    },
    {
      slug: "decision-record",
      title: `${panelLabel} Decision Record`,
      description: "Versioned architectural and process decisions with rationale.",
      body: [
        "Track what decision was made, when, and by whom.",
        "Include options considered and clear reasons for final selection.",
        "Revisit older decisions when new constraints appear.",
      ],
    },
    {
      slug: "rollout-checklist",
      title: `${panelLabel} Rollout Checklist`,
      description: "Pre-release checks and launch readiness criteria.",
      body: [
        "Verify functional quality, edge-case handling, and fallback paths.",
        "Confirm documentation and support material are ready before launch.",
        "Run a final go/no-go review with explicit ownership.",
      ],
    },
  ];
}

export const tgPanels: TgPanel[] = [
  {
    slug: "test1",
    title: "test1",
    description: "TG-Research panel area for test1.",
    intro: "A dedicated test1 research area with panel-specific playbooks and article-style detail pages.",
    items: makeItems("test1"),
  },
  {
    slug: "test2",
    title: "test2",
    description: "TG-Research panel area for test2.",
    intro: "A dedicated test2 research area with panel-specific playbooks and article-style detail pages.",
    items: makeItems("test2"),
  },
  {
    slug: "test3",
    title: "test3",
    description: "TG-Research panel area for test3.",
    intro: "A dedicated test3 research area with panel-specific playbooks and article-style detail pages.",
    items: makeItems("test3"),
  },
];

export function getTgPanel(slug: string): TgPanel | undefined {
  return tgPanels.find((panel) => panel.slug === slug);
}

export function getTgPanelItem(panelSlug: string, itemSlug: string): TgPanelItem | undefined {
  const panel = getTgPanel(panelSlug);
  if (!panel) {
    return undefined;
  }

  return panel.items.find((item) => item.slug === itemSlug);
}
