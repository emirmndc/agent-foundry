"use client";

import { useState } from "react";
import { AgentInput } from "@/lib/types";

interface InputFormProps {
  inputs: AgentInput[];
  onSubmit: (values: Record<string, string>) => void;
  isLoading: boolean;
}

export default function InputForm({
  inputs,
  onSubmit,
  isLoading,
}: InputFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});

  function handleChange(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {inputs.map((input) => (
        <div key={input.name}>
          <label
            htmlFor={input.name}
            className="block text-sm font-medium text-slate-300 mb-1.5"
          >
            {input.label}
            {input.required && (
              <span className="ml-1 text-indigo-400">*</span>
            )}
          </label>
          {input.type === "select" && input.options ? (
            <select
              id={input.name}
              name={input.name}
              required={input.required}
              value={values[input.name] ?? ""}
              onChange={(e) => handleChange(input.name, e.target.value)}
              className="w-full rounded-lg border border-slate-600 bg-slate-700/60 px-3 py-2.5 text-sm text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="">Select an option…</option>
              {input.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : input.type === "textarea" ? (
            <textarea
              id={input.name}
              name={input.name}
              required={input.required}
              placeholder={input.placeholder}
              value={values[input.name] ?? ""}
              onChange={(e) => handleChange(input.name, e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-slate-600 bg-slate-700/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
            />
          ) : (
            <input
              id={input.name}
              name={input.name}
              type={input.type}
              required={input.required}
              placeholder={input.placeholder}
              value={values[input.name] ?? ""}
              onChange={(e) => handleChange(input.name, e.target.value)}
              className="w-full rounded-lg border border-slate-600 bg-slate-700/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-800"
      >
        {isLoading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Running Agent…
          </>
        ) : (
          <>
            Run Agent
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
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
