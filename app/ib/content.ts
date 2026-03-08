export type IbSectionSlug = "syllabus" | "past-papers" | "ia" | "ee" | "tok" | "resources";

export type IbTab = {
  slug: IbSectionSlug;
  label: string;
};

export type IbLink = {
  slug: string;
  title: string;
  description: string;
  sourceUrl?: string;
};

export type IbSectionContent = {
  title: string;
  summary: string;
  links: IbLink[];
};

export type IbSubject = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  sections: Record<IbSectionSlug, IbSectionContent>;
};

export const IB_TABS: IbTab[] = [
  { slug: "syllabus", label: "Syllabus" },
  { slug: "past-papers", label: "Past Papers" },
  { slug: "ia", label: "IA" },
  { slug: "ee", label: "EE" },
  { slug: "tok", label: "TOK" },
  { slug: "resources", label: "Resources" },
];

export const DEFAULT_IB_SECTION: IbSectionSlug = "syllabus";

function toSearchUrl(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function buildSections(subject: string): Record<IbSectionSlug, IbSectionContent> {
  return {
    syllabus: {
      title: "Syllabus",
      summary: `${subject} syllabus pathways and structured revision sequencing for SL and HL.`,
      links: [
        {
          slug: "core-concepts-roadmap",
          title: "Core Concepts Roadmap",
          description: `A guided start-to-finish sequence for ${subject} core concepts.`,
          sourceUrl: toSearchUrl(`IB ${subject} core concepts roadmap`),
        },
        {
          slug: "unit-by-unit-breakdown",
          title: "Unit-by-Unit Breakdown",
          description: "Targeted playlists and notes mapped to each syllabus unit.",
          sourceUrl: toSearchUrl(`IB ${subject} unit by unit syllabus breakdown`),
        },
        {
          slug: "hl-extension-focus",
          title: "HL Extension Focus",
          description: "Dedicated support for HL-only depth and extension material.",
          sourceUrl: toSearchUrl(`IB ${subject} HL extension topics`),
        },
        {
          slug: "command-terms-guide",
          title: "Command Terms Guide",
          description: "Decode command terms and align responses with exam expectations.",
          sourceUrl: toSearchUrl(`IB ${subject} command terms explained`),
        },
        {
          slug: "weekly-revision-plan",
          title: "Weekly Revision Plan",
          description: "A repeatable weekly cadence for active recall and spaced review.",
          sourceUrl: toSearchUrl(`IB ${subject} weekly revision plan`),
        },
        {
          slug: "checkpoints-and-milestones",
          title: "Checkpoints and Milestones",
          description: "Milestone-driven progress checks across the full syllabus.",
          sourceUrl: toSearchUrl(`IB ${subject} study milestones checklist`),
        },
      ],
    },
    "past-papers": {
      title: "Past Papers",
      summary: `${subject} exam practice drills, timing strategy, and markscheme review.`,
      links: [
        {
          slug: "timed-paper-drills",
          title: "Timed Paper Drills",
          description: "Run full-paper sessions under realistic timing constraints.",
          sourceUrl: toSearchUrl(`IB ${subject} timed past paper practice`),
        },
        {
          slug: "markscheme-breakdown",
          title: "Markscheme Breakdown",
          description: "Reverse engineer high-scoring responses using official markschemes.",
          sourceUrl: toSearchUrl(`IB ${subject} markscheme analysis`),
        },
        {
          slug: "common-mistakes-review",
          title: "Common Mistakes Review",
          description: "Identify and eliminate repeated errors before exam day.",
          sourceUrl: toSearchUrl(`IB ${subject} common exam mistakes`),
        },
        {
          slug: "question-type-rotation",
          title: "Question Type Rotation",
          description: "Practice by question style for stronger pattern recognition.",
          sourceUrl: toSearchUrl(`IB ${subject} question type practice`),
        },
        {
          slug: "speed-vs-accuracy-lab",
          title: "Speed vs Accuracy Lab",
          description: "Balance completion speed with precision in final answers.",
          sourceUrl: toSearchUrl(`IB ${subject} speed and accuracy exam strategy`),
        },
        {
          slug: "final-week-paper-plan",
          title: "Final Week Paper Plan",
          description: "A final sprint plan using selected high-yield paper sets.",
          sourceUrl: toSearchUrl(`IB ${subject} final week exam revision`),
        },
      ],
    },
    ia: {
      title: "IA",
      summary: `${subject} IA ideation, methodology checks, and criterion-led drafting workflows.`,
      links: [
        {
          slug: "ia-topic-ideation",
          title: "IA Topic Ideation",
          description: "Generate feasible topics with clear scope and data availability.",
          sourceUrl: toSearchUrl(`IB ${subject} IA topic ideas`),
        },
        {
          slug: "research-question-builder",
          title: "Research Question Builder",
          description: "Refine broad themes into focused, assessable IA questions.",
          sourceUrl: toSearchUrl(`IB ${subject} IA research question`),
        },
        {
          slug: "methodology-design",
          title: "Methodology Design",
          description: "Design methods that are robust, measurable, and replicable.",
          sourceUrl: toSearchUrl(`IB ${subject} IA methodology`),
        },
        {
          slug: "data-and-analysis-workflow",
          title: "Data and Analysis Workflow",
          description: "Structure data capture and analysis for criterion alignment.",
          sourceUrl: toSearchUrl(`IB ${subject} IA data analysis`),
        },
        {
          slug: "criterion-checklist",
          title: "Criterion Checklist",
          description: "Map each draft section against scoring criterion expectations.",
          sourceUrl: toSearchUrl(`IB ${subject} IA criteria checklist`),
        },
        {
          slug: "final-draft-polish",
          title: "Final Draft Polish",
          description: "Tighten clarity, citations, and presentation before submission.",
          sourceUrl: toSearchUrl(`IB ${subject} IA final draft review`),
        },
      ],
    },
    ee: {
      title: "EE",
      summary: `${subject} EE topic narrowing, argument structure, and supervisor feedback loops.`,
      links: [
        {
          slug: "ee-topic-selection",
          title: "EE Topic Selection",
          description: "Narrow ideas into manageable and high-quality EE topics.",
          sourceUrl: toSearchUrl(`IB ${subject} EE topic selection`),
        },
        {
          slug: "ee-proposal-outline",
          title: "EE Proposal Outline",
          description: "Build a clear proposal with rationale, scope, and method.",
          sourceUrl: toSearchUrl(`IB ${subject} EE proposal outline`),
        },
        {
          slug: "literature-and-sources",
          title: "Literature and Sources",
          description: "Organize credible sources and connect them to your argument.",
          sourceUrl: toSearchUrl(`IB ${subject} EE sources and literature review`),
        },
        {
          slug: "argument-architecture",
          title: "Argument Architecture",
          description: "Develop claim flow and section logic for stronger coherence.",
          sourceUrl: toSearchUrl(`IB ${subject} EE structure and argument`),
        },
        {
          slug: "supervisor-feedback-loop",
          title: "Supervisor Feedback Loop",
          description: "Convert supervisor comments into targeted revision actions.",
          sourceUrl: toSearchUrl(`IB ${subject} EE supervisor feedback`),
        },
        {
          slug: "final-viva-prep",
          title: "Final Viva Prep",
          description: "Prepare concise reflections for process and decision defense.",
          sourceUrl: toSearchUrl(`IB ${subject} EE viva voce preparation`),
        },
      ],
    },
    tok: {
      title: "TOK",
      summary: `${subject}-linked TOK prompt practice with claims, counterclaims, and perspective testing.`,
      links: [
        {
          slug: "prompt-deconstruction",
          title: "Prompt Deconstruction",
          description: "Break prompts into claims, assumptions, and scope boundaries.",
          sourceUrl: toSearchUrl(`IB TOK prompt breakdown ${subject}`),
        },
        {
          slug: "claims-counterclaims-lab",
          title: "Claims Counterclaims Lab",
          description: "Practice balanced argumentation with explicit contrasts.",
          sourceUrl: toSearchUrl(`IB TOK claims and counterclaims ${subject}`),
        },
        {
          slug: "real-world-examples-bank",
          title: "Real-World Examples Bank",
          description: "Curate examples that can flex across multiple TOK prompts.",
          sourceUrl: toSearchUrl(`IB TOK real world examples ${subject}`),
        },
        {
          slug: "aok-perspective-shifts",
          title: "AOK Perspective Shifts",
          description: "Analyze how viewpoint changes across areas of knowledge.",
          sourceUrl: toSearchUrl(`IB TOK areas of knowledge perspective`),
        },
        {
          slug: "essay-outline-workshop",
          title: "Essay Outline Workshop",
          description: "Turn idea clusters into crisp TOK essay outlines.",
          sourceUrl: toSearchUrl(`IB TOK essay outline workshop`),
        },
        {
          slug: "tok-revision-checkpoint",
          title: "TOK Revision Checkpoint",
          description: "Run quality checks for balance, clarity, and evaluation depth.",
          sourceUrl: toSearchUrl(`IB TOK essay revision checklist`),
        },
      ],
    },
    resources: {
      title: "Resources",
      summary: `${subject} support resources, reference packs, and revision toolkits.`,
      links: [
        {
          slug: "official-guide-index",
          title: "Official Guide Index",
          description: "Reference key curriculum and assessment documentation.",
          sourceUrl: "https://www.ibo.org/programmes/diploma-programme/",
        },
        {
          slug: "study-toolkit",
          title: "Study Toolkit",
          description: "Practical planning tools, trackers, and checklist systems.",
          sourceUrl: toSearchUrl(`IB ${subject} study toolkit`),
        },
        {
          slug: "high-yield-playlists",
          title: "High-Yield Playlists",
          description: "Curated media resources for focused concept refreshers.",
          sourceUrl: toSearchUrl(`IB ${subject} high yield revision playlist`),
        },
        {
          slug: "question-bank-routes",
          title: "Question Bank Routes",
          description: "Recommended routes through question banks by topic priority.",
          sourceUrl: toSearchUrl(`IB ${subject} question bank`),
        },
        {
          slug: "community-explainer-picks",
          title: "Community Explainer Picks",
          description: "Useful explainers and walkthrough channels from the student community.",
          sourceUrl: toSearchUrl(`IB ${subject} explainer walkthrough`),
        },
        {
          slug: "final-review-hub",
          title: "Final Review Hub",
          description: "A final consolidation pack for the last revision cycle.",
          sourceUrl: toSearchUrl(`IB ${subject} final revision hub`),
        },
      ],
    },
  };
}

export const ibSubjects: IbSubject[] = [
  {
    slug: "physics",
    title: "Physics",
    shortDescription: "SL & HL",
    intro: "A dedicated workspace for Physics syllabus reviews, paper strategy, and coursework guidance.",
    sections: buildSections("Physics"),
  },
  {
    slug: "computer-science",
    title: "Computer Science",
    shortDescription: "SL & HL",
    intro: "A dedicated workspace for Computer Science syllabus and coursework execution.",
    sections: buildSections("Computer Science"),
  },
  {
    slug: "mathematics-aa",
    title: "Mathematics AA",
    shortDescription: "SL & HL",
    intro: "A dedicated workspace for Mathematics AA revision workflows.",
    sections: buildSections("Mathematics AA"),
  },
];

export function getIbSubject(subjectSlug: string): IbSubject | undefined {
  return ibSubjects.find((subject) => subject.slug === subjectSlug);
}

export function isIbSectionSlug(value: string): value is IbSectionSlug {
  return IB_TABS.some((tab) => tab.slug === value);
}

export function getIbSectionItem(subjectSlug: string, sectionSlug: IbSectionSlug, itemSlug: string): IbLink | undefined {
  const subject = getIbSubject(subjectSlug);
  if (!subject) {
    return undefined;
  }

  return subject.sections[sectionSlug].links.find((item) => item.slug === itemSlug);
}
