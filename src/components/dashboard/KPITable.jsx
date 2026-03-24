import { kpis } from '../../data/dashboardData';

const STATUS_DOT = {
  'on-track': { dot: '🟢', label: 'On Track' },
  'in-progress': { dot: '🟡', label: 'In Progress' },
  'action-required': { dot: '🔴', label: 'Action Required' },
  upcoming: { dot: '⬜', label: 'Upcoming' },
};

const ENGINE_COLORS = {
  Lenci: 'text-gold-500',
  'AI Services': 'text-emerald-400',
  Partnerships: 'text-amber-400',
  Team: 'text-slate-dashboard',
  Funding: 'text-blue-400',
  All: 'text-white',
};

export default function KPITable() {
  return (
    <div className="mt-4 bg-navy-800 border border-navy-600 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm font-body">
          <thead>
            <tr className="bg-navy-700 border-b border-navy-600">
              <th className="text-left px-5 py-3.5 text-xs font-medium text-gold-500 uppercase tracking-widest whitespace-nowrap">KPI</th>
              <th className="text-left px-4 py-3.5 text-xs font-medium text-gold-500 uppercase tracking-widest whitespace-nowrap">Engine</th>
              <th className="text-left px-4 py-3.5 text-xs font-medium text-gold-500 uppercase tracking-widest whitespace-nowrap">Target</th>
              <th className="text-left px-4 py-3.5 text-xs font-medium text-gold-500 uppercase tracking-widest whitespace-nowrap">Current</th>
              <th className="text-center px-4 py-3.5 text-xs font-medium text-gold-500 uppercase tracking-widest whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {kpis.map((row, i) => {
              const isPlaceholder = row.current.__PLACEHOLDER__ === true;
              const statusConfig = STATUS_DOT[row.status] || { dot: '⬜', label: '—' };

              return (
                <tr
                  key={i}
                  className={`border-b border-navy-700/50 transition-colors hover:bg-navy-700/30 ${i % 2 === 0 ? '' : 'bg-navy-700/10'}`}
                >
                  <td className="px-5 py-3.5 text-white font-medium">{row.kpi}</td>
                  <td className={`px-4 py-3.5 text-xs font-medium ${ENGINE_COLORS[row.engine] || 'text-slate-dashboard'}`}>
                    {row.engine}
                  </td>
                  <td className="px-4 py-3.5 text-slate-dashboard">{row.target}</td>
                  <td className="px-4 py-3.5">
                    {isPlaceholder ? (
                      <span
                        className="inline-flex items-center gap-1 border border-dashed border-gold-500/70 rounded px-2 py-0.5 text-slate-dashboard/60 text-xs"
                        title={row.current.note}
                      >
                        {row.current.value} <span className="text-amber-400">⚠</span>
                      </span>
                    ) : (
                      <span className="text-white">{row.current.value}</span>
                    )}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span title={statusConfig.label} className="text-base">{statusConfig.dot}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
