"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAgentById } from "@/lib/registry";
import InputForm from "@/components/InputForm";
import OutputCard from "@/components/OutputCard";

interface AgentPageProps {
  params: { agentId: string };
}

export default function AgentPage({ params }: AgentPageProps) {
  const agent = getAgentById(params.agentId);
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState<Record<string, unknown> | null>(null);

  if (!agent) {
    notFound();
  }

  async function handleSubmit(_values: Record<string, string>) {
    setIsLoading(true);
    setOutput(null);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setOutput(agent!.mockOutput ?? {});
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white mb-8 transition-colors"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        All Agents
      </Link>

      {/* Agent header */}
      <div className="flex items-start gap-5 mb-10">
        <span className="text-5xl">{agent.icon}</span>
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-bold text-white">{agent.name}</h1>
            <span className="rounded-full bg-indigo-900/60 px-2.5 py-0.5 text-xs font-medium text-indigo-300 border border-indigo-700/40">
              {agent.category}
            </span>
          </div>
          <p className="text-slate-400">{agent.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {agent.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-slate-800 border border-slate-700 px-2 py-0.5 text-xs text-slate-400 font-mono"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Input Panel */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
            <h2 className="text-base font-semibold text-white mb-5 flex items-center gap-2">
              <svg
                className="h-4 w-4 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              Configure Agent
            </h2>
            <InputForm
              inputs={agent.inputs}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-3">
          {!output && !isLoading && (
            <div className="flex flex-col items-center justify-center h-full min-h-[200px] rounded-2xl border border-dashed border-slate-700 p-10 text-center">
              <span className="text-4xl mb-3">🤖</span>
              <p className="text-sm text-slate-500">
                Configure the agent and click{" "}
                <span className="text-violet-400 font-medium">Run Agent</span>{" "}
                to see results.
              </p>
            </div>
          )}
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full min-h-[200px] rounded-2xl border border-slate-700 bg-slate-800/30 p-10 text-center">
              <div className="relative h-12 w-12 mb-4">
                <div className="absolute inset-0 rounded-full border-2 border-violet-500/20" />
                <div className="absolute inset-0 rounded-full border-t-2 border-violet-500 animate-spin" />
              </div>
              <p className="text-sm text-slate-400 font-medium">
                Agent is running…
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Gathering and analyzing data
              </p>
            </div>
          )}
          {output && !isLoading && (
            <div className="space-y-4">
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Agent Output
              </h2>
              {agent.outputSchema.map((field) => {
                const value = output[field.key];
                if (value === undefined) return null;
                return (
                  <OutputCard key={field.key} field={field} value={value} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
