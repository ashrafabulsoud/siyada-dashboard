import { CheckCircle, Circle } from 'lucide-react';
import StatusBadge from '../ui/StatusBadge';

function PlaceholderValue({ value, note }) {
  return (
    <span className="inline-flex items-center gap-1 border border-dashed border-gold-500/70 rounded px-1.5 py-0.5 text-slate-dashboard/60 text-xs" title={note}>
      {value}
      <span className="text-amber-400 text-xs">⚠</span>
    </span>
  );
}

export default function EngineCard({ engine }) {
  return (
    <div className="bg-navy-800 border border-navy-600 rounded-2xl p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-lg font-bold text-white leading-tight">{engine.name}</h3>
          <p className="text-xs font-body text-slate-dashboard mt-0.5">{engine.tagline}</p>
        </div>
        <StatusBadge status={engine.status} customLabel={engine.statusLabel} />
      </div>

      {/* Metrics */}
      <div className="border-t border-navy-600 pt-4">
        <p className="text-xs font-body font-medium text-gold-500 uppercase tracking-widest mb-2">Metrics</p>
        <div className="space-y-1.5">
          {engine.metrics.map((m, i) => (
            <div key={i} className="flex items-baseline justify-between gap-2">
              <span className="text-xs font-body text-slate-dashboard flex-shrink-0">{m.label}</span>
              {m.placeholder ? (
                <PlaceholderValue value={m.value} note={m.note} />
              ) : (
                <span className="text-xs font-body font-medium text-white text-right">{m.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tasks */}
      <div className="border-t border-navy-600 pt-4">
        <p className="text-xs font-body font-medium text-gold-500 uppercase tracking-widest mb-2">Tasks</p>
        <div className="space-y-2">
          {engine.tasks.map((task, i) => (
            <div key={i} className="flex items-start gap-2">
              {task.done ? (
                <CheckCircle size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
              ) : (
                <Circle size={14} className={`mt-0.5 flex-shrink-0 ${task.inProgress ? 'text-amber-400' : 'text-navy-600'}`} />
              )}
              <span className={`text-xs font-body leading-relaxed ${task.done ? 'text-slate-dashboard line-through' : task.inProgress ? 'text-amber-300' : 'text-white/80'}`}>
                {task.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Note */}
      {engine.strategicNote && (
        <div className="border-t border-navy-600 pt-4">
          <p className="text-xs font-body text-amber-400/80 italic leading-relaxed">
            💡 {engine.strategicNote}
          </p>
        </div>
      )}
    </div>
  );
}
