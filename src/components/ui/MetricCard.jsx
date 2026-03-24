import StatusBadge from './StatusBadge';

export default function MetricCard({ metric }) {
  const isPlaceholder = metric.__PLACEHOLDER__ === true;

  return (
    <div
      className={`bg-navy-800 rounded-xl p-4 flex flex-col gap-2 relative overflow-hidden
        ${isPlaceholder ? 'border border-dashed border-gold-500/70' : 'border border-navy-600'}`}
    >
      {isPlaceholder && (
        <span className="absolute top-2 right-2 text-xs bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded px-1.5 py-0.5 font-body">
          ⚠ Needs Update
        </span>
      )}
      <p className="text-xs font-body font-medium text-slate-dashboard uppercase tracking-widest leading-tight pr-16">
        {metric.label}
      </p>
      <p className={`font-display text-lg font-bold leading-tight ${isPlaceholder ? 'text-slate-dashboard/60' : 'text-white'}`}>
        {metric.value}
      </p>
      {metric.status && (
        <div className="mt-auto pt-1">
          <StatusBadge status={metric.status} />
        </div>
      )}
      {isPlaceholder && metric.note && (
        <p className="text-xs text-amber-400/70 font-body mt-1 leading-tight">{metric.note}</p>
      )}
    </div>
  );
}
