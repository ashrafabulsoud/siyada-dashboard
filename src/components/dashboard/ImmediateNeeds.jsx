import { immediateNeeds } from '../../data/dashboardData';
import StatusBadge from '../ui/StatusBadge';

export default function ImmediateNeeds() {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {immediateNeeds.map((item) => (
        <div
          key={item.priority}
          className="bg-navy-800 border border-navy-600 rounded-2xl p-5 flex flex-col gap-3"
        >
          {/* Priority number */}
          <span className="font-display text-5xl font-bold text-gold-500/20 leading-none select-none">
            {item.priority}
          </span>

          {/* Action */}
          <h4 className="font-display text-base font-bold text-white leading-snug -mt-2">
            {item.action}
          </h4>

          {/* Owner + Deadline */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-body text-slate-dashboard">
              <span className="text-gold-500/60 uppercase tracking-widest font-medium">Owner</span>
              <span className="text-white/80">{item.owner}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-body text-slate-dashboard">
              <span className="text-gold-500/60 uppercase tracking-widest font-medium">By</span>
              <span className="text-white/80">{item.deadline}</span>
            </div>
          </div>

          <div className="mt-auto">
            <StatusBadge status={item.status} />
          </div>
        </div>
      ))}
    </div>
  );
}
