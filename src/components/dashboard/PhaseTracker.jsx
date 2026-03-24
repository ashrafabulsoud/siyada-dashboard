import { phases } from '../../data/dashboardData';

const STATUS_COLORS = {
  current: 'text-gold-500',
  entering: 'text-amber-400',
  upcoming: 'text-slate-dashboard',
};

export default function PhaseTracker() {
  return (
    <div className="mt-4 bg-navy-800 border border-navy-600 rounded-2xl p-6 overflow-x-auto">
      <div className="flex items-stretch gap-0 min-w-max xl:min-w-0 xl:w-full">
        {phases.map((phase, index) => {
          const isCurrent = phase.status === 'current';
          const isEntering = phase.status === 'entering';
          const isUpcoming = phase.status === 'upcoming';

          return (
            <div
              key={phase.id}
              className={`flex-1 flex flex-col min-w-[140px] xl:min-w-0 relative
                ${index < phases.length - 1 ? 'border-r border-navy-600' : ''}
              `}
            >
              {/* Phase header */}
              <div className={`px-4 pt-3 pb-2 ${isCurrent ? 'bg-gold-500/10' : ''}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-body font-semibold uppercase tracking-widest ${STATUS_COLORS[phase.status]}`}>
                    {phase.name}
                  </span>
                  {isCurrent && (
                    <span className="text-xs bg-gold-500 text-navy-900 font-body font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      YOU ARE HERE
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-dashboard font-body">{phase.duration}</p>
              </div>

              {/* Progress bar */}
              <div className="px-4 pb-3">
                <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
                  {isCurrent ? (
                    <div
                      className="h-full bg-gold-500 rounded-full transition-all"
                      style={{ width: `${phase.completion}%` }}
                    />
                  ) : isEntering ? (
                    <div className="h-full w-1 bg-amber-400/50 rounded-full" />
                  ) : (
                    <div className="h-full w-0" />
                  )}
                </div>
                {isCurrent && (
                  <p className="text-xs text-gold-500 font-mono mt-1 font-medium">{phase.completion}% complete</p>
                )}
              </div>

              {/* Exit criteria */}
              <div className="px-4 pb-4 mt-auto">
                <p className={`text-xs font-body leading-relaxed ${isUpcoming ? 'text-slate-dashboard/50' : 'text-slate-dashboard'}`}>
                  {phase.exitCriteria}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
