import { sprintPlan } from '../../data/dashboardData';
import StatusBadge from '../ui/StatusBadge';

const STATUS_DOT = {
  'in-progress': 'bg-amber-400',
  upcoming: 'bg-navy-600 border border-navy-500',
  completed: 'bg-emerald-400',
};

export default function SprintTracker() {
  const { columns, q1RevenueProgress } = sprintPlan;
  const progress = q1RevenueProgress.current.__PLACEHOLDER__
    ? 0
    : Math.min((q1RevenueProgress.current.value / q1RevenueProgress.target) * 100, 100);

  return (
    <div className="mt-4 space-y-4">
      {/* Sprint columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((col) => (
          <div key={col.id} className="bg-navy-800 border border-navy-600 rounded-2xl p-5">
            <h4 className="font-display text-sm font-bold text-gold-500 mb-4 uppercase tracking-wider">
              {col.title}
            </h4>
            <div className="space-y-3">
              {col.tasks.map((task, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span
                    className={`w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 ${STATUS_DOT[task.status] || STATUS_DOT.upcoming}`}
                  />
                  <div className="flex-1 flex items-start justify-between gap-2">
                    <span className="text-sm font-body text-white/90 leading-snug">{task.text}</span>
                    <StatusBadge status={task.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Q1 Revenue Progress Bar */}
      <div className="bg-navy-800 border border-navy-600 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-display text-sm font-bold text-white">Q1 Revenue Target Progress</h4>
          {q1RevenueProgress.current.__PLACEHOLDER__ && (
            <span className="text-xs bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded px-2 py-0.5 font-body">
              ⚠ Needs Update
            </span>
          )}
        </div>
        <div className="flex items-center justify-between text-xs font-mono text-slate-dashboard mb-2">
          <span>SAR 0</span>
          <span className="text-gold-500 font-medium">SAR 700,000</span>
        </div>
        <div className="h-3 bg-navy-700 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${q1RevenueProgress.current.__PLACEHOLDER__ ? 'bg-navy-600' : 'bg-gold-500'}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className={`text-xs font-body ${q1RevenueProgress.current.__PLACEHOLDER__ ? 'text-amber-400/70 italic' : 'text-white'}`}>
            {q1RevenueProgress.current.__PLACEHOLDER__
              ? `Current: — (${q1RevenueProgress.current.note})`
              : `SAR ${q1RevenueProgress.current.value.toLocaleString()}`}
          </span>
          <span className="text-xs font-mono text-slate-dashboard">{progress.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
}
