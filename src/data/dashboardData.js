// SiyadaTech Executive Dashboard — Static Data Layer
// All placeholder fields are marked with __PLACEHOLDER__: true and a note explaining what is needed.
// These fields render with a dashed amber border and "⚠ Needs Update" badge.

// ─────────────────────────────────────────────
// SECTION 2: Company Snapshot
// ─────────────────────────────────────────────
export const companySnapshot = {
  currentPhase: {
    label: 'Current Phase',
    value: 'Validation (entering)',
    status: 'in-progress',
    __PLACEHOLDER__: false,
  },
  phaseCompletion: {
    label: 'Phase Completion',
    value: '85%',
    status: 'on-track',
    __PLACEHOLDER__: false,
  },
  q1RevenueTarget: {
    label: 'Q1 Revenue Target',
    value: 'SAR 400K – 700K',
    status: 'in-progress',
    __PLACEHOLDER__: false,
  },
  revenueToDate: {
    label: 'Revenue to Date',
    value: '—',
    status: 'action-required',
    __PLACEHOLDER__: true,
    note: 'Awaiting actual Q1 revenue figures to date from Dali',
  },
  activePartnerships: {
    label: 'Active Partnerships',
    value: '1 (Floaino closing)',
    status: 'in-progress',
    __PLACEHOLDER__: false,
  },
  runway: {
    label: 'Runway',
    value: '— months',
    status: 'action-required',
    __PLACEHOLDER__: true,
    note: 'Awaiting burn rate and cash position data from Dali',
  },
};

// ─────────────────────────────────────────────
// SECTION 3: Phase Tracker
// ─────────────────────────────────────────────
export const phases = [
  {
    id: 1,
    name: 'Foundation',
    duration: '9 months',
    status: 'current',
    completion: 85,
    exitCriteria: 'MVP launched, first users, first contract',
  },
  {
    id: 2,
    name: 'Validation',
    duration: '9 months',
    status: 'entering',
    completion: 0,
    exitCriteria: 'PMF proven, 1,000 users, LTV > 3x CAC',
  },
  {
    id: 3,
    name: 'Early Traction',
    duration: '12 months',
    status: 'upcoming',
    completion: 0,
    exitCriteria: '$1M–$3M ARR, repeatable GTM',
  },
  {
    id: 4,
    name: 'Growth',
    duration: '12 months',
    status: 'upcoming',
    completion: 0,
    exitCriteria: '$10M+ ARR, Series B',
  },
  {
    id: 5,
    name: 'Expansion',
    duration: '12 months',
    status: 'upcoming',
    completion: 0,
    exitCriteria: '$50M+ ARR, Rule of 40',
  },
  {
    id: 6,
    name: 'Maturity / IPO',
    duration: '6 months',
    status: 'upcoming',
    completion: 0,
    exitCriteria: '$100M+ ARR, Tadawul listing',
  },
];

// ─────────────────────────────────────────────
// SECTION 4: Three Engine Status
// ─────────────────────────────────────────────
export const engines = [
  {
    id: 'lenci',
    name: 'Engine 1 — Lenci',
    tagline: 'Product-Led Growth',
    status: 'in-progress',
    statusLabel: 'Launch Imminent',
    metrics: [
      { label: 'Track A Target', value: '50 e-commerce early adopters', placeholder: false },
      { label: 'Track B Target', value: '500 freemium users (90 days)', placeholder: false },
      { label: 'Magic Page Status', value: 'In finalization', placeholder: false },
      {
        label: 'Launch Date',
        value: '—',
        placeholder: true,
        note: 'Needs confirmed launch date from Dali',
      },
      {
        label: 'Signups to Date',
        value: '0',
        placeholder: true,
        note: 'Update post-launch with actual signup count',
      },
      {
        label: 'Paid Conversions',
        value: '0',
        placeholder: true,
        note: 'Update post-launch with paid conversion count',
      },
      {
        label: 'Agency Outreach',
        value: '— of 50 contacted',
        placeholder: true,
        note: 'Update after outreach begins with contacts made',
      },
    ],
    tasks: [
      { text: 'Finalize Magic Page & Ads', done: false },
      { text: 'Agency outreach (50 owners)', done: false },
      { text: 'Lenci Launch Day', done: false },
      { text: '50 paid users (Month 2–3)', done: false },
      { text: '500 freemium users (Month 2–3)', done: false },
    ],
    strategicNote: null,
  },
  {
    id: 'ai-services',
    name: 'Engine 2 — AI Services',
    tagline: 'Cash Flow & Enterprise Trust',
    status: 'live',
    statusLabel: 'Live',
    metrics: [
      { label: 'Channel Partner', value: 'Al Nafidha', placeholder: false },
      { label: 'Al Nafidha Clients Available', value: '7,000+', placeholder: false },
      { label: 'Partnership Status', value: 'Agreement Signed', placeholder: false },
      {
        label: 'Active Projects',
        value: '—',
        placeholder: true,
        note: 'Enter number of active project engagements',
      },
      {
        label: 'First Project Value (SAR)',
        value: '—',
        placeholder: true,
        note: 'Enter contracted value of first project in SAR',
      },
      {
        label: 'First Project Status',
        value: '—',
        placeholder: true,
        note: 'Update with kickoff and delivery status',
      },
      {
        label: 'Pipeline Value (SAR)',
        value: '—',
        placeholder: true,
        note: 'Estimated total pipeline value in SAR',
      },
    ],
    tasks: [
      { text: 'Agreement with Al Nafidha signed', done: true },
      { text: 'Confirm AI Services scope', done: false },
      { text: 'Kickoff first AI project', done: false },
      { text: 'Deliver first AI project (Q1)', done: false },
      { text: '3+ active clients (Validation phase)', done: false },
    ],
    strategicNote: 'Every service engagement is a Trojan Horse for Jawabid & Lenci Enterprise.',
  },
  {
    id: 'partnerships',
    name: 'Engine 3 — Partnerships',
    tagline: 'Scale & Recurring Revenue',
    status: 'closing',
    statusLabel: 'Closing',
    metrics: [
      { label: 'First Deal', value: 'Floaino', placeholder: false },
      { label: 'License Volume', value: '1,000', placeholder: false },
      { label: 'Agreement Status', value: 'Closing', placeholder: false },
      { label: 'PDPL Compliance', value: 'Done / In Progress', placeholder: false },
      { label: 'Al Nafidha Containers', value: 'Building', placeholder: false },
      { label: 'Arabic Localization', value: 'Ongoing', placeholder: false },
      {
        label: 'Formal Signing Date',
        value: '—',
        placeholder: true,
        note: 'Awaiting confirmation of formal signing date',
      },
      {
        label: 'First Revenue Date',
        value: '—',
        placeholder: true,
        note: 'Awaiting deployment timeline from Al Nafidha',
      },
      {
        label: 'Additional Pipelines',
        value: '—',
        placeholder: true,
        note: 'List any other partnerships currently in discussion',
      },
    ],
    tasks: [
      { text: 'Identify Vendor (Floaino)', done: true, note: 'Global tech, no Saudi presence' },
      { text: 'Sign Reseller Deal', done: false, inProgress: true },
      { text: 'Localize & Comply (PDPL + Arabic)', done: false, inProgress: true },
      { text: 'Deploy via Al Nafidha', done: false },
      { text: 'Collect Margin', done: false },
    ],
    strategicNote: null,
  },
];

// ─────────────────────────────────────────────
// SECTION 5: 90-Day Sprint Plan
// ─────────────────────────────────────────────
export const sprintPlan = {
  columns: [
    {
      id: 'week1',
      title: 'Week 1 Prep',
      tasks: [
        { text: 'Finalize Lenci Magic Page & Ads', status: 'in-progress' },
        { text: 'Finalize Floaino Terms', status: 'in-progress' },
        { text: 'Confirm AI Services Scope', status: 'in-progress' },
        { text: 'Submit Grant Applications', status: 'in-progress' },
      ],
    },
    {
      id: 'week2-3',
      title: 'Week 2–3 Launch',
      tasks: [
        { text: 'Lenci Launch Day', status: 'upcoming' },
        { text: 'Agency Outreach (50 Owners)', status: 'upcoming' },
        { text: 'Sign Floaino Agreement', status: 'in-progress' },
        { text: 'Kickoff First AI Project', status: 'upcoming' },
      ],
    },
    {
      id: 'month2-3',
      title: 'Month 2–3 Scale',
      tasks: [
        { text: '50 Paid Lenci Users', status: 'upcoming' },
        { text: 'Deploy 100 Floaino Licenses', status: 'upcoming' },
        { text: 'Deliver First AI Project', status: 'upcoming' },
        { text: 'Jawabid MVP Architecture', status: 'upcoming' },
      ],
    },
  ],
  q1RevenueProgress: {
    target: 700000,
    current: {
      value: 0,
      __PLACEHOLDER__: true,
      note: 'Awaiting actual Q1 revenue collected to date from Dali',
    },
    label: 'SAR 0 → SAR 700,000',
  },
};

// ─────────────────────────────────────────────
// SECTION 6: Revenue Projection
// ─────────────────────────────────────────────
export const revenueProjection = {
  years: ['Y1', 'Y2', 'Y3', 'Y4', 'Y5'],
  streams: [
    {
      key: 'services',
      name: 'Services',
      color: '#4A6FA5',
      values: [7, 16, 20, 18, 15],
    },
    {
      key: 'partnerships',
      name: 'Partnerships',
      color: '#8B9DB5',
      values: [3, 12, 20, 28, 25],
    },
    {
      key: 'lenci',
      name: 'Lenci SaaS',
      color: '#D4A853',
      values: [4, 24, 50, 77, 100],
    },
    {
      key: 'jawabid',
      name: 'Jawabid SaaS',
      color: '#E8C070',
      values: [1.5, 20, 80, 157, 235],
    },
    {
      key: 'qudurat',
      name: 'Qudurat SaaS',
      color: '#F5DFA0',
      values: [0, 8, 30, 70, 125],
    },
  ],
  totals: [15.5, 80, 200, 350, 500],
  note: 'Revenue composition shifts from services-led in Y1 to 92% SaaS at IPO.',
  unit: 'SAR Million',
};

// ─────────────────────────────────────────────
// SECTION 7: KPI Tracking
// ─────────────────────────────────────────────
export const kpis = [
  {
    kpi: 'Q1 Revenue',
    engine: 'All',
    target: 'SAR 400K–700K',
    current: { value: '—', __PLACEHOLDER__: true, note: 'Awaiting actual revenue figure from Dali' },
    status: 'action-required',
  },
  {
    kpi: 'Lenci Early Adopters',
    engine: 'Lenci',
    target: '50',
    current: { value: '0', __PLACEHOLDER__: false },
    status: 'upcoming',
    note: 'Pending launch',
  },
  {
    kpi: 'Lenci Freemium Users',
    engine: 'Lenci',
    target: '500 (90 days)',
    current: { value: '0', __PLACEHOLDER__: false },
    status: 'upcoming',
    note: 'Pending launch',
  },
  {
    kpi: 'Lenci Paid Conversions',
    engine: 'Lenci',
    target: 'First conversions',
    current: { value: '0', __PLACEHOLDER__: false },
    status: 'upcoming',
    note: 'Pending launch',
  },
  {
    kpi: 'Active AI Service Clients',
    engine: 'AI Services',
    target: '1 (Q1), 3+ (Validation)',
    current: { value: '—', __PLACEHOLDER__: true, note: 'Enter number of active client engagements' },
    status: 'action-required',
  },
  {
    kpi: 'AI Services Pipeline (SAR)',
    engine: 'AI Services',
    target: '—',
    current: { value: '—', __PLACEHOLDER__: true, note: 'Enter estimated pipeline value in SAR' },
    status: 'action-required',
  },
  {
    kpi: 'Floaino Licenses Deployed',
    engine: 'Partnerships',
    target: '100 (Month 2–3)',
    current: { value: '0', __PLACEHOLDER__: false },
    status: 'in-progress',
    note: 'Pending signing',
  },
  {
    kpi: 'Floaino Agreement Signed',
    engine: 'Partnerships',
    target: 'March 2026',
    current: { value: 'Closing', __PLACEHOLDER__: false },
    status: 'in-progress',
  },
  {
    kpi: 'Growth Marketer Hired',
    engine: 'Team',
    target: 'Q1',
    current: { value: 'Not started', __PLACEHOLDER__: false },
    status: 'action-required',
  },
  {
    kpi: 'Grant/Accelerator Accepted',
    engine: 'Funding',
    target: 'Q1',
    current: { value: 'In progress', __PLACEHOLDER__: false },
    status: 'in-progress',
  },
];

// ─────────────────────────────────────────────
// SECTION 8: Risk Register
// ─────────────────────────────────────────────
export const risks = [
  {
    id: 1,
    name: 'Lenci Launch Underperforms',
    severity: 'high',
    mitigation: 'Two parallel channels (Agency + PLG). Magic Page optimization is key lever.',
    status: 'Monitored',
  },
  {
    id: 2,
    name: 'AI Services Delivery Failure',
    severity: 'critical',
    mitigation: 'CTO personally oversees first engagement. Tunisia team on standby for surge.',
    status: 'Monitored',
  },
  {
    id: 3,
    name: 'Floaino Deployment Delays',
    severity: 'high',
    mitigation: 'Daily comms with Al Nafidha tech team. Fallback deployment plan ready.',
    status: 'Monitored',
  },
  {
    id: 4,
    name: 'Key Person Dependency (CEO)',
    severity: 'critical',
    mitigation: 'Dr. Wajdi and Amina own BD/Sales. CTO owns all technical delivery.',
    status: 'Mitigating',
  },
  {
    id: 5,
    name: 'Marketing SPOF (Single Owner)',
    severity: 'high',
    mitigation: 'Growth Marketer is #1 immediate hire. Agency support for launch content.',
    status: 'Action Required',
  },
];

// ─────────────────────────────────────────────
// SECTION 9: Immediate Needs
// ─────────────────────────────────────────────
export const immediateNeeds = [
  {
    priority: '01',
    action: 'Execute Lenci Launch',
    owner: 'CEO + Marketing',
    deadline: '10 days',
    status: 'in-progress',
  },
  {
    priority: '02',
    action: 'Close Floaino Deal',
    owner: 'BD (Dr. Wajdi)',
    deadline: 'March 2026',
    status: 'in-progress',
  },
  {
    priority: '03',
    action: 'Deliver First AI Project',
    owner: 'CTO',
    deadline: 'Q1 2026',
    status: 'upcoming',
  },
  {
    priority: '04',
    action: 'Hire Growth Marketer',
    owner: 'CEO',
    deadline: 'Q1 2026',
    status: 'action-required',
  },
  {
    priority: '05',
    action: 'Secure Funding (Grant/Accelerator)',
    owner: 'CEO',
    deadline: 'Q1 2026',
    status: 'in-progress',
  },
];

// ─────────────────────────────────────────────
// SECTION 10: Team Overview
// ─────────────────────────────────────────────
export const team = {
  command: [
    { name: 'Dali', role: 'CEO / Strategy', focus: 'Overall execution and strategy' },
    { name: 'CTO', role: 'Blockchain + Agentic AI', focus: 'All technical delivery' },
  ],
  businessUnit: [
    { name: 'Dr. Wajdi', role: 'Business Development', focus: 'Enterprise pipeline and partnerships' },
    { name: 'Amina', role: 'Sales', focus: 'Al Nafidha channel sales' },
    { name: 'Hassan', role: 'Marketing', focus: 'Jeddah market, Lenci launch' },
  ],
  engineeringCore: [
    { name: '6 AI Engineers', role: 'Core Development', focus: 'Product and service delivery' },
    { name: '1 Data Engineer', role: 'Data Infrastructure', focus: 'Data pipelines' },
    { name: '1 Product Manager', role: 'Product Delivery', focus: 'Roadmap execution' },
  ],
  surgeNote: 'Tunisia surge team on standby — full-stack outsourced deployment capacity for peak demand.',
};
