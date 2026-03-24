import { risks } from '../../data/dashboardData';
import StatusBadge from '../ui/StatusBadge';

const SEVERITY_CONFIG = {
  critical: {
    border: 'border-l-4 border-l-red-600',
    badge: 'critical',
  },
  high: {
    border: 'border-l-4 border-l-amber-500',
    badge: 'high',
  },
};

const STATUS_TAG = {
  Monitored: 'bg-navy-600 text-slate-dashboard',
  Mitigating: 'bg-amber-900/40 text-amber-400 border border-amber-700/40',
  'Action Required': 'bg-red-900/40 text-red-400 border border-red-700/40',
};

export default function RiskRegister() {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {risks.map((risk) => {
        const config = SEVERITY_CONFIG[risk.severity] || SEVERITY_CONFIG.high;
        const tagClasses = STATUS_TAG[risk.status] || STATUS_TAG.Monitored;

        return (
          <div
            key={risk.id}
            className={`bg-navy-800 border border-navy-600 rounded-2xl p-5 ${config.border}`}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h4 className="font-display text-sm font-bold text-white leading-snug">{risk.name}</h4>
              <StatusBadge status={risk.severity} />
            </div>
            <p className="text-xs font-body text-slate-dashboard leading-relaxed mb-4">
              {risk.mitigation}
            </p>
            <span className={`inline-block text-xs font-body font-medium rounded-full px-2.5 py-0.5 ${tagClasses}`}>
              {risk.status}
            </span>
          </div>
        );
      })}
    </div>
  );
}
