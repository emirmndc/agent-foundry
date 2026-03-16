import AgentCard from "@/components/AgentCard";
import { agentRegistry } from "@/lib/registry";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-700/50 bg-indigo-900/30 px-4 py-1.5 text-xs font-medium text-indigo-300 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          AI-Powered Research Agents
        </div>
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          Agent{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Foundry
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          Modular AI agents for crypto research and intelligence. Deploy
          specialized agents to monitor, analyze, and surface insights from
          on-chain and off-chain data.
        </p>
      </section>

      {/* Agent Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Available Agents</h2>
          <span className="text-sm text-slate-500">
            {agentRegistry.length} agents
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agentRegistry.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>
    </div>
  );
}
