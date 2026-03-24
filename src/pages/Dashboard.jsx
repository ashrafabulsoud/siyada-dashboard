import Header from '../components/dashboard/Header';
import PhaseTracker from '../components/dashboard/PhaseTracker';
import EngineCard from '../components/dashboard/EngineCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import SprintTracker from '../components/dashboard/SprintTracker';
import KPITable from '../components/dashboard/KPITable';
import RiskRegister from '../components/dashboard/RiskRegister';
import ImmediateNeeds from '../components/dashboard/ImmediateNeeds';
import TeamOverview from '../components/dashboard/TeamOverview';
import SectionHeader from '../components/ui/SectionHeader';
import MetricCard from '../components/ui/MetricCard';
import { companySnapshot, engines } from '../data/dashboardData';

export default function Dashboard() {
  const snapshotMetrics = [
    companySnapshot.currentPhase,
    companySnapshot.phaseCompletion,
    companySnapshot.q1RevenueTarget,
    companySnapshot.revenueToDate,
    companySnapshot.activePartnerships,
    companySnapshot.runway,
  ];

  return (
    <div className="min-h-screen bg-navy-900 font-body">
      {/* Fixed Header */}
      <Header />

      {/* Scrollable Content */}
      <main className="pt-16 px-4 sm:px-6 lg:px-10 pb-16 max-w-screen-2xl mx-auto">

        {/* Section 2: Company Snapshot */}
        <section className="mt-8">
          <SectionHeader
            title="Company Snapshot"
            subtitle="SiyadaTech · Month 9 · Entering Validation Phase"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-4">
            {snapshotMetrics.map((metric, i) => (
              <MetricCard key={i} metric={metric} />
            ))}
          </div>
        </section>

        {/* Section 3: Phase Tracker */}
        <section className="mt-12">
          <SectionHeader
            title="Phase Tracker"
            subtitle="SiyadaTech compressed 5-year path to IPO on the Tadawul"
          />
          <PhaseTracker />
        </section>

        {/* Section 4: Three Engine Status */}
        <section className="mt-12">
          <SectionHeader
            title="Three Revenue Engines"
            subtitle="Real-time status of all active revenue engines"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
            {engines.map((engine) => (
              <EngineCard key={engine.id} engine={engine} />
            ))}
          </div>
        </section>

        {/* Section 5: 90-Day Sprint Progress */}
        <section className="mt-12">
          <SectionHeader
            title="90-Day Sprint Progress"
            subtitle="Week 1 Prep → Week 2–3 Launch → Month 2–3 Scale"
          />
          <SprintTracker />
        </section>

        {/* Section 6: Revenue Projection */}
        <section className="mt-12">
          <SectionHeader
            title="Revenue Projection"
            subtitle="5-Year model to SAR 500M at IPO (SAR Million)"
          />
          <RevenueChart />
        </section>

        {/* Section 7: KPI Tracking */}
        <section className="mt-12">
          <SectionHeader
            title="KPI Tracking"
            subtitle="Current performance against phase targets"
          />
          <KPITable />
        </section>

        {/* Section 8: Risk Register */}
        <section className="mt-12">
          <SectionHeader
            title="Risk Register"
            subtitle="Active risks, severity, and mitigation status"
          />
          <RiskRegister />
        </section>

        {/* Section 9: Immediate Needs */}
        <section className="mt-12">
          <SectionHeader
            title="Immediate Needs"
            subtitle="Top 5 priority actions — owners and deadlines"
          />
          <ImmediateNeeds />
        </section>

        {/* Section 10: Team Overview */}
        <section className="mt-12 mb-8">
          <SectionHeader
            title="Team Overview"
            subtitle="War room composition and ownership structure"
          />
          <TeamOverview />
        </section>

      </main>
    </div>
  );
}
