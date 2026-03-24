import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';
import { revenueProjection } from '../../data/dashboardData';

const chartData = revenueProjection.years.map((year, i) => {
  const entry = { year };
  revenueProjection.streams.forEach((stream) => {
    entry[stream.key] = stream.values[i];
  });
  entry.total = revenueProjection.totals[i];
  return entry;
});

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  const total = payload.reduce((sum, p) => sum + (p.value || 0), 0);
  return (
    <div className="bg-navy-700 border border-navy-600 rounded-xl p-4 shadow-2xl min-w-[180px]">
      <p className="text-gold-500 font-display font-bold text-sm mb-3">{label}</p>
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex justify-between items-center gap-4 mb-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm inline-block flex-shrink-0" style={{ backgroundColor: entry.fill }} />
            <span className="text-xs text-slate-dashboard font-body">{entry.name}</span>
          </div>
          <span className="text-xs text-white font-mono font-medium">{entry.value}M</span>
        </div>
      ))}
      <div className="border-t border-navy-600 mt-2 pt-2 flex justify-between">
        <span className="text-xs text-slate-dashboard font-body font-medium">Total</span>
        <span className="text-xs text-gold-500 font-mono font-bold">{total.toFixed(1)}M</span>
      </div>
    </div>
  );
}

function TotalLabel({ x, y, width, value }) {
  if (!value) return null;
  return (
    <text
      x={x + width / 2}
      y={y - 6}
      textAnchor="middle"
      fill="#D4A853"
      fontSize={11}
      fontFamily="JetBrains Mono, monospace"
      fontWeight="600"
    >
      {value}M
    </text>
  );
}

export default function RevenueChart() {
  return (
    <div className="mt-4 bg-navy-800 border border-navy-600 rounded-2xl p-6">
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 24, right: 20, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#152D47" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fill: '#8B9DB5', fontSize: 12, fontFamily: 'DM Sans, sans-serif' }}
              axisLine={{ stroke: '#152D47' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#8B9DB5', fontSize: 11, fontFamily: 'DM Sans, sans-serif' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}M`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
            <Legend
              wrapperStyle={{ paddingTop: '12px', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#8B9DB5' }}
            />
            {revenueProjection.streams.map((stream, i) => (
              <Bar
                key={stream.key}
                dataKey={stream.key}
                name={stream.name}
                stackId="revenue"
                fill={stream.color}
                radius={i === revenueProjection.streams.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]}
              >
                {i === revenueProjection.streams.length - 1 && (
                  <LabelList dataKey="total" content={<TotalLabel />} />
                )}
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs font-body text-slate-dashboard/70 mt-4 text-center italic">
        {revenueProjection.note}
      </p>
    </div>
  );
}
