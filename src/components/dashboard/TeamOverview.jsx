import { team } from '../../data/dashboardData';

function TeamMember({ member, highlight }) {
  return (
    <div className={`flex items-start gap-3 p-3 rounded-xl ${highlight ? 'bg-navy-700 border border-gold-500/20' : 'bg-navy-700/40'}`}>
      <div className="w-8 h-8 rounded-full bg-navy-600 border border-navy-500 flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-display font-bold text-gold-500">
          {member.name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-body font-semibold text-white leading-tight">{member.name}</p>
        <p className="text-xs font-body text-gold-500/80 leading-tight">{member.role}</p>
        <p className="text-xs font-body text-slate-dashboard leading-tight mt-0.5">{member.focus}</p>
      </div>
    </div>
  );
}

function TeamSection({ title, members, highlight }) {
  return (
    <div className="bg-navy-800 border border-navy-600 rounded-2xl p-5">
      <h4 className="font-display text-sm font-bold text-gold-500 uppercase tracking-wider mb-4">{title}</h4>
      <div className="space-y-2">
        {members.map((member, i) => (
          <TeamMember key={i} member={member} highlight={highlight} />
        ))}
      </div>
    </div>
  );
}

export default function TeamOverview() {
  return (
    <div className="mt-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TeamSection title="Command" members={team.command} highlight />
        <TeamSection title="Business Unit" members={team.businessUnit} />
        <TeamSection title="Engineering Core" members={team.engineeringCore} />
      </div>

      {/* Tunisia surge team note */}
      <div className="bg-navy-800 border border-amber-500/20 rounded-2xl px-5 py-3.5 flex items-center gap-3">
        <span className="text-amber-400 text-lg flex-shrink-0">⚡</span>
        <p className="text-xs font-body text-amber-400/80 italic">{team.surgeNote}</p>
      </div>
    </div>
  );
}
