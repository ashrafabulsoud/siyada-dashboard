export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-1 pl-4 border-l-4 border-gold-500">
      <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="text-sm font-body text-slate-dashboard">{subtitle}</p>
      )}
    </div>
  );
}
