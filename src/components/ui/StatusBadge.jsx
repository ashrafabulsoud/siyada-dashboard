const STATUS_CONFIG = {
  live: { label: 'Live', classes: 'bg-emerald-900/40 text-emerald-400 border border-emerald-700/50' },
  'in-progress': { label: 'In Progress', classes: 'bg-amber-900/40 text-amber-400 border border-amber-700/50' },
  closing: { label: 'Closing', classes: 'bg-amber-900/40 text-amber-400 border border-amber-700/50' },
  upcoming: { label: 'Upcoming', classes: 'bg-navy-600/60 text-slate-dashboard border border-navy-600' },
  critical: { label: 'Critical', classes: 'bg-red-900/50 text-red-400 border border-red-700/50' },
  high: { label: 'High', classes: 'bg-amber-900/40 text-amber-400 border border-amber-700/50' },
  'on-track': { label: 'On Track', classes: 'bg-emerald-900/40 text-emerald-400 border border-emerald-700/50' },
  'action-required': { label: 'Action Required', classes: 'bg-red-900/50 text-red-400 border border-red-700/50' },
};

export default function StatusBadge({ status, customLabel }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG['upcoming'];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-body font-medium ${config.classes}`}>
      {customLabel || config.label}
    </span>
  );
}
