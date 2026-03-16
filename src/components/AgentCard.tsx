import Link from "next/link";
import { Agent } from "@/lib/types";

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg transition-all hover:border-indigo-500/50 hover:shadow-indigo-500/10">
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl">{agent.icon}</span>
        <div>
          <h2 className="text-lg font-semibold text-white">{agent.name}</h2>
          <span className="inline-block mt-1 rounded-full bg-indigo-900/60 px-2 py-0.5 text-xs font-medium text-indigo-300 border border-indigo-700/40">
            {agent.category}
          </span>
        </div>
      </div>
      <p className="text-sm text-slate-400 flex-1 mb-4">{agent.description}</p>
      <div className="mb-5">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
          Tools
        </p>
        <div className="flex flex-wrap gap-1.5">
          {agent.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-slate-700/60 px-2 py-0.5 text-xs text-slate-300 font-mono"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={`/agents/${agent.id}`}
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800"
      >
        Launch Agent
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </Link>
    </div>
  );
}
